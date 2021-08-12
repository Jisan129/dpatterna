import {
    Light,
    LightOnCommand,
    LightOffCommand,
    RedLight,
    RedLightOn,
    RedLightOff,
    RedLightIncreaseLuminosity,
    RedLightDecreaseLuminosity,
    RemoteController,
    Command
} from "../../patterns/command/LightCommand";
let redOn: boolean = false

export function commandOnLight(command: Command): string {

    const remoteController = new RemoteController();
    remoteController.setCommand(command)

    return remoteController.executeCommand()

}

export function orderHandler(command: string): string {

    let result: string;

    switch (command) {
        case "on":
            result = redOn ? commandOnLight(new RedLightOn(new RedLight())) : commandOnLight(new LightOnCommand(new Light()))
            break;

        case "off":
            redOn=false
            result = redOn ? commandOnLight(new RedLightOff(new RedLight())) : commandOnLight(new LightOffCommand(new Light()))
            break

        case "increase":
            result=redOn?commandOnLight(new RedLightIncreaseLuminosity(new RedLight())):commandOnLight(new LightOnCommand(new Light()))

            break

        case "decrease":
            console.log("decrease")
            result =redOn?commandOnLight(new RedLightDecreaseLuminosity(new RedLight())) : commandOnLight(new LightOnCommand(new Light()))
            break

        case "red":
            redOn = true
            result=redOn?commandOnLight(new RedLightOn(new RedLight())):commandOnLight(new LightOnCommand(new Light()))
            break
        default:

    }
    // @ts-ignore
    return result;

}