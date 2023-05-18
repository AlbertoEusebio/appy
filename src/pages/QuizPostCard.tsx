import React from 'react';
import { IonCard, IonContent, IonHeader, IonPage, IonRange, IonTitle, IonToolbar } from '@ionic/react';
import HappyGrid from '../components/HappyGrid';
import DefaultQuiz from '../components/DefaultQuiz';


const QuizPostCard: React.FC = () => {
    return (
      <IonPage className='ion-justify-content-center'>
        <IonHeader>
          <IonToolbar color='success'>
            <IonTitle>Describe your happiness</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <DefaultQuiz />
        </IonContent>
      </IonPage>
    );
  };
  

export default QuizPostCard;