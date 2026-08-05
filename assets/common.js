// SP tel
$(function() {
	$('.call_link').each( function(){
		if ( !navigator.userAgent.match(/Safari/) || !navigator.userAgent.match(/Mobile/) ) {
			return;
		}
		var tel = '0476321830';
		var name = '平成ウィングパーキング';
		$(this).wrapInner('<a href="tel:' + tel + '" title="' + name + 'へ電話をかけます。"></a>')
		.click( function(){
			return confirm( name + '（' + tel + '）へ電話をかけます。\nよろしいですか？' );
		});
	});
});

// smooth scroll
$(function(){
   $("a[href^='#']:not(.tab a)").click(function() {
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
   });
});

// rollover
$(function(){
	$('a img').each(function(){
		var img = $(this);
		var src_off = img.attr('src');
		var src_on = src_off.replace(/^(.+)_off(\.[^\.]+)$/, '$1_on$2');
		//$('<img>').attr('src', src_on);
		img.hover(function(){
			img.attr('src', src_on);
		},function(){
			img.attr('src', src_off);
		});
	});
});

//tab
$(function (){
	$(".tabs a").on('click', function(e) {
		e.preventDefault();
		var target = $(this).attr('href');
		if (! $(target).length) return false;
		$('.tab', $(this).closest('.tabs')).removeClass('active');
		$(this).closest('.tab').addClass('active');
		$('.panel', $(target).closest('.panels')).removeClass('active');
		$(target).addClass('active');
		$(this).closest('.tab img').attr('src').replace(/^(.+)01(\.[^\.]+)$/, '$102$2');
	});
});

// slidebox
$(function(){
	$('.trg').click(function() {
		$(this).next().slideToggle();
	}).next().hide();
});

/*eof*/