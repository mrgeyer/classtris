var d = Date();
var dv = d.valueOf();
var log = d;
var questionsLoaded = false;
var loadQwhenPt = 9;
var loadNwhenPt = 9;
function saveTextAsFile()
{
	var textToWrite = log;
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	var fileNameToSaveAs = "classtrisLog" + dv + ".csv";

	var downloadLink = document.createElement("a");
	downloadLink.download = fileNameToSaveAs;
	downloadLink.innerHTML = "Download File";
	if (window.webkitURL != null)
	{
		// Chrome allows the link to be clicked
		// without actually adding it to the DOM.
		downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
	}
	else
	{
		// Firefox requires the link to be added to the DOM
		// before it can be clicked.
		downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
		downloadLink.onclick = destroyClickedElement;
		downloadLink.style.display = "none";
		document.body.appendChild(downloadLink);
	}

	downloadLink.click();
}

function destroyClickedElement(event)
{
	document.body.removeChild(event.target);
}


function checkUndefined(stud) {
    return stud != undefined;
}

function checkBlank(stud) {
    return stud != "";
}


function loadClassList()
{
	var fileToLoad = document.getElementById("fileToLoad").files[0];

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) 
	{
		var textFromFileLoaded = fileLoadedEvent.target.result;
		currentClass = textFromFileLoaded .split("\n");


		currentClass = currentClass.filter(checkUndefined);
		currentClass = currentClass.filter(checkBlank);


		document.getElementById("inputTextToSave").value = textFromFileLoaded;
		dynamicClass = currentClass;
		dynamicClass.sort(function(a, b){return 0.5 - Math.random()});
		document.getElementById("inputTextToSave").value = dynamicClass;
		up = [];
		
		// teams
		team1 = [];
		team2 = [];
		team3 = [];
		team4 = [];
		
		// team points
		tp = [0,0,0,0];

		var teamN = 0;
		for (i = 0; i < dynamicClass.length; i++) {
			teamN = i%4;
			switch(i%4) {
				case 1:
					team1.push(dynamicClass[i]);
					break;
				case 2:
					team2.push(dynamicClass[i]);
					break;
				case 3:
					team3.push(dynamicClass[i]);
					break;
				case 0:
					team4.push(dynamicClass[i]);
					break;
			}
		}
		/*
		document.getElementById('team1').innerHTML = team1;
		document.getElementById('team2').innerHTML = team2;
		document.getElementById('team3').innerHTML = team3;
		document.getElementById('team4').innerHTML = team4;
		*/


		for (i = 0; i < 4; i++) {
			up[i] = dynamicClass[i];
		}
		q = 0;
		document.getElementById('up').innerHTML = up[0];
		document.getElementById('next').innerHTML = up[1];
		document.getElementById('then1').innerHTML = up[2];
		document.getElementById('then2').value = up[3];

		
		if (up[1] === undefined) {
			cycleNext();
		}
		
		
	}
	fileReader.readAsText(fileToLoad, "UTF-8");
	log += '\n' + Date();
}


function loadQuestions(mode)
{
	var fileToLoad = document.getElementById("questionLoad").files[0];

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) 
	{
		var textFromFileLoaded = fileLoadedEvent.target.result;
		currentQuest = textFromFileLoaded .split("\n");

		currentQuest = currentQuest.filter(checkUndefined);
		currentQuest = currentQuest.filter(checkBlank);


		document.getElementById("inputTextToSave").value = textFromFileLoaded;
		dynamicQuest = currentQuest;
		if (mode == "random") {
			dynamicQuest.sort(function(a, b){return 0.5 - Math.random()});
		}
		document.getElementById("inputTextToSave").value = dynamicQuest;
		question = dynamicQuest[0];
		qs = 0;
		document.getElementById('question').innerHTML = question;	
	}
	fileReader.readAsText(fileToLoad, "UTF-8");
	questionsLoaded = true;
	//log += '/n' + question;
}

function nextQuestion() {
		qs += 1;
		
		
		n = dynamicQuest.length;
		if (qs >= n-2) {
			dynamicQuest.sort(function(a, b){return 0.5 - Math.random()});
			qs = 0;
		}
	
		question = dynamicQuest[qs];
		document.getElementById('question').innerHTML = question;	
		//log = log + '\n' + question;
	}

	function cycleNext() {
		/*
		if (questionsLoaded) {
			nextQuestion();
		}
		/*
		var i = currentClass.indexOf(up[0])
		xp[i] += Number(xpee);
		dynamicClass.push(up[0] + xp[i]);
		*/
		q++
		up.shift();

		up[3] = dynamicClass[q];
		

		n = dynamicClass.length;
		if (q >= n-2) {
			dynamicClass.sort(function(a, b){return 0.5 - Math.random()});
			q = 0;
		}
		document.getElementById('up').innerHTML = up[0];
		document.getElementById('next').innerHTML = up[1];
		document.getElementById('then1').innerHTML = up[2];
		document.getElementById('then2').value = up[3];
		//document.getElementById('q').innerHTML = q;
		
	}

	function cycleThen1() {
		/*
		if (questionsLoaded) {
			nextQuestion();
		}
		
		var i = currentClass.indexOf(up[0])
		xp[i] += Number(xpee);
		dynamicClass.push(up[0] + xp[i]);
		*/
		q++
		up[0] = up[2];
		up[2] = up[3];
		up[3] = dynamicClass[q];
		

		n = dynamicClass.length;
		if (q >= n-2) {
			dynamicClass.sort(function(a, b){return 0.5 - Math.random()});
			q = 0;
		}
		document.getElementById('up').innerHTML = up[0];
		document.getElementById('next').innerHTML = up[1];
		document.getElementById('then1').innerHTML = up[2];
		document.getElementById('then2').value = up[3];
		
		// debug script
		//document.getElementById('q').innerHTML = q;
		/*
		if (up[1] === undefined) {
			cycleNext();
		}
		*/	
	}

	function cycleThen2() {
		/*
		if (questionsLoaded) {
			nextQuestion();
		}
		
		var i = currentClass.indexOf(up[0])
		xp[i] += Number(xpee);
		dynamicClass.push(up[0] + xp[i]);
		*/
		//q++
		up[0] = up[1];
		up[1] = up[2];
		up[2] = up[3];
		up[3] = document.getElementById('then2').value;
		
		log += '\n' + up[3] + ", manually added";
		document.getElementById("inputTextToSave").value = log;
		

		n = dynamicClass.length;
		if (q >= n-2) {
			dynamicClass.sort(function(a, b){return 0.5 - Math.random()});
			q = 0;
		}
		document.getElementById('up').innerHTML = up[0];
		document.getElementById('next').innerHTML = up[1];
		document.getElementById('then1').innerHTML = up[2];
		document.getElementById('then2').value = (up[3] + " successfully added.");
		//document.getElementById('q').innerHTML = q;
		/*
		if (up[1] === undefined) {
			cycleNext();
		}
		*/	
	}

	function checkUp(player) {
		return player == up[0];
	}

	function score(pt) {
		if (team1.some(checkUp)) {
			tp[1] += pt;
		} else if (team2.some(checkUp)) {
			tp[2] += pt;
		} else if (team3.some(checkUp)) {
			tp[3] += pt;	
		} else if (team4.some(checkUp)) {
			tp[0] += pt;	
		}
		/*
		document.getElementById('t1p').innerHTML = tp[1];
		document.getElementById('t2p').innerHTML = tp[2];
		document.getElementById('t3p').innerHTML = tp[3];
		document.getElementById('t4p').innerHTML = tp[0];
		*/
		log += '\n' + up[0] + "," + pt;
		document.getElementById("inputTextToSave").value = log;
		
		if (pt >= loadQwhenPt) {
			if (questionsLoaded) {
				nextQuestion();
			}
		}
		if (pt >= loadNwhenPt) {
			cycleNext();
		}
		
	}
	
	function gameOver() {
		highScore = Math.max(tp[0],tp[1],tp[2],tp[3]);
   		teamN = tp.indexOf(highScore);
		switch(teamN) {
			case 1:
				winners = team1;
				break;
			case 2:
				winners = team2;
				break;
			case 3:
				winners = team3;
				break;
			case 0:
				winners = team4;
				break;
		}
		congrats = "Congratulations " + winners.join(", ") + "!";
		document.getElementById('question').innerHTML = congrats;
		//log += '\n' + congrats;
	}

	function setModeQP(mode) {
		nextQwhenPt = mode;
	}
	function setModeNP(mode) {
		nextNwhenPt = mode;
	}
