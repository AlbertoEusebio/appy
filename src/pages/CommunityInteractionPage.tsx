import React from 'react';
import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonPage, IonRange, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import HappyGrid from '../components/HappyGrid';
import { useHistory } from 'react-router';


const Community: React.FC = () => {
    const history = useHistory();

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color='success'>
            <IonTitle> Common pills of happiness </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
        <IonCard>
            <IonHeader>
                <IonToolbar color="tertiary">
                <IonTitle> A movie that made you cry </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonCardContent>
                <IonTextarea></IonTextarea>
            </IonCardContent>
        </IonCard>
        <IonCard>
            <IonHeader>
                <IonToolbar color="tertiary">
                <IonTitle> Tell a joke to make someone laugh </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonCardContent>
                <IonTextarea></IonTextarea>
            </IonCardContent>
        </IonCard>
        <IonCard>
            <IonHeader>
                <IonToolbar color="tertiary">
                <IonTitle> Which is the best summer playlist? </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonCardContent>
                <IonTextarea></IonTextarea>
            </IonCardContent>
        </IonCard>
        <IonCard>
            <IonHeader>
                <IonToolbar color="tertiary">
                <IonTitle> A book that changed your life </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonCardContent>
                <IonTextarea></IonTextarea>
            </IonCardContent>
        </IonCard>
        </IonContent>
        <IonButton expand="block" onClick={() => history.push("/community_feed")}> submit </IonButton>
      </IonPage>
    );
  };
  

export default Community;