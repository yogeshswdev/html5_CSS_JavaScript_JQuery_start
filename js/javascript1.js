
var msg = "Hello javascript";
console.log(msg);

var resultsDiv = document.getElementById("results");
resultsDiv.innerHTML ="<p>This is from javascript</p>";

console.log("msg is " + typeof(msg));
console.log("resultsDiv is " + typeof(resultsDiv));

function showMsg(msg, msgmore) {
if(msgmore){
    console.log("showmsg+ " + msg + msgmore);
} else{
    console.log("showmsg "+ msg);
}
}

showMsg("some info");
showMsg("some info", "more");

var showIt = function (msg) {
    console.log("showit "+ msg);
}

showIt("showit info");

function showItThen(msg, callback){
    showIt(msg);
    callback();
}

showItThen("showit then", function (msg){
    console.log("callback called");
});