import { useState, useEffect } from 'react';
import { projectFirestore } from './firebase_config';

const useFirestore = (collection,single_doc) => {
  const [docs, setDocs] = useState([]);
  const [doc, setDoc] = useState([]);

  useEffect(() => {
    const unsub = projectFirestore.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id});
        });
        setDocs(documents);
      });
      if(single_doc){
        const unsub_doc = projectFirestore.collection(collection).doc(single_doc)
        .onSnapshot(snap => {
          // let document = {};
          // snap.forEach(doc => {
          //   documents.push({...doc.data(), id: doc.id});
          // });
          console.log(snap.data());
          // setDocs(snap.doc.data);
        });
      }


    return () => unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection]);

  return { docs,doc };
}

export default useFirestore;