import Vue from 'vue'
import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyD9KkFzAEzWMkwnYrev3tMXgqIoAI_wO78',
  authDomain: 'waitwat-df0f4.firebaseapp.com',
  databaseURL: 'https://waitwat-df0f4.firebaseio.com',
  projectId: 'waitwat-df0f4',
  storageBucket: 'waitwat-df0f4.appspot.com',
  messagingSenderId: '949762856265'
}

firebase.initializeApp(config)

Vue.prototype.$firebase = firebase
