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
					agent.show();
					agent.play('GestureRight');
					agent.speak("It looks like you're trying to load a webfont from a third party service. Would you like a hand?");
				});
				//
			}
		});
	}, 300);
	
});