<?php
/**
* @package   com_zoo
* @author    YOOtheme http://www.yootheme.com
* @copyright Copyright (C) YOOtheme GmbH
* @license   http://www.gnu.org/licenses/gpl.html GNU/GPL
*/

// no direct access
defined('_JEXEC') or die('Restricted access');

?>
<div id="<?php echo $this->identifier; ?>" class="zoo-application">
	<?php echo $this->app->html->_('select.genericlist', $options, $this->getControlName('application'), 'class="application"', 'value', 'text',  $this->get('application')); ?>
	<?php if (!empty($cats)) { ?>
		<div class="categories">
			<?php echo implode("\n", $cats) ?>
		</div>
	<?php } ?>
</div>

<script type="text/javascript">
	jQuery(function($) { jQuery("#<?php echo $this->identifier; ?>").RelatedItemsCategoryApp(); });
</script>