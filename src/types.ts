export enum AnimalType {
    BIRD = 'BIRD',
    MAMMAL = 'MAMMAL',
}

interface BaseAnimal {
    id: number;
    name: string;
    type: AnimalType;
    tags?: { [key: string]: string | number | boolean };
    children?: Animal[];
}

interface Bird extends BaseAnimal {
    type: AnimalType.BIRD;
    wingSpan: number;
    isFly: boolean;
    isTrained?: never;
}

interface Mammal extends BaseAnimal {
    type: AnimalType.MAMMAL;
    wingSpan?: never; 
    isFly?: never;
    isTrained: boolean;
}

export type Animal = Bird | Mammal;
