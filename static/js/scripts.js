
  <script type="text/javascript">
    <!--//--><![CDATA[//><!--

    		var _paq = _paq || [];
    		_paq.push(["trackPageView"]);
    		_paq.push(["enableLinkTracking"]);
    		(function() {
    			var u="https://analytics.wrc.nic.in/cmfanalytics/";
    			_paq.push(["setTrackerUrl", u+"analytics"]);
    			var d=document, g=d.createElement("script"), s=d.getElementsByTagName("script")[0];
    			g.type="text/javascript"; g.async=true; g.defer=true; g.src=u+"js/piwik.js"; s.parentNode.insertBefore(g,s);
    		}
    	)();
    //--><!]]>
  </script>
  <script type="text/javascript">
    <!--//--><![CDATA[//><!--
    var base_url ="https://rural.nic.in"; var themePath = "sites/all/themes/rural"; var modulePath = "sites/all/modules/customs/cmf_content";
    //--><!]]>
  </script>
  <script
    type="text/javascript"
    src="https://rural.nic.in/sites/all/modules/customs/cmf_content/assets/js/font-size.js?qadrjm"
  ></script>
  <script
    type="text/javascript"
    src="https://rural.nic.in/sites/all/modules/customs/cmf_content/assets/js/framework.js?qadrjm"
  ></script>
  <script
    type="text/javascript"
    src="https://rural.nic.in/sites/all/modules/customs/cmf_content/assets/js/swithcer.js?qadrjm"
  ></script>
  <script
    type="text/javascript"
    src="https://rural.nic.in/sites/all/modules/customs/cmf_custom_utility/cmf_custom_utility.js?qadrjm"
  ></script>
  <script
    type="text/javascript"
    src="https://rural.nic.in/sites/all/modules/customs/goisearch/js/custom_result_jsversion.js?qadrjm"
  ></script>
  <script
    type="text/javascript"
    src="https://rural.nic.in/sites/all/modules/customs/goisearch/js/auto_jsversion.js?qadrjm"
  ></script>
  <script type="text/javascript">
    <!--//--><![CDATA[//><!--

    		jQuery(document).ready(function(){
    			var searchStr = "";
    			if(searchStr != ""){
    				fetchResult();
    			}
    		});
    		var currentKey = 0;
    		settings = new Array();
    		settings["searchServer"] = "https://goisearch.gov.in";
    		settings["textBoxId"] = "q";
    		settings["callBackFunction"] = "callBack";
    		loadSuggestionControls(settings);

    		function callBack() {
    			settings["q"] = document.getElementById("search_key").value;
    			settings["count"] = "10";
    			settings["site"] = "rural.nic.in";
    			loadResultControls(settings);
    		}

    		settings = new Array();
    		settings["searchServer"] = "https://goisearch.gov.in";
    		settings["textBoxId"] = "search_key";
    		settings["site"] = "rural.nic.in";
    		settings["q"] = "";
    		loadResultControls(settings);

    		function modifySettings(key1) {
    			if (document.getElementById("search_key").value != null) {
    				settings[key1] = document.getElementById("search_key").value;
    				settings["count"] = "10";
    				settings["site"] = "rural.nic.in";
    				loadResultControls(settings);
    			}
    			hideAutoComplete();
    		}

    		function fetchResult() {
    			var str = window.document.URL.toString();
    			str=escape(str);
    			var q = str.indexOf("?search_key=") + 12;
    			settings["q"] = str.slice(q);
    			settings["count"] = "10";
    			settings["site"] = "rural.nic.in";
    			loadResultControls(settings);
    		}

    		function escape(string) {
    				return ("" + string).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/"/g, "&#x27;").replace(/\//g, "&#x2F;").replace(/\+/g," ");
    		};

    //--><!]]>
  </script>
  <script
    type="text/javascript"
    src="https://rural.nic.in/sites/all/modules/contributed/lightbox2/js/lightbox.js?1589647853"
  ></script>
  <script
    type="text/javascript"
    src="https://rural.nic.in/sites/all/modules/contributed/tb_megamenu/js/tb-megamenu-frontend.js?qadrjm"
  ></script>
  <script
    type="text/javascript"
    src="https://rural.nic.in/sites/all/modules/contributed/tb_megamenu/js/tb-megamenu-touch.js?qadrjm"
  ></script>
  <script
    type="text/javascript"
    src="https://rural.nic.in/sites/all/libraries/flexslider/jquery.flexslider-min.js?qadrjm"
  ></script>
  <script
    type="text/javascript"
    src="https://rural.nic.in/sites/all/themes/rural/js/site.js?qadrjm"
  ></script>
  <script
    type="text/javascript"
    src="https://rural.nic.in/sites/all/themes/rural/js/ma5gallery.js?qadrjm"
  ></script>
  <script
    type="text/javascript"
    src="https://rural.nic.in/sites/all/themes/rural/js/megamenu.js?qadrjm"
  ></script>
  <script
    type="text/javascript"
    src="https://rural.nic.in/sites/all/themes/rural/js/easyResponsiveTabs.js?qadrjm"
  ></script>
  <script
    type="text/javascript"
    src="https://rural.nic.in/sites/all/themes/rural/js/jquery.simplyscroll.js?qadrjm"
  ></script>
  <script
    type="text/javascript"
    src="https://rural.nic.in/sites/all/themes/rural/js/mycustom.js?qadrjm"
  ></script>
  <script type="text/javascript">
    <!--//--><![CDATA[//><!--
    jQuery.extend(Drupal.settings, {"basePath":"\/","pathPrefix":"","ajaxPageState":{"theme":"rural","theme_token":"q8rkJwhxmbi_Zp4dlbIQgx_5naW4LakB9bI0WM6tbYg","js":{"sites\/all\/modules\/contributed\/flexslider\/assets\/js\/flexslider.load.js":1,"sites\/all\/modules\/contributed\/jquery_update\/replace\/jquery\/1.8\/jquery.min.js":1,"misc\/jquery.once.js":1,"misc\/drupal.js":1,"sites\/all\/modules\/contributed\/admin_menu\/admin_devel\/admin_devel.js":1,"0":1,"1":1,"sites\/all\/modules\/customs\/cmf_content\/assets\/js\/font-size.js":1,"sites\/all\/modules\/customs\/cmf_content\/assets\/js\/framework.js":1,"sites\/all\/modules\/customs\/cmf_content\/assets\/js\/swithcer.js":1,"sites\/all\/modules\/customs\/cmf_custom_utility\/cmf_custom_utility.js":1,"sites\/all\/modules\/customs\/goisearch\/js\/custom_result_jsversion.js":1,"sites\/all\/modules\/customs\/goisearch\/js\/auto_jsversion.js":1,"2":1,"sites\/all\/modules\/contributed\/lightbox2\/js\/lightbox.js":1,"sites\/all\/modules\/contributed\/tb_megamenu\/js\/tb-megamenu-frontend.js":1,"sites\/all\/modules\/contributed\/tb_megamenu\/js\/tb-megamenu-touch.js":1,"sites\/all\/libraries\/flexslider\/jquery.flexslider-min.js":1,"sites\/all\/themes\/rural\/js\/site.js":1,"sites\/all\/themes\/rural\/js\/ma5gallery.js":1,"sites\/all\/themes\/rural\/js\/megamenu.js":1,"sites\/all\/themes\/rural\/js\/easyResponsiveTabs.js":1,"sites\/all\/themes\/rural\/js\/jquery.simplyscroll.js":1,"sites\/all\/themes\/rural\/js\/mycustom.js":1},"css":{"modules\/system\/system.base.css":1,"modules\/system\/system.menus.css":1,"modules\/system\/system.messages.css":1,"modules\/system\/system.theme.css":1,"sites\/all\/modules\/contributed\/calendar\/css\/calendar_multiday.css":1,"modules\/comment\/comment.css":1,"sites\/all\/modules\/contributed\/date\/date_api\/date.css":1,"sites\/all\/modules\/contributed\/date\/date_popup\/themes\/datepicker.1.7.css":1,"modules\/field\/theme\/field.css":1,"modules\/node\/node.css":1,"modules\/search\/search.css":1,"modules\/user\/user.css":1,"sites\/all\/modules\/contributed\/views\/css\/views.css":1,"sites\/all\/modules\/customs\/cmf_content\/assets\/css\/base.css":1,"sites\/all\/modules\/customs\/cmf_content\/assets\/css\/font.css":1,"sites\/all\/modules\/customs\/cmf_content\/assets\/css\/flexslider.css":1,"sites\/all\/modules\/customs\/cmf_content\/assets\/css\/base-responsive.css":1,"sites\/all\/modules\/customs\/cmf_content\/assets\/css\/font-awesome.min.css":1,"sites\/all\/modules\/contributed\/ctools\/css\/ctools.css":1,"sites\/all\/modules\/customs\/goisearch\/css\/custom_result.css":1,"https:\/\/goisas.nic.in\/content\/scripts\/jquery.1.8.7\/themes\/base\/jquery.ui.all.css":1,"sites\/all\/modules\/customs\/goisearch\/css\/add-css.css":1,"sites\/all\/modules\/contributed\/lightbox2\/css\/lightbox.css":1,"sites\/all\/modules\/contributed\/panels\/css\/panels.css":1,"sites\/all\/modules\/contributed\/tb_megamenu\/css\/compatibility.css":1,"sites\/all\/modules\/contributed\/flexslider\/assets\/css\/flexslider_img.css":1,"sites\/all\/libraries\/flexslider\/flexslider.css":1,"sites\/all\/libraries\/fontawesome\/css\/font-awesome.css":1,"sites\/all\/themes\/rural\/css\/bootstrap.css":1,"sites\/all\/themes\/rural\/css\/tb-base.css":1,"sites\/all\/themes\/rural\/css\/tb-mega.css":1,"sites\/all\/themes\/rural\/css\/default.css":1,"sites\/all\/themes\/rural\/css\/flexslider.css":1,"sites\/all\/themes\/rural\/css\/jquery.simplyscroll.css":1,"sites\/all\/themes\/rural\/css\/site.css":1,"sites\/all\/themes\/rural\/css\/site-responsive.css":1,"sites\/all\/themes\/rural\/css\/megamenu.css":1,"sites\/all\/themes\/rural\/css\/ma5gallery.css":1,"sites\/all\/themes\/rural\/css\/font-awesome.min.css":1,"sites\/all\/themes\/rural\/css\/print.css":1,"sites\/all\/themes\/rural\/css\/ie.css":1,"sites\/all\/themes\/rural\/css\/ie6.css":1}},"encrypt_submissions":{"baseUrl":"https:\/\/rural.nic.in"},"swflang":"en","lightbox2":{"rtl":"0","file_path":"\/(\\w\\w\/)public:\/","default_image":"\/sites\/all\/modules\/contributed\/lightbox2\/images\/brokenimage.jpg","border_size":10,"font_color":"000","box_color":"fff","top_position":"","overlay_opacity":"0.8","overlay_color":"000","disable_close_click":1,"resize_sequence":0,"resize_speed":400,"fade_in_speed":400,"slide_down_speed":600,"use_alt_layout":0,"disable_resize":0,"disable_zoom":0,"force_show_nav":0,"show_caption":1,"loop_items":0,"node_link_text":"View Image Details","node_link_target":0,"image_count":"Image !current of !total","video_count":"Video !current of !total","page_count":"Page !current of !total","lite_press_x_close":"press \u003Ca href=\u0022#\u0022 onclick=\u0022hideLightbox(); return FALSE;\u0022\u003E\u003Ckbd\u003Ex\u003C\/kbd\u003E\u003C\/a\u003E to close","download_link_text":"","enable_login":false,"enable_contact":false,"keys_close":"c x 27","keys_previous":"p 37","keys_next":"n 39","keys_zoom":"z","keys_play_pause":"32","display_image_size":"original","image_node_sizes":"()","trigger_lightbox_classes":"","trigger_lightbox_group_classes":"","trigger_slideshow_classes":"","trigger_lightframe_classes":"","trigger_lightframe_group_classes":"","custom_class_handler":0,"custom_trigger_classes":"","disable_for_gallery_lists":true,"disable_for_acidfree_gallery_lists":true,"enable_acidfree_videos":true,"slideshow_interval":5000,"slideshow_automatic_start":true,"slideshow_automatic_exit":true,"show_play_pause":true,"pause_on_next_click":false,"pause_on_previous_click":true,"loop_slides":false,"iframe_width":600,"iframe_height":400,"iframe_border":1,"enable_video":0},"flexslider":{"optionsets":{"default":{"namespace":"flex-","selector":".slides \u003E li","easing":"swing","direction":"horizontal","reverse":false,"smoothHeight":true,"startAt":0,"animationSpeed":600,"initDelay":0,"useCSS":true,"touch":true,"video":false,"keyboard":true,"multipleKeyboard":true,"mousewheel":0,"controlsContainer":".flex-control-nav-container","sync":"","asNavFor":"","itemWidth":0,"itemMargin":0,"minItems":0,"maxItems":0,"move":0,"animation":"slide","slideshow":true,"slideshowSpeed":"7000","directionNav":true,"controlNav":true,"prevText":"","nextText":"","pausePlay":true,"pauseText":"Pause","playText":"Play","randomize":false,"thumbCaptions":false,"thumbCaptionsBoth":false,"animationLoop":true,"pauseOnAction":true,"pauseOnHover":false,"manualControls":""}},"instances":{"contSlider1":"default"}},"urlIsAjaxTrusted":{"\/search\/node":true}});
    //--><!]]>
  </script>