$(document).ready(function() {

	var helpTab = $('#_ContextHelpTemplate'),
		//helpContent = $('#_ContextHelpTemplate ul');

		// Uikit
		helpContent = $('#ContextHelpTemplate ul');
		helpTab.parent().addClass('helpLink');

	/**
	 * COLOR
	 * ==============================================
	 */
	var tabColor = helpContent.data('color');
	if(tabColor) {
		helpTab.css({color: '#'+tabColor});
	}

	/**
	 * MAGNIFIC POPUP
	 * ==============================================
	 */
	var helpModal = $('#_ProcessPageEditHelpModal');
	if(helpModal.length) {

	 	$('#PageEditTabs').find('a#_ContextHelpTemplate').parent().addClass('offscreen');
		
		var popWidth = helpModal.data('mfp-width');
		
		helpModal.parent().addClass('helpLink');

		helpModal.magnificPopup({
			type: 'inline',
			focus: '#name',
			closeBtnInside: true,

			callbacks: {
				beforeOpen: function() {
					if($(window).width() < 700) {
						this.st.focus = false;
					} else {
						this.st.focus = '#name';
					}
				},
				open: function() {
					if(popWidth) $('.mfp-inline-holder .mfp-content').css({'max-width': popWidth+'px'});
				},
			}
		});

		helpModal.click(function(e) {
			e.stopPropagation();
		});

	}

	/**
	 * OFF CANVAS
	 * ==============================================
	 */
	var helpOc = $('#_ProcessPageEditHelpOffcanvas');
	if(helpOc.length) {
		 $('#PageEditTabs').find('a#_ContextHelpTemplate').parent().addClass('offscreen');
		 helpOc.parent().addClass('helpLink');
		 helpOc.click(function(e) {
			e.stopPropagation();
		});
	}

});