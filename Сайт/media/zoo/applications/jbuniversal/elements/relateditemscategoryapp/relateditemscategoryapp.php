<?php
/**
* @package   com_zoo
* @author    YOOtheme http://www.yootheme.com
* @copyright Copyright (C) YOOtheme GmbH
* @license   http://www.gnu.org/licenses/gpl.html GNU/GPL
*/

/*
	Class: ElementRelatedItems
		The related items element class
*/
class ElementRelatedItemsCategoryApp extends Element implements iSubmittable {

	protected $_related_items;

	/*
		Function: hasValue
			Checks if the element's value is set.

	   Parameters:
			$params - render parameter

		Returns:
			Boolean - true, on success
	*/
	public function hasValue($params = array()) {
		$items = $this->_getRelatedItems();
		return !empty($items);
	}

	/*
		Function: render
			Renders the element.

	   Parameters:
            $params - render parameter

		Returns:
			String - html
	*/
	public function render($params = array()) {

		// init vars
		$params   = $this->app->data->create($params);
		$renderer = $this->app->renderer->create('item')->addPath(array($this->app->path->path('component.site:'), $this->_item->getApplication()->getTemplate()->getPath()));
		$items    = $this->_orderItems($this->_getRelatedItems($params), $params->get('order'));

		$limit = $params->get('limit',20);

		// create output
		$layout   = $params->get('layout');
		$output   = array();
		$i=1;
		foreach ($items as $item) {


			if($i<=$limit){
				$path   = 'item';
				$prefix = 'item.';
				$type   = $item->getType()->id;
				if ($renderer->pathExists($path.DIRECTORY_SEPARATOR.$type)) {
					$path   .= DIRECTORY_SEPARATOR.$type;
					$prefix .= $type.'.';
				}

				if (in_array($layout, $renderer->getLayouts($path))) {
					$output[] = $renderer->render($prefix.$layout, array('item' => $item));
				} elseif ($params->get('link_to_item', false) && $item->getState()) {
					$output[] = '<a href="'.$this->app->route->item($item).'" title="'.$item->name.'">'.$item->name.'</a>';
				} else {
					$output[] = $item->name;
				}
				$i++;
			}

		}
		if(count($items)>$limit){
			$category = $this->app->table->category->get( $this->get('category'));
			$output[] = '<a href="'.$this->app->route->category($category).'" title="'.$category->name.'">'.($params->get('readmoretext')?$params->get('readmoretext'):$category->name).'</a>';
		}

		return $this->app->element->applySeparators($params->get('separated_by'), $output);
	}

	protected function _orderItems($items, $order) {

		// if string, try to convert ordering
		if (is_string($order)) {
			$order = $this->app->itemorder->convert($order);
		}

		$items = (array) $items;
		$order = (array) $order;
		$sorted = array();
		$reversed = false;

		// remove empty values
		$order = array_filter($order);

		// if random return immediately
		if (in_array('_random', $order)) {
			shuffle($items);
			return $items;
		}

		// get order dir
		if (($index = array_search('_reversed', $order)) !== false) {
			$reversed = true;
			unset($order[$index]);
		} else {
			$reversed = false;
		}

		// order by default
		if (empty($order)) {
			return $reversed ? array_reverse($items, true) : $items;
		}

		// if there is a none core element present, ordering will only take place for those elements
		if (count($order) > 1) {
			$order = array_filter($order, create_function('$a', 'return strpos($a, "_item") === false;'));
		}

		if (!empty($order)) {

			// get sorting values
			foreach ($items as $item) {
				foreach ($order as $identifier) {
					if ($element = $item->getElement($identifier)) {
						$sorted[$item->id] = strpos($identifier, '_item') === 0 ? $item->{str_replace('_item', '', $identifier)} : $element->getSearchData();
						break;
					}
				}
			}

			// do the actual sorting
			$reversed ? arsort($sorted) : asort($sorted);

			// fill the result array
			foreach (array_keys($sorted) as $id) {
				if (isset($items[$id])) {
					$sorted[$id] = $items[$id];
				}
			}

			// attach unsorted items
			$sorted += array_diff_key($items, $sorted);

		// no sort order provided
		} else {
			$sorted = $items;
		}

		return $sorted;
	}

	protected function _getRelatedItems($published = true) {



		if ($this->_related_items == null) {

			// get items
			$application_id = $this->get('application');
			$category_id = $this->get('category');

			if ($application = $this->app->table->application->get($application_id)) {

			}

			$table = $this->app->table->item;

			// init vars
			$this->_related_items = array();

			$related_items = $table->getByCategory($application->id, $category_id, $published = true, $user = null, $orderby = array('_itemname'), $offset = 0, $limit = 20, $ignore_order_priority = false);


			foreach ($related_items as $related_item) {
					$this->_related_items[$related_item->id] = $related_item;
			}

		}

		return $this->_related_items;
	}

	/*
	   Function: edit
	       Renders the edit form field.

	   Returns:
	       String - html
	*/
	public function edit() {
		return $this->_edit(false);
	}

	/*
		Function: renderSubmission
			Renders the element in submission.

	   Parameters:
            $params - AppData submission parameters

		Returns:
			String - html
	*/
	public function renderSubmission($params = array()) {

		return $this->_edit();

	}

	protected function _edit($published = true) {

		// load assets
		$this->app->document->addScript('elements:relateditemscategoryapp/assets/relateditemscategoryapp.js');
		$this->app->document->addStylesheet('elements:relateditemscategoryapp/assets/relateditemscategoryapp.css');

		// filter types
		$selectable_type = $this->config->get('selectable_types', array());

		$table	= $this->app->table->application;

		// create application/category select
		$cats    = array();
		$options = array($this->app->html->_('select.option', '', '- '.JText::_('Select Application').' -'));

		foreach ($table->all(array('order' => 'name')) as $application) {

			// application option
			$options[] = $this->app->html->_('select.option', $application->id, $application->name);

			// create category select

			$attribs = 'class="category app-'.$application->id.( $this->get('application') != $application->id ? ' hidden' : null).'" data-category="'.$this->getControlName('category').'"';
			$opts = array();
			$opts[] = $this->app->html->_('select.option', '', '&#8226;	'.JText::_('Frontpage'));
			$cats[]  = $this->app->html->_('zoo.categorylist', $application, $opts, ( $this->get('application') == $application->id ? $this->getControlName('category') : null), $attribs, 'value', 'text', $this->get('category'));


		}

		if ($layout = $this->getLayout('edit.php')) {
            return $this->renderLayout($layout,
                array(
                    'options' => $options,
					'cats' => $cats
                )
            );
        }

	}

	/*
		Function: validateSubmission
			Validates the submitted element

	   Parameters:
            $value  - AppData value
            $params - AppData submission parameters

		Returns:
			Array - cleaned value
	*/
	public function validateSubmission($value, $params) {



		$options     = array('required' => $params->get('required'));

		return array('category' => $this->app->validator->create('integer', $options)->clean($value->get('category')),'application' => $this->app->validator->create('integer', $options)->clean($value->get('application')));


	}

	/*
		Function: loadAssets
			Load elements css/js assets.

		Returns:
			Void
	*/
	public function loadAssets() {
		$this->app->document->addScript('elements:relateditemscategoryapp/assets/relateditemscategoryapp.js');
		$this->app->document->addStylesheet('elements:relateditemscategoryapp/assets/relateditemscategoryapp.css');
	}

	/*
		Function: getConfigForm
			Get parameter form object to render input form.

		Returns:
			Parameter Object
	*/
	public function getConfigForm() {
		return parent::getConfigForm()->addElementPath(dirname(__FILE__));
	}

}