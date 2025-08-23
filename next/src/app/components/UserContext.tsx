

import { createContext, ReactNode} from 'react';
import { User } from '../models/user';

export const UserContext = createContext<User>({carb_ratio: 0});
export const UserProvider = ({children, user}: { children: ReactNode, user: User}) => {

  return (
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
  );
}