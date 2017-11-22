import AcousticGuitar from './acousticGuitar';

export default class SteelStringGuitar extends AcousticGuitar {
    constructor(name, origin, numStrings, stringMaterial,
                   isElectricallyOperated,soundProjectionMeans) {
                    super(name, origin, stringMaterial, isElectricallyOperated,
                        soundProjectionMeans);
    }
}