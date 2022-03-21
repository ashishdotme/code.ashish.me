/**
 *
 * Ashish Patel
 * e: ashishsushilPatel@gmail.com
 * w: https://ashish.me
 *
 */

const canPlaceFlowers = (flowerbed, n) => {
  const newBed = [0, ...flowerbed, 0]
  for (let i = 1; i < newBed.length - 1; i++) {
    if (newBed[i - 1] === 0 && newBed[i] === 0 && newBed[i + 1] === 0) {
      n = n - 1
      newBed[i] = 1
    }
  }
  return n === 0
}

console.log(canPlaceFlowers([0, 0, 1, 0, 0], 1))
