/* cacheid:193c82bedca7f4a075f16bb4f523b7f80 */
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
/* media/zoo/applications/jbuniversal/assets/js/admin/validator.js */
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

    JBZoo.widget('JBZoo.PriceValidator', {
            'isOverlay': false,

            'message_variant_invalid' : 'The variant is invalid',
            'message_duplicate_values': 'Values duplicates in other variant'
        },
        {
            init: function () {

                var $this = this;
                this.$('.jbprice-variation-row').each(function (i, row) {
                    $this.addOptions($(row));
                });
            },
            'change .simple-param .jsElement input, .simple-param .jsElement select, .simple-param .jsElement textarea': function (e, $this) {

                var $row = $(this).closest('.jbprice-variation-row');
                $this
                    .clear()
                    .addOptions($row)
                    .getErrors();
            },

            selected: function () {

                var $this = this,
                    result = {};

                this.$('.jbprice-variation-row').each(function (i, row) {
                    var data = {};
                    $('.simple-param .jsElement', row).each(function (j, param) {

                        var value = $this._simpleData(param);
                        if (!JBZoo.empty(value)) {
                            value.index = j;
                            data[j] = value;
                        }
                    });

                    if (!JBZoo.empty(data)) {
                        result[i] = data;
                    }
                });

                return result;
            },

            duplicates: function () {

                var selected = this.selected(),
                    duplicates = {};
                $.each(selected, function (i) {
                    var subject = selected[i];
                    $.each(selected, function (j, row) {
                        if ((Object.keys(row).length === Object.keys(subject).length) && i != j) {
                            var errors = {};
                            $.each(row, function (k, param) {
                                if ((!JBZoo.empty(param)) && (!JBZoo.empty(subject[k]))) {
                                    if (param.value == subject[k].value && param.index == subject[k].index) {
                                        errors[subject[k].index] = {
                                            'index': subject[k].index,
                                            'value': subject[k].value
                                        };
                                    }
                                }
                            });
                            if (Object.keys(subject).length == Object.keys(errors).length && !JBZoo.empty(errors)) {
                                duplicates[i + j] = {
                                    'variant': i,
                                    'index'  : errors
                                };
                            }
                        }
                    });
                });

                return duplicates;
            },

            addOptions: function ($row) {

                var $this = this,
                    $options = $('.variation-label .options', $row),
                    $overflow = $('.overflow', $options),
                    $price = $('.jsVariantPrice', $options),
                    core = {};

                $overflow.html('');
                $('.core-param', $row).each(function (i, param) {

                    var option = $this._coreData(param);
                    if (!JBZoo.empty(option)) {
                        core[i] = option;
                    }
                });

                $.each(core, function (index, data) {

                    if (index === 0) {
                        $price.html()
                    }
                });

                $('.simple-param .jsElement', $row).each(function (i, param) {

                    var option = $this._simpleData($(param));
                    if (!JBZoo.empty(option)) {

                        $overflow.append(
                            '<div class="option">' +
                            '<span title=\"' + option.label + '\" class="key">' + option.value + '</span></div>');
                    }
                });

                $('.option .key', $options).tooltip();

                return this;
            },

            clearOptions: function (row) {
                $('.overflow', row).html('');

                return this;
            },

            message: function (parent, message) {

                $('.jsMessage', parent)
                    .attr('title', message)
                    .addClass('error')
                    .tooltip();

                return this;
            },

            clearMessages: function (row) {

                $('.jsMessage', row)
                    .removeClass('error lock')
                    .removeAttr('title data-original-title')
                    .tooltip()
                    .tooltip('destroy');

                return this;
            },

            _simpleData: function (simple) {

                var $field = $('input, select, textarea', simple),
                    data = {},
                    value = $field.val(),
                    label = $('.label', simple);

                if ($field.attr('type') == 'radio') {
                    $field = $('input[type="radio"]:checked', simple);
                    value = $field.val();
                }

                value = $.trim(value);
                if (value.length > 0) {
                    data = {
                        'value': value,
                        'label': $.trim(label.text())
                    }
                }

                return data;
            },

            _coreData: function (core) {

                var $field = $('input, select, textarea', core),
                    data = {},
                    value = $field.val(),
                    label = $('.label', core);

                if ($field.attr('type') == 'radio') {
                    $field = $('input[type="radio"]:checked', core);
                    value = $field.val();
                }

                value = $.trim(value);
                if (!JBZoo.empty(value)) {
                    data = {
                        'value': value,
                        'label': $.trim(label.text())
                    }
                }

                return data;
            }

        }
    );

})(jQuery, window, document);
/* media/zoo/applications/jbuniversal/elements/jbprice/assets/js/edit.js */
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

    JBZoo.widget('JBZoo.PriceEdit', {
            // options
            'isAdvance'                 : true,
            'isOverlay'                 : false,
            'isValid'                   : false,
            'text_hide'                 : 'Hide variations',
            'text_show'                 : 'Show variations',
            'validator_variant_invalid' : 'The variant is invalid',
            'validator_duplicate_values': 'Values duplicates in other variant',
            'validator_choice_limiting' : 'In this mode you can choose only one parameter',
            'duration'                  : 300
        },
        {
            'validator': {},

            init: function () {
                var _options = {
                    'message_variant_invalid' : this.options.validator_variant_invalid,
                    'message_duplicate_values': this.options.validator_duplicate_values,
                    'message_choice_limiting' : this.options.validator_choice_limiting
                };
                this.$('.jbprice-variation-row:first .jsJBRemove').hide();
                this.sortable();

                //create validator if variations is on
                if (this.options.isAdvance) {
                    if (!!this.options.isOverlay) {
                        this.validator = this.el.JBZooPriceValidatorCalc(_options).data('JBZooPriceValidatorCalc');
                    } else {
                        this.validator = this.el.JBZooPriceValidatorPlain(_options).data('JBZooPriceValidatorPlain');
                    }
                }
            },

            'click .jsShowVariations': function (e, $this) {
                var variations = $this.getVariations();
                if (variations.is(':hidden')) {

                    $(this).text($this.options.text_hide);
                    variations.slideDown();
                    return;
                }

                $(this).text($this.options.text_show);
                variations.slideUp();
            },

            'click .jsToggleVariation': function () {

                var $row = $(this).closest('fieldset');
                $row
                    .toggleClass('fieldset-hidden')
                    .siblings()
                    .addClass('fieldset-hidden');
            },

            'click .jsJBRemove': function (e, $this) {

                var $row = $(this).closest('.jbprice-variation-row');

                $row.slideUp(300, function () {
                    $row.remove();
                    $this.validator.clear().fill();
                    $this.reBuild();
                });
            },

            'click .jsNewPrice': function (e, $this) {

                var row = $this.$('.jbprice-variation-row:first'),
                    clone = row.clone().hide();

                $('*', clone)
                    .removeAttr('id checked selected');

                $('input[type="text"], textarea', clone).val("");

                //Init JBZooColors.
                var colors = $('.variant-color-wrap', row);
                if (colors.length > 0) {
                    var oldColor = $('.jbzoo-colors', colors).data('JBZooColors'),
                        newColor = $('.variant-color-wrap .jbzoo-colors', clone);

                    $('.jbcolor-label, .jbcolor-input', newColor).removeClass('checked')
                    newColor.JBZooColors(oldColor.options);
                }
                //Init JBZooMedia.
                var image = $('.variant-image-wrap', row);
                if (image.length > 0) {
                    var oldMedia = $('.jsMedia', image).data('JBZooMedia'),
                        newMedia = $('.variant-image-wrap .jsMedia', clone);
                    $('.jsMediaCancel, .jsMediaButton', newMedia).remove();

                    if (oldMedia && oldMedia.options) {
                        newMedia.JBZooMedia(oldMedia.options);
                    }
                }

                //Init JBZooBalance. Helper for radio input.
                var balance = $('.variant-balance-wrap', row);
                if (balance.length > 0) {
                    var oldBalance = $('.jsBalance', balance).data('JBZooPriceBalance'),
                        newBalance = $('.variant-balance-wrap .jsBalance', clone);

                    newBalance.JBZooPriceBalance(oldBalance.options);
                }
                //Init JBZooPriceEditElement_descriptionEdit.
                var description = $('.jsDescription', row);
                if (description.length > 0) {
                    var newDesc = $('.jsDescription .jsField', clone);
                    newDesc.JBZooPriceEditElement_descriptionEdit();
                }

                // Tips
                $('.hasTip', clone).each(function() {
                    var $tip = $(this),
                        forAttr = $tip.attr('for');

                    if (forAttr) {
                        var $colorElem = $('#' + forAttr);
                        if ($colorElem.length) {
                            var title = $colorElem.attr('title');
                            $tip.attr('title', title);

                            var parts = title.split('::', 2);
                            var mtelement = document.id(this);
                            mtelement.store('tip:title', title);
                        }
                    }
                });
                var JTooltips = new Tips($('.hasTip', clone).get(), {"maxTitleChars": 50,"fixed": false});

                $('.variant-param', clone).each(function (i, param) {
                    var $param = $(param),
                        id = parseInt(new Date().getTime() + i);

                    $('.jsElement label', $param).each(function (n, label) {

                        var $label = $(label),
                            random = Math.floor((Math.random() * 999999) + 1);

                        id += n + random;

                        $label.attr('for', id);

                        $('input', $label).attr('id', id);
                        $label.prev('input').attr('id', id);
                    });
                });

                $this.$('.variations-list').append(clone);

                $this
                    .reBuild()
                    .sortable();
                $this.validator
                    .clearRow(clone)
                    .clearOptions(clone);

                clone.slideDown();
                return false;
            },

            sortable: function () {

                var $this = this,
                    rows = this.$('.jbprice-variation-row');

                rows.delegate('.jsJBMove', 'mousedown', function () {
                    rows
                        .siblings()
                        .addClass('fieldset-hidden')
                });

                this.$('.jsJBMove').sortable({
                    'forcePlaceholderSize': true,
                    'items'               : rows,
                    'placeholder'         : "ui-state-highlight",
                    'stop'                : function () {
                        $this.reBuild();
                        $this.validator.getErrors();
                    }
                });
            },

            reBuild: function () {

                this.$('.jbprice-variation-row:first .jsJBRemove').hide();

                this.$('.jbprice-variation-row').each(function (n) {

                    var $row = $(this);
                    $('input[type="radio"]', $row).each(function () {

                        var field = $(this),
                            name = field.attr('name'),
                            random = Math.floor((Math.random() * 999999) + 1);

                        field.attr('name', field.attr('name')
                            .replace(/\[variations\]\[\d*\]/i, '[variations-' + random + '][' + n + ']'));
                    });
                });

                this.$('.jbprice-variation-row').each(function (i) {
                    i++;
                    var row = $(this);
                    if (!row.is(':first-child')) {
                        $('.jsJBRemove', row).show();
                    }

                    $('.list-num', row).text(i);

                    $('input:not([type="radio"]), select, textarea', row).each(function () {

                        var field = $(this),
                            name = field.attr('name');

                        field.attr('name', field.attr('name').replace(/\[variations\]\[\d*\]/i, '[variations][' + i + ']'));
                    });

                    $('input[type="radio"]', row).each(function () {

                        var field = $(this),
                            name = field.attr('name');
                        field.attr('name', field.attr('name').replace(/(\[variations-\d*\]\[\d*\])/i, '[variations][' + i + ']'));

                        if (field.is(':checked') == true) {
                            field.attr('checked', 'checked');
                        }
                    });
                });

                return this;
            },

            isValid: function () {

                if (!!this.options.isAdvance === false) {
                    return true;
                }

                var errors = this.validator.clear().fill().getErrors();
                if (!JBZoo.empty(errors)) {
                    var $this = this,
                        variations = this.$('.jbprice-variation-row');

                    $.each(errors, function (key, data) {
                        $this.scrollTo(variations.get(data.variant));
                    });
                }

                return !!JBZoo.empty(errors);

            },

            scrollTo: function (row) {

                var $body = $('body');
                row = $(row);
                if (!$body.is(':animated')) {

                    $body.stop(true).animate({
                        scrollTop: row.offset().top
                    }, 500);
                }

                if (this.$('.variations').is(':hidden')) {
                    this.$('.jsShowVariations').trigger('click');
                }

                if (row.hasClass('fieldset-hidden')) {
                    row.toggleClass('fieldset-hidden');
                }
            },

            getVariations: function () {
                return this.$('.variations');
            }

        }
    );

})(jQuery, window, document);
/* media/zoo/applications/jbuniversal/assets/js/admin/validator/plain.js */
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

    JBZoo.widget('JBZoo.PriceValidator.Plain', {
            'message_duplicate_values': 'Values duplicates in other variant',
            'message_variant_invalid' : 'The variant is invalid'
        },
        {
            errors: {},

            init: function ($this) {

                this.constructor.parent.init.apply($this);
            },

            validate: function () {
                this.errors = {};
                this.errors = this.duplicates();

                return this.errors;
            },

            clear: function () {

                var $this = this;
                this.$('.jbprice-variation-row').each(function (i, row) {
                    $this.clearRow(row);
                });

                return this;
            },

            clearRow: function (row) {
                var $row = $(row);
                this.clearMessages($row);

                return this;
            },

            fill: function () {
                var $this = this;
                this.$('.jbprice-variation-row').each(function (i, row) {
                    var $row = $(row);
                    $this.addOptions($row);
                });

                return this;
            },

            getErrors: function () {

                this.validate();
                if (JBZoo.empty(this.errors)) {
                    return false;
                }

                var $this = this,
                    variations = this.$('.jbprice-variation-row');
                $.each(this.errors, function (key, error) {
                    var variants = $(variations.get(error.variant)),
                        params = $('.simple-param', variants),
                        label = $('.jsVariantLabel', variants);

                    $this.message(label, $this.options.message_variant_invalid);
                    $.each(error.index, function (index) {
                        var param = params.get(index);

                        $this.message(param, $this.options.message_duplicate_values);
                    });
                });

                return this.errors;
            }

        }
    );

})(jQuery, window, document);
/* media/zoo/applications/jbuniversal/cart-elements/price/balance/assets/js/edit.js */
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

    JBZoo.widget('JBZoo.PriceBalance',
        {},
        {
            init: function () {
                this.change(this.value());
            },

            'change .jsBalanceRadio': function (e, $this) {
                var value = $(this).val();
                $this.change(value);
            },

            value: function () {
                return this.$('input[type="radio"]:checked').val();
            },

            change: function (value) {
                if (value == 1) {
                    this.$('.jsBalanceInput').removeAttr('disabled').focus();
                } else {
                    this.$('.jsBalanceInput').val('').attr('disabled', 'disabled');

                }
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
