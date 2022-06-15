nose_x="";
nose_y="";
leftWrist="";
rightWrist="";
diffrence="";
function perload()
{

}

function setup()
{
    canvas=createCanvas(450,450);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("Model Loaded");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
        leftWrist=results[0].pose.leftWrist.x;
        righttWrist=results[0].pose.rightWrist.x;
        diffrence=floor(leftWrist-rightWrist);
    }
}

function draw()
{
    background('#f5ee1b')
    textSize(diffrence);
    fill("violet");
    text("Poorvi",nose_x,nose_y) 
    
}