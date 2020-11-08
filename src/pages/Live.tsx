import { IonButton, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { save } from 'ionicons/icons';
import React, { useContext, useState} from "react"
import { Geolocation, Geoposition } from "@ionic-native/geolocation"
import ResponsiveContent from '../components/ResponsiveContent';
import AppContext, { Localisation } from '../data/app-context';
import './Live.scss';

const Live: React.FC = () => {

  const appCtx = useContext(AppContext)

  
  const updateLocalisation = (localisation: Localisation) => {
    let updatedLocalisation = { ...appCtx.localisation }
    updatedLocalisation.latitude = localisation.latitude;
    updatedLocalisation.longitude = localisation.longitude;
    appCtx.updateLocalisation(updatedLocalisation);
  }
  
  const [position, setPosition] = useState<Geoposition>();
  
  const getLocation = async() => {
    const position = await Geolocation.getCurrentPosition();
    setPosition(position);
  }
  getLocation();
  
  let latitude = position && position.coords.latitude
  let longitude =  position && position.coords.longitude
  
  const currentLocalisation: Localisation = {
    id: '0',
    latitude: latitude,
    longitude: longitude
  }

  return (
    <IonPage id="Live">
      <IonHeader id="headerRow">
        <IonToolbar color='primary' className='ion-text-center'>
          <IonTitle>Live position</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonGrid>
          <IonRow className='ion-text-center'>
            <ResponsiveContent>
              <IonTitle>Your current position is :</IonTitle>
            </ResponsiveContent>
          </IonRow>
          <IonRow>
            <ResponsiveContent>
              <IonLabel><strong>Latitude:</strong> {latitude}</IonLabel>
            </ResponsiveContent>
          </IonRow>
          <IonRow>
            <ResponsiveContent>
              <IonLabel><strong>Longitude:</strong> {longitude}</IonLabel>
            </ResponsiveContent>
          </IonRow>
          <IonRow>
            <ResponsiveContent>
              <IonButton  fill='outline' className="ion-float-right">
                <IonIcon icon={save}></IonIcon>
                <IonLabel onClick={() => updateLocalisation(currentLocalisation)}>Save</IonLabel>
              </IonButton>
            </ResponsiveContent>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Live;

