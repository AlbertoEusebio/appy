import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import InfiniteScroll from '../components/InfiniteScroll';
import LoginForm from '../components/LoginForm';
import ProfilePage from '../components/ProfilePage';
import Quiz from '../components/Quiz';
import FrontMenu from '../components/FrontMenu';

const FrontMenuPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='success'>
          <IonTitle>Menu</IonTitle>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <FrontMenu />
      </IonContent>
    </IonPage>
  );
};

export default FrontMenuPage;
