import { ObjectId } from "mongodb";

export type Food = {
    _id: ObjectId;
    food_name: string;
    brand_name: string;
    serving_qty: number;
    serving_unit: string;
    serving_weight_grams: number;
    nf_total_carbohydrate: number;
    nf_sugars: number;
}
export type Meal = {
    _id: ObjectId;
    name: string;
    total: number;
    food: Food[]
}

type Row = {
    columns: Column[]
}
type Column = {
    value: string;
}
