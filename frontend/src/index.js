import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {defaultTheme, GlobalStyle} from './styles';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import store from './store';
import Home from './pages/Home';
import Login from './pages/Login';
import EmailSignUp from './pages/Login/SingUp/EmailForm';
import CongratsMessage from './pages/Login/SingUp/CongratsDiv';
import VerificationForm from './pages/Login/SingUp/Verification'
import TournamentOverview from './pages/TournamentOverview';
import TournamentAdmin from './pages/TournamentAdmin.jsx';
import CreateTournament from './pages/CreateTournament/';
import PrivateOrPublic from './pages/CreateTournament/PrivateOr';
import DetailsCreate from './pages/CreateTournament/DetailsTournament';
import AboutUs from "./pages/AboutUs"
import ContactUs from "./pages/ContactUs";
import Bracket from './pages/Bracket';
import {PageContainer, PageContent} from './styles/page-layout';
import PublicProfile from "./pages/Profile/UserProfile";
import Standing from "./pages/Standing";
import EditProfile from "./pages/Profile/EditProfile";
import Tournaments from "./pages/Tournaments";
import Sidebar from './components/Sidebar';
import {withAuth} from './hoc/AuthHOC'



ReactDOM.render(
  <Provider store={ store }>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router>
      <PageContainer>
            <Sidebar/>
            <PageContent>
            <Switch>
              <Route exact path="/" component={ Home } />
              <Route exact path="/tournaments" component={Tournaments} />
              <Route exact path="/tournament/:id/overview" component={withAuth(TournamentOverview)} />
              <Route exact path="/tournament/:id/bracket" component={Bracket} />
              <Route exact path="/tournament/:id/standing" component={Standing} />
              <Route exact path="/tournament/:id/admin" component={TournamentAdmin} />
              <Route exact path="/login" component={ Login } />
              <Route exact path="/registration" component={ EmailSignUp } />
              <Route exact path="/confirmation" component={ CongratsMessage } />
              <Route exact path="/verification" component={ VerificationForm} />
              <Route exact path="/create" component={ withAuth(CreateTournament) } />
              <Route exact path="/privacy" component={ withAuth(PrivateOrPublic) } />
              <Route exact path="/details" component={ withAuth(DetailsCreate) } />
              <Route exact path="/user/:id" component={PublicProfile} />
              <Route exact path="/user/:id/edit" component={EditProfile} />
              <Route exact path="/aboutus" component={ AboutUs } />
              <Route exact path="/contactus" component={ ContactUs } />
            </Switch>
            </PageContent>
        </PageContainer>
    </Router>
    </ThemeProvider>
  </Provider>,

    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

