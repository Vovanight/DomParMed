<?php
defined('_JEXEC') or die('Restricted access');
$this->app->jbassets->tablesorter(); // подключение библиотеки для сортировки
if ($vars['count']) : ?>
    <table class="jsTableSorter tablesorter zebra">
        <caption>Таблица</caption>
        <thead>
        <tr>
            <th>ID</th>
            <th>Наименование</th>
            <th>Произовдитель</th>
            <th>Цена/ед.</th>
            <th>Кол-во</th>
        </tr>
        </thead>
        <tbody>
            <?php
            foreach ($vars['objects'] as $object) :
                echo $object;
            endforeach;
            ?>
        </tbody>
    </table>
    <!-- инициализация сортировки -->
    <script type="text/javascript">
        jQuery(function ($) {
            $('.jsTableSorter').tablesorter({});
        });
    </script>
<?php endif;