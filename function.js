var tabInput = [];

tabInput = JSON.parse(localStorage.getItem("key"));
 
//ajouter un commentaire
function ajoutCom()
{
	
	$("#tableCom").empty();	  
	var input = $("#inputCom").val();
	if (tabInput == null)
	{
		tabInput = [];

	}
	tabInput.push({id : uniqId(),commentaire : input});
	window.localStorage.setItem("key",JSON.stringify(tabInput));
	$("#inputCom").val('');
	tabInput = JSON.parse(localStorage.getItem("key"));
	for (var i = 0; i < tabInput.length; i++)
	{
		$("#tableCom").append("<tr><td>"+tabInput[i].commentaire+"<button class='suppr'>"+"delete"+"</button></td></tr>");
	}
};
	


function supprCom()
{
	$(this).parent().remove();
	console.log('ok');
	var ligne = $(this).closest("tr");
	var idTmp = ligne.find(".id").text();
	var nomTmp= ligne.find(".nom").text();
	var prenomTmp= ligne.find(".prenom").text();
	if (confirm("Voulez-vous vraiment supprimer ?"))
	{
		var contact = JSON.parse(window.localStorage.getItem("annuaire"));
		contact.splice(idTmp, 1);
		var val = JSON.stringify(contact);
		window.localStorage.setItem("annuaire", val);
		location.href="index.html";
	}

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
		doublceClick = 0;
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



function modifPhoto()
{
	// alert("c'est connecté");
	// var photo = $("#photo").val();
	// console.log(photo);
	// var src = $("#modifphoto").attr("src", photo);
	// console.log(src);
};



	//tabInput = JSON.parse(localStorage.getItem("key"))

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


// localStorage.clear();



//ajouter une image
function ajoutImg()
{

}



//supprimer une image
function supprImg()
{

}








