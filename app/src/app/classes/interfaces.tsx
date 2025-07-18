// Table
export interface Table{
    rows: Row[];
}

// User Data
export interface UserData{
    insulinRatio: number;
}

// Food API (Nutritionix)
export interface SearchResponse{
    foods: Food[]
}

