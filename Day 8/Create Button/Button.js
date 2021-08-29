var btn = document.getElementById("buttonn");
var clickCount = 0;
btn.innerText = clickCount;
btn.onclick = function() {
    clickCount += 1;
    btn.innerText = clickCount;
}