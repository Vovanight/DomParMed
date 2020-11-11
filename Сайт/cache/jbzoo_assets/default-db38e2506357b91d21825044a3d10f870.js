/* cacheid:78c85bc298959b1f247565264a3772ac0 */
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
/* media/zoo/applications/jbuniversal/assets/js/admin/colors.js */
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
     * jQuery plugin for color element
     * @param options
     */
    $.fn.JBColorElement = function (options) {

        var options = $.extend({}, {
            message : ' already in the list settings',
            theme   : 'bootstrap',
            position: 'bottom'
        }, options);

        onAdded();

        function initMinicolors(element) {

            if ($.isFunction($.fn.minicolors)) {
                var $minicolors = $(element).find('.jbpicker .jbcolor');

                if ($minicolors.hasClass('jbcolor-colors-init')) {
                    return $minicolors;
                }

                $minicolors.minicolors({
                    theme   : options.theme,
                    position: options.position
                });

                $minicolors.addClass('jbcolor-colors-init');

            } else {

                $$('.jbpicker .jbcolor', element).each(function (item) {

                    if (item.hasClass('jbcolor-colors-init') || item.id == '') {
                        return item;
                    }

                    new MooRainbow(item, {
                        id        : item.id,
                        imgPath   : '../media/system/images/mooRainbow/',
                        startColor: [255, 0, 0],
                        onComplete: function (color) {
                            this.element.value = color.hex;
                        }
                    });
                    item.addClass('jbcolor-colors-init');

                });
            }
        }

        function onAdded() {

            $('#element-list, .jsElementList').on('element.added', function (event, element) {
                initMinicolors(element);
            });
        }


        return $(this).each(function () {

            var $this = $(this);

            if ($this.hasClass('added-initialized')) {
                return $this;
            } else {
                $this.addClass('added-initialized');
            }

            initMinicolors($this);
            $('.jsColorAdd', $this).on('click', function () {

                var error = false,
                    $jbname = $('.jbname', $this),
                    $jbcolor = $('.jbcolor', $this),
                    name = $jbname.val(),
                    val = $jbcolor.val(),
                    color = val.toLowerCase(),
                    textVal = $.trim($('.jbcolor-textarea', $this).val()),
                    text = textVal.toLowerCase(),
                    space = text ? '\n' : '';

                if (color && text.indexOf(color) >= 0) {
                    alert(color + options.message);
                }

                if (!name.length) {
                    $jbname.addClass('error').focus();
                    error = true;
                }

                if (!color.length) {
                    $jbcolor.addClass('error').focus();
                    error = true;
                }

                if (error) {
                    return false;
                }

                $('.jbpicker input', $this).removeClass('error');

                $('.jbcolor-textarea', $this).val(text + space + name + color);
                $jbname.focus();
                $jbname.val('');
                $jbcolor.val('');
                $('.minicolors-swatch span', $this).removeAttr('style');

            });

            $('.jbcolor, .jbname', $this).on('keyup', function (event) {
                if (event.keyCode == 13) {
                    $('.jsColorAdd', $this).trigger('click');
                }
            });

        });

    };

})(jQuery, window, document);
/* media/zoo/applications/jbuniversal/assets/js/admin/delimiter.js */
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
     * Show/hide joomla field jbdelimiter
     */
    $.fn.JBZooDelimiter = function (options) {

        var options = $.extend({}, {
            'version': '3'
        }, options);

        var $mode = $('#jform_params_mode'),
            $parent = $(this).parents('#attrib-base'),
            group = $(this).attr('data-group');

        if (options.version == 2) {
            $parent = $(this).parents('.adminformlist');
        }

        $(this).each(function () {

            var $this = $(this);

            if (!$this.hasClass('jbdelimiter-init')) {
                $this.addClass('jbdelimiter-init');
            } else {
                return $this;
            }

            var $control = $this.parents('.control-group');

            if (options.version == 2) {
                $control = $this.parent('li');
            }

            $control.attr('data-group', group).addClass('stop');
            $control.nextUntil('.stop').attr('data-group', group);
        });

        var update = function (selected) {
            $parent.children().each(function () {
                group = $(this).attr('data-group');
                if (group != selected && typeof group != 'undefined' && group != 'close') {
                    $(this).hide();
                } else {
                    $(this).show();
                }
            });
        };

        update($mode.val());

        if ($mode.hasClass('initialized')) {
            return $(this);
        } else {
            $mode.addClass('initialized');
        }

        $mode.on('change', function () {
            update($(this).val());
        });
    };
})(jQuery, window, document);
/* media/zoo/applications/jbuniversal/assets/js/admin/editpositions.js */
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

    JBZoo.widget('JBZoo.EditPositions', {
        'urlAddElement'    : "index.php?option=com_zoo",
        'textNoElements'   : "No elements",
        'textElementRemove': "Are you sure want to delete the element?",
        'isElementTmpl'    : false
    }, {

        _isAjaxLocking: false,

        editableLists: {},
        newElelements: {},

        init: function ($this) {
            $this.editableLists = $this.$(".jsElementList:not(.unassigned)");
            $this.newElelements = $(".jsElement", $(".jsElementList.unassigned"));

            $this._initDragable();
            $this._initSortable();

            $this._emptyList();
            $this._rebuildList();
        },

        _initSortable: function () {

            var $this = this;

            $this.editableLists.each(function (n, list) {
                var $list = $(list);

                $list.sortable({
                    forcePlaceholderSize: true,

                    connectWith: ".jsElementList",
                    placeholder: "jsElement",
                    handle     : ".jsSort",
                    cursorAt   : {top: 16},
                    tolerance  : "pointer",
                    scroll     : false,

                    change: function () {
                        $this._emptyList();
                    },

                    update: function (event, ui) {

                        if (ui.item.hasClass("jsAssigning")) {

                            $this.el.find(".jsAssigning").each(function () {

                                if ($(this).data("config")) {

                                    var $newElem = $(this).data("config").clone();

                                    $newElem.find("input:radio").each(function () {
                                        var newAttrs = $(this).attr("name").replace(/^elements\[[\w_-]+\]/, "elements[_tmp]");

                                        $(this).attr("name", newAttrs);
                                    });

                                    ui.item.prepend($newElem);
                                }
                            });

                            ui.item.removeClass("jsAssigning");
                        }

                        $this._emptyList();
                    },

                    start: function (e, ui) {
                        ui.helper.addClass("ghost")
                    },

                    stop: function (e, ui) {
                        ui.item.removeClass("ghost");
                        $this._emptyList();
                        $this._rebuildList();
                    }
                });
            });
        },

        _initDragable: function () {

            var $this = this;

            $this.newElelements.draggable({
                connectToSortable: ".jsElementList",

                handle: ".jsSort",
                scroll: false,
                zIndex: 1000,

                helper: function () {
                    var $newElem = $(this).clone();
                    $newElem.find(".jsConfig").remove();
                    return $newElem;
                },

                drag: function () {
                    $this._emptyList();
                },

                start: function (event, ui) {
                    $(this).addClass("jsAssigning");
                    $(this).data("config", $(this).find(".jsConfig").remove());
                    ui.helper.addClass("ghost");
                },

                stop: function (event, ui) {
                    $(this).removeClass("jsAssigning");
                    ui.helper.removeClass("ghost");
                    $(this).append($(this).data("config"));
                    $this._emptyList();
                    $this._rebuildList();
                }
            });
        },

        _emptyList: function () {
            var $this = this;

            $this.$(".jsElementList:not(.unassigned)").each(function () {

                var $list = $(this),
                    $emptyLists = $list.hasClass("empty-list"),
                    $notSorts = $list.children(":not(.ui-sortable-helper)").length;

                if ($emptyLists && $notSorts || !$emptyLists && !$notSorts) {
                    $list.toggleClass("empty-list");
                }
            });
        },

        _rebuildList: function () {

            var $this = this,
                regReplace = new RegExp(/(tmp\[[a-z0-9_-]+\]\[[a-z0-9_-]+\])|(positions\[[a-z0-9_-]+\]\[[a-z0-9_-]+\])/);

            $this.editableLists.each(function () {
                var $position = $(this),
                    positionName = "positions[" + $position.data("position") + "]";

                $('.jsElement', this).each(function (positionIndex, elementBlock) {

                    var $element = $(this),
                        elementId = $('.jsElementId', $element).val();

                    $element.find("[name]").each(function () {

                        var $input = $(this),
                            oldName = $input.attr("name"),
                            replaceTo = positionName + "[" + elementId + "]";

                        if ($this.options.isElementTmpl) {
                            replaceTo = positionName + "[" + positionIndex + "]";
                        }

                        $input.attr("name", oldName.replace(regReplace, replaceTo));
                    });
                });
            });
        },

        noElements: function ($elementList) {

            var $this = this;

            $elementList.find(".jsNoElements").remove();

            if ($this.el.children(".jsElement").length == 0) {
                $("<li>")
                    .addClass("jsNoElements")
                    .text($this.options.textNoElements)
                    .appendTo($elementList);
            }
        },

        'mousedown .jsSort': function (e, $this) {
            $this.$(".jsElement").addClass("hideconfig");
        },

        'click .jsEdit': function (e, $this) {
            var $element = $(this).closest(".jsElement"),
                isHide = $element.is('.hideconfig');

            $this.hideAllConfigs();

            if (isHide) {
                $element.removeClass('hideconfig');
            } else {
                $element.addClass('hideconfig');
            }
        },

        'click .jsDelete': function (e, $this) {

            var $button = $(this);

            $this.confirm($this.options.textElementRemove, function () {

                $button.closest(".jsElement").slideUp(300, function () {
                    $(this).remove();
                    $this._emptyList();
                    $this._rebuildList();
                });
            });
        },

        'click .jsAddNewElement': function (e, $this) {

            var $link = $(this),
                type = $link.data('type'),
                group = $link.closest('.jsElementsGroup').data('group'),
                $elementList = $this.$('.jsElementList:first'),
                $place = $("<li>").addClass("element loading").appendTo($elementList);

            $elementList.removeClass('empty-list');

            $this.ajax({
                'url'     : $this.options.urlAddElement,
                'data'    : {
                    elementType : type,
                    elementGroup: group,
                    count       : 0
                },
                'dataType': 'html',
                'success' : function (data) {

                    var $newElement = $(data),
                        elemHeight = $newElement.height();

                    $this.hideAllConfigs();
                    $newElement.removeClass('hideconfig').hide();

                    // evalate
                    $newElement.find("script").each(function () {
                        eval($(this).text());
                    });

                    $place
                        .removeClass("loading")
                        .css('min-height', elemHeight)
                        .replaceWith($newElement);

                    $newElement.find(".hasTip").each(function () {
                        var title = $(this).attr('title').split('::');
                        if (title[1]) {
                            $(this).attr('title', title[1]);
                        } else {
                            $(this).attr('title', title[0]);
                        }
                    });

                    new Tips($newElement.find(".hasTip[title]").get(), {
                        maxTitleChars: 1000,
                        fixed        : false
                    });

                    $this.el.trigger("element.added", $place);
                    $newElement.fadeIn(300, function () {
                        $(this).effect("highlight", {}, 1000)
                    });

                    $this._rebuildList();
                }
            });

        },

        hideAllConfigs : function() {
            this.$(".jsElement").addClass("hideconfig");
        }

    });

})(jQuery, window, document);
/* media/zoo/applications/jbuniversal/assets/js/admin/ordermacroslist.js */
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

    JBZoo.widget('JBZoo.OrderMacrosList', {},
        {
            init: function () {
                this.$('.jsMacrosList').hide();
            },

            'click .jsShow': function (e, $this) {
                var $list = $this.$('.jsMacrosList');
                if ($list.is(':hidden')) {
                    $list.slideDown();
                } else {
                    $list.slideUp();
                }

            }
        }
    );

})(jQuery, window, document);
/* media/zoo/applications/jbuniversal/assets/js/admin/itemorder.js */
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
     * Pseudo jQuery plugin for form filed ItemOrder
     * @param options
     * @constructor
     */
    $.fn.JBZooItemOrder = function (options) {
        $('body').on('click', '.jsItemOrder .jsItemOrderAdd', function () {

            var $addButton = $(this),
                $parent = $addButton.closest('.jsItemOrder'),
                $template = $parent.find('.jbzoo-itemorder-row:first').clone(),
                length = $parent.find('.jbzoo-itemorder-row').length;

            $template.find('select option').removeAttr('selected');
            $template.find('input[type=checkbox]').removeAttr('checked');
            $template.find('label').removeAttr('for');

            var html = '<div class="jbzoo-itemorder-row">' + $template.html() + '</div><br>';
            html = html.split(/_jbzoo_[0-9]_/).join('_jbzoo_' + length + '_');

            $addButton.before(html);

            return false;
        });
    };

})(jQuery, window, document);
/* media/zoo/applications/jbuniversal/assets/js/admin/keyvalue.js */
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
     * Pseudo jQuery plugin for form filed key-value
     * @param options
     * @constructor
     */
    $.fn.JBZooKeyValue = function (options) {
        $('body').on('click', '.jsKeyValue .jsKeyValueAdd', function () {

            var $addButton = $(this),
                $parent = $addButton.closest('.jsKeyValue'),
                $template = $parent.find('.jbkeyvalue-row:first').clone(),
                length = $parent.find('.jbkeyvalue-row').length;

            $template.find('input').attr('value', '');

            html = '<div class="jbkeyvalue-row">' + $template.html() + '</div>';
            html = html.replace('[0][key]', '[' + (length) + '][key]');
            html = html.replace('[0][value]', '[' + (length) + '][value]');

            $addButton.before(html);

            return false;
        });
    };

})(jQuery, window, document);
/* media/zoo/applications/jbuniversal/assets/js/admin/jkeyvalue.js */
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
     * Pseudo jQuery plugin for form filed joomla key-value
     * @param options
     * @constructor
     */
    $.fn.JBZooJKeyValue = function (options) {

        $('body').on('click', '.jsJKeyValue .jsJKeyValueAdd', function () {

            var $addButton = $(this),
                $parent = $addButton.closest('.jsJKeyValue'),
                $template = $parent.find('.jbjkeyvalue-row:first').clone(),
                length = $parent.find('.jbjkeyvalue-row').length;


            $template.find('input').attr('value', '');
            $template.find('div').remove();
            $template.find('select').removeClass().show();
            $template.find('select option:selected').removeAttr('selected');

            if (length != 0) {
                $template.append('<a href="#jbjkeyvalue-rem" class="jsJKeyValueRemove">');
            }

            var html = '<div class="jbjkeyvalue-row">' + $template.html() + '</div>';
            html = html.replace('[0][key]', '[' + (length) + '][key]');
            html = html.replace('0key', (length) + 'key');
            html = html.replace('[0][value]', '[' + (length) + '][value]');

            $addButton.before(html);

            if (typeof jQuery.fn.chosen !== 'undefined') {
                jQuery('.jbjkeyvalue-row:last select').chosen({
                    disable_search_threshold: 10,
                    allow_single_deselect   : true
                });
            }

            return false;
        });

        $('body').on('click', '.jsJKeyValue .jsJKeyValueRemove', function () {
            var $remButton = $(this),
                $row = $remButton.closest('.jbjkeyvalue-row'),
                $parent = $remButton.closest('.jsJKeyValue'),
                $pattern = /[0-9]+?/;

            $row.remove();

            $parent.find('.jbjkeyvalue-row').each(function (key, obj) {
                var $obj = $(obj),
                    $keyName = $('select', $obj).attr('name'),
                    $id = $('select', $obj).attr('id'),
                    $newName = $keyName.replace($pattern, (key)),
                    $newValue = $newName.replace('[key]', '[value]'),
                    $newId = $id.replace($pattern, (key));

                $('div', $obj).remove();
                $('select', $obj).removeClass().show().attr('name', $newName).attr('id', $newId);

                if (typeof jQuery.fn.chosen !== 'undefined') {
                    $('select', $obj).chosen('destroy');

                    jQuery('select', $obj).chosen({
                        disable_search_threshold: 10,
                        allow_single_deselect   : true
                    });
                }

                $('input', $obj).attr('name', $newValue);

            });

            return false;
        });
    }

})(jQuery, window, document);
/* media/zoo/applications/jbuniversal/assets/js/admin/menu.js */
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
     * JBZoo AdminMenu
     */
    JBZoo.widget('JBZoo.AdminMenu', {
        'name' : '',
        'items': {}
    }, {
        init: function ($this) {

            if (JBZoo.empty($this.options.items)) {
                return false;
            }

            var html = '';

            if ($this.el.is('.disabled')) {
                $this.el.append('<li class="disabled"><a>' + $this.options.name + '</a>');

            } else {

                $.each($this.options.items, function (parentKey, items) {

                    var attrs = '';

                    if (typeof items.target != "undefined") {
                        attrs += 'target="' + items.target + '"';
                    }

                    if (items == 'divider') {
                        html += '<li class="separator divider"><span></span></li>';

                    } else if (typeof items.children == 'undefined' || items.children.length == 0) {
                        html += '<li><a ' + attrs + ' class="' + parentKey + '-item parent-link" href="' + items.url + '">' + items.name + '</a></li>';

                    } else {

                        var classes = parentKey + '-item dropdown-toggle parent-link';
                        if (typeof items.icon != "undefined") {
                            attrs += ' style="background-image:url(' + items.icon + ');" ';
                        }

                        html += '<li class="node dropdown-submenu">';
                        html += '<a ' + attrs + ' class="' + classes + '" data-toggle="dropdown" href="' + items.url + '">' +
                        items.name + '</a><ul class="dropdown-menu">';

                        $.each(items.children, function (childKey, item) {

                            var innerAttrs = '';
                            if (typeof item.target != "undefined") {
                                innerAttrs += ' target="' + items.target + '" ';
                            }

                            if (item == 'divider') {
                                html += '<li class="separator divider"><span></span></li>';

                            } else {
                                html += '<li><a ' + innerAttrs + ' class="' + childKey + '-item" href="' + item.url + '">' + item.name + '</a></li>';
                            }
                        });

                        html += '</ul></li>';
                    }

                });

                $this.el.append(
                    '<li class="dropdown" id="jbzoo-adminmenu">' +
                    '<a class="dropdown-toggle" data-toggle="dropdown" href="#">' +
                    $this.options.name +
                    ' <span class="caret"></span></a>' +
                    '<ul class="dropdown-menu">' + html + '</ul></li>'
                );
            }
        }

    });

})(jQuery, window, document);
/* media/zoo/applications/jbuniversal/assets/js/back-end.js */
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

    jQuery(function ($) {

        var joomlaVersion = JBZoo.getVar('joomlaVersion', '3');

        // Menu tabs hack
        $('li[data-href-replace]').each(function (n, obj) {
            var $obj = $(obj),
                replace = $(obj).data('href-replace'),
                $link = $obj.children('a'),
                href = $link.attr('href');

            if (replace) {
                $link.attr('href', href.replace(replace, 'controller=item'));
            }
        });

        // init Joomla CP Scripts
        $('#menu').JBZooAdminMenu(JBZoo.getVar('JBAdminItems', {'items': {}}));

        // fix for print version
        $('.jbzoo .uk-grid').closest('html').addClass('jbzoo-print');

        // fix for modules
        $('#module-form').addClass('jbzoo');

        // hack add parent class for admin panel
        $('body').addClass('jbzoo-joomla-' + joomlaVersion);

        if ($("#nav [data-jbzooversion].active").length) {
            $('<span class="version" />')
                .text("JBZoo " + $("#nav [data-jbzooversion].active").data("jbzooversion"))
                .appendTo("#nav div.bar");
        }

        // some plugins
        $.fn.JBZooKeyValue();
        $.fn.JBZooJKeyValue();
        $.fn.JBZooItemOrder();

        // wrapper for all select with chosen
        $('.jbzoo select').JBZooSelect();
    });

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
/* media/zoo/applications/jbuniversal/assets/js/admin/validator/calc.js */
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

    JBZoo.widget('JBZoo.PriceValidator.Calc', {
            'message_duplicate_values': 'Values duplicates in other variant',
            'message_variant_invalid' : 'The variant is invalid',
            'message_choice_limiting' : 'In this mode you can choose only one parameter'
        },
        {
            errors: {},

            init: function ($this) {

                this.constructor.parent.init.apply($this);
                this.fill();
            },

            'change .simple-param .jsElement input, .simple-param .jsElement select, .simple-param .jsElement textarea': function (e, $this) {

                var $param = $(this).closest('.simple-param'),
                    $row = $param.closest('.jbprice-variation-row');
                $this
                    .clear()
                    .disableRow($row)
                    .addOptions($row)
                    .getErrors();
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
                this.enableRow($row)
                    .clearMessages($row);

                return this;
            },

            fill: function () {

                var $this = this;

                this.$('.jbprice-variation-row').each(function (i, row) {
                    var $row = $(row);
                    $this
                        .addOptions($row)
                        .disableRow($row);
                });

                return this;
            },

            enableRow: function (row) {

                var $this = this;
                $('.simple-param', row).each(function (i, param) {
                    var $param = $(param);
                    $this.enable($param);
                });

                return this;
            },

            disableRow: function ($row) {

                var $this = this;
                $('.simple-param', $row).each(function (index, param) {

                    param = $(param);
                    if ($this.hasValue(param)) {

                        $this.enable(param);
                        $this.disable(param.siblings('.simple-param'));

                        return $this;
                    }
                });

                return this;
            },

            disable: function (param) {
                param
                    .addClass('disabled')
                    .removeClass('active')
                    .find('.jsMessage')
                    .addClass('lock');
                this.lockFields(param);

                return this;
            },

            enable: function ($param) {
                $param
                    .removeClass('disabled')
                    .addClass('active')
                    .find('.jsMessage')
                    .removeClass('lock');
                this.unlockFields($param);

                return this;
            },

            lockFields: function ($param) {

                $('input, select, textarea', $param).attr({
                    'disabled': 'true',
                    'readonly': 'true'
                });
                $('.jsMessage', $param)
                    .attr('title', this.options.message_choice_limiting)
                    .tooltip();

                return this;
            },

            unlockFields: function ($param) {

                $('input, select, textarea', $param).removeAttr('disabled readonly');
                $('.jsMessage', $param)
                    .tooltip()
                    .tooltip('destroy');

                return this;
            },

            hasValue: function (param) {

                var field = $('select, input, textarea', param),
                    value = '';

                if (field.attr('type') == 'radio') {
                    field = $('input[type="radio"]:checked', param);
                    value = field.val();
                } else {
                    value = field.val();
                }
                value = $.trim(value);

                return value.length > 0;
            },

            validate: function () {
                this.errors = {};
                this.errors = this.duplicates();

                return this.errors;
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
