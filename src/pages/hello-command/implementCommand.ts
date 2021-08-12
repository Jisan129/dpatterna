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

function commandOnLight(command:Command) {

    const remoteController = new RemoteController();
    remoteController.setCommand(command)
    remoteController.executeCommand()

}

function orderHandler(command: string) {

    let redOn = false;
    switch (command) {
        case "on":
            redOn ? commandOnLight(new LightOnCommand(new Light())) : commandOnLight(new RedLightOn(new RedLight()))
            break;

        case "off":
            break

        case "increase":
            break

        case "decrease":
            break

        case "redLight":
            redOn = true

    }

}