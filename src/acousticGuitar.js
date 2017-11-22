import Guitar from './guitar';

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

        play() {
            console.log(`${this.name} is playing.....`); 
        }
}
