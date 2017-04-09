var QuestionsLoaded = false;
function saveTextAsFile()
{
	var textToWrite = document.getElementById("inputTextToSave").value;
	var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
	var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;

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

/*
function checkUndefined(thingie) {
	if (thingie != undefined) {
		if thingie != "") {
			return thingie;
		}
	}
}
*/

function loadClassList()
{
	var fileToLoad = document.getElementById("fileToLoad").files[0];

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) 
	{
		var textFromFileLoaded = fileLoadedEvent.target.result;
		currentClass = textFromFileLoaded .split("\n");

		/*
		currentClass = checkClass.filter(checkUndefined);
		*/


		document.getElementById("inputTextToSave").value = textFromFileLoaded;
		dynamicClass = currentClass;
		dynamicClass.sort(function(a, b){return 0.5 - Math.random()});
		document.getElementById("inputTextToSave").value = dynamicClass;
		up = [];
		for (i = 0; i < 4; i++) {
			up[i] = dynamicClass[i];
		}
		q = 0;
		document.getElementById('up').innerHTML = up[0];
		document.getElementById('next').innerHTML = up[1];
		document.getElementById('then1').innerHTML = up[2];
		document.getElementById('then2').innerHTML = up[3];

		
		if (up[1] === undefined) {
			cycleNext();
		}
		
		
	}
	fileReader.readAsText(fileToLoad, "UTF-8");
}


function loadQuestions()
{
	var fileToLoad = document.getElementById("questionLoad").files[0];

	var fileReader = new FileReader();
	fileReader.onload = function(fileLoadedEvent) 
	{
		var textFromFileLoaded = fileLoadedEvent.target.result;
		currentQuest = textFromFileLoaded .split("\n");

		/*
		currentClass = checkClass.filter(checkUndefined);
		*/


		document.getElementById("inputTextToSave").value = textFromFileLoaded;
		dynamicQuest = currentQuest;
		dynamicQuest.sort(function(a, b){return 0.5 - Math.random()});
		document.getElementById("inputTextToSave").value = dynamicQuest;
		question = dynamicQuest[0];
		qs = 0;
		document.getElementById('question').innerHTML = question;	
	}
	fileReader.readAsText(fileToLoad, "UTF-8");
	questionsLoaded = true;
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
	}

	function cycleNext() {
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
		document.getElementById('then2').innerHTML = up[3];
		//document.getElementById('q').innerHTML = q;
		
	}

	function cycleThen1() {
		if (questionsLoaded) {
			nextQuestion();
		}
		/*
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
		document.getElementById('then2').innerHTML = up[3];
		//document.getElementById('q').innerHTML = q;
		/*
		if (up[1] === undefined) {
			cycleNext();
		}
		*/	
	}

	function cycleThen2() {
		if (questionsLoaded) {
			nextQuestion();
		}
		/*
		var i = currentClass.indexOf(up[0])
		xp[i] += Number(xpee);
		dynamicClass.push(up[0] + xp[i]);
		*/
		q++
		up[0] = up[3];
		up[3] = dynamicClass[q];
		

		n = dynamicClass.length;
		if (q >= n-2) {
			dynamicClass.sort(function(a, b){return 0.5 - Math.random()});
			q = 0;
		}
		document.getElementById('up').innerHTML = up[0];
		document.getElementById('next').innerHTML = up[1];
		document.getElementById('then1').innerHTML = up[2];
		document.getElementById('then2').innerHTML = up[3];
		//document.getElementById('q').innerHTML = q;
		/*
		if (up[1] === undefined) {
			cycleNext();
		}
		*/	
	}
