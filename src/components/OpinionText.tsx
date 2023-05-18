import React from 'react';
import { IonAvatar, IonCard, IonCardContent, IonChip, IonCol, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonRange, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';


function OpinionText(props: any){

    return(
        <>
        <IonItem>
            <IonAvatar>
              <img alt="Silhouette of a person's head" src={'https://picsum.photos/100/720?random=' + Math.round(Math.random()*20)}/>
            </IonAvatar>
            <IonLabel> John Meyer </IonLabel>
        </IonItem>
        <IonItem>
        <IonText color="primary"> {props.opinion} </IonText>
        </IonItem>

        </>
    );
}

export default OpinionText;