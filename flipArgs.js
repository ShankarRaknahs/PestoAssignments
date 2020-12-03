
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