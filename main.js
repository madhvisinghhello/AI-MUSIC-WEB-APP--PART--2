song1="";
song2="";
function setup(){
    canvas=createCanvas(690, 590);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 690, 590);
}

function preload(){
    song1=loadSound("um.mp3");
    song2=loadSound("Hello.mp3");

}

function play(){
    song1.play();
    song.setVolume(0.4);
    song.rate(1);

    song2.play();
    song.setVolume(0.4);
    song.rate(1);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        scoreleftWrist=results[0].pose.keypoints[9].score;
        scorerightWrist=results[0].pose.keypoints[10].score;
        console.log("scorerightWrist")

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX="+rightWristX+"rightWrisrY"+rightWristY);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX="+leftWristX+"leftWrisrY"+leftWristY);
    }
}

