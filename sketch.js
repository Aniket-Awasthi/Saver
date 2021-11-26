

var a = 0;
var t;
var lat;
var lng ;
var bd = 0;
var b = 1;
var bg = "white";
var tim = 0;
var s;

function preload(){

s = loadSound("tt.wav");
}
function setup() {
 t= createCanvas(windowWidth, windowHeight);

  console.log('starting');
	noStroke();
  // get position once
  if (!navigator.geolocation) {
    alert("navigator.geolocation is not available");
  }
  navigator.geolocation.getCurrentPosition(setPos);
  t.mouseClicked(galarry);

}

function draw(){
  background(bg);
tim = tim + 1;
if(bd === 1){
if(b===1 && tim < 6){

  bg = "red";
  if(tim > 6){
  b=0;
  }
}else{
  bg = "blue";
 b=1;
 if(tim >12){
   tim = 0;
 }

}

}



  if(a===1){
    Email.send({
      SecureToken: "8f3f3aff-06d2-493b-aa98-1d135b73a48b",
      To: "s.9b15444aniketawasthi@kv2jammucantt.in",
      From: "s.9b15444aniketawasthi@kv2jammucantt.in",
      Subject: "ANIKET is in !!!DANGER!!!  wants  ! HELP !",
      Body: "Current Location: " + nf(lat,2,2) + " " + nf(lng,2,2)
    }).then(
      message => console.log("sended")
    );;
    bd = 1;



  a=0;

  }
}


function galarry(){
  s.loop();
  s.play();

a=1

}






function setPos(position) {
   lat = position.coords.latitude;
   lng = position.coords.longitude;

}
