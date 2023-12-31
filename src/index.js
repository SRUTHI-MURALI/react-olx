import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Context, { FirebaseContext } from './Store/Context';
import firebase from './Firebase/config';

ReactDOM.render(
<FirebaseContext.Provider value={{firebase}}>
    <Context/>    
</FirebaseContext.Provider>
,
document.getElementById('root'));
