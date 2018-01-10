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

    getName() {
        return this.name;
    }

    /**
     * @param {str} name
     * It sets the name of the Guitar to a new name if the condition is met
     * This demonstrates Encapsulation
     */

    setName(name) {
        if (typeof newName != "string") {
            throw new Error("Guitar name can only be strings");
        }

        this.name = name;
    } 
    
    getOrigin() {
        return this.origin;
    }

    setOrigin(newOrigin) {
        this.origin = newOrigin;
    }

    /**
     * 
     * @param {str} numStrings 
     * adds more strings to the guitar
     * This demonstrates data hiding and encapsulation
     */
    addStrings(numStrings) {
        // demonstrates data hiding and encapsulation
        if (numStrings > 12) {
            return "maximum guitar strings that can be added is 12";
        }
        this.numStrings += numStrings;
    }

    play() {
        return "The guitar is playing";
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

    /**
     * @param {void}
     * returns the family of the instrument
     * This demonstrates Data Hiding
     * family is a getter property, and has no setter property. It cannot be altered
     * by a user of the class
     */
    get family() {
        return "Stringed";
    }

    getNumStrings() {
        return this.numStrings;
    }
 }

