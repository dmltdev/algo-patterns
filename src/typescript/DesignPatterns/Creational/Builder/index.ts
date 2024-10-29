class HotDog {
  public ketchup: boolean;
  public mustard: boolean;
  public kraut: boolean;

  constructor(
    public bun: string,
    ketchup?: boolean,
    mustard?: boolean,
    kraut?: boolean
  ) {
    this.ketchup = ketchup || false;
    this.mustard = mustard || false;
    this.kraut = kraut || false;
  }

  display(): void {
    console.log(
      `HotDog with ${this.bun} bun${this.ketchup ? ", ketchup" : ""}${this.mustard ? ", mustard" : ""}${this.kraut ? ", kraut" : ""}.`
    );
  }
}

class HotDogBuilder {
  private bun: string;
  private ketchup: boolean = false;
  private mustard: boolean = false;
  private kraut: boolean = false;

  constructor(bun: string) {
    this.bun = bun;
  }

  addKetchup() {
    this.ketchup = true;
    return this;
  }

  addMustard() {
    this.mustard = true;
    return this;
  }

  addKraut() {
    this.kraut = true;
    return this;
  }

  build(): HotDog {
    return new HotDog(this.bun, this.ketchup, this.mustard, this.kraut);
  }
}

const myLunch = new HotDogBuilder("gluten free")
  .addKetchup()
  .addMustard()
  .addKraut()
  .build();

myLunch.display();
