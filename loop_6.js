// Write a program that prints a pattern of stars using nested loops. 
// Print a right-angled triangle pattern with 5 rows.

for(i=1;i<=5;i++){
    let set_1=""

    for(j=1;j<=i;j++){
        set_1 += "*"
    }
    console.log(set_1); 
}