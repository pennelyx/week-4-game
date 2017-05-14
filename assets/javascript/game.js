$(document).ready(function() {

	var goalNum;
	var wins=0;
	var losses=0;
	var gemNum=[];
	var currentScore;

	var init = function () {
		currentScore=0;
		$("#currentScoreDiv").text("Your Current Score: " + currentScore);
		goalNum = Math.floor(Math.random()*(120-19)) + 19;
		$("#goalNumDiv").text("The goal number: " + goalNum);

		for (var i = 0; i<4; i++){
			gemNum[i]= Math.floor(Math.random()*11) + 1;
		}
	}

	init();

	
	$("#winRecordDiv").text(wins);
	$("#lossRecordDiv").text(losses);


	$("#gem0Id").on("click", function(){
		currentScore = currentScore+gemNum[0];
		$("#currentScoreDiv").text("Your Current Score: " + currentScore);
		if (currentScore== goalNum) {
			$("#winOrLoss").text("You won!");
			init();
			wins++;
			$("#winRecordDiv").text(wins);
		}
		if (currentScore>goalNum) {
			$("#winOrLoss").text("You lost!");
			init();
			losses++;
			$("#lossRecordDiv").text(losses);
		}
	});

	$("#gem1Id").on("click", function(){
		currentScore = currentScore+gemNum[1];
		$("#currentScoreDiv").text("Your Current Score: " + currentScore);
		if (currentScore== goalNum) {
			$("#winOrLoss").text("You won!");
			init();
			wins++;
			$("#winRecordDiv").text(wins);
		}
		if (currentScore>goalNum) {
			$("#winOrLoss").text("You lost!");
			init();
			losses++;
			$("#lossRecordDiv").text(losses);
		}
	});

	$("#gem2Id").on("click", function(){
		currentScore = currentScore+gemNum[2];
		$("#currentScoreDiv").text("Your Current Score: " + currentScore);
		if (currentScore== goalNum) {
			$("#winOrLoss").text("You won!");
			init();
			wins++;
			$("#winRecordDiv").text(wins);
		}
		if (currentScore>goalNum) {
			$("#winOrLoss").text("You lost!");
			init();
			losses++;
			$("#lossRecordDiv").text(losses);
		}
	});

	$("#gem3Id").on("click", function(){
		currentScore = currentScore+gemNum[3];
		$("#currentScoreDiv").text("Your Current Score: " + currentScore);
		if (currentScore== goalNum) {
			$("#winOrLoss").text("You won!");
			init();
			wins++;
			$("#winRecordDiv").text(wins);
		}
		if (currentScore>goalNum) {
			$("#winOrLoss").text("You lost!");
			init();
			losses++;
			$("#lossRecordDiv").text(losses);
		}
	});

});