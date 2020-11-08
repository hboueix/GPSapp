import { IonButton, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { save } from 'ionicons/icons';
import React from 'react';
import ResponsiveContent from '../components/ResponsiveContent';
import './Live.scss';

const Live: React.FC = () => {
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
              <IonLabel>Latitude : 45.1234567890</IonLabel>
            </ResponsiveContent>
          </IonRow>
          <IonRow>
            <ResponsiveContent>
              <IonLabel>Longitude : 5.0987654321</IonLabel>
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
