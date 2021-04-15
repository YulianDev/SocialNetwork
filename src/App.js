import './App.scss';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Messages from "./components/Messages/Messages";
import {Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import FriendsContainer from "./components/Friends/FriendsContainer";

function App() {

    return (
            <div className="app-wrapper">
                <Header/>
                <main className="main">
                    <div className="container">
                        <div className="main_inner">
                            <Aside/>
                            <div className="main_content">
                                <Route path='/profile' render={() => <Profile/>}/>
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
