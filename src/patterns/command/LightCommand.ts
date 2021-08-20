// @ts-ignore
export interface Command {

    execute(): string

}


export class Light {

    public on(): string {
        return 'on'
    }

    public off(): string {
        return 'off'
    }
}
var value:number=0
export class RedLight {

    newNum:number=0

    public on(): string {
        return `red${value}`
    }

    public off(): string {
        return "off"
    }

    public increaseLuminosity(): string {
        value++;
        return `red${value}`
    }

    public decreaseLuminosity(): string {
        value--;
        return `red${value}`

    }
}

export class LightOnCommand implements Command {

    private _light: Light

    constructor(_light: Light) {
        this._light = _light;
    }

    execute(): string {
        return this._light.on();
    }


}

export class LightOffCommand implements Command {
    private _light: Light

    constructor(_light: Light) {
        this._light = _light
    }

    execute(): string {
        return this._light.off()
    }

}


export class RedLightOn implements Command {
    light: RedLight;

    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.on()
    }

}

export class RedLightOff implements Command {
    light: RedLight;

    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.off()
    }

}

export class RedLightIncreaseLuminosity implements Command {
    light: RedLight;

    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.increaseLuminosity()
    }

}

export class RedLightDecreaseLuminosity implements Command {
    light: RedLight;

    constructor(light: RedLight) {
        this.light = light;
    }

    execute(): string {
        return this.light.decreaseLuminosity()
    }

}


export class RemoteController {
    onCommand!: Command;

    constructor() {
    }

    setCommand(onCommand: Command) {
        this.onCommand = onCommand;
    }

    executeCommand() {
        return this.onCommand.execute()
    }


}














