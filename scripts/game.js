async function startGame() {
    if ((window.playerColors.length > 10) || (window.playerColors.length < 3)){
        alert("Player count must be between 3 and 10")
    }
    else {
        document.getElementById("player-container").innerHTML = generatePlayerTable()

        document.getElementById("selection-page").classList.toggle("faded")

        await sleep(80)
        $('.wrapper').scrollTo('#game-page', {duration:600})
        window.currentPage = $('game-page')
        await sleep(300)

        document.getElementById("game-page").classList.toggle("faded")
    }
}

async function endGame() {
    document.getElementById("game-page").classList.toggle("faded")

    await sleep(80)
    $('.wrapper').scrollTo('#post-game', {duration:600})
    window.currentPage = $('#post-game')
    await sleep(300)

    document.getElementById("post-game").classList.toggle("faded")
}

function generatePlayerTable() {
    var tableString;
    tableString = "<table>"
    
    rowNum = Math.ceil(window.playerColors.length/2)

    for (i=0; i<rowNum; i++) {
        tableString += "<tr>"
        
        if (window.playerColors[i+rowNum] == undefined) {
            tableString += `<td>${window.playerColors[i]}</td>`
        }
        else {
            tableString += `<td>${window.playerColors[i]}</td><td>${window.playerColors[i+rowNum]}`
        }
    }

    tableString += "</table>"

    return tableString
}