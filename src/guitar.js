/**
 * modelling a 'Guitar' using OOP concepts
 * {class}
 */
export default class Guitar {
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
        // demonstrates data hiding and encapsulation
        if (numStrings > 12) {
            return "maximum guitar strings that can be added is 12";
        }
        this.numStrings += numStrings;
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

    getNumStrings() {
        return this.numStrings;
    }
 }

