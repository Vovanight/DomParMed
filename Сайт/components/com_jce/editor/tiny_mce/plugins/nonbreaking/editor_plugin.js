/* jce - 2.8.0 | 2019-11-20 | https://www.joomlacontenteditor.net | Copyright (C) 2006 - 2019 Ryan Demmer. All rights reserved | GNU/GPL Version 2 or later - http://www.gnu.org/licenses/gpl-2.0.html */
!function(){tinymce.create("tinymce.plugins.Nonbreaking",{init:function(ed,url){var t=this;t.editor=ed,ed.addCommand("mceNonBreaking",function(){ed.execCommand("mceInsertContent",!1,ed.plugins.visualchars&&ed.plugins.visualchars.state?'<span data-mce-bogus="1" class="mce-item-hidden mce-item-nbsp">&nbsp;</span>':"&nbsp;")}),ed.addButton("nonbreaking",{title:"nonbreaking.desc",cmd:"mceNonBreaking"}),ed.getParam("nonbreaking_force_tab")&&ed.onKeyDown.add(function(ed,e){9==e.keyCode&&(e.preventDefault(),ed.execCommand("mceNonBreaking"),ed.execCommand("mceNonBreaking"),ed.execCommand("mceNonBreaking"))}),ed.addShortcut("ctrl+shift+s","nonbreaking.desc","mceNonBreaking")},getInfo:function(){return{longname:"Nonbreaking space",author:"Moxiecode Systems AB",authorurl:"http://tinymce.moxiecode.com",infourl:"http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/nonbreaking",version:tinymce.majorVersion+"."+tinymce.minorVersion}}}),tinymce.PluginManager.add("nonbreaking",tinymce.plugins.Nonbreaking)}();