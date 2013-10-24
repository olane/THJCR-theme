			</div><!--end #main-wrapper-->
			
		
		</div><!--end #wrap-->

		<footer class="stripy">
			<div class="centered-wrapper">
				<div id="copyright">
					<div class="alignleft"><p>&copy; 2013 Trinity Hall JCR</p></div>
					<div class="aligncenter">
						<p>Website design <a href="http://oli-lane.co.uk">Oli Lane</a></p>
						<p><a href="<?php echo home_url(); ?>/credits">Site credits</a></p>
					</div>
					<div class="alignright"><p><?php wp_loginout($_SERVER['REQUEST_URI']); ?></p></div>
				</div>
			</div>
		</footer>
	<?php wp_footer(); ?>
	</body>
</html>