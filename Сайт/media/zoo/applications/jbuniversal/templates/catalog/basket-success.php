<?php
/**
 * JBZoo App is universal Joomla CCK, application for YooTheme Zoo component
 *
 * @package     jbzoo
 * @version     2.x Pro
 * @author      JBZoo App http://jbzoo.com
 * @copyright   Copyright (C) JBZoo.com,  All rights reserved.
 * @license     http://jbzoo.com/license-pro.php JBZoo Licence
 * @coder       Denis Smetannikov <denis@jbzoo.com>
 */

// no direct access
defined('_JEXEC') or die('Restricted access');


$this->app->jbdebug->mark('template::basket-success::start');
$this->app->jblayout->setView($this);
$this->app->document->setTitle(JText::_('JBZOO_CART_ITEMS'));
$this->app->jbwrapper->start();
$myorderid = $this->order->id;
$order = JBModelOrder::model()->getById($myorderid);
$cartItems = $order->getItems(false);
// dump($this->order,0,'$this->order');

?>

<div class="uk-panel uk-panel-box mobile-teaser">

   <?php
   foreach ($cartItems as $cartItem) {
       $itemPrice = $order->val($cartItem->get('total'));
       $yaParams['goods'][] = array(
           'id'       => $cartItem->get('item_id'),
           'name'     => $cartItem->get('item_name'),
           'price'    => $itemPrice->val(),
           'quantity' => $cartItem->get('quantity', 1),
       );
   }

   $mydatecreat = date('d.m.Y H:i:s', strtotime("+0 hours", strtotime($order->created)));

   ?>

   <table cellpadding="0"  cellspacing="0" align="center" style="border-collapse:collapse"><tbody><tr><td style="padding:20px 30px 10px"></td></tr><tr><td><table class="successbaketmycb9t" cellpadding="0" cellspacing="0" style="border-collapse:collapse"><tbody><tr><td colspan="9" height="35">
   <img src="data:image/png;base64,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" width="442" height="35" alt="" style="display:block"></td></tr><tr><td width="1" bgcolor="#d9d9d9"></td><td width="9" bgcolor="#ffffff"></td><td width="1" bgcolor="#d9d9d9"></td>
   <td width="20" bgcolor="#ffffff"></td><td width="380" bgcolor="#ffffff">
   <table cellpadding="0" cellspacing="0" width="100%" align="center" style="border-collapse:collapse"><tbody><tr><td width="44"></td><td align="center"><span style="font-size:14px;font-family:Consolas,monaco,monospace;color:#333333">Номер вашего заказа #<?php echo $order->id ?> </span></td><td width="44">
   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAzCAMAAADB5vrzAAABKVBMVEVaZXu1tr3e396MjpzGy86coq3v8/fn6++9w8alrr2UmqXW195zfYze3++cor21ts6Mkq3Oz96EhpT/+/+9w9bO1+fn5+eUlqWlqrXn6/etrsaUmrVjbYS9vsbW3+eEjqXO09acorXv8/97gpze5++1tsbGy9a9w861sr17gpSlqr21vs7e2+fn4+f39/fv7++tsr2Umq3W295zeZTe4++Mlq3O096EiqW9x9bW2+fn7/eUnrVrcYze4+eMkqWcprW1usbOz9bGx85jaYSMkpyloq338/fv6++trr2lpr21us6Eipz////W1+etssZrcYTe3+eMjqX39//n5+/Oy9bGw86tqr29vs6cnq3e2957fZTn4++Ulq3W097Gx9bv7/ecnrWlprW9usZ9CWlwAAACk0lEQVQ4jXWUcVObMBiHsbJQRW/WnBZutoXaytqdSeEAB12BdhN05ZxXbifbPKPf/0uMQqJt2PgrV56Q93nfXyOk5TN7Bo9Zuv3EOnBkKJRrON/zc8wBp9N++zKlgPFk64AD5BfflCiAhl1XibffrxafMh0zQFGHEdoGUMf1ik0VEIfEFHlgMnjYQRTAeT+QISdxS0KDAXYOnFOuRjwFjgYrAGq3vslbSiY4ulxVADIM+x0PyEWfit8qYOi1eEsovpfyV0DJhkNeIiosAQVi3c8NHrixjUlMAZyDwOItQ6I3EQVss9/jLUkOjuaQAlqoFmPhLftBgwLQePhTG7b8TNrrTUJpeVKbJbyYqGXvBGbJpQFFLSuMKQD+ZwkogE3Q07gSUOiHHUSB08d+ULckwdqyBGTdDxIOSIqv3tMvQCPKpryl9YFUm4S1pVuzTMW9yrIExoNoh7NcRRfdkAGxTv5heWjcIAqUlhwQh/5txICs3b+qJXZtyQA39wN+ltgBV420AuBiOKhF+r44NqEA2mnJYS2xY7WNGTAefJ9wNa46n7s6A0Du552aZfdJQQxw6pYolKhlASQBWM64GmOTBCIDGj1Qn2Vh+ataClAOiFOzdPxdeqcJqbUktTaIN1KAGZCc+9N7rsbIO8kBA3D70OKGicaSyVojpLHSI3tkC5Af/HPtFUDWaDD7ufnXxXdS1GZi6zy8HKjuRqtiQ7IPFuANQPLyUfU0egqcGVL2RXkNyDrVsXg8ktQLLUtwMpvLxD7LG2gDSFfY+Pa1JZGZ63qZn+ln19bbgfQinV+PhHPD89y7H2e7k8ZGPARqPmsq+8e/D0bL/Y9istkVgfUmTrRFs9MULbzdNOFtiVCMEYLcZfYX30Sbw8DEncAAAAAASUVORK5CYII=" width="32" height="51" alt=""></td>
   </tr></tbody></table><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAAADCAMAAABF5l8hAAAAG1BMVEVjZWO9ur3v6++MjozW19Z7eXvGw8b///+loqUUqSpnAAAAPklEQVQ4jWNgZgABNkYwxcEOphiY0LhQRSxgipUdO5cSI7DroZ4R+F1OBSPwuxy7EQzso2CgAMNouh+wdA8AIloOcvyPxJkAAAAASUVORK5CYII=" width="379" height="3" alt=""><table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse"><tbody>
   <tr><td colspan="2" height="14"></td></tr><tr><td width="180" valign="top" style="padding-top:4px"><span style="color:#333333;font-family:Consolas,monaco,monospace;font-size:14px;line-height:21px">Дата и время</span></td><td valign="top" style="padding-top:4px"><span style="color:#333333;font-family:Consolas,monaco,monospace;font-size:14px;line-height:21px;font-weight:bold;word-break:break-word"><?php echo $mydatecreat ?></span></td></tr>
   <tr>
   <td width="180" valign="top" style="padding-top:4px"><span style="color:#333333;font-family:Consolas,monaco,monospace;font-size:14px;line-height:21px">Сумма</span></td><td valign="top" style="padding-top:4px"><span style="color:#333333;font-family:Consolas,monaco,monospace;font-size:14px;line-height:21px;font-weight:bold;word-break:break-word"><?php echo $order->getTotalSum() ?></span></td></tr>
   <tr><td colspan="2" height="14"></td></tr><tr><td colspan="2"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXsAAAADCAMAAABF5l8hAAAAG1BMVEVjZWO9ur3v6++MjozW19Z7eXvGw8b///+loqUUqSpnAAAAPklEQVQ4jWNgZgABNkYwxcEOphiY0LhQRSxgipUdO5cSI7DroZ4R+F1OBSPwuxy7EQzso2CgAMNouh+wdA8AIloOcvyPxJkAAAAASUVORK5CYII=" width="379" height="3" alt=""></td></tr><tr><td colspan="2" height="14"></td></tr><tr>
   </tr></tbody></table>
   <table cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse"><tbody>
   <?php
   echo "<tr class='headtab'>";
   echo "<td width='170'>
   <span style='color:#333333;font-family:Consolas,monaco,monospace;font-size:14px;line-height:21px;font-weight:bold;word-break:break-word'>Наименование</span></td>";
   echo "<td width='70'><span style='color:#333333;font-family:Consolas,monaco,monospace;font-size:14px;line-height:21px;font-weight:bold;word-break:break-word'>Цена</span></td>";
   echo "<td width='80'><span style='color:#333333;font-family:Consolas,monaco,monospace;font-size:14px;line-height:21px;font-weight:bold;word-break:break-word'>Кол-во</span></td>";
   echo "<td width='100'><span style='color:#333333;font-family:Consolas,monaco,monospace;font-size:14px;line-height:21px;font-weight:bold;word-break:break-word'>Стоимость</span></td>";
   echo "</tr>";

   foreach ($yaParams as $oderitemmy) {
     foreach ($oderitemmy as $oderitemmyx) {
       $nameorderitem = $oderitemmyx['name'];
       $priceorderitem = $oderitemmyx['price'];
       $kolvoorderitem = $oderitemmyx['quantity'];
       $itogoitem = $kolvoorderitem*$priceorderitem;

       echo "<tr>";
       echo "<td width='170'><span style='font-size:14px;font-family:Consolas,monaco,monospace;color:#333333'>{$nameorderitem}</span></td>";
       echo "<td width='70'><span style='font-size:14px;font-family:Consolas,monaco,monospace;color:#333333'>{$priceorderitem}</span></td>";
       echo "<td width='80'><span style='font-size:14px;font-family:Consolas,monaco,monospace;color:#333333'>{$kolvoorderitem}</span></td>";
       echo "<td width='100'><span style='font-size:14px;font-family:Consolas,monaco,monospace;color:#333333'>{$itogoitem}</span></td>";
       echo "</tr>";

     }
   }
   ?>

   </tbody></table>
   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXwAAAAGCAMAAAD399XrAAAAe1BMVEVaXVq1srWMioze295zdXPGx8acnpzv7+9raWu9vr2UlpTn5+eEgoTW09atqq3/+/9jZWO9ur2UkpTn4+d7fXvOz86lpqX39/dzcXNjYWO1trWMjoze3957eXvOy86loqX38/drbWvGw8acmpzv6++EhoTW19atrq3////fGMK/AAAD4UlEQVRIiXXV65ajKhAGUI0RFeNdwYDXqMD7P+GpAtOtZ2byI3uVqxtCIXyeMWVj8OMoyhTpenNhelrCkxG/uWaW/MrC8gvpo0OakyNDhseVwBGOBfJpLcnLUjnEgfDNzUPzK7W2SN8OSe08Ac3+RFFlqQPEJzuiv0RIfqOt7FrH5MozvJD2qcMO0qzLDW4XQosb9r+rX7xDrepQ/KV6YDks2TG1qi26YxodWE1fwrZ7FXoTzCfmTk4E07ODLdKfRd3tUpBKZrv0mZBqtw9VU2v2S7YJmdCls0QT8bEKZ32yCZLqmc2aFTmQ64LhByE58/mcEz2LhuTap1kKaJpBlftUNYQBwbDp3K+DgWjm10PFZkEI99lcITkBCv1DsrFlm15JnRg6tSHSWepuDOXHyOw5PabhEb66Nm0e0A0AevNl3AfoWzZGySZmIQuHOamA6ov3Ocq+wrft5N3DLuu1fASmAGQA73hcysFSW2Jgp++YcLPXXkwKk8p3PHMLQ7yVFUXXejBWEbbv9WP4BBUQtt4TGb0+BJ4evEYRe74PZXYkgKr3Hpb3A+ZhK5LK0o38XllkGkAvXwaEm27ECeCU4pDGjfytkMk97OCUrt6RmkU72Oo9TnaY1VaKxiVZ4KDE5RyZDFksDJAAhyHLMSzgzJbjBDzL1k5QtnD8PpYij0uYgAMwJGfADpSlPIk8dZSjgAP5KvGkZQA0zO+x+bAHMSy8gHbLk8aOBc1fKDR4MRF9I0vtrTk3EQBtiFw3VGsX/mW0ZCOuHzt1MkI3qr6UClhjRNhqEXbnI/gpQFrbrqc4ATQfqvzcg5+t+J1gPIGmwATYFKTDPXgjfo8N5v7qQRuM7pECSfF98+oIXq0Yp0Og66mrUlr2bHFA89v3GHJsfusYJ24+QMdd8wuDbytcTbp8Iyx+U0tpKWO6e6Pqu0PtT9VPh0qftkrg3CQtdxQCDlPy4gIrAA5acnBKqpkRQ+GGsVQncC9wOouZsWgUsy+z1KKaVsyaqgGpTwL1sg9DWR0VjRIqHmKLKirgpooE3D4WXfskgOuDzjraAOJHlLENyRmhAiAzrZTUOq8zh7JIlVmCrtZ5LgdHwwhcZTMHfDpzMp8Qf2MFZVCxSIavSiYcF/7lw4+u/TzC6OhGoDvCV9KmGVzCyZjizZyMETxsP88IL2iAUbh9HwWjFWDYJn6QBn4wXKvePwLXZevJXwP3lrScucC95W56dBcGl7uD7C6Bqxyfll8D1yFugUvPwL3l7hm4jp/AveeuugYuDW5Ju18i9sxddgau+Evg3nL3J3Dt3zeOdLUMLncTym/8P3D/Ax+N4E/ZI2OAAAAAAElFTkSuQmCC" width="380" height="6" alt=""><br><p align="center">
   Тут может быть любой Ваш текст <br> купоны / скидки / акции / поделиться / иное
   </p></td><td width="20" bgcolor="#ffffff"></td><td width="1" bgcolor="#d9d9d9">

   </td><td width="9" bgcolor="#ffffff">
   </td><td width="1" bgcolor="#d9d9d9"></td></tr><tr><td colspan="9" height="3" style="line-height:3px"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAboAAAADCAMAAADSmzq+AAAAFVBMVEXe29739/fn5+f////n4+f/+//v6+/K+cRUAAAAQUlEQVQ4je2TyQkAQAgDEwX7L3lXxKMEH87LDOQVhGkicCoqinNrnFS0cSuNxIAuzu1xP/dagv66mI9Z4rmlLpAH+3sIq/QcJlYAAAAASUVORK5CYII=" height="3" alt="" style="display:block"></td></tr></tbody></table>

   <table  cellpadding="0" cellspacing="0" style="border-collapse:collapse">
   <tbody><tr><td colspan="3" height="1" bgcolor="#d9d9d9"></td></tr><tr><td width="1" bgcolor="#d9d9d9"></td><td width="1" bgcolor="#d9d9d9"></td></tr></tbody></table><img src="data:image/png;base64,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" width="442" height="22" alt=""></td></tr></tbody></table>


   <?php
    // Можете раскоментировать - если требуется - разного рода инфа в нем.
   // echo $this->app->jblayout->renderIndex('basket-success'); ?>
</div>


<?php
$this->app->jbwrapper->end();
$this->app->jbdebug->mark('template::basket-success::finish');
