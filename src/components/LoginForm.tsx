import React from 'react';
import { IonButton, IonCard, IonCheckbox, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonRow, IonTab } from '@ionic/react';
import { IonDatetime, IonDatetimeButton, IonModal } from '@ionic/react';
import { calendarClearOutline, calendarNumber, calendarOutline, logoFacebook, logoInstagram, logoTwitch, logoTwitter, sendOutline } from 'ionicons/icons';

function LoginForm() {
  return (
    <>
  <IonImg src='./assets/quiz/app_y.png'>
  </IonImg>
    <IonItem className="ion-justify-content-center">
        <IonGrid className="ion-padding">
        <IonRow>
        <IonCol>
          <IonItem fill="outline" shape="round">
            <IonLabel position="floating">username</IonLabel>
            <IonInput type="email" placeholder="Enter "></IonInput>
          </IonItem>
          </IonCol>
        </IonRow>
        <IonRow>
        <IonCol>
          <IonItem fill="outline" shape="round">
            <IonLabel position="floating">password</IonLabel>
            <IonInput type="email" placeholder="Enter"></IonInput>
          </IonItem>
          </IonCol>
          </IonRow>
            <IonRow>
                <IonCol>
                    <IonButton href='/home' size='large' expand="block" shape="round"> Log in </IonButton>
                </IonCol>
            </IonRow>
            <IonRow className='ion-padding'>
              <IonCol>
              <IonIcon size='large' icon={logoInstagram}>
              </IonIcon>
              </IonCol>
              <IonCol>
              <IonIcon size='large' icon={logoTwitter}>
              </IonIcon>
              </IonCol>
              <IonCol>
              <IonIcon size='large' icon={logoFacebook}>
              </IonIcon>
              </IonCol>
              <IonCol>
              <IonIcon size='large' icon={logoTwitch}>
              </IonIcon>
              </IonCol>
            </IonRow>
    </IonGrid>
    </IonItem>
    </>
  );
}
export default LoginForm;