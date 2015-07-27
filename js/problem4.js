"use strict";

/*
 Problem 4:

 Background:
 At present, currency notes in India are issued in the denomination of Rs.5, Rs.10, Rs.20, Rs.50, Rs.100, Rs.500 and
 Rs.1000.
 http://www.rbi.org.in/currency/faqs.html

 Problem statement:
 Write a program that will enable counting of money given in the form of Indian currency notes. The program must take
 a variable number of arguments. These arguments must be summed and the total must be displayed. For any input number
 that does not match a valid currency denomination, ignore the value and stop counting further, displaying the sum
 counted so far.

 Examples:

 Given Rs 10, 20, 100 notes
 When I count the money
 Then my total is Rs 130

 Given Rs 20, 50, 10, 20, 13, 500 notes
 When I count the money
 Then my total is Rs 100

*/

// Write your JavaScript here
function changeElementText(element, answer) {
    $(element).text(answer);
}

function countMoney(arrayNotes) {
    var sum = 0;
    var listOfNotes = "";
    var shouldContinueSummation = true;

    for (var i = 0; i < arrayNotes.length; i++) {
        if (shouldContinueSummation && checkIfValid(arrayNotes[i])) {
            sum += arrayNotes[i];
        }
        else {
            shouldContinueSummation = false;
        }

        listOfNotes += arrayNotes[i];

        if (i < arrayNotes.length - 1) {
            listOfNotes += ", ";
        }
    }

    changeElementText("#notes", listOfNotes);
    changeElementText("#sum", sum);
}

function checkIfValid(note) {
    return (note == 5 || note == 10 || note == 20 || note == 50 || note == 100 || note == 500 || note == 1000);
}