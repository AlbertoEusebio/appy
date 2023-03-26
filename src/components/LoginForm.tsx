import React from 'react';
import { IonButton, IonCard, IonCol, IonGrid, IonIcon, IonInput, IonItem, IonLabel, IonRow, IonTab } from '@ionic/react';
import { IonDatetime, IonDatetimeButton, IonModal } from '@ionic/react';
import { sendOutline } from 'ionicons/icons';

function LoginForm() {
  return (
    <>
    <IonCard>
    <IonGrid>
    <IonRow>
        <IonCol>
      <IonItem fill="outline">
        <IonLabel position="floating">Name</IonLabel>
        <IonInput placeholder="Enter nane"></IonInput>
      </IonItem>
      </IonCol>
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
    <IonCol>
      <IonItem fill="outline">
        <IonLabel position="floating">Email</IonLabel>
        <IonInput type="email" placeholder="Enter "></IonInput>
      </IonItem>
      </IonCol>
    </IonRow>
    <IonRow>  
        <IonCol>
      <IonItem>
            <IonDatetimeButton datetime="datetime"> </IonDatetimeButton>
            
            <IonModal keepContentsMounted={true}>
                <IonDatetime id="datetime"></IonDatetime>
            </IonModal>
        
      </IonItem>
        </IonCol>
        <IonCol>
        <IonButton href='/home'> Log in </IonButton>
        </IonCol>
        </IonRow>
    </IonGrid>
    </IonCard>
    </>
  );
}
export default LoginForm;