$(document).ready(function() {	
var i = prompt("Guess a number between 1-100!!");
var count = [];
var parse = parseInt(i);

var fizzbuzz = function(){
	if (i % 5 == 0 && i % 3 == 0) {
	count.push("fizz buzz");
	} else if(i % 3 == 0) {
    count.push("fizz");
	} else if(i % 5 == 0) {
	count.push("buzz");
    } else
	count.push(i);	

};

for(var i = 1; i<= parse; i++) {
	fizzbuzz(i)
}//fizzbuzz(parse);

count;
parse;
fizzbuzz();
document.write(count);
});




 