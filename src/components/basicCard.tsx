import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IonButton } from '@ionic/react';

function BasicCard(props: any) {
  return (
    <IonCard>
      <img alt="Silhouette of mountains" src={props.src} />

      <div>
        {props.children}
      </div>

      <IonCardHeader>
        <IonCardTitle>Activity {props.index}</IonCardTitle>
        <IonCardSubtitle>A nice walk in the bowling mall</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        Here's a small text description for the card content. Nothing more, nothing less.
      </IonCardContent>

      <IonButton fill="clear" color="success"> Accept </IonButton>
      <IonButton fill="clear" color="danger"> Decline </IonButton>
    </IonCard>
  );
}
export default BasicCard;