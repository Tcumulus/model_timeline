import { useState, useEffect } from "react"
import { firestore } from "../firebase/config"
import { collection, query, onSnapshot } from "firebase/firestore"

const useFirestore = (c: string) => {
  const [docs, setDocs] = useState<any[]>([])

  useEffect(() => {
    const q = query(collection(firestore, c))
    onSnapshot(q, (querySnapshot) => {
      setDocs(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
     })))
    })
  }, [collection])
  return { docs }
}



export default useFirestore