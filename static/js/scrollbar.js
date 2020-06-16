
var _CARBON_LOADED = 0;

if('IntersectionObserver' in window) {
	var sidebar_ads_observer = new IntersectionObserver(function(entries) {
								for(var i=0; i<entries.length; i++) {
									switch(entries[i]['target'].id) {
										case 'sidebar-ad-1':
											if(entries[i]['isIntersecting']) {
												(adsbygoogle = window.adsbygoogle || []).push({});
												sidebar_ads_observer.unobserve(document.querySelector("#sidebar-ad-1"));
											}

											break;

										case 'sidebar-ad-2':
											if(entries[i]['isIntersecting']) {
												(adsbygoogle = window.adsbygoogle || []).push({});
												sidebar_ads_observer.unobserve(document.querySelector("#sidebar-ad-2"));
											}

											break;

										case 'sidebar-ad-3':
											if(entries[i]['isIntersecting']) {
												(adsbygoogle = window.adsbygoogle || []).push({});
												sidebar_ads_observer.unobserve(document.querySelector("#sidebar-ad-3"));
											}

											break;

										case 'sidebar-ad-4':
											if(entries[i]['isIntersecting']) {
												(adsbygoogle = window.adsbygoogle || []).push({});
												sidebar_ads_observer.unobserve(document.querySelector("#sidebar-ad-4"));
											}

											break;

										case 'sidebar-ad-5':
											if(entries[i]['isIntersecting']) {
												(adsbygoogle = window.adsbygoogle || []).push({});
												sidebar_ads_observer.unobserve(document.querySelector("#sidebar-ad-5"));
											}

											break;

										case 'sidebar-ads':
											if(entries[i]['isIntersecting']) {
												document.querySelector("#carbon-ad").style.display = 'none';
												document.querySelector("#carbon-ad").style.opacity = '0';
												console.log('Hide carbon ad');
											}
											else {
												if(_CARBON_LOADED == 0) {
													var carbonScript = document.createElement("script");
												    carbonScript.src = "//cdn.carbonads.com/carbon.js?serve=CE7DP2JY&placement=usefulanglecom";
												    carbonScript.id = "_carbonads_js";
												    carbonScript.async = 1;
												    document.querySelector("#carbon-ad").appendChild(carbonScript);

												    _CARBON_LOADED = 1;
												}

												document.querySelector("#carbon-ad").style.display = 'block';
												document.querySelector("#carbon-ad").style.opacity = '1';
												console.log('Show carbon ad');
											}

											break;
									}
								}
							}, { threshold: [0] });
	sidebar_ads_observer.observe(document.querySelector("#sidebar-ad-1"));
	sidebar_ads_observer.observe(document.querySelector("#sidebar-ad-2"));
	sidebar_ads_observer.observe(document.querySelector("#sidebar-ad-3"));
	sidebar_ads_observer.observe(document.querySelector("#sidebar-ad-4"));
	sidebar_ads_observer.observe(document.querySelector("#sidebar-ad-5"));
	if(window.matchMedia('screen and (min-width:1024px)').matches)
		sidebar_ads_observer.observe(document.querySelector("#sidebar-ads"));
}
else {
	(adsbygoogle = window.adsbygoogle || []).push({});
	(adsbygoogle = window.adsbygoogle || []).push({});
	(adsbygoogle = window.adsbygoogle || []).push({});
	(adsbygoogle = window.adsbygoogle || []).push({});
	(adsbygoogle = window.adsbygoogle || []).push({});

	ga('send', 'event', 'No IntersectionObserver', 'query');
}
