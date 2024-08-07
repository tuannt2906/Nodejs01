import { AnimalType, Animal } from '@src/types';

const animals: Animal[] = [
  { id: 1, name: 'Sparrow', type: AnimalType.BIRD, wingSpan: 25, isFly: true },
  { id: 2, name: 'Eagle', type: AnimalType.BIRD, wingSpan: 200, isFly: true },
  { id: 3, name: 'Parrot', type: AnimalType.BIRD, wingSpan: 30, isFly: true },
  { id: 4, name: 'Penguin', type: AnimalType.BIRD, wingSpan: 60, isFly: false },
  { id: 5, name: 'Owl', type: AnimalType.BIRD, wingSpan: 150, isFly: true },
  { id: 6, name: 'Bulldog', type: AnimalType.MAMMAL, isTrained: true },
  { id: 7, name: 'Beagle', type: AnimalType.MAMMAL, isTrained: false },
  { id: 8, name: 'Labrador', type: AnimalType.MAMMAL, isTrained: true },
  { id: 9, name: 'Poodle', type: AnimalType.MAMMAL },
  { id: 10, name: 'German Shepherd', type: AnimalType.MAMMAL, isTrained: true }
];

const hello = (name: string): Promise<string> => new Promise((resolve, _reject) => {
    setTimeout(() => {
        resolve(`Hello ${name}`);
    }, Math.random() * 1000);
});

const finalAnimals: Animal[] = [
    {
        id: 10,
        name: 'German Shepherd',
        type: AnimalType.MAMMAL,
        isTrained: true,
        tags: {
            test1: 'test1',
            test2: 2,
            test3: false,
        },
        children: [
            {
                id: 11,
                name: 'German Shepherd1',
                type: AnimalType.MAMMAL,
            },
            {
                id: 12,
                name: 'German Shepherd2',
                type: AnimalType.MAMMAL,
                isTrained: true,
            },
        ]
    }
];

function getAnimals(): Animal[] {
    return animals;
}

function getAnimal(type: AnimalType): Omit<Animal, 'type'>[] {
    return animals
        .filter(animal => animal.type === type)
        .map(({ type, ...rest }) => rest);
}

function getHelloMessages(names: string[]): Promise<string[]> {
    return Promise.all(names.map(name => hello(name)));
}

interface FulfilledResult {
    status: 'fulfilled';
    value: string;
}

interface RejectedResult {
    status: 'rejected';
    reason: any;
}

type Result = FulfilledResult | RejectedResult;

async function getHelloMessagesSettled(names: string[]): Promise<Result[]> {
    const promises = names.map(name => hello(name));
    const results = await Promise.allSettled(promises);

    return results.map(result => {
        if (result.status === 'fulfilled') {
            return { status: 'fulfilled', value: result.value } as FulfilledResult;
        } else {
            return { status: 'rejected', reason: result.reason } as RejectedResult;
        }
    });
}

let animalsGet: (Animal | null)[] = JSON.parse(JSON.stringify(animals));

for (let i = 0; i < animalsGet.length; i++) {
    animalsGet[i] = null;
}
console.log(animals);
