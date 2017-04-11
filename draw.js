var h = 425;
var w = 600;
var paintColor = color(17, 0, 255);
var brushSize = 8;
var isDraw = 0;
var clear = true;
var type = false;
var typeCursorX = -1;
var typeCursorY = -1;
var letter = 'A';
var ts = 40;	// text size
var bs = 30; 	// brush size




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
    rect(w-bs,0,bs,bs);
    

    // blue
    fill(51, 0, 255);
    rect(w-bs,bs,bs,bs);
    

    // yellow
    fill(255, 255, 0);
    rect(w-bs,2*bs,bs,bs);
    

    // green
    fill(0, 255, 38);
    rect(w-bs,3*bs,bs,bs);
    

    // purple
    fill(213, 0, 255);
    rect(w-bs,4*bs,bs,bs);
    
	// brushSize
	noStroke();
    fill(0,0,0);
    rect(w-bs,5*bs,bs,bs);
    rect(w-bs,6*bs,bs,bs);
    rect(w-bs,7*bs,bs,bs);
    fill(255,255,255);
    // +
    rect(w-.6*bs,5.4*bs,.2*bs,.6*bs);
    rect(w-.8*bs,5.6*bs,.6*bs,.2*bs);
    // -
    rect(w-.8*bs,7.4*bs,.6*bs,.2*bs);
    textSize(.8*bs);
    text(brushSize, w-.9*bs,7*bs);  

	//eraser
	stroke(0,0,0);
	fill(0,0,0);
	rect(w-bs,h-bs,bs,bs);
	fill(255,0,0);
    textSize(.8*bs);
    text("E", w-.9*bs, h-.2*bs);  

	if (isDraw === 1) {
		noStroke();
		fill(paintColor);
		rect(mouseX, mouseY, brushSize, brushSize);
	}


	if (type) {
		fill(paintColor);
		textSize(ts);
		text(letter, typeCursorX, typeCursorY);
		textFont("Courier New");
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
 	if(mouseX < w-bs) {
		typeCursorX = mouseX;
		typeCursorY = mouseY;
    	isDraw = 1;
	}
}





 void mouseClicked() {
	if (mouseX > w-50) {
		if (mouseY > 5*bs && mouseY < 6.5*bs && brushSize < 96) {
			brushSize += 4;
			ts = brushsize*10;
		}
		if (mouseY < 8.5*bs && mouseY > 7*bs  && brushSize > 4) {
			brushSize -= 4;
			ts = brushsize*10;
		}

		// red
		if (mouseY < bs) {
		    paintColor = color(255, 0, 0);
		}

		// blue
		if (mouseY > bs && mouseY < 2*bs) {
		    paintColor = color(51, 0, 255);
		}

		// yellow
		if (mouseY > 2*bs && mouseY < 3*bs) {
		    paintColor = color(255, 255, 0);
		}

		// green
		if (mouseY > 3*bs && mouseY < 4*bs) {
		    paintColor = color(0, 255, 38);
		}

		// purple
		if (mouseY > 4*bs && mouseY < 5*bs) {
		    paintColor = color(213, 0, 255);
		}
		
		// eraser
		if (mouseY > h-bs) {
		    clear = true;
		}
	}
}
