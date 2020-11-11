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

$align     = $this->app->jbitem->getMediaAlign($item, $layout);
$tabsId    = $this->app->jbstring->getId('tabs');
?>
   
 
   <?php if ($this->checkPosition('img')) : ?>                   
        <?php echo $this->renderPosition('img', array('style' => 'block')); ?>               
<?php endif; ?>

<?php if ($this->checkPosition('name_of_drugs')) : ?>                 
        <?php echo $this->renderPosition('name_of_drugs', array('style' => 'block')); ?>
<?php endif; ?>

<?php if ($this->checkPosition('manufacturer')) : ?>                 
        <?php echo $this->renderPosition('manufacturer', array('style' => 'block')); ?>
<?php endif; ?>

<?php if ($this->checkPosition('form_release')) : ?>                 
        <?php echo $this->renderPosition('form_release', array('style' => 'block')); ?>
<?php endif; ?>

<?php if ($this->checkPosition('in_the_package')) : ?>                 
        <?php echo $this->renderPosition('in_the_package', array('style' => 'block')); ?>
<?php endif; ?>

<?php if ($this->checkPosition('JBZoo Price Plain')) : ?>                 
        <?php echo $this->renderPosition('JBZoo Price Plain', array('style' => 'block')); ?>
<?php endif; ?>
                


