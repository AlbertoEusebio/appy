import React from 'react';
import { IonCard, IonContent, IonHeader, IonImg, IonPage, IonRange, IonTitle, IonToolbar } from '@ionic/react';


const Quiz: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color='success'>
            <IonTitle>Try the quiz</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
            <IonImg src='./assets/quiz/appy.png'>

            </IonImg>
        </IonContent>
      </IonPage>
    );
  };
  

export default Quiz;