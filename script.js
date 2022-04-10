var stat = document.getElementsByClassName("statisticsBar")[0]
var statLol = stat.getElementsByClassName("valueLol")[0]

var menu = document.getElementsByClassName("menu")[0]
var lolButton = menu.querySelector(".lolBtn")
var desLolButton = menu.querySelector(".lol p")

var upgradeButton = menu.querySelector(".onClickUpgrade button")
var desUpgradeButton = menu.querySelector(".onClickUpgrade p")
loadLol = localStorage.getItem("lol")

var lol = parseInt(localStorage.getItem("lolValue"))
if (!lol) {
    lol = 0
}
var onClickLol = 1
var costUpgrade = 10;

lolButton.onclick = () => {
    lol += onClickLol
    statLol.textContent = "LOL: " + lol

    localStorage.setItem("lolValue", lol)
}

upgradeButton.onclick = () => {
    if (lol >= costUpgrade) {
        onClickLol++
        lol -= costUpgrade
        costUpgrade += costUpgrade / 4 - costUpgrade / 4 % 1

        desUpgradeButton.textContent = "Cost: " + costUpgrade + "LOL"

        desLolButton.textContent = "+" + onClickLol + "LOL"
        statLol.textContent = "LOL: " + lol
    }
}