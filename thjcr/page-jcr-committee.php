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



                    <?php 
                        // get the committee_positions repeater field and loop through its subfields to print them all out.
                    
                        $positions = get_field('committee_positions');

                        if($positions){
                            echo "<div id='committee'>";

                            foreach($positions as $position){

                                echo "<div class='committee-position clearfix'>";

                                    echo "<h2>" . $position['role'] . ": ";

                                    echo "<span class='member-names'>";
                                    for($i = 0; $i < sizeof($position['members']); $i++){
                                        echo $position['members'][$i]['name'] . " (" . $position['members'][$i]['crsid'] . ")";
                                        if ($i < sizeof($position['members']) - 1){
                                            echo ", ";
                                        }
                                    }
                                    echo "</span></h2>";

                                    echo "<div class='pictures'>";
                                        for($i = 0; $i < sizeof($position['members']); $i++){

                                            if($position['members'][$i]['image']){
                                                $img = wp_get_attachment_image_src($position['members'][$i]['image'], 'thumbnail');
                                                // [0] => url
                                                // [1] => width
                                                // [2] => height
                                                // [3] => boolean: true if $url is a resized image, false if it is the original.

                                                echo "<img class='member-image' src='" . $img[0] . "'>";
                                            }
                                        }
                                    echo "</div>";

                                    echo "<div class='bio'>";
                                        echo $position['bio'];
                                    echo "</div>";

                                echo "</div>";


                            }

                            echo "</div>";
                        }
                    ?>
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