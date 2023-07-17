function changeBackgroundColor(color) {
	document.body.style.background= color; 
}
function changeBandF(color1,color2) {
	var n = document.body.style.background; 
	if (n==color1){
		document.body.style.background= color2; 
	}
	else{
		document.body.style.background= color1;
	}
}