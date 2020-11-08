import { IonButton, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { save } from 'ionicons/icons';
import React, { useState} from "react"
import { Geolocation, Geoposition } from "@ionic-native/geolocation"
import ResponsiveContent from '../components/ResponsiveContent';
import './Live.scss';

const Live: React.FC = () => {
    const [position, setPosition] = useState<Geoposition>();
    
    const getLocation = async() => {
        const position = await Geolocation.getCurrentPosition();
        setPosition(position);
    }
    getLocation();
    
    let latitude = position && position.coords.latitude
    let longitude =  position && position.coords.longitude
      
  return (
    <IonPage id="Live">
      <IonHeader id="headerRow">
        <IonToolbar className='ion-text-center'>
          <IonTitle>Live position</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonGrid>
          <IonRow className='ion-text-center'>
            <ResponsiveContent>
              <IonLabel>Your current position is :</IonLabel>
            </ResponsiveContent>
          </IonRow>
          <IonRow>
            <ResponsiveContent>
              <IonLabel>Latitude : {latitude}</IonLabel>
            </ResponsiveContent>
          </IonRow>
          <IonRow>
            <ResponsiveContent>
              <IonLabel>Longitude : {longitude}</IonLabel>
            </ResponsiveContent>
          </IonRow>
          <IonRow>
            <ResponsiveContent>
              <IonButton className="ion-float-right">
                <IonIcon icon={save}></IonIcon>
                <IonLabel>Save !</IonLabel>
              </IonButton>
            </ResponsiveContent>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Live;

