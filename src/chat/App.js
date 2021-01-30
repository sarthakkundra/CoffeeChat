import React, { useRef, useState } from 'react';
import './App.css';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import {useAuthState} from 'react-firebase-hooks/auth'
import {useCollectionData} from 'react-firebase-hooks/firestore'


firebase.initializeApp({

  apiKey: "AIzaSyDqxvky9QplU3Wso74MRcI3W46vJCu637Q",
  authDomain: "coffee-chat-90f5d.firebaseapp.com",
  databaseURL: "https://coffee-chat-90f5d.firebaseio.com",
  projectId: "coffee-chat-90f5d",
  storageBucket: "coffee-chat-90f5d.appspot.com",
  messagingSenderId: "352878256726",
  appId: "1:352878256726:web:4fa6eb3154e66ba32351f7",
  measurementId: "G-DN0EDHGE97"

})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() 
{

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      
      <header>
        <h1>Coffee Chat</h1>
        <SignOut />
      </header>
      
      <section>
        {user ? <Profile /> : <SignIn />}
       
      </section>
    </div>
  );
}

function SignIn()
{
  const SignInWithGoogle = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <button onClick={SignInWithGoogle}>Sign in with Google</button>
  )
}

function SignOut()
{
  return auth.currentUser && (
    <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
  )
}

function ChatRoom() 
{
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;
    console.log(formValue);
    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <form onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <button type="submit" disabled={!formValue}>Send</button>
      

    </form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img src={photoURL}/>
      <p>{text}</p>
    </div>
  </>)
}
function Profile()
{
  
    
    return(
    <>
      <button onClick={mentor}>Register as Mentor</button>
      <button onClick={mentee}>Register as Mentee</button>
      
    </>
  )

  
}
function mentor()
{

  //const [formValue, setFormValue] = useState('');
  console.log("mentor");
  return(
    <>
    <form>

      <input value="text" placeholder="Enter name"  />
      <button>Submit</button>
    
    </form>
    </>
  )
}
function mentee()
{

 // const [formValue, setFormValue] = useState('');
 console.log("mentee");
  return(
    <>
    <form>

      <input value="text" placeholder="Enter name" />
      <button>Submit</button>
    
    </form>
    </>
  )
}







export default App;
