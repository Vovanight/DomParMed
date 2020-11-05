<?php
/**
 * JBZoo Application
 *
 * This file is part of the JBZoo CCK package.
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @package    Application
 * @license    GPL-2.0
 * @copyright  Copyright (C) JBZoo.com, All rights reserved.
 * @link       https://github.com/JBZoo/JBZoo
 * @author     Denis Smetannikov <denis@jbzoo.com>
 */

// no direct access
defined('_JEXEC') or die('Restricted access');

$this->app->jbdoc->noindex();

$this->app->jbdebug->mark('template::tag::start');

$this->app->jblayout->setView($this);

if (!$this->app->jbcache->start($this->tag)) {
    $this->app->jbwrapper->start();

    ?><h1 class="title"><?php echo JText::_('JBZOO_ARTICLES_TAGGED_WITH') . ': ' . $this->tag; ?></h1><?php

    // items
    if (count($this->items) > 0) {
        echo $this->app->jblayout->render('items', $this->items);
    }

    // pagination render
    echo $this->app->jblayout->render('pagination', $this->pagination, array('link' => $this->pagination_link));

    $this->app->jbwrapper->end();
    $this->app->jbcache->stop();
}

$this->app->jbdebug->mark('template::tag::finish');