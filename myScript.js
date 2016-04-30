function previousSnail() {
        var image = document.getElementById("Snail");
	var imgtext = document.getElementById("imgT");
        if(image.src.match("Main")) {
                image.src = "Gameplay3.png";
		imgtext.innerHTML = " - 5 out of 5 : Gameplay 3 - ";
        }
        else if(image.src.match("play3")) {
                image.src = "Gameplay2.png";
		imgtext.innerHTML = " - 4 out of 5 : Gameplay 2 - ";
        }
        else if(image.src.match("play2")) {
                image.src = "Gameplay1.png";
		imgtext.innerHTML = " - 3 out of 5 : Gameplay 1 - ";
        }
        else if(image.src.match("play1")) {
                image.src = "Story.png";
		imgtext.innerHTML = " - 2 out of 5 : Story Line - ";
        }
        else if(image.src.match("Story")) {
                image.src = "MainMenu.png";
		imgtext.innerHTML = " - 1 out of 5 : Main Menu - ";
        }

}

function nextSnail() {
	var image = document.getElementById("Snail");
	if(image.src.match("Main")) {
		image.src = "Story.png";
		imgtext.innerHTML = " - 2 out of 5 : Story Line - ";
	}
	else if(image.src.match("Story")) {
		image.src = "Gameplay1.png";
		imgtext.innerHTML = " - 3 out of 5 : Gameplay 1 - ";
	}
        else if(image.src.match("play1")) {
                image.src = "Gameplay2.png";
		imgtext.innerHTML = " - 4 out of 5 : Gameplay 2 - ";
        }
        else if(image.src.match("play2")) {
                image.src = "Gameplay3.png";
		imgtext.innerHTML = " - 5 out of 5 : Gameplay 3 - ";
        }
        else if(image.src.match("play3")) {
                image.src = "MainMenu.png";
		imgtext.innerHTML = " - 1 out of 5 : Main Menu - ";
        }

}
