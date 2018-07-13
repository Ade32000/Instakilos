console.log('coucou');

var images =[];

//push image dans tableau js
$('#save').click(function()
{
	var lien = $('#lien').val();
	console.log(lien);
	// var image = new Image();
	// image.src = lien;
	images.push(lien);
	console.log(images);
	
	for (var i = 0; i < images.length; i++) 
	{ 
		console.log(images[i]);
		console.log(images.length)
		console.log(images)
		console.log(i);
    	//$('#corps_galerie').append('<tr><td><img width="1000px" src='+images[i]+'></td></tr>');
    	$('#corps_galerie').append('<tr><td><div class="card" style="width: 1050px;"><div class="card-body"><img width="1000px" src='+images[i]+'><input placeholder="Votre commentaire ici" type="text" style="width: 950px;" style="height : 150px;"></div></div></td></tr>');
	}
	images = [];
});

// if (images.length>0)
// {
// 	$('#start_app').;
// }


	
