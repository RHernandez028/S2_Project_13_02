"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 2

   Author: Gabriel Hernandez 
   Date: 3/25/19
   
   Filename: mt_calc.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers
      
   buttonClick(e)
      Adds functions to the buttons clicked within the calcutlor
      
   calcKeys(e)
      Adds functions to key pressed within the calculator window 
      
   eraseChar(textStr)
      Erases the last character from the text string, textStr
      
   evalEq(textStr, decimals) 
      Evaluates the equation in textStr, returning a value to the number of decimals specified by the decimals parameter

   lastEq(textStr) 
      Returns the previous expression from the list of expressions in the textStr parameter

*/

window.onload = init;

//sets up the calculator for the user
function init() {
      var calcButtons = document.getElementsByClassName("calcButton");
      
      for (var i = 0; i < calcButtons.length; i++) {
            calcButtons[i].addEventListener("click", buttonClick);
      }
      
      document.getElementById("calcWindow").addEventListener("onkeydown", calcKeys);
}

//changes what appears in the calculator window
function buttonClick() {
      var calcValue = document.getElementById("calcWindow").value;
      var calDecimal = document.getElementById("decimal").value;
      var buttonValue = e.target.value;
}






/* ===================================================================== */

function eraseChar(textStr) { 
   return textStr.substr(0, textStr.length - 1);
}

function evalEq(textStr, decimals) {
   var lines = textStr.split(/\r?\n/);
   var lastLine = lines[lines.length-1];
   var eqValue = eval(lastLine);
   return eqValue.toFixed(decimals);
}  

function lastEq(textStr) {
   var lines = textStr.split(/\r?\n/);
   var lastExp = lines[lines.length-2];
   return lastExp.substr(0, lastExp.indexOf("=")).trim();
}