// 1 is bird 2 is dog
const animals = [
    { id: 1, name: 'Sparrow', type: 0, wingSpan: 25, isFly: true },
    { id: 2, name: 'Eagle', type: 0, wingSpan: 200, isFly: true },
    { id: 3, name: 'Parrot', type: 0, wingSpan: 30, isFly: true },
    { id: 4, name: 'Penguin', type: 0, wingSpan: 60, isFly: false },
    { id: 5, name: 'Owl', type: 0, wingSpan: 150, isFly: true },
    { id: 6, name: 'Bulldog', type: 1, isTrained: true },
    { id: 7, name: 'Beagle', type: 1, isTrained: false },
    { id: 8, name: 'Labrador', type: 1, isTrained: true },
    { id: 9, name: 'Poodle', type: 1}, 
    { id: 10, name: 'German Shepherd', type: 1, isTrained: true }
  ];

// animal.js
const AnimalType = {
    BIRD: 0,
    MAMMAL: 1
};

module.exports = { AnimalType };

const hello = (name) => new Promise((resolve, _reject) => {
    setTimeout(() => {
    resolve(`Hello ${name}`)
    }, Math.random()*1000);
});

const finalAnimals = [
{
    id: 10,
    name: 'German Shepherd',
    type: 1,
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
        },
        {
            id: 12,
            name: 'German Shepherd1',
            isTrained: true,
        },
    ]
}
]
  
function getAnimals() {
    return animals;
}

function getAnimal(type) {
    return animals
        // Loc gia tri theo type
        .filter(animal => animal.type === type)
        // Destructuring loai bo thuoc tinh
        .map(animal => {
            // Tạo bản sao của đối tượng động vật mà không có thuộc tính `type`
            const { type, ...rest } = animal;
            return rest;
        });
}

//destructuring with function getAnimal
function getAnimalD (type) {
    return animals
        .filter(({type: animalType}) => animalType === type)
        .map(({type, ...rest}) => rest);
}

async function getHelloMessages(names) {
    const promises = names.map(name => hello(name));
    const results = await Promise.all(promises);
    return results;
}

//Promise.allSetted
async function getHelloMessages(names) {
    const promises = names.map(name => hello(name));
    const results = await Promise.allSettled(promises);

    // Xử lý kết quả của các Promise - GPT =))
    return results.map(result => {
        if (result.status === 'fulfilled') {
            return { status: 'fulfilled', value: result.value };
        } else {
            return { status: 'rejected', reason: result.reason };
        }
    });
}

let animalsGet = JSON.parse(JSON.stringify(animals));
for (let i = 0; i < animalsGet.length; i++) {
    animalsGet[i] = null;
}
console.log(animals);
