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
    rect(0,h-bs,bs,bs);
    

    // blue
    fill(51, 0, 255);
    rect(bs,h-bs,bs,bs);
    

    // orange
    fill(255, 125, 0);
    rect(2*bs,h-bs,bs,bs);
    

    // green
    fill(0, 255, 38);
    rect(3*bs,h-bs,bs,bs);
    

    // purple
    fill(213, 0, 255);
    rect(4*bs,h-bs,bs,bs);
    
	// brushSize
	noStroke();
    fill(0,0,0);
    rect(5*bs,h-bs,bs,bs);
    rect(6*bs,h-bs,bs,bs);
    rect(7*bs,h-bs,bs,bs);
    fill(255,255,255);
    rect(5.2*bs,h-.6*bs,.6*bs,.2*bs);
    rect(7.2*bs,h-.6*bs,.6*bs,.2*bs);
    rect(7.4*bs,h-.8*bs,.2*bs,.6*bs);
    textSize(.8*bs);
    text(brushSize, 6.1*bs, h-.2*bs);  

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
 	if(mouseY < h-bs) {
		typeCursorX = mouseX;
		typeCursorY = mouseY;
    	isDraw = 1;
	}
}





 void mouseClicked() {
	if (mouseY > h-50) {
		if (mouseX > 5*bs && mouseX < 6*bs && brushSize > 1) {
			brushSize = brushSize/2;
			ts = brushsize*10;
		}
		if (mouseX < 8*bs && mouseX > 7*bs  && brushSize < 63) {
			brushSize = brushSize*2;
			ts = brushsize*10;
		}

		// red
		if (mouseX < bs) {
		    paintColor = color(255, 0, 0);
		}

		// blue
		if (mouseX > bs && mouseX < 2*bs) {
		    paintColor = color(51, 0, 255);
		}

		// yellow
		if (mouseX > 2*bs && mouseX < 3*bs) {
		    paintColor = color(255, 125, 0);
		}

		// green
		if (mouseX > 3*bs && mouseX < 4*bs) {
		    paintColor = color(0, 255, 38);
		}

		// purple
		if (mouseX > 4*bs && mouseX < 5*bs) {
		    paintColor = color(213, 0, 255);
		}
		
		// eraser
		if (mouseX > w-bs) {
		    clear = true;
		}
	}
}


