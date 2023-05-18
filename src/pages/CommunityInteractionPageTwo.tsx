import React from 'react';
import { IonAvatar, IonBadge, IonButton, IonCard, IonCardContent, IonChip, IonContent, IonHeader, IonItem, IonLabel, IonPage, IonRange, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import HappyGrid from '../components/HappyGrid';
import { useHistory } from 'react-router';
import OpinionText from '../components/OpinionText';


const CommunityFeed: React.FC = () => {
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
                <OpinionText opinion="Dumbo"/>
                <OpinionText opinion="Spiderman"/>
                <OpinionText opinion="Jurassic Park"/>
                <OpinionText opinion="7 wives for 7 brothers"/>
            </IonCardContent>
        </IonCard>
        <IonCard>
            <IonHeader>
                <IonToolbar color="tertiary">
                <IonTitle> Tell a joke to make someone laugh </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonCardContent>
                <OpinionText opinion="An elefant enters a coffee... splash"/>
                <OpinionText opinion="doctor: 'The check you gave me for my bill came back'.
                                     patient: 'So did my cold!'"/>
            </IonCardContent>
        </IonCard>
        <IonCard>
            <IonHeader>
                <IonToolbar color="tertiary">
                <IonTitle> Which is the best summer playlist? </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonCardContent>
            <OpinionText opinion="Machete Mixtape V4"/>
            <OpinionText opinion="Summer Vibes"/>
            </IonCardContent>
        </IonCard>
        <IonCard>
            <IonHeader>
                <IonToolbar color="tertiary">
                <IonTitle> A book that changed your life </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonCardContent>
                <OpinionText opinion="Slowing down - Danny Dorling -"/>
                <OpinionText opinion="How to win friends and influence people- Dale Carnegie -"/>
            </IonCardContent>
        </IonCard>
        </IonContent>
        <IonButton expand="block" onClick={() => history.push("/menu")}> back </IonButton>
      </IonPage>
    );
  };
  

export default CommunityFeed;