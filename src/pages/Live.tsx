import { IonButton, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { save } from 'ionicons/icons';
import React, { useContext, useState } from 'react';
import ResponsiveContent from '../components/ResponsiveContent';
import AppContext from '../data/app-context';
import './Live.scss';

const Live: React.FC = () => {

  const appCtx = useContext(AppContext)

  const updateLocalisation = (newLatitude: number, newLongitude: number) => {
    let updatedLocalisation = { ...appCtx.localisation }
    updatedLocalisation.latitude = newLatitude;
    updatedLocalisation.longitude = newLongitude;
    appCtx.updateLocalisation(updatedLocalisation);
  }

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
              <IonLabel >Latitude : {appCtx.localisation.latitude}</IonLabel>
            </ResponsiveContent>
          </IonRow>
          <IonRow>
            <ResponsiveContent>
              <IonLabel>Longitude : {appCtx.localisation.longitude}</IonLabel>
            </ResponsiveContent>
          </IonRow>
          <IonRow>
            <ResponsiveContent>
              <IonButton className="ion-float-right">
                <IonIcon icon={save}></IonIcon>
                <IonLabel onClick={() => updateLocalisation({appCtx.localisation.latitude}, {appCtx.localisation.longitude})}>Save</IonLabel>
              </IonButton>
            </ResponsiveContent>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Live;
