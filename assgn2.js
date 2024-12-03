/* Write logic to check if the user is 18 years or older than 18 years allow him to vote, 
 else infrom him how many more years he needs to become a voter.*/


 
 let age = 2;

 if (age >= 18) 
     
     {
     console.log("You are eligible to vote.");
     } 
 else 
     {
     let yearsLeft = 18 - age;
     console.log("You are not eligible to vote. You need " + yearsLeft + " years to become a voter.");
     }