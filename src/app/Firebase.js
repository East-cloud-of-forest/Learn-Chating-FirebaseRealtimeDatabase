'use client'

import { initializeApp } from 'firebase/app'
import { getAnalytics } from "firebase/analytics";
import { useEffect } from 'react';

export default function Firebase() {
  useEffect(() => {
    const firevaseConfig = {
      apiKey: 'AIzaSyDmrpb9Mtzrv0YUFWk8vIbhOBOFbAzoecc',
      authDomain: 'chat-learn-66712.firebaseapp.com',
      databaseURL: 'https://chat-learn-66712-default-rtdb.firebaseio.com',
      projectId: 'chat-learn-66712',
      storageBucket: 'chat-learn-66712.appspot.com',
      messagingSenderId: '487421392782',
      appId: '1:487421392782:web:0c865e1b9c19943a0ad6df',
      measurementId: 'G-C5V75QFT7J',
    }
    const app = initializeApp(firevaseConfig)
    getAnalytics(app)
  }, [])
}
