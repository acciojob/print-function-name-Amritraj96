//your JS code here. If required.
// script.js

function functionName() {
  // using arguments.callee.name to print the function's own name
  alert(arguments.callee.name);
}

// Example: calling the function
functionName(); // will alert "functionName"
