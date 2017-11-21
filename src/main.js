/**
 * modelling a 'Guitar' using OOP concepts
 * {class}
 */
class Guitar {
    constructor(name, origin, numStrings,
                stringMaterial, isElectricallyOperated) {
                    this.name = name;
                    this.origin = origin;
                    this.numStrings = numStrings;
                    this.stringMaterial = stringMaterial;
                    this.isElectricallyOperated = isElectricallyOperated;
                    this.range = 0;
    }
    
    getOrigin() {
        return this.origin;
    }

    setOrigin(newOrigin) {
        this.origin = newOrigin;
    }

    addStrings(numStrings) {
        this.numStrings = numStrings;
    }

    play() {
        
    }

    getStringMaterial() {
        return this.stringMaterial;
    }

    setMusicGenres(musicGenres) {
        this.musicGenres = musicGenres;
    }

    getMusicGenres() {
        return this.musicGenres;
    }

    increaseRange(range) {
        this.range += range;
    }
    
    decreaseRange(range) {
        this.range -= range;
    }

    setRange(range) {
        this.range = range;
    }

    getRange() {
        return this.range;
    }

    get family() {
        return "Stringed";
    }
 }

class AcousticGuitar extends Guitar {
    constructor(name, family, origin,
        stringMaterial, isElectricallyOperated, soundProjectionMeans) {
            super(name, family, origin, stringMaterial, isElectricallyOperated,soundProjectionMeans);
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

class ClassicalGuitar extends AcousticGuitar {
    constructor(name, family, origin, stringMaterial,
                isElectricallyOperated, soundProjectionMeans) {
                    super(name, family, origin, stringMaterial,
                        isElectricallyOperated, soundProjectionMeans);
                }
        
}

class SteelStringGuitar extends AcousticGuitar {
    constructor(name, family, origin, stringMaterial, isElectricallyOperated,soundProjectionMeans) {
                    super(name, family, origin, stringMaterial, isElectricallyOperated,
                        soundProjectionMeans);
                }
}

class ElectricGuitar extends Guitar {
    constructor (name, family, origin, numStrings, stringMaterial, 
                isElectricallyOperated, isOn) {
                     super(name, family, origin, numStrings, stringMaterial, isElectricallyOperated);
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
            console.log('playing....');
        else
            console.log(`${this.name} is turned off. turn it on`);
    }
}
