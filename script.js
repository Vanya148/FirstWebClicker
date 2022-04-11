var stat = document.getElementsByClassName("statisticsBar")[0]
var statLol = stat.getElementsByClassName("valueLol")[0]

var menu = document.getElementsByClassName("menu")[0]
var lolButton = menu.querySelector(".lolBtn")
var desLolButton = menu.querySelector(".lol p")

var upgradeButton = menu.querySelector(".onClickUpgrade button")
var desUpgradeButton = menu.querySelector(".onClickUpgrade p")

var savaButton = document.querySelector(".saveBt")
var deleteSaveButton = document.querySelector(".deleteSaveBt")

var lol = 0
var lolOnClick = 1
var costUpgrade = 10;
var increaseCostUpgrade = 8

LoadDate()
UpdateText()

lolButton.onclick = () => {
    for(var i = 0; i < lolOnClick; i++){
        console.log('Taking a break...');
        await new Promise(r => setTimeout(r, 5000));
        console.log('Two second later')
    }

    UpdateText()
}

upgradeButton.onclick = () => {
    if (lol >= costUpgrade) {
        lolOnClick++
        lol -= costUpgrade
        costUpgrade += costUpgrade / increaseCostUpgrade - costUpgrade / increaseCostUpgrade % 1
        UpdateText()
    }
}

savaButton.onclick = () => {
    SaveDate()    
}

deleteSaveButton.onclick = DeleteSave()

function SaveDate(){
    localStorage.setItem("lolValue", lol)
    localStorage.setItem("lolOnClick", lolOnClick)
    localStorage.setItem("costUpgrade", costUpgrade)
}

function LoadDate(){
    lol = parseInt(localStorage.getItem("lolValue"))
    if(!lol){
        lol = 0
    }

    lolOnClick = parseInt(localStorage.getItem("lolOnClick"))
    if(!lolOnClick){
        lolOnClick = 1
    }

    costUpgrade = parseInt(localStorage.getItem("costUpgrade"))
    if(!costUpgrade){
        costUpgrade = 10
    }
}

function DeleteSave (){
    localStorage.removeItem("lolValue")

    localStorage.removeItem("lolOnClick")
    localStorage.removeItem("costUpgrade")
}


function UpdateText(){
    //update upgrade text 
    desUpgradeButton.textContent = "Cost: " + costUpgrade + "LOL"
    
    //update lol on click text 
    desLolButton.textContent = "+" + lolOnClick + "LOL"
    statLol.textContent = "LOL: " + lol
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
