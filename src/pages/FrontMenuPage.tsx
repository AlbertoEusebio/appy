import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import InfiniteScroll from '../components/InfiniteScroll';
import LoginForm from '../components/LoginForm';
import ProfilePage from '../components/ProfilePage';
import Quiz from '../components/Quiz';
import FrontMenu from '../components/FrontMenu';

const FrontMenuPage: React.FC = () => {
  return (
    <FrontMenu />
  );
};

export default FrontMenuPage;
