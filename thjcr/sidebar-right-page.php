<?php /*Sidebar on the right hand side of all pages except front page, blog pages, and search.*/ ?>

<form id="sidebar-search" role="search" method="get" action="<?php get_bloginfo('wpurl');?>">
	<input id="search-text-input" type="text" name="s" value="Search the JCR Website" 
			onfocus="if(this.value == 'Search the JCR Website') this.value='';" 
			onblur="if(this.value == '') this.value='Search the JCR Website';" />
	<input id="search-go" name="go" value="" type="image" 
		src="<?php bloginfo('template_directory');?>/img/go.png"  />
</form>

<?php dynamic_sidebar('right-page') ?>