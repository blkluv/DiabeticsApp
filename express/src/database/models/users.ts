import { ObjectId } from "mongodb";

export class User {
constructor(
    public carb_ratio: number,
    public _id: ObjectId
) {}
}
