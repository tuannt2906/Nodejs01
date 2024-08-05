const { getAnimal, getHelloMessages } = require('./animal');

async function main() {
    // Gọi hàm getAnimals
    console.log('All Animals:', getAnimals());

    // Gọi hàm getAnimal với type = 0
    const animalsOfType0 = getAnimal(0);
    console.log('Animals of type 0:', animalsOfType0);

    // Gọi hàm getHelloMessages với mảng các tên
    const names = ['A', 'B', 'C'];
    const helloMessages = await getHelloMessages(names);
    console.log('Hello Messages:', helloMessages);
}

main();
