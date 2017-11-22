import Guitar from './guitar';

export default class ElectricGuitar extends Guitar {
    constructor (name, origin, numStrings, stringMaterial, 
                isElectricallyOperated, isOn) {
                     super(name, origin, numStrings, stringMaterial, isElectricallyOperated);
                           this.isOn = isOn;
    }

    getOnState() {
        return this.isOn;
    }

    setOnState(isOn) {
        this.isOn = isOn;
    }

    play() {
        if (this.isOn)
            return `${this.name} is playing`;
        else
            return `${this.name} is turned off. turn it on`;
    }
}