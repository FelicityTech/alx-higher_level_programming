# JavaScript - Warm up


[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg)](https://github.com/standard/semistandard)

## Background Context
JavaScript is used for many things. Here, you will use JavaScript for 2 reasons:

- Scripting (same as we did with Python)Scripting (same as we did with Python)

- Web front-end

<details><summary>Resources</summary>
<p> 

* [Writing JavaScript Code](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)

* [Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)

* [Data Types](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)

* [Operators](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)

* [Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

* [Controlling Flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)

* [Functions](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions)

* [Objectives and Arrays](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)

* [Intrinsic Objects](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)

* [Module Patterns](https://darrenderidder.github.io/talks/ModulePatterns/#/)

* [var, let and constant](https://www.youtube.com/watch?v=sjyJBL5fkp8)

* [JavaScript Tutorial](https://www.youtube.com/watch?v=vZBCTc9zHtI)

* [Modern Js](https://github.com/mbeaudru/modern-js-cheatsheet)

</p>
</details>

<details><summary>Learning Objectives</summary>
<p>

* Why JavaScript programming is amazing

* How to run a JavaScript script 

* How to create variables and constants

* What are differences between `var`, `const` and `let`

* What are all the data types available in JavaScript

* How to use the `if`, `if ... else` statements

*  How to use comments

* How to affect values to variables

* How to use `while` and `for` loops

* How to use `break` and `continue` statements

* What is a function and how do you use functions

* What does a function that does not use any `return` statement return

* Scope of variables

*  What are the arithmetic operators and how to use them
How to manipulate dictionary

* vascript-warm_up0x12-javascript-warm_up How to import a file

</p>

</details>

<details><summary>Requirements</summary>
<p>


* Allowed editors: `vi`, `vim`, `emacs`

* All your files will be interpreted on Ubuntu 20.04 LTS using `node` (version 14.x)

* All your files should end with a new line

* The first line of all your files should be exactly  `#!/usr/bin/node`

* A `README.md` file, at the root of the folder of the project, is mandatory
 Your code should be  `semistandard` compliant (version 16.x.x). [Rules of Standard ](https://alx-intranet.hbtn.io/rltoken/1T1yg1vOAChRN20Yyz8crw) + [semicolons on top](https://alx-intranet.hbtn.io/rltoken/35q5Pc6A6KWPyd3kGeRQFg). Also as reference: [AirBNB style](https://github.com/airbnb/javascript)

* All your files must be executable

* The length of your files will be tested using  `wc`

</p>
</details>

# Install Node 14
- `$ curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -`
- `$ sudo apt-get install -y nodejs`

# Install Semi-standard
- [Documentation](https://github.com/standard/semistandard)
- `$ sudo npm install semistandard --global`


# Tasks
<details><summary>0-javascript_is_amazing.js</summary>
<p>
Write a script that prints “JavaScript is amazing”:

* You must create a constant variable called  `myVar`  with the value “JavaScript is amazing

* You must use  `console.log(...)`  to print all output

* You are not allowed to use `var`
</p>
</details>

<details><summary>1-multi_languages.js</summary>
<p>

Write a script that prints 3 lines:

* The first line: “C is fun”

* The second line: “Python is cool”

* The third line: “JavaScript is amazing”

* You must use  `console.log(...)`  to print all output

* You are not allowed to use  `var`

</p>
</details>

<details><summary>2-arguments.js</summary>
<p>

Write a script that prints a message depending of the number of arguments passed:

* If no arguments are passed to the script, print “No argument”

* If only one argument is passed to the script, print “Argument found”

* Otherwise, print “Arguments found”

* You must use `console.log(...)` to print all output

* You are not allowed to use `var`

Reference: [process.argv](https://nodejs.org/api/process.html#process_process_argv)

</p>
</details>

<details><summary>3-value_argument.js</summary>
<p>

Write a script that prints the first argument passed to it:

* If no arguments are passed to the script, print “No argument”

* You must use `console.log(...)` to print all output

* You are not allowed to use `var`

* You are not allowed to use `length`

</p>
</details>

<details><summary>4-concat.js</summary>
<p>

Write a script that prints two arguments passed to it, in the following format: “ is ”

* You must use `console.log(...)` to print all output

* You are not allowed to use `var`

</p>
</details>
