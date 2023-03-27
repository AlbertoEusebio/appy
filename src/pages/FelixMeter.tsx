import React from 'react';
import { IonContent, IonHeader, IonPage, IonRange, IonTitle, IonToolbar } from '@ionic/react';


const FelixMeter: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color='success'>
            <IonTitle>Describe your happiness</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        </IonContent>
      </IonPage>
    );
  };
  

export default FelixMeter;