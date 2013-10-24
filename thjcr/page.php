<?php get_header(); ?>

<div id="content">

    <?php if (have_posts()) : ?>
        <?php while (have_posts()) : the_post(); ?>

            <article>

                <h1 class="article-title" id="post-<?php the_ID(); ?>">
                    <?php the_title(); ?>
                </h1>

                <div class="content clearfix">
                    <?php the_content(); ?>
                </div>

                <p class="postmetadata">
                <?php edit_post_link('Edit','',''); ?>  
                </p>
                
            </article>

        <?php endwhile; ?>


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