# classtris
A Classroom management tool based on Tetris that features a student que.

To try out the demo visit: https://punkbass.github.io/classtris/

## Load Students and Questions

To use Classtris, you need to load a class list from a text files at the bottom of the page. 
- On the lists, seperate names and questions with a new line. 
- Click choose file, then pick your file. Then click load class list.
- For confirmation, questions and students are shown in a text box under the load buttons. You can hide this by clicking hide.
- Example student list: https://github.com/punkbass/classtris/blob/master/students.txt<br>

Questions are loaded in a similar fashion..
- You must put each question on a seperate line in a text file. 
- You can use HTML tags in the questions for formatting or loading pictures and other media. 
- You can add images to the question list by using the HTML tags. See the example question list for an example.
- To use more than one line on a question, use the br html tag. See the example question list for an example
- To load questions randomly, click Load Random to load the questions. 
- To have questions load in order, click Load Linear to load the questions.
- For confirmation, questions and students are shown in a text box under the load buttons. You can hide this by clicking hide.
- Example question list: https://github.com/punkbass/classtris/blob/master/questions.txt
- To generate systems of linear equation problems, visit: https://punkbass.github.io/Classtris-Systems-of-Linear-Equations-Question-Generator/



## Que buttons

- To load the next student, click the yellow guy on the top menu or NEXT above the student's name.
- To load the THEN student in the que, press THEN above the student's names.
- To manually enter a student, enter the student's name in the text field under the LATER button and click the LATER button. The student will not be placed in the que if you do not click LATER. The field will become blank after the student is added to the que. A log entry will be posted saying manual entry.

- To load a new question, click the ? in the top menu. 

## Teams and Points

- Students are randomly put on 4 teams when students are loaded.
- To award points to a student and the student's team, click 1,2,3,or 4 or UP when they are UP. 
- Clicking 1 or UP will award 1 point to the student and the student's team.
- Clicking 2,3,4 will award 2,3,4 points respectively to the student tand the student's team.
- To automatically load the NEXT student or the next question when awarding points, click ≥1  ≥2  ≥3  or ≥4  buttons on the bottom of the page.
- To turn this feature off, click Off.
- UP will not load the NEXT player or question. Use UP to award points before using THEN or LATER.
- Click GG (good game) to show the winning team. Students will not know who is on their team unless they are on the winning team. 
- To download a spreadsheet of points awarded to each student, click Save Log in the bottom left

## Blakboard
- To display the Blackboard, click BB in the top menu. To hide the blackboard click HIDE in the top menu.
 - Hold down mouse to draw. Type letters to write where the mouse is pointing. Click the screen to change the text location.
-  Click E to erase the blackboard. Click colors to switch colors. Click the plus and minus to change the size of the pen.
- Click next to move the next student to the up position.
 
 ## Background information
 
This app is designed for teachers who prefer the Johnny-on-the-spot type of questioning. It enables them to delegate the task of selecting students randomly to the computer and focus on teaching. 
 
 This app was developed based on issues I observed during classroom observations. I observed a teacher using questions to encourage student engagement. However, calling on students who are not paying attention does not set them up for a successful experience and leads to further frustration with the class. Using this app allows the student to mentally prepare for their turn to answer questions and sets them up for a successful and positive experience. It also reduces the likelihood that a student will feel singled out by the teacher.

The reason that I choose to have blind team assignment is to avoid issues that I observed in team based activities. When students make mistakes during team activities, their team mates get upset and frustrated and heated exchanges have occured. Since students do not know who is on their team unless their team wins, such frustrations with teammates should be avoided entirely. 


### Credits
 
Uses processing.js for the blackboard. http://processingjs.org/

Uses the method shared by This Could Be Better for the file loading: https://thiscouldbebetter.wordpress.com/2012/12/18/loading-editing-and-saving-a-text-file-in-html5-using-javascrip/
