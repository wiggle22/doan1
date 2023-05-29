
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdEnacqIdy5s9paGf9gFLpkw0wmIJGoYQ",
    authDomain: "iot-esp32-1b709.firebaseapp.com",
    databaseURL: "https://iot-esp32-1b709-default-rtdb.firebaseio.com",
    projectId: "iot-esp32-1b709",
    storageBucket: "iot-esp32-1b709.appspot.com",
    messagingSenderId: "1003506765169",
    appId: "1:1003506765169:web:47ae8caca37332db737ad0",
    measurementId: "G-VKGW57SJ7H"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



// S1
var s1_on = document.getElementById("s1-on");
var s1_off = document.getElementById("s1-off");

s1_on.onclick = function(){
console.log("On");
document.getElementById("s1-img").src = "/static/images/full.png"

firebase.database().ref("/DOAN1").update({
    "S1": "co xe" 
})
}

s1_off.onclick = function(){
document.getElementById("s1-img").src = "/static/images/free.png"

firebase.database().ref("/DOAN1").update({
    "S1": "trong" 
})
}

// Upload S1 -------------------------------------------------
firebase.database().ref("/DOAN1/S1").on("value", function(snapshot){
    var xe1 = snapshot.val();
    if (xe1 =="co xe")
        document.getElementById("s1-img").src = "/static/images/full.png"
    else
        document.getElementById("s1-img").src = "/static/images/free.png"
})

// S2
var s2_on = document.getElementById("s2-on");
var s2_off = document.getElementById("s2-off");

s2_on.onclick = function(){
console.log("On");
document.getElementById("s2-img").src = "/static/images/full.png"

firebase.database().ref("/DOAN1").update({
    "S2": "co xe" 
})
}

s2_off.onclick = function(){
document.getElementById("s2-img").src = "/static/images/free.png"

firebase.database().ref("/DOAN1").update({
    "S2": "trong" 
})
}

// Upload S2 -------------------------------------------------
firebase.database().ref("/DOAN1/S2").on("value", function(snapshot){
    var xe2 = snapshot.val();
    if (xe2 =="co xe")
        document.getElementById("s2-img").src = "/static/images/full.png"
    else
        document.getElementById("s2-img").src = "/static/images/free.png"
})

// S3
var s3_on = document.getElementById("s3-on");
var s3_off = document.getElementById("s3-off");

s3_on.onclick = function(){
console.log("On");
document.getElementById("s3-img").src = "/static/images/full.png"

firebase.database().ref("/DOAN1").update({
    "S3": "co xe" 
})
}

s3_off.onclick = function(){
document.getElementById("s3-img").src = "/static/images/free.png"

firebase.database().ref("/DOAN1").update({
    "S3": "trong" 
})
}

// Upload S3 -------------------------------------------------
firebase.database().ref("/DOAN1/S3").on("value", function(snapshot){
    var xe3 = snapshot.val();
    if (xe3 =="co xe")
        document.getElementById("s3-img").src = "/static/images/full.png"
    else
        document.getElementById("s3-img").src = "/static/images/free.png"
})

// S4
var s4_on = document.getElementById("s4-on");
var s4_off = document.getElementById("s4-off");

s4_on.onclick = function(){
console.log("On");
document.getElementById("s4-img").src = "/static/images/full.png"

firebase.database().ref("/DOAN1").update({
    "S4": "co xe" 
})
}

s4_off.onclick = function(){
document.getElementById("s4-img").src = "/static/images/free.png"

firebase.database().ref("/DOAN1").update({
    "S4": "trong" 
})
}

// Upload S4 -------------------------------------------------
firebase.database().ref("/DOAN1/S4").on("value", function(snapshot){
    var xe4 = snapshot.val();
    if (xe4 =="co xe")
        document.getElementById("s4-img").src = "/static/images/full.png"
    else
        document.getElementById("s4-img").src = "/static/images/free.png"
})

// Barrier
var barrier_on = document.getElementById("barrier-on");
var barrier_off = document.getElementById("barrier-off");

barrier_on.onclick = function(){
console.log("On");
document.getElementById("barrier-img").src = "/static/images/barrier-open.png"

firebase.database().ref("/DOAN1").update({
    "barrier": "mo" 
})
}

barrier_off.onclick = function(){
document.getElementById("barrier-img").src = "/static/images/barrier-closed.png"

firebase.database().ref("/DOAN1").update({
    "barrier": "dong" 
})
}

// Upload barrier -------------------------------------------------
firebase.database().ref("/DOAN1/barrier").on("value", function(snapshot){
    var barrier = snapshot.val();
    if (barrier =="dong")
        document.getElementById("barrier-img").src = "/static/images/barrier-closed.png"
    else
        document.getElementById("barrier-img").src = "/static/images/barrier-open.png"
})