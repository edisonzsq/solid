class Pizza {
    size: string;
    crust: string;
    cheese: boolean;
    pepperoni: boolean;
    mushrooms: boolean;
    bacon: boolean;
  
    constructor(size: string, crust: string, cheese: boolean, pepperoni: boolean, mushrooms: boolean, bacon: boolean) {
      this.size = size;
      this.crust = crust;
      this.cheese = cheese;
      this.pepperoni = pepperoni;
      this.mushrooms = mushrooms;
      this.bacon = bacon;
    }
  
    bake(): void {
      const toppings = [];
      if (this.cheese) toppings.push("cheese");
      if (this.pepperoni) toppings.push("pepperoni");
      if (this.mushrooms) toppings.push("mushrooms");
      if (this.bacon) toppings.push("bacon");
      console.log(`Baking a ${this.size} pizza with ${this.crust} crust and toppings: ${this.getToppings()}`);
    }
  }
  
  // Creating a pizza with all toppings
  const myPizza = new Pizza('Large', 'Thin Crust', true, true, true, true);
  myPizza.bake();
  