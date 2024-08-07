export enum AnimalType {
    BIRD = 'BIRD',
    MAMMAL = 'MAMMAL',
}

export interface Animal {
    id: number;
    name: string;
    type: AnimalType;
    wingSpan?: number;
    isFly?: boolean;
    isTrained?: boolean;
    tags?: { [key: string]: string | number | boolean };
    children?: Animal[];
}