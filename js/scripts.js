$(document).ready(function(){
	$("#openMenu").click(function(){
		$("#main") .fadeIn(200);
		$("#openMenu").animate({left:"-100%"});
		$("#closeMenu").animate({left:"90%"});
		$(".menu").animate({left:"-1%"},10);
	});

	$("#closeMenu").click(function(){
		$("#main") .fadeOut(200);
		$("#openMenu").animate({left:"90%"});
		$("#closeMenu").animate({left:"100%"});
		$(".menu").animate({left:"-50%"},10);
	});
});


window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};



			function anim(targetedDiv) {

				var targetedLetter = $("#"+targetedDiv+" .rotate").text();

				var asciiValue = targetedLetter.charCodeAt(0); //return ascii value

				var pointer = 65; //Ascii of 'A' (starting Point)

				changeChar();

				function changeChar(){

					if(pointer <= asciiValue){
						$("#"+targetedDiv+" .rotate").text(String.fromCharCode(pointer));

						//fromCharCode function conver pointer value in character such ad 65=A

						pointer++;
						setTimeout(changeChar ,20); //call the function after every 20MS

					}

					else{
						$(this).stop;

					}
				}

			}
