let rocket = {
  fuel : 0,

  addFuel(number){
    this.fuel = this.fuel + number
    console.log(`The current fuel meter is : ${this.fuel}`)
  },

  fire(){
    if (this.fuel > 0){
      this.fuel = this.fuel - 1
      console.log(`The engines have been fired up! The fuel meter is now: ${this.fuel}\n`)
      return true
    } else {
      console.log("The engines have failed to fire.\n")
      return false
    }
  }
}

module.exports = rocket
