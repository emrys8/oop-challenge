import Guitar from './guitar';

export default class ElectricGuitar extends Guitar {

    constructor (name, origin, numStrings, stringMaterial, 
                isElectricallyOperated, gIsOn) {
                     super(name, origin, numStrings, stringMaterial, isElectricallyOperated);

                     let isOn;

                     this.getOnState = function() {
                         return isOn;
                     }

                     this.setOnState = function(isOnState) {
                         isOn = isOnState;
                     }

                     this.setOnState(gIsOn);
    }

    /**
     * @param {void}
     * This demonstrates 'Polymorphism'
     * Play is inherited and defines its specific behaviour for this class.
     */

    play() {
        if (this.getOnState())
            return `The Electric Guitar, ${this.getName()} is playing`;
        else
            return `The Electric Guitar, ${this.getName()} is turned off. turn it on`;
    }
}