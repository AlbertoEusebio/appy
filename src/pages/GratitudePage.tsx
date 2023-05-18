import React from 'react';
import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonPage, IonRange, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import HappyGrid from '../components/HappyGrid';
import { useHistory } from 'react-router';


const Gratitude: React.FC = () => {
    const history = useHistory();

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color='success'>
            <IonTitle> Gratitude </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        <IonCard>
            <IonHeader>
                <IonToolbar color="tertiary">
                <IonTitle> Today I am grateful for </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonCardContent>
                <IonTextarea></IonTextarea>
            </IonCardContent>
        </IonCard>
        <IonCard>
            <IonHeader>
                <IonToolbar color="tertiary">
                <IonTitle> Today my priorities are </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonCardContent>
                <IonTextarea></IonTextarea>
            </IonCardContent>
        </IonCard>
        <IonCard>
            <IonHeader>
                <IonToolbar color="tertiary">
                <IonTitle> One thing I want to do for myself </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonCardContent>
                <IonTextarea></IonTextarea>
            </IonCardContent>
        </IonCard>
        <IonCard>
            <IonHeader>
                <IonToolbar color="tertiary">
                <IonTitle> Who I wish to talk to today? </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonCardContent>
                <IonTextarea></IonTextarea>
            </IonCardContent>
        </IonCard>
        <IonCard>
            <IonHeader>
                <IonToolbar color="tertiary">
                <IonTitle> One thing I could do to help a friend </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonCardContent>
                <IonTextarea></IonTextarea>
            </IonCardContent>
        </IonCard>
        </IonContent>
        <IonButton expand="block" onClick={() => history.goBack()}> submit </IonButton>
      </IonPage>
    );
  };
  

export default Gratitude;