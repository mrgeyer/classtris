# classtris
A Classroom management tool based on Tetris that features a student que.

To try out the demo visit: https://punkbass.github.io/classtris/

## Load Students and Questions

To use it, you need to load a class list and a question list from text files at the bottom of the page. On the lists, seperate names and questions with a new line. 
Click choose file, then pick your file. Then click load class or load question.

To have questions load randomly, click Random before loading the questions. To have questions load in order, click Linear before loading the questions.

For confirmation, questions and students are shown in a text box under the load buttons. You can hide this by clicking hide.

Example student list: https://github.com/punkbass/classtris/blob/master/students.txt<br>
Example question list: https://github.com/punkbass/classtris/blob/master/questions.txt

You can add images to the question list by using the HTML tags. See the example question list for an example.
To do more than one line, use the br html tag. See the example question list for an example

## Que buttons

To load the next student, press N on the top menu or NEXT above the student's name 
To load other students in the que, press THEN above the student's names
To load a new question, click UP above the student's name or Q in the top menu.

## Teams and Points

Students are randomly put on 4 teams when students are loaded. To award points to a student's team, click 1,2,3,4 when they are up. Click GG to show the winning team.

## Blakboard
To display the Blackboard, click BB in the top menu. To hide the blackboard click HIDE in the top menu.

 Hold down mouse to draw. Type letters to write where the mouse is pointing. Click the screen to change the text location.
 Click E to erase the blackboard. Click colors to switch colors. Click the plus and minus to change the size of the pen.
 
 Click next to move the next student to the up position.
 
### Known issues
Blank questions and student names. I recommend using blank names and questions as a wildcard until it gets fixed. 

### Credits
 
Uses processing.js for the blackboard. http://processingjs.org/

Uses the method shared by This Could Be Better for the file loading: https://thiscouldbebetter.wordpress.com/2012/12/18/loading-editing-and-saving-a-text-file-in-html5-using-javascrip/
