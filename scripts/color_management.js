function toggleColor(color) {
    var clickedImage = document.getElementById(color)
    if (clickedImage.getAttribute('src') == `img/${color}_yes.png`) {
        clickedImage.src = `img/${color}_no.png`
        window.playerColors = removeOne(playerColors, color)
    }
    else {
        clickedImage.src = `img/${color}_yes.png`
        window.playerColors.push(color)
    }
    updateCounter()
    updateStartButton()
}

function removeOne(colorArray, color) {
    var output, len;
    len = colorArray.length
    for (i = 0; i < len; i++) {
        if (colorArray[i] == color) {
            delete colorArray[i]
        }
    }
    output = colorArray.filter(function() { return true; });
    return output
}

function updateCounter() {
    var len = window.playerColors.length
    if ((len > 10) || (len < 3)){
        document.getElementById('player-counter').style.color = "red"
    }
    else {
        document.getElementById('player-counter').style.color = "green"
    }
    document.getElementById('player-counter').innerHTML = `${len}/10 Players`
}

function updateStartButton() {
    var len = window.playerColors.length
    if ((len > 10) || (len < 3)){
        document.getElementById("start-button").style.opacity = 0.5
        console.log('not enough players')
    }
    else {
        document.getElementById("start-button").style.opacity = 1
        console.log('enough players')
    }
}