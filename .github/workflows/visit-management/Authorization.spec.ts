import {test} from '@playwright/test'
import { Console } from 'console'

test.describe ("test suit", async() => { 

    test ("Add", async(page) => { 
        console.log("I am logged in");
        
    
    } )
    
    test ("View", async(page) => {
        console.log("i am passed successfully");
    
    } )

    test ("Edit", async(page) => {
        console.log("i am passed successfully");
    
    } )

    test ("Delete", async(page) => {
        console.log("i am passed successfully");
    
    } )
}); 

