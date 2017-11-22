import AcousticGuitar from './acousticGuitar';

export default class ClassicalGuitar extends AcousticGuitar {
    constructor(name, origin, numStrings, stringMaterial,
                isElectricallyOperated, soundProjectionMeans) {
                    super(name, origin, numStrings, stringMaterial,
                        isElectricallyOperated, soundProjectionMeans);
                }
    
    /**
     * @param {void}
     * This demonstrates Polymorphism
     * The play is inherited from the base class and also defines a unique
     * behaviour for itself in this class
     */
    play() {
        return `The classical guitar: ${this.getName()} is playing`;
    }
        
}