class Pizza {
    private size: string;
    private crust: string;
    private cheese?: boolean;
    private pepperoni?: boolean;
    private mushrooms?: boolean;
    private bacon?: boolean;

    constructor(builder: PizzaBuilder) {
        this.size = builder.size;
        this.crust = builder.crust;
        this.cheese = builder.cheese;
        this.pepperoni = builder.pepperoni;
        this.mushrooms = builder.mushrooms;
        this.bacon = builder.bacon;
    }

    bake(): void {
        console.log(`Baking a ${this.size} pizza with ${this.crust} crust and toppings: ${this.getToppings()}`);
    }

    private getToppings(): string {
        const toppings = [];
        if (this.cheese) toppings.push("cheese");
        if (this.pepperoni) toppings.push("pepperoni");
        if (this.mushrooms) toppings.push("mushrooms");
        if (this.bacon) toppings.push("bacon");
        return toppings.join(", ");
    }
}

class PizzaBuilder {
    size: string;
    crust: string;
    cheese?: boolean;
    pepperoni?: boolean;
    mushrooms?: boolean;
    bacon?: boolean;

    constructor(size: string, crust: string) {
        this.size = size;
        this.crust = crust;
    }

    addCheese(): PizzaBuilder {
        this.cheese = true;
        return this;
    }

    addPepperoni(): PizzaBuilder {
        this.pepperoni = true;
        return this;
    }

    addMushrooms(): PizzaBuilder {
        this.mushrooms = true;
        return this;
    }

    addBacon(): PizzaBuilder {
        this.bacon = true;
        return this;
    }

    build(): Pizza {
        return new Pizza(this);
    }
}

// Creating a pizza using the builder
const myPizza = new PizzaBuilder('Large', 'Thin Crust')
    .addCheese()
    .addPepperoni()
    .build();

myPizza.bake();
