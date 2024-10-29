// The Facade pattern is a structural design pattern that provides a simplified interface to a complex subsystem. 
// It hides the complexities of the subsystem from the client, making it easier to use. 
// "Ugly" details are hidden
// jQuery is a great example of a facade for JavaScript DOM features

class PlumbingSystem {
  setPressure(v: number) {}
  turnOn() {}
  turnOff() {}
}

class ElectricalSystem {
  setVoltage(v: number) {}
  turnOn() {}
  turnOff() {}
}

class House {
  private plumbing = new PlumbingSystem();
  private electrical = new ElectricalSystem();

  public turnOnSystems() {
    this.electrical.setVoltage(120);
    this.electrical.turnOn();

    this.plumbing.setPressure(500);
    this.plumbing.turnOn();
  }

  public shutDown() {
    this.plumbing.turnOff();
    this.electrical.turnOff();
  }
}

const client = new House();
client.turnOnSystems();
client.shutDown();
