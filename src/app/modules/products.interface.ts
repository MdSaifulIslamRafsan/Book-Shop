
export type categoryType = "Fiction" | "Science" | "SelfDevelopment" | "Poetry" | "Religious"

export interface ProductType {
    title: string;
    author: string;
    price: number;
    category : categoryType;
    description : string;
    quantity : number;
    inStock : boolean;
}

