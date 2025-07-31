import { ObjectId } from "mongodb";


// User Data - WIP
export interface UserData{
    insulinRatio: number;
}


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
constructor(
    public name: string, 
    public total: number, 
    public food: ObjectId[], 
    public id?: ObjectId
) {}
}


