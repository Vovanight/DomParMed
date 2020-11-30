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
?>

<?php if ($this->checkPosition('title')) : ?>
    <h4 class="item-title"><?php echo $this->renderPosition('title'); ?></h4>
<?php endif; ?>

<div class="jb-row">
    <?php if ($this->checkPosition('image')) : ?>
        <div class="width100 clearfix">
            <div class="item-image align-<?php echo $align; ?> jb-divider-right">
                <?php echo $this->renderPosition('image'); ?>
            </div>
        </div>
    <?php endif; ?>
</div>

<?php if ($this->checkPosition('text')) : ?>
    <div class="item-text jb-row">
        <div class="width100">
            <?php echo $this->renderPosition('text', array('style' => 'block')); ?>
        </div>
    </div>
<?php endif; ?>

<?php if ($this->checkPosition('price')) : ?>
                <?php echo $this->renderPosition('price', array('style' => 'block')); ?>
<?php endif; ?>


