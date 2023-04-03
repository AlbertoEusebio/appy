import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonCol, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonRow, IonTab, IonTextarea, IonTitle, IonToolbar } from '@ionic/react';
import { IonDatetime, IonDatetimeButton, IonModal } from '@ionic/react';
import { calendarClearOutline, calendarNumber, calendarOutline, image, sendOutline } from 'ionicons/icons';

import "./HappyGrid.css";

function HappyGrid() {
  return (
    <>
    <IonCard>
    <IonToolbar color="tertiary">
        <IonTitle>Pussy Vibes?</IonTitle>
    </IonToolbar> 
    <IonGrid>
    <IonRow>
    <IonCol>
    <IonItem button detail={false}>
      <IonImg src="./assets/cats/cat01.jpeg"></IonImg>
      </IonItem>
      </IonCol>
    <IonCol>
    <IonItem button detail={false}>
      <IonImg src="./assets/cats/cat02.jpg"></IonImg>
    </IonItem>
      </IonCol>
    </IonRow>
    <IonRow>  
    <IonCol>
    <IonItem button detail={false}>
      <IonImg src="./assets/cats/cat03.jpg"></IonImg>
      </IonItem>
     </IonCol>
    <IonCol>
    <IonItem button detail={false}>
        <IonImg src="./assets/cats/cat04.png"></IonImg>
        </IonItem>
    </IonCol>
    </IonRow>
    </IonGrid>
    </IonCard>

    <IonCard>
    <IonToolbar color="tertiary">
        <IonTitle>Spongebob vibes?</IonTitle>
    </IonToolbar> 
    <IonGrid> 
    <IonRow>
    <IonCol>
    <IonItem button detail={false}>
      <IonImg src="./assets/spongebob/spongebob01.jpg"></IonImg>
      </IonItem>
      </IonCol>
    <IonCol>
    <IonItem button detail={false}>
      <IonImg src="./assets/spongebob/spongebob02.jpg"></IonImg>
      </IonItem>
      </IonCol>
    </IonRow>
    <IonRow>  
    <IonCol>
    <IonItem button detail={false}>
      <IonImg src="./assets/spongebob/spongebob03.jpg"></IonImg>
      </IonItem>
     </IonCol>
    <IonCol>
    <IonItem button detail={false}>
        <IonImg src="./assets/spongebob/spongebob04.jpeg"></IonImg>
        </IonItem>
    </IonCol>
    </IonRow>
    </IonGrid>
    </IonCard>

    <IonCard>
      <IonHeader>
      <IonToolbar color="tertiary">
        <IonTitle>Feeling moody? tell us</IonTitle>
    </IonToolbar>
      </IonHeader>
    <IonCardContent>
    <IonItem counter={true}>
      <IonLabel position='floating'></IonLabel>
      <IonTextarea maxlength={200}></IonTextarea>
      </IonItem>
    </IonCardContent>
    </IonCard>
    </>
  );
}
export default HappyGrid;