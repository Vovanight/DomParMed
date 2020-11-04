/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */

jQuery(function(d){d("div.zoo-feed").each(function(){var i=d(this).find("div.input"),n=d(this).find("input:radio");n.first().is(":checked")&&i.hide(),n.bind("change",function(){i.slideToggle()})})});