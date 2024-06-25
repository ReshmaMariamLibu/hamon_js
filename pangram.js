// defines a function ispangram
function isPangram(text) {
    // defines variable alphabet containing a string with all the alphabets
    var alphabets = "abcdefghijklmnopqrstuvwxyz";

// iterate through each character in the alphabets
    for (let ch of alphabets) {
        
// checks the current character is present in the text and the indexOf() method returns -1 if the character is not found in the text
        if (text.indexOf(ch) === -1) {
            console.log("Not Pangram");
            return;
        }
    }
    console.log("Pangram");
}

var text = "quick brown fox jumped over the lazy dogs";
isPangram(text);  

