var PREFIX = ['稼げる', 'カレシができる', 'ヤセる', '成約率が上がる', 'アクセスが増える']

document.getElementById("think").onclick = (e) => {
    executePrefixer()
}
document.getElementById("name").onkeypress = (e) => {
    if (e.keyCode == 13) {
        executePrefixer()
    }
}

executePrefixer = () => {
    var resultDiv = document.getElementById("result")
    resultDiv.style = "display: block;"
    var resultTextDiv = document.getElementById("resultText")
    resultTextDiv.innerHTML = "<p>" + genarateName(document.getElementById("name").value) + "</p>"
}

genarateName = (baseName) => {
    return PREFIX[rand(PREFIX.length)] + baseName
}

rand = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}