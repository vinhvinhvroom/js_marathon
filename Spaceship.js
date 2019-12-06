class Spaceship {
  constructor(name){
    this.name = name
    this.crew = []
    this.propulsion = null
  }

  loadCrew(array){
    let onboardCrew = this.crew.concat(array)
    onboardCrew.forEach((member) => {
      console.log(`${member} is now aboard the ${this.name}.\n`)
    })
  }

  captain(array){
    let onboardCrew = this.crew.concat(array)
    let number = onboardCrew.length
    let randomNum = Math.floor(Math.random() * number)
    return onboardCrew[randomNum]
  }

  mountPropulsion(object){
    this.propulsion = object
    console.log("The propulsion has mounted!\n")
  }

  takeOff(){
    if (this.propulsion.fire() === true){
      console.log("WHEEEEEEEEWWW")
    } else (
      console.log("Launch was unsuccessful")
    )
  }

  countdown(number){
    if (number === 0){
      console.log("WE HAVE LIFTOFF!")
    } else {
      console.log(number)
      while (number > 0){
        console.log(number -= 1)
      }
      console.log("WE HAVE LIFTOFF!")
    }
  }
}
let asynchronous_code = (fn) =>{
  setTimeout(() => {
    console.log("Outputted first");
    fn();
  }, 1000);
}



module.exports = Spaceship
