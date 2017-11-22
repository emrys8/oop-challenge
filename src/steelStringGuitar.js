import AcousticGuitar from './acousticGuitar';

export default class SteelStringGuitar extends AcousticGuitar {
    constructor(name, origin, numStrings, stringMaterial,
                   isElectricallyOperated,soundProjectionMeans) {
                    super(name, origin, stringMaterial, isElectricallyOperated,
                        soundProjectionMeans);
    }

    /**
     * @param {void}
     * returns a string denoting the instrument is playing
     * This demonstrates Polymorphism, as this class inherits the play
     * method from the base class and its defining a specific behaviour for
     * this class
     */

    play() {
        return `The Steel Guitar, ${this.getName()} is playing`;
    }
}