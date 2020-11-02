import React, { useState, useEffect, useRef } from 'react';
import AppContext, { GPSPosition, Profile, defaultProfile } from './app-context';

import { Plugins } from '@capacitor/core'

const { Storage, Filesystem } = Plugins;

const AppContextProvider: React.FC = (props) => {
    const [gpspositions, setGpspositions] = useState<GPSPosition[]>([])
    const [profile, setProfile] = useState<Profile>(defaultProfile)
    const didMountRef = useRef(false);

    useEffect(() => {
        if (didMountRef.current) {
            console.log(profile)
            Storage.set({ key: 'profile', value: JSON.stringify(profile) })
            Storage.set({ key: 'gpspositions', value: JSON.stringify(gpspositions) })
        } else {
            didMountRef.current = true;
        }
    }, [profile, gpspositions])

    const addGPSPosition = (newgpsposition: GPSPosition) => {
        setGpspositions((prevState) => {
            let newList = [...prevState];
            newList.unshift(newgpsposition)
            return newList
        })
    }

    const deleteGPSPosition = (id: string) => {
        const index = gpspositions.map(el => el.id).indexOf(id)
        setGpspositions((prevState) => {
            let newList = [...prevState];
            newList.splice(index, 1)
            return newList
        })
    }

    const updateGPSPosition = (updategpsposition: GPSPosition) => {
        const index = gpspositions.map(el => el.id).indexOf(updategpsposition.id)
        setGpspositions((prevState) => {
            let newList = [...prevState];
            newList.splice(index, 1, updategpsposition)
            return newList
        })
    }

    const updateProfile = (updateProfile: Profile) => {
        setProfile(updateProfile)
    }

    const initContext = async () => {
        const profileData = await Storage.get({ key: 'profile' })
        const gpspositionsData = await Storage.get({ key: 'gpspositions' })
        const storedProfile = profileData.value ? JSON.parse(profileData.value) : defaultProfile;
        const storedGPSPositions = gpspositionsData.value ? JSON.parse(gpspositionsData.value) : [];
        didMountRef.current = false;
        setProfile(storedProfile)
        setGpspositions(storedGPSPositions)
    }

    return <AppContext.Provider value={{ initContext, gpspositions, profile, updateProfile, addGPSPosition, deleteGPSPosition, updateGPSPosition }}>
        {props.children}
    </AppContext.Provider>
}

export default AppContextProvider