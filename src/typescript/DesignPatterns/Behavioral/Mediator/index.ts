/* 
The Mediator design pattern is a behavioral design pattern that defines an object (the mediator) 
that encapsulates how a set of objects interact. 

The mediator promotes loose coupling by keeping objects from referring to each other explicitly, 
and it allows for their interaction to be changed independently.
*/

class Airplane {
  constructor(public id: string) {}

  land() {
    console.log(`Airplane ${this.id} has landed.`);
  }
}

class Runway {
  constructor(
    public id: string,
    public clear: boolean = true
  ) {}
}

// acts as a traffic controller (mediator)
class Tower {
  clearForLanding(runway: Runway, plane: Airplane) {
    if (runway.clear) {
      console.log(
        `Plane ${plane.id} is clear for landing on runway ${runway.id}`
      );
      runway.clear = false;
      plane.land();
    } else {
      console.log(`Runway ${runway.id} is not clear for plane ${plane.id}`);
    }
  }

  clearRunway(runway: Runway) {
    console.log(`Runway ${runway.id} is now clear.`);
    runway.clear = true;
  }
}

const runway25A = new Runway("25A");
const runway25B = new Runway("25B");
const runway7 = new Runway("7");
const a = new Airplane("A");
const b = new Airplane("B");
const c = new Airplane("C");

const tower = new Tower();

tower.clearForLanding(runway25A, a);
tower.clearForLanding(runway25B, b);
tower.clearForLanding(runway25A, c);

tower.clearRunway(runway25A);
tower.clearForLanding(runway25A, c);
