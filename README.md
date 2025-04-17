# notas-atletas
Repository for posting DevStart course activities.

The goal is to create an application capable of receiving an athlete's name and grades, calculating the average and presenting it to the user using javascript.

Case:
In a certain artistic gymnastics competition, several athletes perform for a panel of five judges. Each judge is responsible for evaluating a specific criterion, namely the duration of the presentation, originality of the choreography, posture of the athlete, difficulty of the acrobatics, and synchronicity.

The competition in question has the following evaluation rule:

* Each judge can give a score from one (1) to ten (10).
* The average is calculated based on the three middle scores, disregarding the highest and lowest scores.

The competition organizer hired your team to create an application capable of receiving the name and scores of the athletes and performing the due calculation. You were tasked with creating the solution using the JavaScript language.

Specifications:

You must create a function capable of receiving an array of objects containing the athlete's name and the five assigned scores. Your function should calculate the average of the scores without considering the athlete's highest and lowest scores. Finally, it should present to the user the name of each athlete, followed by their scores and the calculated average.

Use the following input:

let atletas = [
 {
   nome: "Cesar Abascal",
   notas: [10, 9.34, 8.42, 10, 7.88]
 },
 {
   nome: "Fernando Puntel",
   notas:  [8, 10, 10, 7, 9.33]
 },
 {
   nome: "Daiane Jelinsky",
   notas: [7, 10, 9.5, 9.5, 8]
 },
 {
   nome: "Bruno Castro",
   notas: [10, 10, 10, 9, 9.5]
 }
];

The output should be:

Athlete: Cesar Abascal
Scores Obtained: 10, 10, 7.88, 8.42, 9.34
Valid Average: 9.253333

Athlete: Fernando Puntel
Scores Obtained: 10, 10, 7, 8, 9.33
Valid Average: 9.11

Athlete: Daiane Jelinsky
Scores Obtained: 10, 7, 8, 9.5, 9.5
Valid Average: 9

Athlete: Bruno Castro
Scores Obtained: 10, 10, 10, 9, 9.5
Valid Average: 9.83333333333

Developer's Description

I created a function using the athletes object as a parameter that receives all the necessary data.

Inside this function I included a for loop that will run through the entire size of the parameter object.

Inside the loop, I started by ordering the first variable to make the output of the grades as desired, unifying them into a string with the .Join() method, and again I ordered the grades array so that they would be in ascending order from smallest to largest.

Next, I reduced the size of this array by excluding the first and last entries of this array.

Finally, I performed the sum and average of the values ​​and displayed the texts in the console, as indicated.
