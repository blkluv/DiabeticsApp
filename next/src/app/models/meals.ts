import { ObjectId } from "mongodb";

export class Food {
constructor(
    
    public food_name: string, 
    public brand_name: number, 
    public serving_qty: number, 
    public serving_unit: string, 
    public serving_weight_grams: number,
    public nf_total_carbohydrate: number,
    public nf_sugars: number,
    public id?: ObjectId
) {}
}
export class Meal {
    public insulin?: number;
constructor(
    public name: string, 
    public total_carbs: number, 
    public food_items: Food[], 
    public id?: ObjectId
) {}
}

export class Total{
    constructor(
        public carbs: number,
        public insulin: number
    ){}
}