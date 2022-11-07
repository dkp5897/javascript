let nam = "Hello Deepak";

console.log(nam.toLowerCase());
console.log(nam.toUpperCase());

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  console.log(capitalizeFirstLetter('ashu'));