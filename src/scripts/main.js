// Imports go first
import {makePottery} from "./PotteryWheel.js"
import {firePottery} from "./Kiln.js"
import {toSellOrNotToSell} from "./PotteryCatalog.js"
import {usePottery} from "./PotteryCatalog.js"
import {PotteryList} from "./PotteryList.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery('mug',2, 10)
//console.log(mug)
let vase = makePottery('vase', 7, 3)
//console.log(vase);
let teapot = makePottery('teapot', 7, 2)
//console.log(tea);
let surf = makePottery('surf board', 75, 13)
//console.log(surf)
let bowl = makePottery('bowl', 2, 2 )
//console.log(bowl)
// Fire each piece of pottery in the kiln
mug = firePottery(mug, 1200)
vase = firePottery(vase, 3000)
teapot = firePottery(teapot, 1000)
surf = firePottery(surf, 4600)
bowl = firePottery(bowl, 1600)

// console.log(mug)
// console.log(vase)
// console.log(teapot)
// console.log(surf)
// console.log(bowl)

toSellOrNotToSell(mug)
toSellOrNotToSell(vase)
toSellOrNotToSell(teapot)
toSellOrNotToSell(surf)
toSellOrNotToSell(bowl)
console.log(mug)
console.log(vase)
console.log(teapot)
console.log(surf)
console.log(bowl)

// Determine which ones should be sold, and their price
let allPottery = usePottery
for (let pot in allPottery){
    console.log(pot)
}
// Invoke the component function that renders the HTML list
let listOfPottery = PotteryList()

const parentHTMLElement = document.querySelector(".potteryList")
parentHTMLElement.innerHTML = listOfPottery


