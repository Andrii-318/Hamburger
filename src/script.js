class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
    this.prices = {
      small: 50,
      large: 100,
      cheese: 10,
      salad: 20,
      potato: 15,
      spice: 15,
      mayo: 20,
    };
    this.calories = {
      small: 20,
      large: 40,
      cheese: 20,
      salad: 5,
      potato: 10,
      spice: 0,
      mayo: 5,
    };
  }

  addTopping(topping) {
    if (!this.toppings.includes(topping)) {
      this.toppings.push(topping);
    }
  }

  calculatePrice() {
    return (
      this.prices[this.size] +
      this.prices[this.stuffing] +
      this.toppings
        .map((topping) => this.prices[topping])
        .reduce((a, b) => a + b, 0)
    );
  }

  calculateCalories() {
    return (
      this.calories[this.size] +
      this.calories[this.stuffing] +
      this.toppings
        .map((topping) => this.calories[topping])
        .reduce((a, b) => a + b, 0)
    );
  }
}

function calculateBurger() {
  const size = document.getElementById("size").value;
  const stuffing = document.getElementById("stuffing").value;
  const spice = document.getElementById("spice").checked;
  const mayo = document.getElementById("mayo").checked;

  const hamburger = new Hamburger(size, stuffing);

  if (spice) hamburger.addTopping("spice");
  if (mayo) hamburger.addTopping("mayo");

  document.getElementById("price").textContent = hamburger.calculatePrice();
  document.getElementById("calories").textContent =
    hamburger.calculateCalories();
}
