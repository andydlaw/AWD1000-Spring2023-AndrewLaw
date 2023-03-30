"use strict"

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];
const minscore = 0;
const maxscore = 100;

const $ = selector => document.querySelector(selector);

const addScore = () => {
	// get user entries
	const name = $("#name").value;
	const score  = parseInt( $("#score").value );
	let isValid = true;
    
    // check entries for validity
    if (name === "") {
		$("#name").nextElementSibling.textContent = "This field is required.";
		isValid = false;
	} else {
		$("#name").nextElementSibling.textContent = "";
	}
	
	if (isNaN(score) || score < minscore || score > maxscore) {
		$("#score").nextElementSibling.textContent = "You must enter a score from 0 to 100.";
		isValid = false;
	} else {
		$("#score").nextElementSibling.textContent = "";
	}
	
	if (isValid) {
		names[names.length] = name;
		scores[scores.length] = score;
	    $("#name").value = "";
		$("#score").value = "";
		$("#score_display").value="";
	}
    $("#name").focus();
};

const displayScores = () =>{
	let scoreDisplay = "";
	let totalPoints = 0;
	let testAvg = 0.0;
	for (let i = 0; i< scores.length; ++i){
		scoreDisplay += names[i] + " = " + scores[i]+ "\n";
		totalPoints += scores[i];
	}

	$("#scores_display").value = scoreDisplay;
	testAvg = totalPoints/scores.length;
	$("#avg").value = testAvg.toFixed(2);
}

document.addEventListener("DOMContentLoaded", () => {
	$("#add").addEventListener("click", addScore);
	$("#display_scores").addEventListener("click", displayScores)
	$("#name").focus();
});
