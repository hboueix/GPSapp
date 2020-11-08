import React from 'react';

export interface Profile {
    id: string,
    username: string,
    picture: string | null
}

export const defaultProfile: Profile = {
    id: '0',
    username: "Dupond",
    picture: null
}

interface AppContext {
    initContext: () => void,
    profile: Profile,
    updateProfile: (updatedProfile: Profile) => void
}

const AppContext = React.createContext<AppContext>({
    initContext: () => { },
    profile: defaultProfile,
    updateProfile: () => { }
});

export default AppContext