/* cacheid:ade8450bca6b98a9afd118b485b76e6f0 */
/* media/zoo/applications/jbuniversal/assets/js/widget/goto.js */
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
 */

;
(function ($, window, document, undefined) {


    JBZoo.widget('JBZoo.Goto', {}, {

        'click {element}': function (e, $this) {

            var url = $(this).attr('href');

            if (!url) {
                url = $(this).data('href');
            }

            if (url) {
                parent.location.href = url;
                return false;
            }
        }
    });


})(jQuery, window, document);
/* media/zoo/applications/jbuniversal/assets/js/widget/select.js */
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
 */

;
(function ($, window, document, undefined) {

    /**
     * Wrapper for any selects
     */
    JBZoo.widget('JBZoo.Select', {}, {

        /**
         * Enable or disable select
         * @param isEnabled
         */
        toggle: function (isEnabled) {

            if (isEnabled) {
                this.el.removeAttr('disabled');
            } else {
                this.el.attr('disabled', 'disabled');
            }

            this._update();
        },

        disable: function () {
            this.toggle(false);
        },

        enable: function () {
            this.toggle(true);
        },

        /**
         * Remove all options
         * @param notFirst
         * @param isUpdate
         */
        removeOptions: function (notFirst, isUpdate) {

            if (this._def(notFirst, false)) {
                this.$('option').not(':first').remove();
            } else {
                this.$('option').remove();
            }

            if (this._def(isUpdate, true)) {
                this._update();
            }
        },

        /**
         * Remove & add new options in select
         * @param newOptions
         */
        replaceOptions: function (newOptions) {
            var $this = this;

            $this.removeOptions();
            $this.newOptions(newOptions);

        },

        /**
         * Update option list
         * @param list
         * @param notFirst
         */
        newOptions: function (list, notFirst) {

            this.removeOptions(notFirst, false);
            this.addOptions(list, false);

            this._update();
        },

        /**
         * Add several options to select
         * @param list
         * @param isUpdate
         */
        addOptions: function (list, isUpdate) {
            var $this = this;
            isUpdate  = $this._def(isUpdate, true);

            $.each(list, function (key, value) {
                $this.addOption(key, value, isUpdate);
            });

            if (isUpdate) {
                this._update();
            }
        },

        /**
         * Append one option to select
         * @param key
         * @param value
         * @param isUpdate
         */
        addOption: function (key, value, isUpdate) {

            var decoded = $("<div/>").html(value).text();
            this.el.append($("<option/>", {value: key, text: decoded}));

            if (this._def(isUpdate, true)) {
                this._update();
            }
        },

        /**
         * @param newVal
         * @returns {*}
         */
        val: function (newVal) {
            if (typeof newVal == 'undefined') {
                return this.el.val();

            } else {
                this.el.val(newVal);
                this._update();
            }
        },

        /**
         * Reset select value(s)
         */
        reset: function () {
            this.val('');
            return this;
        },

        /**
         * Add chosen widget
         */
        addChosen: function (options) {
            $.isFunction($.fn.chosen) && this.el.chosen(options);
        },

        /**
         * Remove chosen widget
         */
        removeChosen: function () {
            this._isChosen() && this.el.chosen('destroy');
        },

        /**
         * Repaint chosen widget
         */
        repaintChosen: function () {

            var $this = this;

            if ($this._isChosen()) {
                $this.removeChosen();
                $this.addChosen();
            }
        },

        /**
         * Check is chosen plugin exists
         * @returns {boolean}
         * @private
         */
        _isChosen: function () {
            return ($.isFunction($.fn.chosen) && this.el.data('chosen'));
        },

        /**
         * Update select state
         * @private
         */
        _update: function () {
            if (this._isChosen()) {
                this.el
                    .trigger("chosen:updated")
                    .trigger('liszt:updated');
            }
        }
    });

})(jQuery, window, document);
/* media/zoo/applications/jbuniversal/assets/js/widget/money.js */
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
 */

;
(function ($, window, document, undefined) {

    /**
     * Currency toggle (widget with flags)
     */
    JBZoo.widget('JBZoo.Money',
        {
            duration      : 400,
            easing        : 'swing',
            onAfterUpdate : $.noop,
            onBeforeUpdate: function (value) {
                return value;
            }
        },
        {
            // default data
            '_defaultRound': 9,
            '_defaultCur'  : 'default_cur',

            // currenct money data
            'currency': 'eur',
            'value'   : .0,
            'showplus': 0,

            init: function ($this) {
                $this.currency = this._cleanCur(this.data('currency'));
                $this.value    = JBZoo.toFloat(this.data('value'));
                $this.showplus = this.data('showplus');
            },

            /**
             * Convert money to another format
             * @param currency
             * @param isAnimate
             */
            convert: function (currency, isAnimate) {
                var $this     = this,
                    isAnimate = $this._def(isAnimate, true),
                    currency  = $this._cleanCur(currency),
                    from      = $this._getCurInfo($this.currency),
                    to        = $this._getCurInfo(currency);

                if (currency == '%' || $this.currency == '%') {
                    return;
                }

                !from && $this.error('Currency from "' + $this.currency + '" is undefined');
                !to && $this.error('Currency to "' + currency + '" is undefined');

                var newValue = ($this.value / from.value) * to.value;
                if (isAnimate) {
                    $this.setValue(newValue, currency);
                } else {
                    $this._update(newValue, currency);
                }
                $this.currency = currency;
                $this.value    = newValue;
            },

            /**
             * Get current value
             */
            getValue: function () {
                return [this.value, this.currency]
            },

            /**
             * Set new value
             * @param value
             * @param currency
             */
            setValue: function (value, currency) {

                var $this    = this,
                    value    = JBZoo.toFloat(value),
                    currency = $this._cleanCur((currency || $this.currency));

                $this.currency = currency;

                if (currency == $this.currency) {

                    if ($this.value != value) {

                        $({value: $this.value})
                            .stop()
                            .animate({value: value}, {
                                duration: $this.options.duration,
                                easing  : $this.options.easing,
                                step    : function () {
                                    $this._update(this.value, $this.currency);
                                },
                                complete: function () {
                                    $this._update(value, $this.currency);
                                    $this.value = value;
                                }
                            });
                    } else {
                        $this._update(value, $this.currency);
                        $this.value = value;
                    }
                }

            },

            /**
             * Update view
             * @param value
             * @param currency
             * @private
             */
            _update: function (value, currency) {

                var $this      = this,
                    format     = $this._getCurInfo(currency).format,
                    isPositive = (value >= 0);

                value = $this._round(currency, value);

                if ($.isFunction($this.options.onBeforeUpdate)) {
                    value = $this.options.onBeforeUpdate.apply($this, [value]);
                }

                var formated = JBZoo.numberFormat(Math.abs(value), format.num_decimals, format.decimal_sep, format.thousands_sep),
                    template = isPositive ? format.format_positive : format.format_negative;

                formated = template
                    .replace('%v', '<span class="jbcurrency-value">' + formated + '</span>')
                    .replace('%s', '<span class="jbcurrency-symbol">' + format.symbol + '</span>');

                if ($this.showplus) {
                    formated = '+' + formated;
                }

                //$this.currency = currency;
                if ($this.el.is('input')) {
                    $this.el.val(JBZoo.stripTags(formated));
                } else {
                    $this.el.html(formated);
                }

                if ($.isFunction($this.options.onAfterUpdate)) {
                    $this.options.onAfterUpdate.apply($this, [value]);
                }
            },

            /**
             * @param currency
             * @param value
             * @returns {string}
             * @private
             */
            _round: function (currency, value) {

                // TODO smart rounding
                var $this      = this,
                    format     = $this._getCurInfo(currency).format,
                    roundType  = format.round_type,
                    roundValue = format.round_value;

                if (roundType == 'ceil') {
                    var base = Math.pow(10, roundValue);
                    value    = Math.ceil(value * base) / base;

                } else if (roundType == 'classic') {
                    value = $this.jbzoo.round(value, roundValue);

                } else if (roundType == 'floor') {
                    var base = Math.pow(10, roundValue);
                    value    = Math.floor(value * base) / base;

                } else {
                    value = $this.jbzoo.round(value, $this._defaultRound);
                }

                return value;
            },

            /**
             * @param currecny
             * @returns {string}
             * @private
             */
            _cleanCur: function (currency) {

                var $this = this,
                    rates = JBZoo.getVar('currencyList');

                currency = $.trim(currency).toLowerCase();

                if (currency == '%') {
                    return currency;
                }

                if (currency == this._defaultCur) {
                    return $.trim($this.data('currency')).toLowerCase();
                }

                if (!rates[currency]) {
                    $this.error('Undefined currency - ' + currency);
                }

                return currency;
            },

            /**
             * @param currency
             * @returns {*}
             * @private
             */
            _getCurInfo: function (currency) {
                var $this = this,
                    rates = JBZoo.getVar('currencyList');

                return rates[$this._cleanCur(currency)];
            },

            'change {element}': function (e, $this) {
                $this.setInputValue($(this).val());
            },

            'keypress {element}': function (e, $this) {
                if ($this._key(e, 'enter')) {
                    $this.setInputValue($(this).val());
                    return false;
                }
            },

            setInputValue: function (newValue) {
                newValue = JBZoo.toFloat(newValue);
                this._update(newValue, this.currency);
            }
        }
    );

})(jQuery, window, document);
/* media/zoo/applications/jbuniversal/assets/js/widget/heightfix.js */
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
 */

;
(function ($, window, document, undefined) {

    /**
     * Height fix plugin
     */
    JBZoo.widget('JBZoo.HeightFix', {
        timeout: 500,
        element: '.column'
    }, {

        init: function ($this) {

            $this.updateSizes();

            // lisen document changes
            if ($this.options.timeout > 0) {
                setInterval(function () {
                    $this.updateSizes();
                }, $this.options.timeout);
            }
        },

        /**
         * Recalc all heights
         */
        updateSizes: function () {
            var $this = this;

            if ($this.$('.jsHeightFixRow').length > 0) {
                $this.$('.jsHeightFixRow').each(function (n, row) {
                    $this._updateColumnCollect($(row));
                });
            } else {
                $this._updateColumnCollect($this.el);
            }

        },

        /**
         * Fix block height
         * @param $row
         * @private
         */
        _updateColumnCollect: function ($row) {
            var $this = this,
                maxHeight = 0;

            $row.find($this.options.element)
                .css('height', 'auto')
                .each(function (n, obj) {
                    var tmpHeight = JBZoo.toInt($(obj).height());
                    if (maxHeight < tmpHeight) {
                        maxHeight = tmpHeight;
                    }
                })
                .css({height: maxHeight});
        }


    });

})(jQuery, window, document);
/* media/zoo/applications/jbuniversal/elements/jbprice/assets/js/jbprice.js */
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
 */

;
(function ($, window, document, undefined) {

    JBZoo.widget('JBZoo.Price',
        {
            // options
            'variantUrl': '',
            'isInCart'  : false,
            'itemId'    : 0,
            'identifier': '',
            'hash'      : ''
        },
        {
            'template'  : '',
            'elements'  : {},
            'cache'     : {},
            '_namespace': 'JBZooPriceElement',

            init: function ($this) {
                this.elements = {};
                this.cache    = {};

                var _key = this.options.itemId + this.options.identifier;
                var elements  = JBZoo.getVar(_key + '.elements', {});
                this.template = JBZoo.getVar(_key + '.template', {});

                $.each(elements, function (_type, params) {

                    var type        = _type.charAt(0).toUpperCase() + _type.substr(1),
                        element     = $('.js' + type, $this.el),
                        plugName    = $this._namespace + type,
                        defaultName = $this._namespace,
                        widget      = {};

                    if (JBZoo.empty(params)) {
                        params = {};
                    }

                    if ($this.jbzoo.isWidgetExists(plugName)) {
                        widget = element[plugName](params).data(plugName);
                    } else {
                        widget = element[defaultName](params).data(defaultName);
                    }

                    $this.elements[_type] = widget;
                });
            },

            'change .jsSimple :input': function (e, $this) {
                $this.rePaint();
            },

            getHash: function () {

                var values = this._getValues();
                return this._buildHash(values);
            },

            getTemplate: function() {
                return this.template;
            },

            rePaint: function () {

                var hash = this.getHash();

                if (JBZoo.empty(this.cache[hash])) {
                    return this.getVariant();
                }

                return this._rePaint(this.cache[hash]);
            },

            getVariant: function () {
                var $this = this;
                this.ajax({
                    'url'    : $this.options.variantUrl,
                    'data'   : {
                        'args': {
                            'template': this.template,
                            'values'  : $this._getValues()
                        }
                    },
                    'success': function (data) {
                        $this.cache[$this.getHash()] = data;
                        $this._rePaint(data);
                    },
                    'error'  : function (error) {
                        if (error.message) {
                            $this.alert(error.message);
                        }
                    }
                });
            },

            getValue: function () {
                return this._getValues();
            },

            get: function (identifier, defValue) {
                if (!JBZoo.empty(this.elements[identifier])) {
                    var element = this.elements[identifier];
                    if ($.isFunction(element["getValue"])) {
                        return element.getValue();
                    }
                }

                return defValue;
            },

            _getValues: function () {

                var values = {};

                $('.jsSimple', this.el).each(function () {
                    var $param = $(this);

                    $('input, select, textarea', $param).each(function () {

                        var $field = $(this),
                            id = $param.data('identifier'),
                            value = '';

                        if ($field.attr('type') == 'radio') {
                            if ($field.is(':checked')) {
                                value = $.trim($field.val());
                                if (!JBZoo.empty(value) || value.length > 0) {
                                    values[id] = {'value': value};
                                }
                            }
                        } else {
                            value = $.trim($field.val());
                            if (!JBZoo.empty(value) || value.length > 0) {
                                values[id] = {'value': value};
                            }
                        }

                    });
                });

                return values;
            },

            _rePaint: function (data) {
                var $this = this;
                $.each(data, function (_type, data) {
                    var element = $this.elements[_type];
                    if ((!JBZoo.empty(element)) && ($.isFunction(element["rePaint"]))) {
                        element.rePaint(data);
                    }
                });
            },

            _buildHash: function (values) {
                var hash = [];

                for (var key in values) {
                    if (values.hasOwnProperty(key)) {
                        var val = values[key];
                    }
                    hash.push(key + val.value);
                }

                return hash.join('_');
            },

            _updateCache: function (key, data) {

                var neW = {};
                neW[key] = data;

                this.cache[this.getHash()] = neW;
            }
        }
    );

})(jQuery, window, document);
/* media/zoo/applications/jbuniversal/cart-elements/core/price/assets/js/price.js */
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
 */

;
(function ($, window, document, undefined) {

    JBZoo.widget('JBZoo.PriceElement', {},
        {
            rePaint: function (data) {
                var $this = this;
                if (typeof data == 'array' || typeof data == 'object') {
                    $.each(data, function (i, html) {
                        $this._rePaint(html, $.trim(i));
                    });
                }
                else {
                    $this._rePaint(data);
                }
            },

            _rePaint: function (data, selector) {
                var container = JBZoo.empty(selector) ? this.el : $('.' + selector, this.el.closest('.jsPrice'));+

                container.empty().prepend($(data).contents());
            },

            _format: function (name) {

                var value = this.el.data(name.toLowerCase());
                value = this._ucfirst(value);

                return value;
            },

            _ucfirst: function (string) {
                string = "" + string;

                string = string.charAt(0).toUpperCase() + string.substr(1);

                return string;
            },

            /**
             * @returns JBZooPrice|boolean
             * @private
             */
            _getPriceWidget: function() {
                if(this.isWidgetExists('JBZooPrice')) {
                    return this.el.closest('.jsPrice').data('JBZooPrice');
                }

                return false;
            }
        }
    );

})(jQuery, window, document);
/* media/zoo/applications/jbuniversal/cart-elements/price/value/assets/js/value.js */
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
 */

;
(function ($, window, document, undefined) {

    JBZoo.widget('JBZoo.PriceElement.Value', {},
        {
            rePaint: function (data) {
                this._parent('rePaint', [data]);
                var $jbPrice = this.el.closest('.jsPrice'),
                    toggle = $('.jsCurrencyToggle', $jbPrice);

                if (toggle.length) {
                    toggle.JBZooCurrencyToggle('toggle');
                } else {
                    toggle = $('.jsCurrencyToggle');
                    if (toggle.length) {
                        toggle.JBZooCurrencyToggle('toggle');
                    }
                }
            }
        }
    );

})(jQuery, window, document);
/* media/zoo/applications/jbuniversal/cart-elements/price/buttons/assets/js/buttons.js */
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
 */

;
(function ($, window, document, undefined) {

    var ajaxLock = false;

    JBZoo.widget('JBZoo.PriceElement.Buttons',
        {
            'item_id'        : '',
            'element_id'     : '',
            'hash'           : '',
            'isInCart'       : false,
            'add'            : '',
            'remove'         : '',
            'basket'         : '',
            'modal'          : '',
            'isModal'        : 0,
            'addAlert'       : false,
            'addAlertText'   : 'Item has been added to the cart!',
            'addAlertTimeout': 3000
        },
        {
            // default data
            'image'     : '',
            'link'      : '',
            'price'     : {},
            'key'       : {},
            'item_id'   : '',
            'element_id': '',
            'isInCart'  : 0,
            'isModal'   : false,
            '_ajaxLock' : false,

            init: function ($this) {

                this.price = this.el.closest('.' + this.options.hash);
                this.item_id = this.options.item_id;
                this.element_id = this.options.element_id;
                this.isModal = this.options.isModal;
                this.hash = this.options.hash;

                this.toggleButtons();
                this.price.on('removeItem', function () {
                    $this.removeItem();
                    $this.toggleButtons();
                });
            },

            getState: function () {
                var items = this.getItems();
                if (items.hasOwnProperty(this.item_id) && items[this.item_id].hasOwnProperty(this.element_id)) {
                    this.isInCart = 1;

                } else {
                    this.isInCart = 0;
                }

                return this.isInCart;
            },

            getItems: function () {
                if (this.isModal) {
                    return window.parent.JBZoo.getVar('cartItems', {}) || {};
                }

                return JBZoo.getVar('cartItems', {}) || {};
            },

            setItems: function (items) {
                if (this.isModal) {
                    return window.parent.JBZoo.addVar('cartItems', items);
                }

                return JBZoo.addVar('cartItems', items);
            },

            removeItem: function () {
                var items = this.getItems();

                if (JBZoo.empty(items[this.item_id])) {
                    delete items[this.item_id];
                }

                if (!JBZoo.empty(items) && !JBZoo.empty(items[this.item_id]) && !JBZoo.empty(items[this.item_id])[this.element_id]) {
                    delete items[this.item_id][this.element_id];
                }

                this.setItems(items);
            },

            addItem: function () {
                var items = this.getItems();
                if (!items.hasOwnProperty(this.item_id)) {
                    var obj = {};
                    obj[this.element_id] = this.element_id;
                    items[this.item_id] = obj;
                }
                else if (items.hasOwnProperty(this.item_id) && !items[this.item_id].hasOwnProperty(this.element_id)) {
                    items[this.item_id][this.element_id] = this.element_id;
                }

                this.setItems(items);
            },

            'emptyCart.JBZooCartModule {document} .jsJBZooCartModule': function (e, $this) {
                $this.toggleButtons();
            },

            'click .jsAddToCartModal': function (e, $this) {
                $.fancybox({
                    'type'      : 'iframe',
                    'href'      : $this.options.modal + '&args[hash]=' + $this.hash,
                    'autoSize'  : true,
                    'fitToView' : false,
                    'beforeShow': function () {
                        var content = $('.fancybox-iframe').contents().find('.jsPrice');
                        content.addClass('jsPriceModal jbprice-modal');

                        this.width = (content.width() + 100);
                        this.height = (content.height() + 100);
                    },
                    'helpers'   : {
                        'overlay': {
                            'locked': false,
                            'css'   : {
                                'background': 'rgba(119, 119, 119, 0.4)'
                            }
                        }
                    }
                });
            },

            'click .jsAddToCart': function (e, $this) {

                var jbPrice  = $this.el.closest('.jsPrice').data('JBZooPrice'),
                    quantity = jbPrice.get('quantity', '1'),
                    input    = $(this);

                if (ajaxLock) {
                    return;
                }

                ajaxLock = true;

                $this.ajax({
                    'target' : $(this),
                    'url'    : $this.options.add,
                    'data'   : {
                        "args": {
                            'template': jbPrice.getTemplate(),
                            'quantity': quantity,
                            'values'  : jbPrice.getValue()
                        }
                    },
                    'success': function () {
                        ajaxLock = false;

                        $this.addItem();
                        $this.toggleButtons();

                        $this.basketReload();

                        if (input.hasClass('jsGoTo') && $this.options.basket) {
                            window.parent.location.href = $this.options.basket;
                        }

                        if (typeof parent.jQuery.fancybox != 'undefined') {
                            window.parent.jQuery.fancybox.close();
                        }

                        if ($this.options.addAlert) {

                            if ($this.options.addAlertTimeout <= 0) {
                                $this.options.addAlertTimeout = '';
                            }

                            $this.alert($this.options.addAlertText, $.noop, {
                                type : "success",
                                timer: ($this.options.addAlertTimeout)
                            });
                        }

                    },
                    'error'  : function (data) {
                        ajaxLock = false;
                        if (data.message) {
                            $this.alert(data.message);
                        }
                    }
                });
            },

            'click .jsPriceButton': function (e, $this) {

                var $btn = $(this);
                if ($btn.hasClass('jsGoTo') && $this.options.basket) {
                    parent.location.href = $this.options.basket;
                }

                if (typeof parent.jQuery.fancybox != 'undefined') {
                    window.parent.jQuery.fancybox.close();
                }
            },

            'click .jsRemoveFromCart': function (e, $this) {

                $this.ajax({
                    'target' : $(this),
                    'url'    : $this.options.remove,
                    'data'   : {
                        "args": {
                            'key': $this.getKey()
                        }
                    },
                    'success': function () {

                        $this.removeItem();
                        $this.toggleButtons();

                        if (typeof parent.jQuery.fancybox != 'undefined') {
                            parent.jQuery.fancybox.close();
                        }

                        $this.basketReload();
                    },
                    'error'  : function (data) {
                        if (data.message) {
                            alert(data.message);
                        }
                    }
                });
            },

            rePaint: function (data) {
                this.toggleButtons();
            },

            toggleButtons: function () {

                var jsButtons = this.$('.{hash} .jsPriceButtons', this.isModal);

                if (this.getState()) {
                    jsButtons
                        .addClass('in-cart')
                        .removeClass('not-in-cart');
                } else {
                    jsButtons
                        .removeClass('in-cart')
                        .addClass('not-in-cart');
                }

                if (this.isModal) {
                    this.isModal = false;
                    this.toggleButtons();
                    this.isModal = true;
                }

                return this;
            },

            getKey: function () {
                return this.key;
            },

            basketReload: function () {
                if (this.isWidgetExists('JBZooCartModule')) {
                    var module = this.$('{document} .jsJBZooCartModule', this.isModal);
                    return module.JBZooCartModule('reload');
                }
            },

            get: function (identifier, defValue) {
                if (this.isWidgetExists('JBZooPrice')) {
                    return this.price.JBZooPrice('get', identifier, defValue);
                }

                return defValue;
            },

            $: function (selector, _parent) {

                if (selector == '{element}') {
                    return this.el;
                }
                var _$ = $;

                if (_parent === true) {
                    _$ = window.parent.jQuery;
                }

                if (selector.indexOf('{document} ') === 0) {
                    selector = selector.replace('{document} ', '');
                    return _$(selector);
                }

                if (selector.indexOf('{hash}') === 1) {
                    selector = selector.replace('{hash}', this.hash);
                    return _$(selector);
                }

                return _$(selector, this.el);
            },

            isWidgetExists: function (name) {
                if (this.isModal) {
                    return window.parent.JBZoo.isWidgetExists(name);
                }

                return JBZoo.isWidgetExists(name);
            },

            /**
             * Widget fire on ajax end
             */
            _onAjaxStop: function (options, args) {
                var $target = (options.target) ? $(options.target) : this.el;
                $target.removeClass('jbloading');
                this.toggleButtons();
            }

        }
    );

})(jQuery, window, document);
/* media/zoo/applications/jbuniversal/cart-elements/price/quantity/assets/js/quantity.js */
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
 */

;
(function ($, window, document, undefined) {

    JBZoo.widget('JBZoo.PriceElement.Quantity', {
            'target': '.jsQuantity'
        },
        {
            getValue: function () {
                var quantity = this.$(this.options.target).JBZooQuantity('getValue');

                return quantity;
            }
        }
    );

})(jQuery, window, document);
/* media/zoo/applications/jbuniversal/assets/js/widget/quantity.js */
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
 */

;
(function ($, window, document, undefined) {

    JBZoo.widget('JBZoo.Quantity', {
            'default' : 1,
            'step'    : 1,
            'min'     : 1,
            'max'     : 999999,
            'decimals': 0,
            'speed'   : 200,
            'onChange': $.noop
        }, {
            value: 0,

            isAnimate: false,

            $input : false,
            $box   : false,
            $digits: false,

            init: function ($this) {
                // force validate numeric options
                $this._cleanupOptions();

                // get links to DOM
                $this.$input = $this.$('.jsInput');
                $this.$box = $this.$('.item-count-digits');
                $this.$digits = $this.$('.item-count-digits dd');

                // set starting state
                $this._setValue($this.$input.val());
                $this._updateView();
            },

            /**
             * External method for set new value
             * @param newValue
             */
            setValue: function (newValue) {
                this._setValue(newValue);
                this._updateView();
            },

            /**
             * Get current value
             * @returns {number}
             */
            getValue: function () {
                return this._validate(this.value);
            },

            /**
             * Set new value to input
             * @param newValue
             * @private
             */
            _setValue: function (newValue) {
                var $this = this,
                    $input = $this.$input,
                    oldValue = $this.value;

                // set value
                newValue = $this._validate(newValue);
                $input.val($this._toFormat(newValue));
                $this.value = newValue;

                // change callback
                if (newValue != oldValue) {
                    var args = [oldValue, newValue];

                    $this._trigger('change', args);

                    if ($.isFunction($this.options.onChange)) {
                        $this.options.onChange.apply($this, args);
                    }
                }
            },

            /**
             * Cleanup option list
             * @private
             */
            _cleanupOptions: function () {
                var $this = this;

                $.extend(true, {}, $this.options, {
                    'default' : JBZoo.toFloat($this.options['default']),
                    'step'    : JBZoo.toFloat($this.options.step),
                    'min'     : JBZoo.toFloat($this.options.min),
                    'max'     : JBZoo.toFloat($this.options.max),
                    'decimals': JBZoo.toInt($this.options.decimals)
                });
            },

            /**
             * Cleanup and validate value
             * @param value
             * @returns {*|Number}
             * @private
             */
            _validate: function (value) {
                var $this = this;

                value = JBZoo.toFloat(value);
                value = JBZoo.round(value, $this.options.decimals);

                if (value < $this.options.min) {
                    value = $this.options.min;
                }

                if (value > $this.options.max) {
                    value = $this.options.max;
                }

                return value;
            },

            /**
             * Formted output
             * @param value
             * @returns {string}
             * @private
             */
            _toFormat: function (value) {
                value = JBZoo.round(value, this.options.decimals);
                return value;
            },

            /**
             * Update
             * @private
             */
            _updateView: function () {

                var $this = this,
                    max = this._validate($this.value) + 3 * JBZoo.toFloat($this.options.step);

                for (var i = 0; i < 5; i++) {
                    max = max - $this.options.step;
                    $this.$digits.eq(i).html($this._toFormat(max));
                }

                this.$box.css({
                    top      : 0,
                    marginTop: -$this.$digits.height() * 2 + 'px'
                });
            },

            /**
             * Check, is currecnt value is valid for current config
             * @param value
             * @returns {boolean}
             * @private
             */
            _isValid: function (value) {
                value = JBZoo.toFloat(value);

                if (value < this.options.min) {
                    return false;

                } else if (value > this.options.max) {
                    return false;
                }

                return true;
            },

            /**
             * No scroll animations for no valid values
             * @param newValue
             * @private
             */
            _noScroll: function (newValue) {

                var $this = this,
                    top = JBZoo.toInt(this.$box.css('top')),
                    dir = newValue > $this.value > 0 ? 1 : -1;

                $this._setValue(newValue);

                if ($this.isAnimate) {
                    return;
                }

                $this.isAnimate = true;
                $this.$box
                    .stop()
                    .animate({
                        top: (top + ($this.$digits.height() / 2 * dir)) + 'px'
                    }, {
                        duration: $this.options.speed / 2,
                        complete: function () {
                            $this.$box
                                .stop()
                                .animate({
                                    top: top + 'px'
                                }, {
                                    duration: $this.options.speed / 2,
                                    complete: function () {
                                        $this.isAnimate = false;
                                    }
                                });
                        }
                    });
            },

            /**
             * Set new value and start animate
             * @param newValue
             * @private
             */
            _change: function (newValue) {

                var $this = this,
                    dir = newValue > $this.value ? 1 : -1;

                if (!$this._isValid(newValue)) {
                    $this._noScroll(newValue);
                    return;
                }

                if ($this.isAnimate) {
                    return;
                }

                $this._updateView();
                $this._setValue(newValue);

                $this.isAnimate = true;
                $this.$box
                    .stop()
                    .animate({top: dir * $this.$digits.height() + 'px'}, {
                        duration: $this.options.speed,
                        complete: function () {
                            $this.isAnimate = false;
                        }
                    });
            },

            'click .jsAdd': function (e, $this) {
                var newValue = $this.value + $this.options.step;
                $this._change(newValue, true);
            },

            'click .jsRemove': function (e, $this) {
                var newValue = $this.value - $this.options.step;
                $this._change(newValue, true);
            },

            'focus .jsInput': function (e, $this) {
                $this.$input.css('opacity', '1');
                $this.$box.hide();
            },

            'blur .jsInput': function (e, $this) {
                $this.$input.css('opacity', '0');
                $this.$box.show();
            },

            'change .jsInput': function (e, $this) {
                $this._setValue($(this).val());
                $this._updateView();
            },

            'keyup .jsInput': function (e, $this) {
                $this._updateView();
            },

            'keydown .jsInput': function (e, $this) {

                if ($this._key(e, 'arrow-top')) {
                    $this._setValue($this.value + $this.options.step);
                    $this._updateView();
                    return false;
                }

                if ($this._key(e, 'arrow-down')) {
                    $this._setValue($this.value - $this.options.step);
                    $this._updateView();
                    return false;
                }
            },

            'mouseenter .jsCountBox': function (e, $this) {
                $this.$input.focus();
            },

            'mousewheel .jsInput': function (e, $this) {

                if ($this.$input.is(':focus')) {
                    var value = $this.value;
                    if (e.originalEvent.wheelDelta > 0) {
                        value += $this.options.step;
                    } else {
                        value -= $this.options.step;
                    }

                    $this._setValue(value);
                    $this._updateView();
                }

                return false;
            }

        }
    );

})(jQuery, window, document);
/* modules/mod_jbzoo_basket/assets/js/cart-module.js */
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
 */

;
(function ($, window, document, undefined) {
    /**
     * JBZoo Cart Module
     */
    JBZoo.widget('JBZoo.CartModule', {
        'url_clean'          : '',
        'url_reload'         : '',
        'url_item_remove'    : '',
        'text_delete_confirm': 'Are you sure?',
        'text_empty_confirm' : 'Are you sure?'
    }, {

        'click .jsDelete': function (e, $this) {
            var $item = $(this).closest('.jsCartItem');

            $this.confirm($this.options.text_delete_confirm, function () {
                $this.ajax({
                    url    : $this.options.url_item_remove,
                    data   : {
                        key: $item.data('key')
                    },
                    success: function () {

                        $('.jsJBPrice-' + $item.data('jbprice')).trigger('removeItem');
                        //$this.reload();
                        $('.jsJBZooCartModule').JBZooCartModule('reload');
                    }
                });
            });
        },

        'click .jsEmptyCart': function (e, $this) {

            $this.confirm($this.options.text_empty_confirm, function () {
                $this.ajax({
                    url    : $this.options.url_clean,
                    success: function () {

                        JBZoo.addVar('cartItems', {});
                        $this._trigger('emptyCart');

                        //$this.reload();
                        $('.jsJBZooCartModule').JBZooCartModule('reload');
                    }
                });
            });
        },

        /**
         * Full module reload
         */
        reload: function () {
            var $this = this;

            $this.ajax({
                url     : $this.options.url_reload,
                dataType: 'html',
                success : function (html) {

                    html = '<div>' + html + '</div>';

                    var content = $(html).find('.jsJBZooCartModule').contents();

                    $this.el.empty().prepend(content);

                    if (window.location.href.indexOf('controller=basket') > 0 && $('.jsCartItem', content).length == 0) {
                        //window.location.reload();
                    }
                }
            });
        }
    });

})(jQuery, window, document);
