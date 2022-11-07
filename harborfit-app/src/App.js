import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
//import {AmplifySigOut, withAuthenticator} from '@aws-amplify/ui-react'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react-v1';

Amplify.configure(awsconfig)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut/>
        <h2>Harbor Fit</h2>
      </header>
    </div>
  );
}

export default withAuthenticator(App);
