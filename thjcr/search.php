<?php get_header(); ?>

<div id="content">
    <h1>Search Results for "<em><?php the_search_query() ?></em>"</h1>
    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>

            <div class="search-result">

                <h2 class="article-title" id="post-<?php the_ID(); ?>">
                    <a href="<?php the_permalink() ?>" rel="bookmark" title="Permanent Link to <?php the_title(); ?>">
                        <?php the_title(); ?>
                    </a>
                </h2>
                <small class="publication-info">
                    <time pubdate="pubdate"><?php the_time(get_option('date_format')) ?></time> by <?php the_author() ?>
                </small>
                <div class="content clearfix">
                    <?php the_excerpt(); ?>
                </div>
                <!--
                    <?php trackback_rdf(); ?>
                -->
            </div>

        <?php endwhile; ?>

        <div class="navigation">
            <div class="alignleft"><?php previous_posts_link('&laquo; Previous results') ?></div>
            <div class="alignright"><?php next_posts_link('More results &raquo;','') ?></div>
        </div>

    <?php else : ?>
        <h2 class="center">Not Found</h2>
        <p class="center">
            <?php _e("Sorry, but you are looking for something that isn't here."); ?>
        </p>
    <?php endif; ?>

</div><!--end #content-->

<div class="sidebar">

    <?php get_sidebar('right-page'); ?>

</div><!--end .sidebar-->


<?php get_footer(); ?>