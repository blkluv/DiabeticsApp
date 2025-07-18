// Table
export interface Table{
    rows: Row[];
}
export interface Row{
    columns: Column[]
}
export interface Column{
    value: string;
}
// User Data
export interface UserData{
    insulinRatio: number;
}
