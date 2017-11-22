import AcousticGuitar from './acousticGuitar';

export default class ClassicalGuitar extends AcousticGuitar {
    constructor(name, origin, numStrings, stringMaterial,
                isElectricallyOperated, soundProjectionMeans) {
                    super(name, origin, numStrings, stringMaterial,
                        isElectricallyOperated, soundProjectionMeans);
                }
        
}