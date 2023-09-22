//Takes in input from the user and output a grade according to the grade entered.
const studentGrade=function(studentMarks){
let marks=prompt("Enter student marks-Between 0 and 100");
studentMarks=parseInt(marks);

if (studentMarks > 79){
    alert("Grade is 'A'");
} 
else if(studentMarks >= 60 && studentMarks <=79)
{
    alert("Grade is 'B'");
} 
else if (studentMarks>= 59 && studentMarks < 49)
{
    alert("Grade is 'C'");
}
else if (studentMarks >= 40 && studentMarks <=49)
 {
   alert("Grade is 'D'");

}
else if (studentMarks < 40) 
{
 alert("Grade is 'E' ");
}
else 
{
    alert("Kindly enter Marks that are between 0 and 100" );
}
}

// Calls the studentGrade function to test if this script is working well
studentGrade();