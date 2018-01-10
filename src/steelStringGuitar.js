import AcousticGuitar from './acousticGuitar';

export default class SteelStringGuitar extends AcousticGuitar {
    constructor(name, origin, numStrings, stringMaterial,
                   isElectricallyOperated,gSoundProjectionMeans) {
                    super(name, origin, stringMaterial, isElectricallyOperated,
                        soundProjectionMeans);

                        let soundProjectionMeans;

                        this.setSoundProjectionMeans = function(newSoundProjectionMeans) {
                            soundProjectionMeans = newSoundProjectionMeans;
                        }
            
                        this.getSoundProjectionMeans = function() {
                            return soundProjectionMeans;
                        }
            
                        this.setSoundProjectionMeans(gSoundProjectionMeans);
    }

    /**
     * @param {void}
     * This demonstrates Polymorphism, as this class inherits the play
     * method from the base class and its defining a specific behaviour for
     * this class.
     */

    play() {
        return `The Steel Guitar, ${this.getName()} is playing`;
    }
}