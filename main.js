noseX = 0;
noseY = 0;

function preload() {
    muSTACHE_Filter = loadImage('https://i.postimg.cc/QtgnL0JY/istockphoto-485318064-612x612-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(450, 450);
    canvas.position(450, 150);
    video = createCapture(VIDEO);
    video.size(450, 450);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
 
function modelLoaded() {
    console.log(" PoseNet is Initialized")
}
 
function gotPoses(results) {
    if(results.length > 0 )
    {
        console.log(results);
        noseX = results[0].pose.nose.x -105;
        noseY = results[0].pose.nose.y -50;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY)
    }
}
 
function draw(){
    image(video, 0, 0 , 450, 450)
    image(muSTACHE_Filter, noseX, noseY, 210, 160);
}
 
function take_snapshot() {
    save('Filter.png');
}