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

$align = $this->app->jbitem->getMediaAlign($item, $layout);


?>
    <tr class="table-row item_<?php echo $item->id;?>">
    <td><?php echo $item->id; ?></td>
    <td><?php echo $this->renderPosition('title'); ?></td>
    <td><?php echo $this->renderPosition('image'); ?></td>
    <td><?php echo $this->renderPosition('text'); ?></td>
    <td><?php echo $this->renderPosition('price'); ?></td>
    <td><?php echo $this->renderPosition('count'); ?></td>
    </tr>

    


