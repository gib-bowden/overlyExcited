// Create an array that contains the words in the sentence
var str = 'The walrus danced through the trees in the light of the moon'

var sentence = str.split(" ");

// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {
	var bangPlace = 3
	var output = ""; 
    for (var i = 0; i < theWordArray.length; i++) {
    	var word = (x) => {return x + 1};
       	(word(i) % bangPlace === 0) ? output += theWordArray[i] + "!".repeat(word(i)/bangPlace) + " " : output += theWordArray[i] + " ";       	
       	console.log(output);
    }    
} 
// Invoke the function and pass in the array
addExcitement(sentence)

