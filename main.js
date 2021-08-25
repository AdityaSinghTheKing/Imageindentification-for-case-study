Webcam.set({
    width:300,
    height:300,
    imageformat:'png',
    png_quality:90,
    constraints:{
        facingMode:"enviorment"
    }
})
camera=document.getElementById("camera")
Webcam.attach('#camera');

function TakeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capturedimage' src='"+data_uri+"'>"
    })
}
console.log("ml5version" , ml5.version)
classifier=ml5.imageClassifier("Mobilenet" , modelLoaded)
function modelLoaded(){
    console.log("Model is Loaded");    
}
function Check(){
    img=document.getElementById("capturedimage")
    classifier.classify(img , gotresult)
}
function gotresult(error , results){
    if(error){
        console.log(error)
    }
    else{
        console.log(results)
        document.getElementById("resultobjectname").innerHTML=results[0].label
    }
}