export enum AnimalType {
    BIRD = 'BIRD',
    MAMMAL = 'MAMMAL',
}

interface BaseAnimal {
    id: number;
    name: string;
    type: AnimalType;
    tags?: Record<string, string | number | boolean>;
    children?: Animal[];
}

interface Bird extends BaseAnimal {
    type: AnimalType.BIRD;
    wingSpan: number;
    isFly: boolean;
}

interface Mammal extends BaseAnimal {
    type: AnimalType.MAMMAL;
    isTrained?: boolean;
}

export type Animal = Bird | Mammal;
