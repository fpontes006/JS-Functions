// curring

function finalPrice(tax) {
    return function(price){
        return price * (1 + tax)
    }    
}

const spcFinalPrice = finalPrice(0.0875)


console.log(spcFinalPrice(25.1))
console.log(spcFinalPrice(21.7))
console.log(spcFinalPrice(107.9))