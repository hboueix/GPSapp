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
// import React, { useState } from 'react';

// import FinancialInfoItem from '../components/FinancialInfoItem';
import AppContext from '../data/app-context';
import ResponsiveContent from '../components/ResponsiveContent';

const Profile: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [latitude] = useState<number>(-63572375290155);
  const [longitude] = useState<number>(106744840359415);

  // const updateUsername = (event: CustomEvent) => {
  //   setName(event.detail.value!);
  // }

  const appCtx = useContext(AppContext)

  const updateUsername = (newUsername: string) => {
    let updatedProfile = { ...appCtx.profile }
    updatedProfile.username = newUsername;
    appCtx.updateProfile(updatedProfile);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton></IonMenuButton>
          </IonButtons>
          <IonTitle>Profil de l'utilisateur</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow>
            <ResponsiveContent>
              <IonList className="ion-padding" mode="md">
                <IonCard>
                  <IonItemDivider>Name</IonItemDivider>
                  <IonItem>
                    <IonInput onClick={() => setShowAlert(true)}>{appCtx.profile.username}</IonInput>
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
          </IonRow>
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