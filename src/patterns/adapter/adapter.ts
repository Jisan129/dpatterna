interface Duck {
    quack():void
    fly():void
}
interface Turkey {
    google():void
    fly():void
}
class wildTurkey implements Turkey{
    google() {
        console.log("I am Googling")
    }
    fly() {
        console.log("I am Flying")
    }
}
class MalllardDuck implements Duck{
    fly(): void {
    }

    quack(): void {
    }

}

class TurkeyAdapter implements Duck{
    turkey:Turkey
    constructor(turkey:Turkey) {
    this.turkey =turkey
    }
    fly(): void {
        this.turkey.fly()
    }

    quack(): void {
        this.turkey.google()
    }

}

function testDuck(duck:Duck):void {
    duck.fly()
    duck.quack()
}

testDuck(new MalllardDuck())