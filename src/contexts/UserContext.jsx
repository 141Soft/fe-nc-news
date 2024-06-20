import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState('grumpy19') //Using hardcoded username for purpose of sprint, replace with placeholder when login implemented

    return (
        <UserContext.Provider value ={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )

}