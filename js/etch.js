
$(document).ready(function(){

	var gridSize = prompt("How many rows should the grid have?", "Enter number of rows here.");
	// var side = 960/gridSize;
	// var sidepx = side.concat("px");

	var myColor = 'rgb('
        + (Math.floor(Math.random() * 256)) + ','
        + (Math.floor(Math.random() * 256)) + ','
        + (Math.floor(Math.random() * 256)) + ')';

	for(var i = 0; i<gridSize;i++){
		$('.grid').append('<tr class="row"></tr>');
	};

	for(var j = 0; j < gridSize;j++){
		$('.row').append('<td class = "cell"><div class="block"></div></td>');
	};

		$(".block").hover(
			function(){
	    		$(this).animate({backgroundColor: myColor}, 100);
			},

			function(){
	    		$(this).animate({backgroundColor: 'BLACK'}, 900);
			}); 

		// $('.block').css({
		// 		height: sidepx; 
		// 		width: sidepx;
		// 	});

		$(".wrapper").click(function(){
		myColor = 'rgb('
        + (Math.floor(Math.random() * 256)) + ','
        + (Math.floor(Math.random() * 256)) + ','
        + (Math.floor(Math.random() * 256)) + ')';
		}); 

		// $("#reset").click(function(){

		// 	gridSize = prompt("How many rows should the grid have?", "Enter number of rows here.");
		// 	$('.block').css({
		// 	height: 960/gridSize;
		// 	width: 960/gridSize;
		// 	});

		// });
});
