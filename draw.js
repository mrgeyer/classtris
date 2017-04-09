var h = 450;
var w = 700
var paintColor = color(17, 0, 255);
var brushSize = 8;
var isDraw = 0;
var clear = true;
var type = false;
var typeCursorX = -1;
var typeCursorY = -1;
var letter = 'A';
var ts = 40;



void setup() { 
  size(w, h);
}


void draw() {

	if (clear) {
		background(0,0,0);
		clear = false;
		typeCursorX = -1;
		typeCursorY = -1;
	}

    // red
    fill(250, 0, 0);
    rect(0,h-50,50,50);
    

    // blue
    fill(51, 0, 255);
    rect(50,h-50,50,50);
    

    // orange
    fill(255, 125, 0);
    rect(100,h-50,50,50);
    

    // green
    fill(0, 255, 38);
    rect(150,h-50,50,50);
    

    // purple
    fill(213, 0, 255);
    rect(200,h-50,50,50);
    
	// brushSize
	noStroke();
    fill(0,0,0);
    rect(250,h-50,50,50);
    rect(300,h-50,50,50);
    rect(350,h-50,50,50);
    fill(255,255,255);
    rect(260,h-30,30,10);
    rect(360,h-30,30,10);
    rect(370,h-40,10,30);
    textSize(40);
    text(brushSize, 305, h-10);  

	//eraser
	stroke(0,0,0);
	fill(0,0,0);
	rect(w-50,h-50,50,50);
	fill(255,0,0);
    textSize(40);
    text("E", w-45, h-10);  

	if (isDraw === 1) {
		noStroke();
		fill(paintColor);
		ellipse(mouseX, mouseY, brushSize, brushSize);
	}


	if (type) {
		fill(paintColor);
		textSize(ts);
		text(letter, typeCursorX, typeCursorY);
		type = false;
		}


}


void keyPressed() {
	if (key == CODED) {
	} else {	
		letter = key;
		type = true;
		if (typeCursorX === -1) {
			typeCursorX = mouseX;
			typeCursorY = mouseY;
		} else if (typeCursorX > w-ts*1.3) {
			typeCursorX = 0;
			typeCursorY = typeCursorY + ts;
		} else {
			typeCursorX = typeCursorX + ts/1.3;
				
		}
	}	
}


void mouseReleased() {
	isDraw = 0;
}

void mousePressed() {
 	if(mouseY < h-50) {
		typeCursorX = mouseX;
		typeCursorY = mouseY;
    	isDraw = 1;
	}
}





 void mouseClicked() {
	if (mouseY > h-50) {
		if (mouseX > 250 && mouseX < 300 && brushSize > 1) {
			brushSize = brushSize/2;
			ts = brushsize*10;
		}
		if (mouseX < 400 && mouseX > 350  && brushSize < 63) {
			brushSize = brushSize*2;
			ts = brushsize*10;
		}

		// red
		if (mouseX < 50) {
		    paintColor = color(255, 0, 0);
		}

		// blue
		if (mouseX > 50 && mouseX < 100) {
		    paintColor = color(51, 0, 255);
		}

		// yellow
		if (mouseX > 100 && mouseX < 150) {
		    paintColor = color(255, 125, 0);
		}

		// green
		if (mouseX > 150 && mouseX < 200) {
		    paintColor = color(0, 255, 38);
		}

		// purple
		if (mouseX > 200 && mouseX < 250) {
		    paintColor = color(213, 0, 255);
		}
		
		// eraser
		if (mouseX > 550) {
		    clear = true;
		}
	}
}


