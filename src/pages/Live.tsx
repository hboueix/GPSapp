import { IonButton, IonCard, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState} from "react"
import { Geolocation, Geoposition } from "@ionic-native/geolocation"
import './Live.css';

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
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Live</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Live position</IonTitle>
          </IonToolbar>
        </IonHeader>
              Latitude:{latitude}
              Longitude:{longitude}
      </IonContent>
    </IonPage>
  );
};

export default Live;

