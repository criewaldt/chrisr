//chrisr.js

function addApi() {
    var data = {
        num1: document.getElementById("num1").value,
        num2: document.getElementById("num2").value
        };
    $.ajax({
        type: "POST",
        url: '/api/add',
        data: data,
        success: function(result) {
            document.getElementById("answer").innerHTML = result.msg;
        }
    });
}

$( document ).ready(function() {
    //do something
    
});