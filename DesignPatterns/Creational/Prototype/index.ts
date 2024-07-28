const zombie = {
  eatBrains() {
    return "yum";
  },
};

const chad = Object.create(zombie, {
  name: {
    value: "chad",
  },
});

console.log(chad);
console.log(chad.eatBrains());
const proto = Object.getPrototypeOf(chad);
console.log(proto);
