jQuery(document).ready(function($) {

	$('pre code').each(function(i,block){
      hljs.highlightBlock(block);
  	});

	// aminated wordplay, yo

	setTimeout(function() { 

		// strings: ['', "font-family<span>:</span> <strong>'SomeWebFont'</strong><span>;</span><br />src<span>:</span> <strong>url<span>(</span><em>'fonts/2FA7B0_3_0.woff'</em><span>)</span> format<span>(</span><em>'woff'</em><span>)</span></strong><span>;</span><br />font-weight<span>:</span> <strong>400</strong><span>;</span><br />font-style<span>:</span> <strong>normal</strong><span>;</span>"],

		var typed = new Typed('#displayProp', {
			strings: ['', "font-family<span>:</span> <strong>'SomeWebFont'</strong><span>;</span>"],
			typeSpeed: 50,
			smartBackspace: true,
			onComplete: function() {
				$('article').removeClass('hide');

				//import clippy from 'clippyjs'
	
				clippy.load('Clippy', (agent) => {
					// do anything with the loaded agent 
					agent = agent;
					agent.show();
					agent.play('GestureRight');
					agent.speak("It looks like you're trying to load a webfont from a third party service. Would you like a hand?");
				});
				//
			}
		});
	}, 300);

	var waypoints = $('code:not(pre code)').waypoint(function(dir) {
		if(dir == 'down') {

			var el = $('#'+$(this)[0].element.id);
			var eld = '#'+el.find('div').attr('id');
			var finalString = $(eld).html();

			// Fix headers on scroll (needs work)
			// if(!el.hasClass('css')) {
			// 	el.css({
			// 		'position':'fixed',
			// 		'top': 100,
			// 		'left': 0
			// 	});
			// }

			console.log('data-typed='+$(eld).attr('data-typed'));
			if($(eld).attr('data-typed') == 'false' && $(eld).attr('data-typing') == 'false') {// !$(eld).data('typed')
				$(eld).html(''); //reset content
				$(el).addClass('show');

				var typeThis = new Typed(eld, {
					strings: ['', finalString],
					typeSpeed: 50,
					onStart: function() {
						$(eld).attr('data-typing',true);
						console.log(eld+' has started being typed');
					},
					onComplete: function() {
						console.log(eld+' has been typeded');
						$(eld).attr('data-typing',false);
						$(eld).attr('data-typed',true);
						console.log('data-typed='+$(eld).attr('data-typed'));
						//$(eld).data('typed',true);
					}
				});
			} else {
				console.log('already typed '+eld);
			}
		}
	}, {
		offset: 150
	});
	var headerWP = $('#main-header').waypoint(function(dir) {
		if(dir == 'up') {
			$('code:not(pre code)').each(function() {
				$(this).addClass('hookd');
				$(this).removeAttr('style');
			});
		}
	}, {
		offset: 0
	});


	
});