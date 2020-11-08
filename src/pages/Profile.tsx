import {
  IonPage,
  IonHeader,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonCard,
  IonContent,
  IonItem,
  IonItemDivider,
  IonList,
  IonAlert,
  IonGrid,
  IonRow,
  IonLabel,
  IonInput
} from '@ionic/react';

import React, { useState, useContext } from 'react';
import AppContext from '../data/app-context';
import ResponsiveContent from '../components/ResponsiveContent';

const Profile: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [latitude] = useState<number>(-63572375290155);
  const [longitude] = useState<number>(106744840359415);

  const appCtx = useContext(AppContext)

  const updateUsername = (newUsername: string) => {
    let updatedProfile = { ...appCtx.profile }
    updatedProfile.username = newUsername;
    appCtx.updateProfile(updatedProfile);
  }

  return (
    <IonPage id="Profile">
      <IonHeader>
        <IonToolbar>
          {/* <IonTitle className='ion-text-center'>Profile</IonTitle>
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
              <IonLabel className='ion-float-right'>5.0987654321</IonLabel> */}
          <IonTitle className='ion-text-center'>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid className='ion-padding'>
          <IonRow>
            <ResponsiveContent>
              <IonLabel>Username</IonLabel>
              <IonLabel onClick={() => setShowAlert(true)} className='ion-float-right'>{appCtx.profile.username}</IonLabel>
            </ResponsiveContent>
          </IonRow>
          <IonRow>
            <ResponsiveContent>
              <IonLabel>Last latitude</IonLabel>
              <IonLabel className='ion-float-right'>{latitude}</IonLabel>
            </ResponsiveContent>
          </IonRow>
          <IonRow>
            <ResponsiveContent>
              <IonLabel>Last longitude</IonLabel>
              <IonLabel className='ion-float-right'>{longitude}</IonLabel>
            </ResponsiveContent>
          </IonRow>

                    {/* <IonInput onClick={() => setShowAlert(true)}>{appCtx.profile.username}</IonInput>
                  </IonItem>
                </IonCard>
                <IonCard >
                  <IonItemDivider>Last Latitude</IonItemDivider>
                  <IonItem>
                    <IonLabel>{latitude}</IonLabel>
                  </IonItem>
                </IonCard>
                <IonCard >
                  <IonItemDivider>Last Longitude</IonItemDivider>
                  <IonItem>
                    <IonLabel>{longitude}</IonLabel>
                  </IonItem>
                </IonCard>
              </IonList>
            </ResponsiveContent>
          </IonRow> */}
        </IonGrid>
      </IonContent>
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={'Username'}
        inputs={[
          {
            name: 'usernameInput',
            type: 'text',
            id: 'profile-username',
            value: appCtx.profile.username,
            placeholder: 'Your username'
          }
        ]}
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Confirm Cancel');
            }
          },
          {
            text: 'Ok',
            handler: (changeInput) => {
              updateUsername(changeInput.usernameInput)
              console.log('Confirm Ok')
            }
          }
        ]}
      />
    </IonPage>
  );
};

export default Profile;