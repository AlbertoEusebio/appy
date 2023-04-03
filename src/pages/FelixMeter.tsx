import React from 'react';
import { IonCard, IonContent, IonHeader, IonPage, IonRange, IonTitle, IonToolbar } from '@ionic/react';
import HappyGrid from '../components/HappyGrid';


const FelixMeter: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color='success'>
            <IonTitle>Describe your happiness</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <HappyGrid />
        </IonContent>
      </IonPage>
    );
  };
  

export default FelixMeter;