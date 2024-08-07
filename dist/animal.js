"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("./types");
const animals = [
    { id: 1, name: 'Sparrow', type: types_1.AnimalType.BIRD, wingSpan: 25, isFly: true },
    { id: 2, name: 'Eagle', type: types_1.AnimalType.BIRD, wingSpan: 200, isFly: true },
    { id: 3, name: 'Parrot', type: types_1.AnimalType.BIRD, wingSpan: 30, isFly: true },
    { id: 4, name: 'Penguin', type: types_1.AnimalType.BIRD, wingSpan: 60, isFly: false },
    { id: 5, name: 'Owl', type: types_1.AnimalType.BIRD, wingSpan: 150, isFly: true },
    { id: 6, name: 'Bulldog', type: types_1.AnimalType.MAMMAL, isTrained: true },
    { id: 7, name: 'Beagle', type: types_1.AnimalType.MAMMAL, isTrained: false },
    { id: 8, name: 'Labrador', type: types_1.AnimalType.MAMMAL, isTrained: true },
    { id: 9, name: 'Poodle', type: types_1.AnimalType.MAMMAL },
    { id: 10, name: 'German Shepherd', type: types_1.AnimalType.MAMMAL, isTrained: true }
];
const hello = (name) => new Promise((resolve, _reject) => {
    setTimeout(() => {
        resolve(`Hello ${name}`);
    }, Math.random() * 1000);
});
const finalAnimals = [
    {
        id: 10,
        name: 'German Shepherd',
        type: types_1.AnimalType.MAMMAL,
        isTrained: true,
        tags: ['test1', 'test2'],
        children: [
            {
                id: 11,
                name: 'German Shepherd1',
                type: types_1.AnimalType.MAMMAL,
            },
            {
                id: 12,
                name: 'German Shepherd2',
                isTrained: true,
                type: types_1.AnimalType.MAMMAL,
            },
        ]
    }
];
function getAnimals() {
    return animals;
}
function getAnimal(type) {
    return animals
        .filter(animal => animal.type === type)
        .map((_a) => {
        var { type } = _a, rest = __rest(_a, ["type"]);
        return rest;
    });
}
function getHelloMessages(names) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = names.map(name => hello(name));
        const results = yield Promise.all(promises);
        return results;
    });
}
function getHelloMessagesSettled(names) {
    return __awaiter(this, void 0, void 0, function* () {
        const promises = names.map(name => hello(name));
        const results = yield Promise.allSettled(promises);
        return results.map(result => {
            if (result.status === 'fulfilled') {
                return { status: 'fulfilled', value: result.value };
            }
            else {
                return { status: 'rejected', reason: result.reason };
            }
        });
    });
}
let animalsGet = JSON.parse(JSON.stringify(animals));
for (let i = 0; i < animalsGet.length; i++) {
    animalsGet[i] = null;
}
console.log(animals);
