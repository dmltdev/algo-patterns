// Allows the interface of an existing class to be used as another interface.

class LegacySystem {
  oldMethod() {
    console.log("Legacy method");
  }
}

class Adapter {
  private legacySystem: LegacySystem;

  constructor(legacySystem: LegacySystem) {
    this.legacySystem = legacySystem;
  }

  newMethod() {
    this.legacySystem.oldMethod();
  }
}

const legacy = new LegacySystem();
const adapted = new Adapter(legacy);
adapted.newMethod(); // Legacy method