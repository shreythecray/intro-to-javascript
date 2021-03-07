let hello = undefined

try { hello = require('../../test.js') }
catch(e) {
    throw new Error("Hey fam, check your file name. We were unable to find your file 'test.js' ");
}

let helloworld = hello()
let test_output = "Hello World!"

if(helloworld != test_output){
    throw new Error(`You got: ${helloworld}, was expecting: ${test_output}.`)
}

console.log("Yay! 🎉🎉🎉🎉🎉🎉🎉🍾")
