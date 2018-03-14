//Looping a triangle
for (let asterix="#"; asterix.length < 8; asterix += "#"){
    console.log(asterix);
    }





//FizzBuzz
for (let i=1; i <=100; i++){
    if (i % 3 == 0){
        console.log("Fizz");
    }
    else if (i % 5 == 0){
        console.log("Buzz");
    }
      else{
      console.log(i);
      }
  
  }


//FizzBuzz
//not all if condition has to have an else!!!
for (let i=1; i <=100; i++){
    let word = "";
    if (i % 3 == 0){
        word += "Fizz";
    }
    if (i % 5 == 0){
        word += "Buzz";
    }
      console.log(word || i);
  }
  
  
//Chessboard
//CONFUSED!!!

let size = 8;
let board = "";

for (let x = 0; x < size; x++){
	for (let y = 0; y < size; y++){
      if ((x + y) % 2 == 0){
      	board += "#";
      } 
      else{
      	board += " ";
      }
        
    /*
    	the above if condition: 
        if x plus y is even number add the pound sign to the board string
        if x plus y is odd number add blank space to the board string
    */
	}
  board += "\n"; //new line after each loop run
}
console.log(board);