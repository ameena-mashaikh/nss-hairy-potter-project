
let soldPottery = []

export const toSellOrNotToSell = (potteryObj) => {
    if ((potteryObj.weight < 6) && (potteryObj.cracked === false)){
        potteryObj.price = 20
    }
    else if ((potteryObj.weight >=6)&&(potteryObj.cracked === false)) {
        potteryObj.price = 40
    }
    if (potteryObj.cracked === false){
        soldPottery.push(potteryObj)
    }
    return potteryObj
}

export const usePottery = () => {
    return soldPottery.map(pottery => ({...pottery}))
}

// export const usePottery = (potteryArr) => {     
//     return potteryArr = [...soldPottery]
// }