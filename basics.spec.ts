import {test} from '@playwright/test'
import { Console } from 'console'

test.describe ("test suit", async() => { 

    test ("should login successfully", async() => { 
        console.log("I am logged in");
        
    
    } )
    
    test ("should go to Portal", async() => {
        console.log("i am passed successfully");
    
    } )

}); 



// test ("should Capture patient", async() => {

// } )

// test ("should go to Diagnosis", async() => {

// } )

// test ("should Add Diagnosis successfully", async() => {

// } )