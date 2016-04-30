function nextSnail() {
        var image = document.getElementById("Snail");
        if(image.src.match("Main")) {
                image.src = "Gameplay3.png";
        }
        else if(image.src.match("play3")) {
                image.src = "Gameplay2.png";
        }
        else if(image.src.match("play2")) {
                image.src = "Gameplay1.png";
        }
        else if(image.src.match("play1")) {
                image.src = "Story.png";
        }
        else if(image.src.match("Story")) {
                image.src = "MainMenu.png";
        }

}

function previousSnail() {
	var image = document.getElementById("Snail");
	if(image.src.match("Main")) {
		image.src = "Story.png";
	}
	else if(image.src.match("Story")) {
		image.src = "Gameplay1.png";
	}
        else if(image.src.match("play1")) {
                image.src = "Gameplay2.png";
        }
        else if(image.src.match("play2")) {
                image.src = "Gameplay3.png";
        }
        else if(image.src.match("play3")) {
                image.src = "MainMenu.png";
        }

}
