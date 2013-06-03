<?php
	add_theme_support( 'automatic-feed-links' );
	register_nav_menu( 'top-nav-menu', 'Top Navigation' );
	register_nav_menu( 'quicklinks', 'Sidebar' );

	register_sidebar(array(
		'name' => 'right',
        'before_widget' => '',
        'after_widget' => '',
		'description'   => 'Sidebar on the right hand side of the front page. Note that this sidebar should automatically include a search widget at the top.',
		'before_title'  => '<h3 class="widgettitle">',
		'after_title'   => '</h3>',
	    )
	);

	register_sidebar(array(
		'name' => 'right-page',
        'before_widget' => '',
        'after_widget' => '',
		'description'   => 'Sidebar on the right hand side of all pages except front page, blog pages, and search. Automatically includes a search widget at the top.',
		'before_title'  => '<h3 class="widgettitle">',
		'after_title'   => '</h3>',
	    )
	);


	// show admin bar only for admins and editors
	if (!current_user_can('edit_posts')) {
		add_filter('show_admin_bar', '__return_false');
	}
	
?>