import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonNav, IonNavLink, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Importing the pages needed for the app */
import Home from './pages/Home';
import Login from './pages/Login';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import FelixMeter from './pages/FelixMeter';
import ProfilePage from './components/ProfilePage';
import Profile from './pages/Profile';
import Quiz from './components/Quiz';
import QuizPage from './pages/QuizPage';
import QuizPostCard from './pages/QuizPostCard';
import FrontMenu from './components/FrontMenu';
import FrontMenuPage from './pages/FrontMenuPage';
import Gratitude from './pages/GratitudePage';
import Community from './pages/CommunityInteractionPage';
import CommunityFeed from './pages/CommunityInteractionPageTwo';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/happy">
            <FelixMeter />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/quiz">
            <QuizPage />
          </Route>
          <Route exact path="/happy_post_card">
            <QuizPostCard />
          </Route>
          <Route exact path="/menu">
            <FrontMenuPage />
          </Route>
          <Route exact path="/gratitude">
            <Gratitude />
          </Route>
          <Route exact path="/community">
            <Community />
          </Route>
          <Route exact path="/community_feed">
            <CommunityFeed />
          </Route>
          <Route exact path="/">
            <Redirect to="/menu" />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
