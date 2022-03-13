// The state pattern is most often used for state machine where an object
// Will only have a specific state with the exact same behavior.
// For example, an ATM has the following features
// TapCard, EnterPin, EnterAmount, DispenseCash, ReturnCard
// When it is in the IdleState it is expecting a card to be tapped.
// Entering details into the pin will do nothing

class IdleState {
  constructor(atm) {
    this.atm = atm;
  }

  tapCard() {
    console.log("Successfully tapped card");
    this.atm.nextState(EnterPinState);
  }

  enterPin() {
    console.log("Please tap card first");
  }
}

class EnterPinState {
  constructor(atm) {
    this.atm = atm;
  }

  tapCard() {
    console.log("EnterPinState you have already typed your card...");
  }

  enterPin() {
    console.log("Entered pin");
    this.atm.nextState(EnterAmountState);
  }
}

class EnterAmountState {}

class ATM {
  constructor() {
    this.state = new IdleState(this);
  }

  nextState(stateType) {
    this.state = new stateType(this);
  }

  tapCard() {
    this.state.tapCard();
  }

  enterPin() {
    this.state.enterPin();
  }
}

const atm = new ATM();
atm.enterPin();
atm.tapCard();
atm.tapCard();
atm.enterPin();
