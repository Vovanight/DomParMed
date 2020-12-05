/* cacheid:9824419556fbf155a3d6290ad21664890 */
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
