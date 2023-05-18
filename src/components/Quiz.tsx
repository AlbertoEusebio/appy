import React from 'react';
import { IonButton, IonCard, IonContent, IonHeader, IonImg, IonItem, IonPage, IonRange, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router';


const Quiz: React.FC = () => {
  const history = useHistory();
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color='success'>
            <IonTitle>Try the quiz</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className='ion-justify-content-center'>
            <IonImg src='./assets/quiz/strenghts.png'>
            </IonImg>
            <IonItem>
                <IonButton shape="round" color="success" size="large" onClick={() => {
                  history.push("/happy");
                }}> Inizia il Quiz </IonButton>
            </IonItem>
          </IonContent>
      </IonPage>
    );
  };
  

export default Quiz;