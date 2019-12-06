let Spaceship = require('./Spaceship.js')
let CrewMember = require('./CrewMember.js')
let Rocket = require('./Rocket.js')
//STEP 0:
let launchPad = (ship, crewArray) => {
  console.log("Initiating PreFlight Procedures.")
  console.log(`Welcome to the ${ship.name}!`)
  ship.loadCrew(crewArray)
  console.log(`The captain of the ${ship.name} is ${ship.captain(crewArray)}.\n`)
  ship.mountPropulsion(Rocket)
  ship.propulsion.addFuel(5)
  ship.takeOff()
  ship.countdown(10);
}
let ourShip = new Spaceship("Mothership Connection")


crewNames = ['Chitra', 'Nick', 'Mike', 'Matt', 'Iain', 'Anderson']

let trainCrew = (array) => {
  array.forEach((crew) => {
    let newCrew = new CrewMember(crew)
    newCrew.trained = true
    console.log(newCrew)
  })
}
console.log("\n")
trainCrew(crewNames)


console.log("\n")
launchPad(ourShip, crewNames)
