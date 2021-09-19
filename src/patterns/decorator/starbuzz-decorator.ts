// @ts-ignore
interface StarbuzzComponent {
    getName(): string

    getCost(): number
}
class Espresso implements StarbuzzComponent{
    getCost(): number {
        return 10;
    }

    getName(): string {
        return "Espresso ";
    }

}
abstract class StarbuzzDecorator implements StarbuzzComponent {
    component:StarbuzzComponent
    constructor(starbuzz:StarbuzzComponent) {
    this.component = starbuzz
    }
     getCost():number{
        return this.component.getCost()
     }

    getName():string{
        return this.component.getName()
    }

}

class whipComponent extends StarbuzzDecorator {
    constructor(starbuzz:StarbuzzComponent){
        super(starbuzz)
    }

    getCost(): number {
        return 5 + super.getCost();
    }

    getName(): string {
        return `${super.getName()} with WhipComponent`;
    }

}
const coffee = new Espresso();
coffee.getName()
coffee.getCost()

const newCoffee = new whipComponent(coffee)
newCoffee.getCost()


const superCoffee =new whipComponent(newCoffee)
superCoffee.getCost()
