# classtris
A Classroom management tool based on Tetris that features a student que.

To try out the demo visit: https://punkbass.github.io/classtris/

## Load Students and Questions

To use it, you need to load a class list from a text files at the bottom of the page. On the lists, seperate names and questions with a new line. 
Click choose file, then pick your file. Then click load class list.

To have questions load randomly, click Load Random to load the questions. To have questions load in order, click Load Linear to load the questions.

For confirmation, questions and students are shown in a text box under the load buttons. You can hide this by clicking hide.

Example student list: https://github.com/punkbass/classtris/blob/master/students.txt<br>
Example question list: https://github.com/punkbass/classtris/blob/master/questions.txt

You can add images to the question list by using the HTML tags. See the example question list for an example.
To do more than one line, use the br html tag. See the example question list for an example

## Que buttons

To load the next student, click the yellow guy on the top menu or NEXT above the student's name 
To load other students in the que, press THEN above the student's names
To load a new question, click UP above the student's name or ? in the top menu.

## Teams and Points

Students are randomly put on 4 teams when students are loaded. To award points to a student's team, click 1,2,3,4 when they are up. Clicking the score buttons loads the next student in the que. Clicking the 4 pt score button loads the next question. Click GG to show the winning team. Students will not know who is on their team unless they are on the winning team. To download a spreadsheet of points awarded to each student, click Save Log in the bottom left

## Blakboard
To display the Blackboard, click BB in the top menu. To hide the blackboard click HIDE in the top menu.

 Hold down mouse to draw. Type letters to write where the mouse is pointing. Click the screen to change the text location.
 Click E to erase the blackboard. Click colors to switch colors. Click the plus and minus to change the size of the pen.
 
 Click next to move the next student to the up position.
 
 ## Background information
 
This app is designed for teachers who prefer the Johnny-on-the-spot type of questioning. It enables them to delegate the task of selecting students randomly to the computer and focus on teaching. 
 
 This app was developed based on issues I observed during classroom observations. I observed a teacher using questions to encourage student engagement. However, calling on students who are not paying attention does not set them up for a successful experience and leads to further frustration with the class. Using this app allows the student to mentally prepare for their turn to answer questions and sets them up for a successful and positive experience. It also reduces the likelihood that a student will feel singled out by the teacher.

The reason that I choose to have blind team assignment is to avoid issues that I observed in team based activities. When students make mistakes during team activities, their team mates get upset and frustrated and heated exchanges have occured. Since students do not know who is on their team unless their team wins. Therefore, such frustrations with teammates should be avoided entirely. 
 
### Known issues
Blank questions and student names. I recommend using blank names and questions as a wildcard until it gets fixed. 

### Credits
 
Uses processing.js for the blackboard. http://processingjs.org/

Uses the method shared by This Could Be Better for the file loading: https://thiscouldbebetter.wordpress.com/2012/12/18/loading-editing-and-saving-a-text-file-in-html5-using-javascrip/
