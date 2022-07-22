// Imports go first
import {makePottery} from "./PotteryWheel.js"
import {firePottery} from "./Kiln.js"

// Make 5 pieces of pottery at the wheel
let mug = makePottery('mug',2, 10)
//console.log(mug)
let vase = makePottery('vase', 7, 3)
//console.log(vase);
let tea = makePottery('teapot', .5, 2)
//console.log(tea);
let surf = makePottery('surfboard', 75, 13)
//console.log(surf)
let bowl = makePottery('bowl', .5, 2 )
//console.log(bowl)
// Fire each piece of pottery in the kiln
mug = firePottery(mug, 1200)
vase = firePottery(vase, 3000)
tea = firePottery(tea, 1932)
surf = firePottery(surf, 6953)
bowl = firePottery(bowl, 4934)

console.log(mug)
console.log(vase)
console.log(tea)
console.log(surf)
console.log(bowl)


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list



