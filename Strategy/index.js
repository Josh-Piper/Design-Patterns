// Encapsulate family of closely related algorithms / strategies
// Such as an animal could have a speak strategy. They may access that strategy.
// Allowing you to swap and change these strategy (most often functions) easily.

const dogStrategy = () => {
  console.log("Bark, Woof, Grrr");
};

const birdStrategy = () => {
  console.log("Tweeet, keeee, tweee");
};

const cowStrategy = () => {
  console.log("Moooo");
};

class Animal {
  constructor(noiseStrategy) {
    this.noiseStrategy = noiseStrategy;
  }

  set noise(noiseStrategy) {
    this.noiseStrategy = noiseStrategy;
  }

  makeNoise() {
    this.noiseStrategy();
  }
}

const dog = new Animal(dogStrategy);
const cow = new Animal(cowStrategy);

dog.makeNoise();
cow.makeNoise();
cow.noise = birdStrategy;
cow.makeNoise();
