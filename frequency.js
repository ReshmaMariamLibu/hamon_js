function frequency(string){

// create an empty dictionary
   let dictionary = {};

// checks whether the char is in the dictionary
    for (let char of string){
        if (dictionary[char]) {

// increment the dictionary value by 1
            dictionary[char] += 1;
        }else{
            
// add char with value 1
            dictionary[char] = 1
        }
    }
    console.log(dictionary);
}

let string = "frequency"
frequency(string);