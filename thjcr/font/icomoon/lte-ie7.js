/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-facebook' : '&#xe000;',
			'icon-twitter' : '&#xe001;',
			'icon-feed' : '&#xe002;',
			'icon-feed-2' : '&#xe003;',
			'icon-spinner' : '&#xe004;',
			'icon-spinner-2' : '&#xe005;',
			'icon-food' : '&#xe006;',
			'icon-menu' : '&#xe007;',
			'icon-list' : '&#xe008;',
			'icon-list-2' : '&#xe009;',
			'icon-database' : '&#xe00a;',
			'icon-home' : '&#xe00b;',
			'icon-office' : '&#xe00c;',
			'icon-globe' : '&#xe00d;',
			'icon-signup' : '&#xe00e;',
			'icon-wrench' : '&#xe00f;',
			'icon-hammer' : '&#xe010;',
			'icon-address-book' : '&#xe011;',
			'icon-bookmark' : '&#xe012;',
			'icon-notebook' : '&#xe013;',
			'icon-book' : '&#xe014;',
			'icon-newspaper' : '&#xe015;',
			'icon-user' : '&#xe016;',
			'icon-screen' : '&#xe017;',
			'icon-facebook-2' : '&#xe018;',
			'icon-calendar' : '&#xe019;',
			'icon-stack' : '&#xe01a;',
			'icon-file' : '&#xe01b;',
			'icon-profile' : '&#xe01c;',
			'icon-paint-format' : '&#xe01d;',
			'icon-camera' : '&#xe01e;',
			'icon-settings' : '&#xe01f;',
			'icon-search' : '&#xe020;',
			'icon-wordpress' : '&#xe021;',
			'icon-wordpress-2' : '&#xe022;',
			'icon-envelope' : '&#xe023;',
			'icon-twitter-2' : '&#xe024;',
			'icon-location' : '&#xe025;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};