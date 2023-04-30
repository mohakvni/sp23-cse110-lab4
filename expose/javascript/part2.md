1. The code at line 12 will log 3 because `i` is declared with `var` giving it a function scope, so we can access it outside the loop and since after the loop, the final value of `i` was 3, hence code logs 3
   
2. The code at line 13 will log 150 because `discountedPrice` is declared with `var` giving it a function scope, so we can access it outside the loop with its value remaining the same as it was altered in the last iteration of the loop and since after the loop, the final value of `discounedPrice` was 150, hence code logs 150.
   
3. The code at line 13 will log 150 because `finalPrice` is declared with `var` giving it a function scope, so we can access it outside the loop with its value remaining the same as it was altered in the last iteration of the loop and since after the loop, the final value of `finalPrice` was 150, hence code logs 150.
   
4. This function will return an array of all prices discounted by 50% (`[50,100,150]`) since we are looping through the array, multiplying it by `1-discount` and then adding it the result array after rounding
   
5. The code will return an error since `i` is defined with `let` which would give it the block scope of the loop, so accessing it beyond the loop will raise an error implying that `i` as not been defined.
   
6. The code will return an error since `discountedPrice` is defined with `let` inside the loop which would give it the block scope of the loop, so accessing it beyond the loop will raise an error implying that `discountedPrice` as not been defined.
   
7. The code will log 150 since the `finalPrice` was declared outside the loop giving it a function scope whose value was altered in the last iteration of the loop, causing it to log 150.
   
8. This function will return an array of all prices discounted by 50% (`[50,100,150]`) since we are looping through the array, multiplying it by `1-discount` and then adding it the result array after rounding
   
9.  The code will return an error since `i` is defined with `let` which would give it the block scope of the loop, so accessing it beyond the loop will raise an error implying that `i` as not been defined.
    
10. The code will log out 3 which is the length of the parameter array `prices`
    
11. This function will return an array of all prices discounted by 50% (`[50,100,150]`) since we are looping through the array, multiplying it by `1-discount` and then adding it the result array
    
12. 
    <p>A) student.name </p>
    <p>B) student['Grad Year'] </p>
    <p>C) student.greeting() </p>
    <p>D) student['Favorite'].name </p>
    <p>E) student.courseload[0] </p> 

13. 
    <p>A) 32 since integers map to their exact string representation </p>
    <p>B) 1 since strings map to their exact integer representation </p>
    <p>C) 3 since null maps to 0 </p>
    <p>D) 3null since null would map to the string 'null' </p>
    <p>E) 4 since true maps to 1 </p>
    <p>F) 0 since both false and null map to 0 </p>
    <p>G) 3undefined since undefined would map to the string 'undefined' </p>
    <p>H) NaN since this would not result in a valid output type </p>

14. 
    <p>A) true since 2 maps to its integer representation and 2 > 1 </p>
    <p>B) false, this is basic string comparison, 'two' > 'twelve' </p>
    <p>C) true, since 2 maps to its integer representation and 2 == 2 </p>
    <p>D) false, since the two operands do not have same type </p>
    <p>E) false, since true maps to 1 and 1 != 2 </p>
    <p>F) true since true maps to 1 and Boolean(2) also returns 1</p>

15. The difference between `==` and `===` is that `==` is loose equality, it allows implicit type conversions if required, on the other hand `===` is strict equality, it does not allow implicit type conversions and requires both operands to be of same type.
    
16. [part2-question16](../javascript/part2-question16.js)
    
17. The result would be the array `[2,4,6]` since in the forloop, we are iterating through every element, calling the callback function `doSomething` onto the values which returns their value multiplied by 2and then pushing it to the new Array which is being returned outside the for Loop.

18. [part2-question18](../javascript/part2-question18.js)

19. ```
    1
    3
    2
    4
    ```
    This is because 2 has a timeOut of 1 second