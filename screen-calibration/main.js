/* Screen Calibration */
/* by Brian Cottrell  */
/* 10-18-2015         */

/*Calibration with a reset button*/
//Use this function to determine the ratio of pixes to a known unit of measure
//Calibration is set once until until the count is reset
var calibrationState = {count: 1, x: 0, y: 0, ratio: 0};
window.addEventListener('click', function(e){
	if(calibrationState.count == 1){
		calibrationState.x = e.x;
		calibrationState.y = e.y;
	}else if(calibrationState.count == 2){
		console.log(Math.round(Math.sqrt(Math.pow(e.x-calibrationState.x, 2)+Math.pow(e.y-calibrationState.y, 2))));
	}
	calibrationState.count++;
})
//Add a reset button so that the calibration function can be used more than once
document.getElementsByTagName('button')[0].addEventListener('click', function(e){
	calibrationState = {count: 0, x: 0, y: 0, ratio: 0};
});

// /*Calibration witout a reset button*/
// //Use this function to determine the ratio of pixes to a known unit of measure
// //Calibration is set on each even click
// var calibrationState = {count: 0, x: 0, y: 0, ratio: 0};
// window.addEventListener('click', function(e){
// 	if(calibrationState.count%2 == 1){
// 		calibrationState.x = e.x;
// 		calibrationState.y = e.y;
// 	}else{
// 		console.log(Math.round(Math.sqrt(Math.pow(e.x-calibrationState.x, 2)+Math.pow(e.y-calibrationState.y, 2))));
// 	}
// 	calibrationState.count++;
// })

document.getElementsByTagName('div')[0].addEventListener('mousemove', function(e){
	document.getElementsByTagName('div')[1].style.left = e.x+'px';
	document.getElementsByTagName('div')[1].style.top = e.y+'px';
});