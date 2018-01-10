import ElectricGuitar from '../src/electricGuitar';
import ClassicalGuitar from '../src/classicalGuitar'
import SteelStringGuitar from '../src/steelStringGuitar';
import { assert } from 'chai';

describe('Classes', () => {
    describe('Inheritance', () => {
        const baroque = new ClassicalGuitar("Baroque", "Spain",
                        6, "nylon", false, ["microphone"]);

        it('should return an array to show inherited properties', () => {
            assert.deepEqual(baroque.getSoundProjectionMeans(), ["microphone"]);
        });

        it ('should return 12 as numStrings property value', () => {
            baroque.addStrings(6);
            assert.equal(baroque.getNumStrings(), 12);
        });
    });

    describe('Polymorphism', () => {
        const jazz = new ElectricGuitar("Jazz", "United States of America",
                        7, "steel", true, false);
        
        it('should return a string stating that the instrument is playing', () => {
            jazz.setOnState(true);
            assert.equal(jazz.play(), 'The Electric Guitar, Jazz is playing');
        });
    });

    describe('Encapsulation', () => {
        const dreadnought = new SteelStringGuitar("Dreadnought", "Spain", 7, "steel",
                                 false, ["microphone", "transducers"]);
        
        it('should return "Stringed" for instrument family', () => {
            assert.equal(dreadnought.getFamily(), "Stringed");
        })

        it('should throw an error', () => {
            assert.throws(() => {
                dreadnought.addStrings(15);
            });
        });
    });
});