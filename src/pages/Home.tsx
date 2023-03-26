import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
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
        <InfiniteScroll />
      </IonContent>
    </IonPage>
  );
};

export default Home;
