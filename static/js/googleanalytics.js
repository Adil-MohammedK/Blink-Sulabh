
/* google analytics */
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-87261718-1', 'auto');
ga('send', 'pageview');
/* google analytics */

document.addEventListener('DOMContentLoaded', function() {
    var disqus_observer = new IntersectionObserver(function(entries) {
								if(entries[0].isIntersecting) {
									/* disqus */
								    var disqus_config = function () {
									this.page.url = "https://usefulangle.com/post/98/javascript-text-to-speech";
									this.page.identifier = 98;
									};

									(function() {
									var d = document, s = d.createElement('script');
									s.src = '//useful-angle.disqus.com/embed.js';
									s.setAttribute('data-timestamp', +new Date());
									(d.head || d.body).appendChild(s);
									})();
									/* disqus */

									disqus_observer.disconnect();
								}
							}, { threshold: [0] });
	disqus_observer.observe(document.querySelector("#disqus_thread"));


	/* download links */
	$(".download-link").on('click', function() {
		var page_title = $("#post-header h1").text(),
			download_link = $(this).attr('href');

		ga('send', 'event', 'Download Link', 'click', page_title);
	});
	/* download links: https://usefulangle.com/post/98/javascript-text-to-speech */
});
