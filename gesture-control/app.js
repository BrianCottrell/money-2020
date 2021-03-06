/* Gesture Control    */
/* by Brian Cottrell  */
/* 10-18-2015         */

//Create a basic express app
var express = require('express');
var app = express();
var http = require('http').Server(app);
//Add Myo armband library
var Myo = require('myo');
//Track the last gesture detected
var gesture = {
    gestureType: 'none'
};
//Start talking with Myo Connect
Myo.connect();

//Get imu data from the device
// Myo.on('imu', function(data){
//     console.log(data);
// });

Myo.on('fist', function(){
    gesture.gestureType = 'select';
    console.log('fist gesture detected');
    this.vibrate();
});

Myo.on('fingers_spread', function(){
    gesture.gestureType = 'back';
    console.log('finger spread gesture detected');
    this.vibrate();
});

Myo.on('wave_in', function(){
    gesture.gestureType = 'left';
    console.log('wave in gesture detected');
    this.vibrate();
});

Myo.on('wave_out', function(){
    gesture.gestureType = 'right';
    console.log('wave out gesture detected');
    this.vibrate();
});

app.get('/myo', function(req, res){
    res.status(200).send(gesture);
    gesture.gestureType = 'none';
});

var port = process.env.PORT || 5000;
//Run server
http.listen(port, function() {
  console.log('listening on 5000');
});