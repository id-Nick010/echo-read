import React, {createContext, useContext, useState} from 'react';

type AppContextType = {
    playTrigger: boolean;
    text: string;
    playVoice: () => void;
    setText: React.Dispatch<React.SetStateAction<string>>;
};


const AppContext = createContext<AppContextType | undefined>(undefined);


export function AppProvider({children}: any) {
    const [text, setText] = useState('');
    const [playTrigger, setPlayTrigger] = useState(false);
    
    const playVoice = () => { setPlayTrigger(!playTrigger)};

    return (
        <AppContext.Provider value={{playTrigger, text, playVoice, setText}}>
           {children} 
        </AppContext.Provider>
    );
}

export function useAppContext(): AppContextType {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('error context');
    }
    return context;
}
