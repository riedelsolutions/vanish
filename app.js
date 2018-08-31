function openDiv(id) {
    var getI = document.getElementById(id+"Info");
    if (getI.style.display === "block") {
        getI.style.display = "none";
    } else {
        getI.style.display = "block";
    }
	}
