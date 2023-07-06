// let hello = "Hello";

// function salutation(){
//     let name = "Deepak";
//     console.log(`${hello} ${name}`);
// }

// salutation();

// ============================================================================

// According to lexical scoping, the scopes can be nested and the inner function can access the variables declared in its outer scope. Hence in the code below, the inner function greet() has access to the variable name.

// function salutation() {
// 	let name = "Aayush";
// 	function greet() {
// 		console.log(`Hello ${name}!`);
// 	}
// 	greet();
// }

// salutation();


// ========================================================================
// Now let’s modify this salutation() function and rather than invoking the function greet(), we return the greet() function object.

function salutation() {
	let name = 'Aayush';

	function greet() {
		console.log(`Hello ${name}!`);
	}
	return greet;
}

let wish = salutation();
wish();
