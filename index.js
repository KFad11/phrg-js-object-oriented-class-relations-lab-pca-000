let store = { drivers: [], passengers: [], trips: []}

let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
  constructor(name) {
    this.name = name
    this.id = ++driverId

    store.drivers.push(this)
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }

  passengers() {
    return this.trips().map(trip => {
      return trip.passenger();
    });
  }
}

class Passenger {
  constructor(name, driver) {
    this.name = name
    this.id = ++passengerId
    if(driver){
      this.driverId = driver.id
    }

    store.passengers.push(this)
  }

  setDriver(driver){
    this.driverId = driver.id
  }

  drivers() {
    return this.trips().map(trip => {
      return trip.driver()
    })
  }

  trips(){
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }

}

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId

    if(driver){
      this.driverId = driver.id
    }

    if(passenger){
      this.passengerId = passenger.id
    }
    // console.log(passenger.id)

    store.trips.push(this)
  }

  driver() {
    return store.drivers.find(driver => {
      return driver.id === this.driverId
    })
  }
   passenger() {
    return store.passengers.find(passenger => {
      return passenger.id === this.passengerId
    })
  }
}
