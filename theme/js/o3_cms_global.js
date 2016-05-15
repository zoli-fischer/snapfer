jQuery(document).ready(function(){
	var $ = jQuery;

	//smooth scrolling
	/*
	if ( $('body').hasClass('windows') && $('body').hasClass('webkit') ) {
		$.srSmoothscroll({
	        step: 165,
	        speed: 300
	    });
	};
	*/

	//animate on scroll
	if ( navigator.userAgent.toLowerCase().indexOf('msie') == -1 ) {
        if (!jQuery('body').hasClass('mobile')) {
			new WOW().init();            
        };
    };

    //init global app
	ko.applyBindings( window.snapfer = new snapferPageApp(), jQuery('html')[0] );

});

//show sign in form
function show_sign_in_form() {
	if ( typeof window.snapfer != 'undefined' )
		window.snapfer.sign_in_up.show_sign_in_form();
};

//show sign up form
function show_sign_up_form( type ) {
	if ( typeof window.snapfer != 'undefined' )
		window.snapfer.sign_in_up.show_sign_up_form( type );
};

//scroll to top
function scrollTop() {
	jQuery("html, body").scrollTop(0);
};

//share url
function share( url, type, title, summary ) {
	title = typeof title == 'undefined' ? '' : title;
	summary = typeof summary == 'undefined' ? '' : summary;
	switch ( type ) {
		case 'facebook':
			window.open( 'https://www.facebook.com/share.php?u='+escape(url.toString().replace(/[+]/g,'%2B')), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
			break;
		case 'twitter':
			window.open( 'https://twitter.com/share?url='+escape(url.toString().replace(/[+]/g,'%2B'))+'&text='+title+( summary.length > 0 ? " - "+summary : '')+( url.length > 0 ? " - "+url : ''), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=600');
			break;
		case 'google':
			window.open( 'https://plus.google.com/share?url='+escape(url.toString().replace(/[+]/g,'%2B')), '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=600');
			break;
		case 'linkedin':
			window.open( 'http://www.linkedin.com/shareArticle?mini=true&url='+url+'&title='+title+'&summary='+summary, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=600');
			break;
	};
}