'use client'

import { useEffect } from 'react'
import { getDatabase, ref, onValue, child, get } from 'firebase/database'

export default function Home() {
  useEffect(() => {
    const db = getDatabase()
    const starCountRef = ref(db, 'use1')
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val()
      console.log(data)
    })
    console.log(1)
  }, [])

  const getData = () => {
    const dbRef = ref(getDatabase())
    get(child(dbRef, `use1`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val())
        } else {
          console.log('No data available')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <main className="min-h-screen">
      <button onClick={getData}>get</button>
      <p>asda</p>
    </main>
  )
}
