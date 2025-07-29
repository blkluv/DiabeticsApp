type Food = {
    _id: number;
    food_name: string;
    brand_name: string;
    serving_qty: number;
    serving_unit: string;
    serving_weight_grams: number;
    nf_total_carbohydrate: number;
    nf_sugars: number;
}
type Meal = {
    _id: number;
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