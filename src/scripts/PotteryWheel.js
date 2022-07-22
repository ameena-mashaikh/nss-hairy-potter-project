
let potteryVal = 1

export const makePottery =(shapePar, weightPar, heightPar)=>{
    let potteryObj = {
        shape: shapePar,
        weight: weightPar,
        height: heightPar,
        id: potteryVal++
    }
    return potteryObj
}

