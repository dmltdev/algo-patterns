// Factory pattern with functional programming
// We use currying here to differentiate the different creator functions by their type

const customerCreator = (isGood) => {
  return isGood ? goodCustomer : badCustomer;
}

const customer = (isGood) => {
  return {
      isGood: isGood
  };
}

const goodCustomerCreator = () => {
  return customerCreator(true);
}

const badCustomerCreator = () => {
  return customerCreator(false);
}

const goodCustomer = () => {
  return customer(true);
}

const badCustomer = () => {
  return customer(false);
}
