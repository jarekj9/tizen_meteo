
window.onload = function () {
	var counter = 0;
	var img1 = new Image();
	var img2 = new Image();
	img1.src = "https://cdn.jpegmini.com/user/images/slider_puffin_jpegmini_mobile.jpg";
	img2.src = "http://www.meteo.pl/um/metco/mgram_pict.php?ntype=0u&row=381&col=199&lang=pl&cname=Bydgoszcz";
	document.getElementById("textbox").appendChild(img2);
    // TODO:: Do your initialization job

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
	try {
	    tizen.application.getCurrentApplication().exit();
	} catch (ignore) {
	}
    });
    // Sample code
    var textbox = document.querySelector('.contents');
    textbox.addEventListener("click", function(){
    	//box = document.querySelector('#textbox');
    	//box.innerHTML = box.innerHTML == "Basic" ? "Sample" : "Basic";
    	if (counter % 2 === 0){
        	document.getElementById("textbox").removeChild(img2);
        	document.getElementById("textbox").appendChild(img1);
    	}
    	else{
        	document.getElementById("textbox").removeChild(img1);
        	document.getElementById("textbox").appendChild(img2);
    	}
    	counter += 1;
    });
    
};
