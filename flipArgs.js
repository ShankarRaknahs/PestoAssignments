/**
 * 
 * @function flipArgs - to flip the arguments for any type of input arguments
 * @param func - function is passed as an argument, this is to use the closure concept
 * @returns - reversed values as an object with array
 */



function flipAgrs(func){
    
    return function(){    
        let argumentsArray = Object.values(arguments)
        let reverseArray = [];

        if(arguments.length==0){
            return -1;
        }

        while(argumentsArray.length){
            reverseArray.push(argumentsArray.pop());
        }
            func(reverseArray)
    }
}


var flipped= flipAgrs(function(){
    console.log(arguments);
})

flipped('a','b','c','d');