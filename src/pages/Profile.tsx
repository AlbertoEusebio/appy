import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import InfiniteScroll from '../components/InfiniteScroll';
import LoginForm from '../components/LoginForm';
import ProfilePage from '../components/ProfilePage';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='success'>
          <IonTitle>Profile Page</IonTitle>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ProfilePage></ProfilePage>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
