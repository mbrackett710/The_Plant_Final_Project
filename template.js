$(document).ready(function() {

  var image = $(".image");
  var d = $(document);
  $(document).scroll(function() {
  	console.log(top);
    console.log($(document).scrollTop());
    var top = d.scrollTop() / 2;
    image.css('transform', 'translate(0,' + top + 'px)');


	});

});	


 


	//$(document).scroll(function() {
		//var top = ($(document).scrollTop()) / 2;
		//$(".image").css("margin-top", top + "px");
	

