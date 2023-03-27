import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { searchCircleOutline } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import InfiniteScroll from '../components/InfiniteScroll';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='success'>
          <IonTitle>Weekly activity list</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Weekly activity list</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonHeader color='success'>
          <IonItem>
            <IonSearchbar animated={true} placeholder="Animated"></IonSearchbar>
            <IonButton>Search</IonButton>
          </IonItem>
        </IonHeader>
        <InfiniteScroll />
      </IonContent>
    </IonPage>
  );
};

export default Home;
