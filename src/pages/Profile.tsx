import { IonContent, IonGrid, IonHeader, IonLabel, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ResponsiveContent from '../components/ResponsiveContent';
import './Profile.scss';

const Profile: React.FC = () => {
  return (
    <IonPage id="Profile">
      <IonHeader>
        <IonToolbar>
          <IonTitle className='ion-text-center'>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className='ion-padding'>
          <IonRow>
            <ResponsiveContent>
              <IonLabel>Username</IonLabel>
              <IonLabel className='ion-float-right'>hboueix</IonLabel>
            </ResponsiveContent>
          </IonRow>
          <IonRow>
            <ResponsiveContent>
              <IonLabel>Last latitude</IonLabel>
              <IonLabel className='ion-float-right'>45.1234567890</IonLabel>
            </ResponsiveContent>
          </IonRow>
          <IonRow>
            <ResponsiveContent>
              <IonLabel>Last longitude</IonLabel>
              <IonLabel className='ion-float-right'>5.0987654321</IonLabel>
            </ResponsiveContent>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
