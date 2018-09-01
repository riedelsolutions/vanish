function openDiv(id) {
    getI = document.getElementById(id+"Info");
    if (getI.style.display === "block") {
        getI.style.display = "none";
    } else {
        getI.style.display = "block";
    }
}


function closePopup(){
	for(var i = 0; i < document.getElementsByClassName('hidden').length; i++){
	var getClass =document.getElementsByClassName('hidden')[i];
	if (getClass.style.display === "none") {
    } else {
        getClass.style.display = "none";
    }
		}
}
