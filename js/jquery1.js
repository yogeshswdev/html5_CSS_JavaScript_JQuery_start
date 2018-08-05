$(document).ready(function(){
//var msg = "Hello javascript";
//console.log(msg);

//var resultsDiv = document.getElementById("results");
//resultsDiv.innerHTML ="<p>This is from javascript</p>";
var resultList = $("#resultList");
resultList.text("This is from Jquery");

var toggleButton = $("#toggleButton");
toggleButton.on("click", function(){
    resultList.toggle(500);

    if (toggleButton.text() == "Hide") 
    toggleButton.text("show");
    else toggleButton.text("Hide");
});

var navlist = $("header nav li");
navlist.css("font-size", "22px");

//$("#githubSearchForm").on("submit", function(){
    var search1 = $("#search"); 
    search1.on("click", function(){

        var SearchPhrase = $("#SearchPhrase").val();
        var useStars = $("#useStars").val();
        var langChoice = $("#langChoice").val();
    if(SearchPhrase){
            resultList.text("Performing search");
            //var githubUri = "https://api.github.com/search/repositories?q=jquery+language:javascript&sort=stars";
            var githubUri = "https://api.github.com/search/repositories?q="+encodeURIComponent(SearchPhrase);
            if(langChoice != 'All'){
                githubUri += "+language:" + encodeURIComponent(langChoice);
            };
            if(useStars){
                githubUri += "&sort=stars";
            }

            $.ajax({
                type: "GET",
                url: githubUri,
                success: function (r) {
                    displayResults(r.items);
                },
                fail: function(err) {
                    console.log("failed to query");
                },
                done: function(){
                
                }
            });
                };
                return false;
});


/*$.get(githubUri)
.success(function(r) {
    //console.log(r.items.length);
    displayResults(r.items);
})
.fail(function(err) {
    console.log("failed to query");
})
.done(function(){

});*/
/*
var results = [{
    name:"Jqquery",
    language:"Javascript",
    score:4.5,
    showLog: function(){

    },
    owner:{
        login:"Yogesh",
        id: 123445
    }},{
        name:"JqqueryUI",
        language:"Javascript",
        score:3.5,
        showLog: function(){
    
        },
        owner:{
            login:"Khot",
            id: 123445
        }

}]; */

function displayResults(results){
resultList.empty();
$.each(results, function(i, item){
    var newResult = $("<div class='result'>" + 
"<div class='title'>" +item.name +"</div>"+ 
"<div class='language'>" +item.language +"</div>"+ 
"<div class='score'>" +item.owner.login +"</div>");
newResult.hover(function(){
    $(this).css("background-color", "lightgray");
}, function(){
    $(this).css("background-color", "transparent");
})
resultList.append(newResult);
});
};

//console.log("msg is " + typeof(msg));
//console.log("resultsDiv is " + typeof(resultsDiv));

/*function showMsg(msg, msgmore) {
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
}); */

});