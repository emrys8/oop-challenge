import Guitar from './guitar';

/**
 * {Inheritance}
 * AcousticGuitar inherits the properties of Guitar, the superclasss
 * and added a new owned property
 */
export default class AcousticGuitar extends Guitar {
    
    constructor(name, origin, numStrings,
        stringMaterial, isElectricallyOperated, gSoundProjectionMeans) {
            super(name, origin, numStrings, stringMaterial, isElectricallyOperated);
                
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
         * @param {void} -> (str)
         * play is inherited from Guitar
         * and overridden. This shows Polymorphism
         */
        play() {
           return 'The Acoustic Guitar is playing'
        }
}
