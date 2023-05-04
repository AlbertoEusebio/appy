import { IonAvatar, IonBadge, IonButton, IonChip, IonContent, IonHeader, IonIcon, IonImg, IonItem, IonNavLink, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { Icon } from 'ionicons/dist/types/components/icon/icon';
import { searchCircleOutline } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import InfiniteScroll from '../components/InfiniteScroll';
import { useHistory } from 'react-router-dom';
import './Home.css';
import Profile from './Profile';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const history = useHistory();


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color='success'>
          <IonTitle>Weekly activity list</IonTitle>
          <IonAvatar class="cust-avatar" slot='start' onClick={() => history.push('/profile')}>
            <IonImg src={'https://picsum.photos/100/100?random=34'}></IonImg>
          </IonAvatar>
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
