import React from 'react';
import { IonButton, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonImg, IonItem, IonPage, IonRange, IonRoute, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router';


const FrontMenu: React.FC = () => {
  const history = useHistory();
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color='success'>
            <IonTitle>Try the quiz</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen className='ion-justify-content-center'>
            <IonImg src='./assets/quiz/app_y.png'>
            </IonImg>
            <IonGrid>
                <IonRow>
                    <IonCol>
                        <IonButton shape="round" color="success" expand="block" onClick={() => history.push("/home")}> Task </IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton shape="round" color="success" expand="block" onClick={() => history.push("/community")}> Bacheca </IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton shape="round" color="success" expand="block" onClick={() => history.push("/profile")}> Traguardi </IonButton>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonButton shape="round" color="success" expand="block" onClick={() => history.push("/gratitude")}> Gratitude </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>

      </IonPage>
    );
  };
  

export default FrontMenu;