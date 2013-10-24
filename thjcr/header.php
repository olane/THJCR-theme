<?php $bannernum = 25; ?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <link rel="shortcut icon" href="<?php echo get_stylesheet_directory_uri(); ?>/favicon.ico" />
        <!-- Yet another IE fix -->
        <meta http-equiv="X-UA-Compatible" content="IE=edge" >
        <!-- /sigh -->

        <meta charset="<?php bloginfo( 'charset' ); ?>" />
        <title>
            <?php if (is_single() || is_page() || is_archive()) { 
                wp_title('',true); 
            } else { 
                bloginfo('name'); 
            } ?>
        </title>
        
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

        <link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>" type="text/css" media="screen" />
        <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
        <link rel='stylesheet' id='lato-css'  href='http://fonts.googleapis.com/css?family=Lato' type='text/css' media='all' />
        <link href="http://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet" type="text/css" media='all'>
        
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
        <script type="text/javascript" src="<?php bloginfo('template_directory');?>/script/main.js"></script>

        <?php if ( is_singular() && get_option( 'thread_comments' ) ) wp_enqueue_script( 'comment-reply' ); ?>
        <?php wp_head(); ?>

         <!--Fix IE being the worst -->
            <!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->

            <!-- IE fix for sticky footer -->
            <!--[if !IE 7]>
                <style type="text/css">
                    #wrap {display:table;height:100%}
                </style>
            <![endif]-->

            <!-- make the icon font work in IE7/6 -->
            <!--[if lte IE 7]>
                <script src="<?php bloginfo('template_directory');?>/font/icomoon/lte-ie7.js"></script>
            <![endif]-->

        <!--IE might actually work now-->

        <style type="text/css">
            #header-wrapper {
                background-image: url("<?php bloginfo('template_directory');?>/img/banner/<?php echo rand(1, $bannernum);?>.jpg");
                background-position: center;
            }
        </style>

    </head>

    <body>

        <div id="wrap">

            <header class="stripy">
                <div id="header-wrapper" class="centered-wrapper clearfix"> 
                    <a href="<?php echo home_url(); ?>" alt="Home">
                        <img src="<?php bloginfo('template_directory');?>/img/JCR-logo-transparent-100.png" id="logo" width="296" height="100"/>
                    </a>

                    <?php wp_nav_menu(array( 
                        'theme_location' => 'top-nav-menu',
                        'container_class' => 'top-nav-menu',
                        'items_wrap' => '<ul id="%1$s" class="%2$s">%3$s<div class="clearfix-div"></div></ul>',
                        'depth' => 2
                        )); ?>           
                </div>
            </header>

            
            
            <div id="main" class="centered-wrapper">
