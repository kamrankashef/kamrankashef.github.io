fx.auto_init=0;
css.open("/c/style.css",1);

$(document).on("css_ready",function(a) {
	if(a.originalEvent.id == "style") { fx.init(); fx.auto_init=1; Browser.warn();}
});
$(document).on("fx_ready",function(e,a) {
	if(a>0) return;
	$(window).scroll(function() {
		fireTimer("header",function() {
			var t=$(window).scrollTop();
			if(t==0)
			{
				$("header .logo").trigger("se1");
			}
			else if (t<300 && $("header.scroll").length)
			{
				$("header .logo").trigger("se1");
				$("header").removeClass("scroll");
			}
			else if(t>=300 && !$("header.scroll").length)
			{
				$("header .logo").trigger("se2");
				$("header").addClass("scroll");
			}

			//activating line animations
			$("canvas.clines").each(function() {
				if(!$(this).hasClass("active") && $(this).offset().top<t+(css.vars.h()/2))
				{
					$(this).addClass("active");
					CL.init($(this),$.parseJSON($(this).data("lines").replace(/'/g,'"'))); //"
				}
			});

			//hiding subnav
			$("#subnav ul").removeClass("on on2");
			$("#subnav").removeClass("vertical")

		},20);
	});
	$(window).scroll();

	$("#btn-menu").click(function() {
		$("header .nav").css({"position":"","top":""});
		$(this).toggleClass("on");
		$("body").toggleClass("nav-on");
		css.set("style","alignment");
	});
	$(window).resize(function() {
		fireTimer("resize",function() {
			if($(".nav-on").length) $("#btn-menu").click();
		},20);
	});
	$("header .nav a").mouseenter(function() {
		var p=$(this).data("sub")
		$("#subnav ul").removeClass("on on2");
		$("#subnav").removeClass("vertical")
		if(p)
		{
			$("#subnav ."+p).addClass("on")
			if(p == "sub-solutions")
			{
				$("#subnav").addClass("vertical")
				$("#subnav ul.sub-solutions").addClass("on2")
			}
		}
	});
	$("header").mouseleave(function() {
		$("#subnav ul").removeClass("on");
	});
	$("#subnav ul").mouseenter(function() {
		$(this).addClass("on2");
	});
	$("body").click(function() {
		$("#subnav ul.on2").removeClass("on2");
		$("#subnav").removeClass("vertical")
	});
	$(".btn-submit",".cform").click(function() {
		var f=$(this).closest(".cform");
		$(".fx-input",f).blur();
		setTimeout(function() {
			if(f.find(".mt-bad:not(.fx-removing)").length)
			{
				alert('Please fill-in required fields.');
				return;
			}
			let $recaptcha = $('#g-recaptcha-response');
			if ($recaptcha) {
				let $recaptchaVal = $recaptcha.val();
				let $requestMsg = $('.msg').first();
				if (!$recaptchaVal) {
					e.preventDefault();
					$requestMsg.text("Please check the recaptcha");
					return;
				}
			}
			$.ajax({
				type:"post",
				data:"ACTION=SENDEMAIL&"+f.serialize(),
				success:function(r) {
					f.find(".msg").html(r);
					setTimeout(function() {
						f.find(".msg").html("");
					},20000);
				}
			});
			f.find(".fx-input").val("").removeClass("hasData").blur();
			f.find(".fx-msg").remove();
		},200);
	});
	$("body").on("click","a[data-href]",function() {
		window.open($(this).data("href"));
	});
	$("a","#subnav").click(function(e) {
		if($(".btn-close:visible",".g1,.g2").length)
			$(".btn-decline").click();

		var i=$(this);
		$("section").each(function() {
				if($(this).data("id")==i.data("id")) $("body,html").scrollTop($(this).offset().top-$("header").height());
		});
	});
	$(".btn-close").click(function() {
		$("#legal,#shade").hide();
		$("body").css("overflow","");
	});
	$("#shade").click(function() {
		if($("#legal:visible").length) $(".btn-close","#legal").click();
	});
	if(location.hash)
	{
		var h=location.hash.substring(1);
		setTimeout(function() {
			$("section").each(function() {
				if($(this).data("id")==h)
				{
					$("body,html").scrollTop($(this).offset().top-$("header").height());
				}
			});
		},0);
	}
});
function show_login()
{
	$("#login,#shade").show();
	$("#login .content").scrollTop(0);
	$("body").css("overflow","hidden");
	css.set("style","alignment");
}
function show_legal()
{
	$("#legal,#shade").show();
	$("#legal .content").scrollTop(0);
	$("body").css("overflow","hidden");
}
