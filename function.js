var tabInput = [];
var inputStringified;
for (var i = 0; i < localStorage.length; i++)
{
	tabInput.push(JSON.parse(localStorage.getItem("key")));
}
//ajouter une image
function ajoutImg()
{

}



//supprimer une image
function supprImg()
{

}



//ajouter un commentaire
function ajoutCom()
{
	var input = $("#inputCom").val();
	$("#divCom").append("<div>"+input+"<button class='suppr'>"+"delete"+"</button></div>");
	inputStringified = JSON.stringify(input);
	localStorage.setItem("key",id);
	tabInput.push(inputStringified);
	console.log(inputStringified);
	$("#inputCom").val('');
}



function supprCom()
{
	$(this).parent().remove();
}

//compteur de like
function like()
{
	var cmt = 0;
	var doubleClick = 0;
	console.log("début function");
	doubleClick++;
	console.log("doubleClick = "+doubleClick);
	if (doubleClick == 2)
	{
		cmt--;
		console.log("cmt = "+cmt);
		doubleClick = 0;
		console.log("doubleClick = "+doubleClick);
	}
	else
	{
		cmt++;
		
		console.log("cmt = "+cmt);
		//afficher cmt a coté du logo
		
		console.log("doubleClick = "+doubleClick)
	}	
	console.log("fin function");
}

//afficher le manuel d'utilisation
function aide()
{
	//window.open ?
};


function modifPhoto()
{
	// alert("c'est connecté");
	// var photo = $("#photo").val();
	// console.log(photo);
	// var src = $("#modifphoto").attr("src", photo);
	// console.log(src);
};



	

$("#localStorage").click(function()
{
	console.log(tabInput);
});



function uniqId()
{
	var tabId = [];
	do
	{
		var id = Math.floor( Math.random()*9999999999);
		var bool = true;
		if( ! tabId )	// cas du tout premier id (tabId est vide)
		{
			return id;
		}
		for (var i = 0; i<tabId.length; i++)
		{
			
			if (tabId[i] == id)
			{
				bool = false;
			}
		}
		tabId.push(id);
	}
	while(bool == false);

	return id;
}


var id = uniqId();
console.log(id);















