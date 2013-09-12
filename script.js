//Jeff Jensen

var theThing = new Array();
theThing = [0,0,0,0];
var max = 1;

//var theThing = 0;


$(document).ready(function(){
    
    

    
    
    
    
    displayThing();
    

//    while(true){//probably broken
//        displayThing();
//        for(var x=0;x<theThing.length();x++){
//            if(theThing[x] == 0) theThing[x] = 1

//    for(var loopy=0;loopy<Math.pow(max+1,theThing.length);loopy++){
//        console.log("loopy: "+loopy);
////        setTimeout(function(){increment()},1000);
//        increment
    
//    }

            
    
    
    
//    alert("theThing is: "+theThing);        
});


function goAgain(){
    $("button").attr("disabled",true);
    theThing = [0,0,0,0];
    displayThing();
    
    var intervalCount = 1;
    var intervalIncrement=setInterval(function(){
        increment();
        if(intervalCount>=(Math.pow(max+1,theThing.length))-1){
            clearInterval(intervalIncrement);
            $("button").removeAttr("disabled");
            console.log("intervalCount: "+intervalCount+" is greater than or equal to Base^Pixle: "+(Math.pow(max+1,theThing.length)-1)+"  KILL IT");
        }else console.log("intervalCount: "+intervalCount+" is NOT greater than or equal to Base^Pixle: "+(Math.pow(max+1,theThing.length)-1));
        console.log("intervalCount: "+intervalCount);
        intervalCount++;
    },1000);
}

function increment(){

    for(var i=theThing.length-1;i>=0;i--){
//	    alert("balls "+theThing);
        console.log("        Location in The Thing: " + i);
	    if(theThing[i]<max){
	        console.log("        theThing["+i+"] is less than "+max);
		    theThing[i]++;
		    //TODO break out?
		    break;
	    }else{
	        console.log("        theThing["+i+"] is not less than "+max);
		    theThing[i]=0;
		    //i--;
	    }

    }
//    setTimeout(1000);
    displayThing();
    console.log("    theThing: " + theThing);
}

//function displayThing(){ // an old way
//    var strThing = theThing.toString();
//    (strThing[0] == "0")?makeWhite(1):makeBlack(1);
//    (strThing[1] == "0")?makeWhite(2):makeBlack(2);
//    (strThing[2] == "0")?makeWhite(3):makeBlack(3);
//    (strThing[3] == "0")?makeWhite(4):makeBlack(4);
//}

function displayThing(){
//TODO put into for loop
    (theThing[0] > 0)?makeWhite(1):makeBlack(1);
    (theThing[1] > 0)?makeWhite(2):makeBlack(2);
    (theThing[2] > 0)?makeWhite(3):makeBlack(3);
    (theThing[3] > 0)?makeWhite(4):makeBlack(4);
}

function makeWhite(pixel){
    $("#px"+pixel).css("background-color","white");
}
    
function makeBlack(pixel){
    $("#px"+pixel).css("background-color","black");
}
