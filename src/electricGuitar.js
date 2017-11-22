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

    /**
     * @param {void}
     * This demonstrates 'Polymorphism'
     * Play is inherited and defines its specific behaviour for this class.
     */

    play() {
        if (this.isOn)
            return `The Electric Guitar, ${this.name} is playing`;
        else
            return `The Electric Guitar, ${this.name} is turned off. turn it on`;
    }
}