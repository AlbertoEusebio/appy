import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonTitle, IonToolbar } from '@ionic/react';
import { IonButton } from '@ionic/react';

function BasicCard(props: any) {
  return (
    <IonCard color="light">
      <IonToolbar color='tertiary'>
          <IonTitle>A walk in the woods...</IonTitle>
        </IonToolbar>
      
      <IonItem>
      {props.children}
      </IonItem>

      <IonCardHeader>
        <IonCardTitle>{props.title}</IonCardTitle>
        <IonCardSubtitle>A nice walk in the bowling mall</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        Here's a small text description for the card content. Nothing more, nothing less.
      </IonCardContent>

      <IonButton fill="clear" color="success" onClick={props.remove}> Accept </IonButton>
      <IonButton fill="clear" color="danger" onClick={props.remove}> Decline </IonButton>
    </IonCard>
  );
}
export default BasicCard;