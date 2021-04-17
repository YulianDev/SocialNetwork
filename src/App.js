import './App.scss';
import Aside from './components/Aside/Aside';
import Messages from "./components/Messages/Messages";
import {Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import FriendsContainer from "./components/Friends/FriendsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


function App() {

    return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <main className="main">
                    <div className="container">
                        <div className="main_inner">
                            <Aside/>
                            <div className="main_content">
                                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                                <Route path='/friends' render={() => <FriendsContainer/>}/>
                                <Route path='/messages' render={() => <Messages />}/>
                                <Route path='/settings' component={Settings}/>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
    );
}

export default App;
