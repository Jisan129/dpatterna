// @ts-ignore
interface Subject {
    attach(observer: Observer): void

    detach(observer: Observer): void

    notify(): void


}

interface Observer {
    registered(index: number): void

    update(temp: number, perceptions: number): void
}

class WeatherStation implements Subject {
    private _temp: number = 0;
    private _perceptions: number = 0;

    setData(temp: number, perceptions: number) {
        this._temp = temp;
        this._perceptions = perceptions;
    }

    observers: Observer[] = [];

    attach(observer: Observer): void {
        this.observers.push(observer);
        console.log(`Observer ${this.observers.length} observers`)
        observer.registered(this.observers.indexOf(observer));
    }

    detach(observer: Observer): void {
        let i = this.observers.indexOf(observer);
        this.observers.splice(i, 1)
        console.log(`Observer ${this.observers.length} observers`)

    }

    notify(): void {
        for (let observer of this.observers) {
            observer.update(this._temp, this._perceptions)
        }
    }

    updateSubject(temp: number, perceptions: number): void {
        this._temp = temp
        this._perceptions = perceptions
        this.notify()
    }

}

class ObserverA implements Observer {
    index: number = 0;

    registered(index: number): void {
        this.index = index
        console.log(`Registered at Index number ${index}`)
    }

    update(temp: number, perceptions: number): void {
        console.log(`${this.index} updated`)
        console.log(`Temp is ${temp} `)
        console.log(`perceptions is ${perceptions}`)
    }

}class ObserverB implements Observer {
    index: number = 0;

    registered(index: number): void {
        this.index = index
        console.log(`Registered at Index number ${index}`)
    }

    update(temp: number, perceptions: number): void {
        console.log(`${this.index} updated`)
        console.log(`Temp is ${temp} `)
        console.log(`perceptions is ${perceptions}`)
    }

}

const weatherStation = new WeatherStation();
weatherStation.setData(30, 40)
const observer = new ObserverA()
const observer2=new ObserverB()
weatherStation.attach(observer)
weatherStation.attach(observer2)
weatherStation.updateSubject(100, 20)
weatherStation.detach(observer)


