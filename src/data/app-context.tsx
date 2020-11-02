import React from 'react';

export interface GPSPosition {
    id: string,
    x: string,
    y: string,
}

export interface Profile {
    id: string,
    username: string,
}

export type GPSPositionInputFields = "x" | "y" ;

export const defaultProfile: Profile = {
    id: '0',
    username: "Unknown"
}

interface AppContext {
    initContext: () => void,
    gpspositions: GPSPosition[],
    addGPSPosition: (newGPSPosition: GPSPosition) => void,
    deleteGPSPosition: (id: string) => void,
    updateGPSPosition: (updatedGPSPosition: GPSPosition) => void,
    profile: Profile,
    updateProfile: (updatedProfile: Profile) => void
}

const AppContext = React.createContext<AppContext>({
    initContext: () => { },
    gpspositions: [],
    addGPSPosition: () => { },
    deleteGPSPosition: () => { },
    updateGPSPosition: () => { },
    profile: defaultProfile,
    updateProfile: () => { }
});

export default AppContext