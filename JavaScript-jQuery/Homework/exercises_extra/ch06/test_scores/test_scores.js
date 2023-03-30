"use strict";



const $ = selector => document.querySelector(selector);

const names = ["Ben", "Joel", "Judy", "Anne"];
const scores = [88, 98, 77, 88];


const createElementWithText = (tagName, text) => {
	const element = document.createElement(tagName);
	const textNode = document.createTextNode(text);
	element.appendChild(textNode);
	return element;
}

const addScore = () => {
	const nameNode = $("#name");
	const scoreNode = $("#score");

	const name = nameNode.value;
	const score = parseInt(scoreNode.value);

	let isValid = true;

	if (name === "") {
		nameNode.nextElementSibling.textContent = "Please enter a name";
		isValid = false;
	}
	else {
		nameNode.nextElementSibling.textContent = "";
	}

	if (isNaN(score) || (score < 0) || (score > 100)) {
		scoreNode.nextElementSibling.textContent = "Enter score from 0 - 100";
		isValid = false;
	}
	else {
		scoreNode.nextElementSibling.textContent = "";
	}

	if (isValid) {
		names[names.length] = name;
		scores[scores.length] = score;
		nameNode.value = "";
		scoreNode.value = "";
	}

	nameNode.focus();
}

const displayResults = () => {
	let scoreTotal = 0;
	let highScore = 0;
	let highScoreName = "";
	let avgScore = 0.0;

	//loop though scores array
	for (let i in scores) {
		//checking for high score
		scoreTotal += scores[i];
		if (scores[i] > highScore) {
			highScore = scores[i];
			highScoreName = names[i];
		}
	}

	avgScore = (scoreTotal / scores.length).toFixed(2);

	const headerNode = createElementWithText("h2", "Results");

	const avgScoreNode = createElementWithText("p", `Average Score = ${avgScore}`);
	const highScoreNode = createElementWithText("p", `High Score = ${highScoreName} with a score of ${highScore}`);

	const div = $("#results");
	if (div.querySelector("h2") == undefined) {
		div.appendChild(headerNode);
		div.appendChild(avgScoreNode);
		div.appendChild(highScoreNode);
	}
	else {


		div.replaceChild(headerNode, div.firstChild);
		div.replaceChild(avgScoreNode, div.firstChild.nextElementSibling);
		div.replaceChild(highScoreNode, div.lastChild);

	}
}

const displayScores = () => {
	const div = $("#scores");
	div.textContent = "";
	div.appendChild(createElementWithText("h2", "Scores"));

	for (let i in scores) {
		div.appendChild(createElementWithText("label", names[i]));
		div.appendChild(createElementWithText("label", scores[i]));
		div.appendChild(document.createElement("br"));
	}
}


document.addEventListener("DOMContentLoaded", () => {
	// add event handlers
	$("#add").addEventListener("click", addScore);
	$("#display_results").addEventListener("click", displayResults);
	$("#display_scores").addEventListener("click", displayScores);

	$("#name").focus();
});