function yardGreening(input) {

  let squareMeters = Number(input[0])

let priceForLandscaping = squareMeters * 7.61
let discount = 0.18 * priceForLandscaping
let finalPriceAfterDiscount = priceForLandscaping - discount

  console.log(`The final price is: ${finalPriceAfterDiscount} lv.`)
  console.log(`The discount is: ${discount} lv.`)

}