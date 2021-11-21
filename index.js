
let color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    document.getElementById('color').innerText = color
    document.body.style.backgroundColor = color
}
getRandomColor()
