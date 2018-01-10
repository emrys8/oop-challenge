/**
 * modelling a 'Guitar' using OOP concepts
 * {class}
 */
export default class Guitar {
    constructor(gName, gOrigin, gNumStrings,
                gStringMaterial, gIsElectricallyOperated) {

                    // private variables
                    let name, origin, numStrings, stringMaterial, 
                    isElectricallyOperated;

                    let family = "Stringed";

                    // privileged methods
                    this.getName = function() {
                        return name;
                    }

                    this.setName = function(newName) {
                        if (typeof newName != "string") {
                            throw new Error("Guitar name can only be strings");
                        }

                        name = newName;
                    }

                    this.getOrigin = function() {
                        return origin;
                    }

                    this.setOrigin = function(newOrigin) {
                        origin = newOrigin;
                    }

                    this.setNumStrings = function(newNumStrings) {
                        numStrings = newNumStrings;
                    }

                    this.getNumStrings = function() {
                        return numStrings;
                    }

                    this.setStringMaterial = function(newStringMaterial) {
                        stringMaterial = newStringMaterial;
                    }

                    this.getStringMaterial = function() {
                        return stringMaterial;
                    }

                    this.setIsElectricallyOperated = function(electricallyOperated) {
                        isElectricallyOperated = electricallyOperated;
                    }

                    this.getIsElectricallyOperated = function() {
                        return isElectricallyOperated;
                    }

                    this.getFamily = function() {
                        return family;
                    }

                    this.setName(gName);
                    this.setOrigin(gOrigin);
                    this.setNumStrings(gNumStrings);
                    this.setStringMaterial(gStringMaterial);
                    this.setIsElectricallyOperated(gIsElectricallyOperated);
    }

    /**
     * @param {str} numStrings 
     * adds more strings to the guitar
     * This demonstrates data hiding and encapsulation
     */

    addStrings(numStrings) {
        if (numStrings > 12) {
            throw new Error("maximum guitar strings that can be added is 12");
        }

        this.numStrings += numStrings;
    }

    play() {
        return "The guitar is playing";
    }

    setMusicGenres(musicGenres) {
        this.musicGenres = musicGenres;
    }

    getMusicGenres() {
        return this.musicGenres;
    }
 }

