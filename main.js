status "";
function draw()
{
    r = random(255);
    g = random(255);
    b = random(255);
    fill(r,b,g);
    stroke(r,b,g);
    image(video,0,0,640,420);
    fill('#FF0000');
    text("Bedroom,45,75")
    noFill();
    stroke('#FF0000');
    rect(30,60,450,350);

    image(video,0,0,640,420);
    fill('#FF0000');
    text("Tv and Ac,45,75")
    noFill();
    stroke('#FF0000');
    rect(30,60,450,350);

    image(video,0,0,640,420);
    fill('#FF0000');
    text("Desk,45,75")
    noFill();
    stroke('#FF0000');
    rect(30,60,450,350);

    image(video,0,0,640,420);
    fill('#FF0000');
    text("Bottle,45,75")
    noFill();
    stroke('#FF0000');
    rect(30,60,450,350);

    image(video,0,0,640,420);
    fill('#FF0000');
    text("Fruit Basket,45,75")
    noFill();
    stroke('#FF0000');
    rect(30,60,450,350);

}
function setup()
{
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object"
}
function modelLoaded()
{
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(video,gotResult);
}
function gotResult(error,results)
{
    if(error)
    {
        console.log(error);
    }
    console.log(results);
}