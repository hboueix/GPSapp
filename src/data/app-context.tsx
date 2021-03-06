import React from 'react';

export interface Localisation {
    id: string, 
    latitude: number|undefined,
    longitude: number|undefined
}
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

export const defaultLocalisation: Localisation = {
    id: '0',
    latitude: 0.0,
    longitude: 0.0
}

interface AppContext {
    initContext: () => void,
    profile: Profile,
    updateProfile: (updatedProfile: Profile) => void,
    localisation: Localisation,
    updateLocalisation: (updatedLocalisation: Localisation) => void
}

const AppContext = React.createContext<AppContext>({
    initContext: () => { },
    profile: defaultProfile,
    updateProfile: () => { },
    localisation: defaultLocalisation,
    updateLocalisation: () => { }
});

export default AppContext