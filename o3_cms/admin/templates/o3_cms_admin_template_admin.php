<!DOCTYPE HTML>
<html lang="en">
<head>

	<?php 

		//load html head
		$this->view( 'o3_cms_view_html_head' );

	?>

</head>
<body class="<?php echo o3_ua_body_classes(); ?>">	

	<div id="o3-cms-wrapper">
		<div class="o3-cms-table" id="o3-cms-main">
			<div class="o3-cms-row">
				<div class="o3-cms-cell o3-cms-bg-light-gray" id="o3-cms-langbar">
					
					<ul>
						<li>
							<a href="<?php echo $this->o3_cms->page_url(); ?>"><i class="fa fa-globe"></i> <span>{o3_lang:o3-cms-frontpage}</span></a>
						</li>
						<li class="o3-cms-dropdown">
							<a href="#o3-cms-dropdown-languages" data-o3-cms-toggle="open"><i class="fa fa-language"></i> <span>{o3_lang:o3-cms-language}: {o3_lang:o3_lang_display_name}</span></a>
							<ul class="o3-cms-dropdown-list o3-cms-bg-light-gray" id="o3-cms-dropdown-languages">
								<?php
								//print language list								
								foreach ( $this->languages() as $key => $value ) {
									?>									
									<li>
										<a href="<?php echo o3_html($value['url']); ?>"><?php echo o3_html($value['name']); ?></a>
									</li>
									<?php
								}
								?>
							</ul>
						</li>
					</ul>

				</div>
			</div>
			<div class="o3-cms-row">
				<div class="o3-cms-cell o3-cms-bg-light-white" id="o3-cms-login">

						<form>

							<div id="o3-cms-login-error-msg"></div>

							<div class="clearfix-xs"></div>

							<label class="o3-cms-field">
								{o3_lang:o3-cms-sign-username}:
								<input type="text" name="username" value="" />
							</label>

							<label class="o3-cms-field">
								{o3_lang:o3-cms-sign-password}:
								<input type="password" name="password" value="" />
							</label>

							<div class="clearfix-sm"></div>

							<button type="submit" class="o3-cms-btn float-right">{o3_lang:o3-cms-sign-in}</button>
						
						</form>

				</div>
			</div>
		</div>
	</div>

</body>
</html>