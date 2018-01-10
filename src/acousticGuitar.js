import Guitar from './guitar';

/**
 * {Inheritance}
 * AcousticGuitar inherits the properties of Guitar, the superclasss
 * and added a new owned property
 */
export default class AcousticGuitar extends Guitar {
    constructor(name, origin, numStrings,
        stringMaterial, isElectricallyOperated, soundProjectionMeans) {
            super(name, origin, numStrings, stringMaterial, isElectricallyOperated,soundProjectionMeans);
                this.soundProjectionMeans = soundProjectionMeans;
        }

        getSoundProjectionMeans() {
            return this.soundProjectionMeans;
        }

        setSoundProjectionMeans(newSoundProjectionMeans) {
            this.soundProjectionMeans = newSoundProjectionMeans;
        }

        /**
         * @param {void} -> (str)
         * play is inherited from Guitar
         * and overridden. This shows Polymorphism
         */
        play() {
           return 'The Acoustic Guitar is playing'
        }
}
