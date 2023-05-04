import React from 'react';
import { IonButton, IonCard, IonCheckbox, IonCol, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonRow, IonTab } from '@ionic/react';
import { IonDatetime, IonDatetimeButton, IonModal } from '@ionic/react';
import { calendarClearOutline, calendarNumber, calendarOutline, sendOutline } from 'ionicons/icons';

function LoginForm() {
  return (
    <>
    <IonItem className="ion-justify-content-center">
    <IonCard className="ion-padding">
    <IonGrid className="ion-padding">
    <IonRow>
        <IonCol>
      <IonItem fill="outline">
        <IonLabel position="floating">Name</IonLabel>
        <IonInput placeholder="Enter nane"></IonInput>
      </IonItem>
      </IonCol>
    </IonRow>
    <IonRow>
      <IonCol>
        <IonItem fill="outline">
          <IonLabel position="floating">Surname</IonLabel>
          <IonInput  placeholder="Enter name"></IonInput>
        </IonItem>
      </IonCol>
    </IonRow>
    <IonRow>  
    <IonCol>
      <IonItem fill="outline">
        <IonLabel position="floating">Document Number</IonLabel>
        <IonInput placeholder="Enter CA number"></IonInput>
      </IonItem>
     </IonCol>
     </IonRow>
     <IonRow>
    <IonCol>
      <IonItem fill="outline">
        <IonLabel position="floating">Email</IonLabel>
        <IonInput type="email" placeholder="Enter "></IonInput>
      </IonItem>
      </IonCol>
    </IonRow>
    <IonRow>  
        <IonCol>
          <IonRow>
            <IonItem>
                <IonIcon color="primary" icon={calendarOutline}></IonIcon>
                <IonDatetimeButton datetime="datetime"> 
                </IonDatetimeButton>
                <IonModal keepContentsMounted={true}>
                    <IonDatetime id="datetime"></IonDatetime>
                </IonModal>
            </IonItem>
          </IonRow>
          <IonRow>
              <IonCol>
              <IonItem className="ion-justify-content-center">
                  <IonButton href='/home' size='large'> Log in </IonButton>
              </IonItem>
              </IonCol>
          </IonRow>
        </IonCol>
        </IonRow>
        <IonRow>
            <IonCol>
                <IonItem>
                    <IonCheckbox slot="start"></IonCheckbox>
                    <IonLabel>I agree to the terms and conditions</IonLabel>
                </IonItem>
            </IonCol>
        </IonRow>
    </IonGrid>
    </IonCard>
    </IonItem>
    </>
  );
}
export default LoginForm;