
var names = ["John", "Jane", "Mark", "Martha", "Jake", "Sarah"];

// Loop over names array and print Hello or Goodbye
for (var i = 0; i < names.length; i++) {
    // If name starts with 'J' or 'j'
    if (names[i].charAt(0).toLowerCase() === "j") {
        console.log("Goodbye " + names[i]);
    } else {
        console.log("Hello " + names[i]);
    }
}
