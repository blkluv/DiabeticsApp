

import { createContext, ReactNode} from 'react';
import { User } from '../models/user';
import { Meal } from '../models/meals';

export const UserContext = createContext<User>({carb_ratio: 0});
export const MealContext = createContext<Meal[]>([{name:'',total_carbs:0,food_items: []}]);

type DbDataProps = {
  children: ReactNode,
  user: User,
  meals: Meal[]
}

export const DbDataProvider = ({children, user, meals}: DbDataProps) => {

  return (
    <UserContext.Provider value={user}>
      <MealContext value={meals}>
        {children}  
      </MealContext>
    </UserContext.Provider>
  );
}