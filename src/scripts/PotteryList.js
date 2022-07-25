import {usePottery} from "./PotteryCatalog.js"


export const PotteryList = () => {
    let potteryObj = usePottery()
    let potteryStr= ''
    for (let prop of potteryObj) {
        potteryStr += `<section class="pottery" id="pottery--${prop.id}">
        <h2 class="pottery__shape">${prop.shape}</h2>
        <div class="pottery__properties">
          The ${prop.shape} weighs ${prop.weight} grams and is ${prop.height} cm in height
        </div>
        <div class="pottery__price">Price is $${prop.price}</div>
      </section>`
    }
    return potteryStr
}