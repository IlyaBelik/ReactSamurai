import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile profilePage={props.appState.profilePage}
                                                                  addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs state={props.appState.messagesPage}
                                                                  state={props.appState.messagesPage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
