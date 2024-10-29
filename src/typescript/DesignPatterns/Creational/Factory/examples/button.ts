class IOSButton {}

class AndroidButton {}

// Without factory
let os: string = "";
const button1 = os === "ios" ? new IOSButton() : new AndroidButton();
const button2 = os === "ios" ? new IOSButton() : new AndroidButton();

// With factory
class ButtonFactory {
  createButton(os: string) {
    if (os === "ios") {
      return new IOSButton();
    } else {
      return new AndroidButton();
    }
  }
}

const factory = new ButtonFactory();
const btn1 = factory.createButton("ios");
const btn2 = factory.createButton("android");
