
export const firePottery = (potteryObj, temp) => {
    potteryObj.fired = true
    if (temp > 2201) {
        potteryObj.cracked = true
    }
    else {
        potteryObj.cracked = false
    }
    return potteryObj
}