export enum AnimalType {
    BIRD = 'BIRD',
    MAMMAL = 'MAMMAL',
}
  
export interface Animal {
    id: number;
    name: string;
    type: AnimalType;
    wingSpan?: number; // Chỉ dành cho loài chim
    isFly?: boolean; // Chỉ dành cho loài chim
    isTrained?: boolean; // Chỉ dành cho động vật có vú
    tags?: string[];
    children?: Animal[]; // Thêm thuộc tính children nếu cần
}