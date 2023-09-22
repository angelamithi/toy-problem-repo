Title: Student Grade Calculator

Description:

This is a simple JavaScript program that calculates and assigns a grade to a student based on their input marks. The program prompts the user to enter student marks and then determines the corresponding grade based on predefined grade ranges.

Setup Instructions:

To use this program, follow these steps:

•	Clone or download this repository to your local machine.
•	Open the student-grade-calculator.js file in a JavaScript environment, such as a web browser's developer console or a Node.js environment.
•	Call the studentGrade function. It will prompt you to enter student marks within the range of 0 to 100.
•	After entering the marks, the program will calculate the grade based on the specified grade ranges and display it in an alert message.


Code Explanation

1.Function: studentGrade
•	This function takes no arguments.
•	It uses the prompt function to get user input for student marks, which are then converted to an integer using parseInt.
•	It evaluates the student marks using a series of if-else statements to determine the corresponding grade based on the following ranges:
o	A grade: Marks greater than 79
o	B grade: Marks between 60 and 79 (inclusive)
o	C grade: Marks between 50 and 59 (inclusive)
o	D grade: Marks between 40 and 49 (inclusive)
o	E grade: Marks less than 40

An alert message is displayed with the calculated grade.
If the user enters marks outside the 0 to 100 range, it displays an alert message asking them to enter marks within the valid range.

Author: Angela Mithi
License: This project is not licensed under any specific open-source license. It is provided for educational purposes and can be reused and modified by anyone for educational and non-commercial use.



Title: Speed Detector and Demerit Points Calculator

Description:

This is a simple JavaScript program that calculates demerit points for drivers based on their traveling speed relative to the accepted speed limit. It provides feedback to the driver and, in case of excessive speeding, can lead to a license suspension.

Setup Instructions:

To use this program, follow these steps:

•	Clone or download this repository to your local machine.
•	Open the speed-detector.js file in a JavaScript environment, such as a web browser's developer console or a Node.js environment.
•	Call the speedDetector function with the traveling speed as an argument. For example:
speedDetector(85); // Replace 85 with the actual traveling speed
•	The program will then evaluate the speed and provide feedback. If the traveling speed is within an acceptable range, it will display "OK." If the speed exceeds the accepted limit, it will calculate demerit points based on the difference and, in extreme cases, may suspend the driver's license.

If the traveling speed is within an acceptable range, it will display "OK." If the speed exceeds the accepted limit, it will calculate demerit points based on the difference and, in extreme cases, may suspend the driver's license.

Code Explanation

1. Function: speedDetector
•	This function takes one argument, travellingSpeed, which represents the driver's current traveling speed.
•	It first checks if travellingSpeed is less than or equal to 70, which is the accepted speed limit. If so, it displays "OK," indicating that the driver is within the limit.
•	If travellingSpeed is greater than 70, it calls the calculateSpeedLimit function with travellingSpeed as an argument.

2. Function: calculateSpeedLimit
•	This function takes travellingSpeed as an argument.
•	It calculates the difference between travellingSpeed and the accepted speed limit, which is 70.
•	Based on the difference, it calculates demerit points and provides feedback to the driver.
•	If the difference is equal to or greater than 60, it may suspend the driver's license.

Author: Angela Mithi
License: This project is not licensed under any specific open-source license. It is provided for educational purposes and can be reused and modified by anyone for educational and non-commercial use.


Title : Net Salary Calculator

Description:
This JavaScript program calculates the net salary of an employee based on their basic salary and benefits. It also calculates the employee's KRA payer tax, NHIF (National Health Insurance Fund) payment, and NSSF (National Social Security Fund) payment.

Setup Instructions:

•	Import the JavaScript file containing the code into your project.
•	Call the calculateNetSalary function with the employee's basic salary and benefits as arguments to calculate the net salary.
      example : calculateNetSalary(basicSalary, benefits);

Code Explanation:

Functions

1. calculateNetSalary(basicSalary, benefits)
Calculates the net salary of an employee.
•	basicSalary: The employee's basic salary.
•	benefits: Any additional benefits received by the employee.
•	grossPay: adds up the basicSalary and the benefits
•	netSalary: takes the grossPay and subtracts the tax, NHIF payments and NSSF payments.




2. calculateTax(basicSalary, benefits)
Calculates the income tax based on the gross pay (basic salary + benefits).
•	basicSalary: The employee's basic salary.
•	benefits: Any additional benefits received by the employee.

The Tax payments are calculated using  the rates below :

Monthly Taxable Pay (Ksh) 		Rate of Tax (%)
Up to 24,000 	           	            10.0
24,001 - 32,333 	        	        25.0
32,334 - 500,000        	    	    30.0
500,001 - 800,000       	    	    32.5
Above 800,000           	         	35.0

3. calculateNhif(basicSalary, benefits)
Calculates the NHIF payment based on the gross pay.
•	basicSalary: The employee's basic salary.
•	benefits: Any additional benefits received by the employee.

The NHIF payments are calculated using the below rates:

Gross Pay (Ksh)	       Deduction (Ksh)	 		
Up to 5,999	            150	 		
6,000 - 7,999       	300	 		
8,000 - 11,999      	400	 		
12,000 - 14,999     	500	 		
15,000 - 19,999	        600	 		
20,000 - 24,999	        750	 		
25,000 - 29,999	        850	 		
30,000 - 34,999	        900	 		
35,000 - 39,999     	950	 	 	 
40,000 - 44,999     	1,000
45,000 - 49,999 	    1,100
50,000 - 59,999 	    1,200
60,000 - 69,999 	    1,300
70,000 - 79,999 	    1,400
80,000 - 89,999 	    1,500
90,000 - 99,999 	    1,600
100,000 and above 	    1,700



4. calculateNssf(basicSalary, benefits)
Calculates the NSSF payment based on the gross pay.
•	basicSalary: The employee's basic salary.
•	benefits: Any additional benefits received by the employee.

The Nssf payments are 6 % of your gross pay where the upper earning limit is Ksh 18,000 .
This means if the gross pay is more than 18,000 the NSSF payment will be 6% of Ksh 18,000

Author: Angela Mithi
License: This project is not licensed under any specific open-source license. It is provided for educational purposes and can be reused and modified by anyone for educational and non-commercial use.