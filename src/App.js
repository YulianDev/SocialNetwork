import './App.scss';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Messages from "./components/Messages/Messages";
import {Route} from "react-router-dom";
import Friends from "./components/Friends/Friends";
import Settings from "./components/Settings/Settings";

function App(props) {

    return (
            <div className="app-wrapper">
                <Header/>
                <main className="main">
                    <div className="container">
                        <div className="main_inner">
                            <Aside/>
                            <div className="main_content">
                                <Route path='/profile' render={() => <Profile state={props.state.profilePage} dispatch={props.dispatch}/>}/>
                                <Route path='/friends' component={Friends}/>
                                <Route path='/messages' render={() => <Messages state={props.state.messagesPage} dispatch={props.dispatch}/>}/>
                                <Route path='/settings' component={Settings}/>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
    );
}

export default App;
