import React, { useState, useEffect, useRef } from 'react';
import AppContext, { Profile, defaultProfile, defaultLocalisation, Localisation } from './app-context';

import { Plugins } from '@capacitor/core'

const { Storage } = Plugins;

const AppContextProvider: React.FC = (props) => {
    const [profile, setProfile] = useState<Profile>(defaultProfile)
    const [localisation, setLocalisation] = useState<Localisation>(defaultLocalisation)
    const didMountRef = useRef(false);

    useEffect(() => {
        if (didMountRef.current) {
            Storage.set({ key: 'profile', value: JSON.stringify(profile) })
            Storage.set({ key : 'localisation', value: JSON.stringify(localisation)})
        } else {
            didMountRef.current = true;
        }
    }, [profile, localisation])

    const updateProfile = (updatedProfile: Profile) => {
        setProfile(updatedProfile)
    }

    const updateLocalisation = (updatedLocalisation: Localisation) => {
        setLocalisation(updatedLocalisation)
    }

    const initContext = async () => {
        const profileData = await Storage.get({ key: 'profile' })
        const localisationData = await Storage.get({ key: 'localisation' })
        const storedProfile = profileData.value ? JSON.parse(profileData.value) : defaultProfile;
        const storedLocalisation = localisationData.value ? JSON.parse(localisationData.value) : defaultLocalisation;
        didMountRef.current = false;
        setProfile(storedProfile)
        setLocalisation(storedLocalisation)
    }

    return <AppContext.Provider value={{ initContext, profile, localisation, updateProfile, updateLocalisation }}>
        {props.children}
    </AppContext.Provider>
}

export default AppContextProvider