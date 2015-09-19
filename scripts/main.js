document.addEventListener("deviceready", init, false);
function init() {

	navigator.contacts.find(
		[navigator.contacts.fieldType.displayName],
		gotContacts,
		errorHandler);

}

function errorHandler(e) {
	console.log("errorHandler: "+e);
}

function gotContacts(contacts) {
	console.log("gotContacts, number of results "+contacts.length);
	picDiv = document.querySelector("#pictures");
	for(var i=0, len=contacts.length; i<len; i++) {
		console.dir(contacts[i]);
		if(contacts[i].photos && contacts[i].photos.length > 0) {
			picDiv.innerHTML += "<dt><img class='img-circle' src='"+contacts[i].photos[0].value+"'></dt> <dd><h1>"+contacts[i].displayName+"</h1></dd>";
		}
	}
}

/*
 function onSuccess(contacts) {
        for (var i = 0; i < contacts.length; i++) {
            // display phone numbers
            for (var j = 0; j < contacts[i].phoneNumbers.length; j++) {
                
                
                
                alert("Type: "      + contacts[i].phoneNumbers[j].type  + "\n" +
                      "Value: "     + contacts[i].phoneNumbers[j].value + "\n" +
                      "Preferred: " + contacts[i].phoneNumbers[j].pref);
            }
        }
    };
 */