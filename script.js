var scr = ""; 
function calculate() {
    var ans;
    if (scr.indexOf("+") != -1) {
        var num = scr.split("+");
        var x = parseInt(num[0], 2);
        var y = parseInt(num[1], 2);
        var sum = x + y;
        ans = sum.toString(2);
    } else if (scr.indexOf("-") != -1) {
        var num = scr.split("-");
        var x = parseInt(num[0], 2);
        var y = parseInt(num[1], 2);
        var sub = x - y;
        ans = sub.toString(2);
    } else if (scr.indexOf("*") != -1) {
        var num = scr.split("*");
        var x = parseInt(num[0], 2);
        var y = parseInt(num[1], 2);
        var mul = x * y;
        ans = mul.toString(2);
    } else if (scr.indexOf("/") != -1) {
        var num = scr.split("/");
        var x = parseInt(num[0], 2);
        var y = parseInt(num[1], 2);
        var div = x / y;
        ans = div.toString(2);
    }
    scr = ans;
    document.getElementById("output").innerHTML = scr;
}

function input(ch) {
    scr += ch;
    document.getElementById("output").innerHTML = scr;
}

function backspace() {
    var b = document.getElementById("output").innerHTML;
    scr = b.substring(0, b.length - 1);
    document.getElementById("output").innerHTML = scr;
}

function cls() {
    scr = "";
    document.getElementById("output").innerHTML = scr;
}
