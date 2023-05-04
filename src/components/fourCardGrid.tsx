import React from 'react';
import { IonAvatar, IonBadge, IonButton, IonButtons, IonChip, IonCol, IonGrid, IonItem, IonLabel, IonRow } from '@ionic/react';
import BasicCard from './BasicCard';


function FourGrid(props: any) {
  return (
    <IonGrid fixed={true}>
      <IonRow>
        <IonCol>
        <BasicCard src="https://ionicframework.com/docs/img/demos/card-media.png" title={props.titles[0]}>
            <IonChip>
              <IonAvatar>
                <img alt="Silhouette of a person's head" src={'https://picsum.photos/100/720?random=' + props.index}/>
              </IonAvatar>
              <IonLabel>John Meyer</IonLabel>
            </IonChip>
            <IonItem>
            <IonBadge color="success" >{Math.round(Math.random()*20)}</IonBadge>
            <IonLabel>Subscribers</IonLabel>
            </IonItem>
        </BasicCard>
        </IonCol>
        <IonCol>
        <BasicCard src="https://ionicframework.com/docs/img/demos/card-media.png" title={props.titles[1]}> 
            <IonChip>
              <IonAvatar>
                <img alt="Silhouette of a person's head" src={'https://picsum.photos/100/720?random=' + props.index+1} />
              </IonAvatar>
              <IonLabel>John Meyer</IonLabel>
            </IonChip>
            <IonItem>
            <IonBadge color="success" >{Math.round(Math.random()*20)}</IonBadge>
            <IonLabel>Subscribers</IonLabel>
            </IonItem>
        </BasicCard>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
        <BasicCard src="https://ionicframework.com/docs/img/demos/card-media.png" title={props.titles[2]}> 
            <IonChip>
              <IonAvatar>
                <img alt="Silhouette of a person's head" src={'https://picsum.photos/100/720?random=' + props.index+2} />
              </IonAvatar>
              <IonLabel>John Meyer</IonLabel>
            </IonChip>
            <IonItem>
            <IonBadge color="success" >{Math.round(Math.random()*20)}</IonBadge>
            <IonLabel>Subscribers</IonLabel>
            </IonItem>
        </BasicCard>
        </IonCol>
        <IonCol>
        <BasicCard src="https://ionicframework.com/docs/img/demos/card-media.png" title={props.titles[3]}> 
            <IonChip>
              <IonAvatar>
                <img alt="Silhouette of a person's head" src={'https://picsum.photos/100/720?random=' + props.index+3} />
              </IonAvatar>
              <IonLabel>John Meyer</IonLabel>
            </IonChip>
            <IonItem>
            <IonBadge color="success" >{Math.round(Math.random()*20)}</IonBadge>
            <IonLabel>Subscribers</IonLabel>
            </IonItem>
        </BasicCard>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
}
export default FourGrid;