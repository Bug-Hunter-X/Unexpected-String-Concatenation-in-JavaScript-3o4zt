# Unexpected String Concatenation in JavaScript

This repository demonstrates a common, yet often subtle, bug in JavaScript related to its loose typing system.  The `foo` function intends to perform numerical addition, but due to the implicit type coercion, it performs string concatenation when passed a number and a string.

## The Bug

The provided `bug.js` file contains a simple function `foo` that adds two values. When passed a number and a string, it unexpectedly concatenates them as strings instead of performing numerical addition.

## The Solution

The `bugSolution.js` file shows how to fix the bug by explicitly converting the input values to numbers using `parseInt` or `Number` before performing the addition. This ensures that numerical addition is performed correctly.

## How to Run

1. Clone the repository.
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript environment.
3. Run the code to observe the output of both the buggy and fixed versions.