import { useState, useEffect } from 'react';
import { projectFirestore } from './firebase_config';

const useFirestore = ({collection,OrderBycreatedAt,order}) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsubGET = OrderBycreatedAt && projectFirestore.collection(collection)
      .orderBy('createdAt', order)
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id});
        });
        
        setDocs(documents);
      });

      const unsubGETunorder = !OrderBycreatedAt && projectFirestore.collection(collection)
      .onSnapshot(snap => {
        let documents = [];
        snap.forEach(doc => {
          documents.push({...doc.data(), id: doc.id});
        });
        
        setDocs(documents);
      });

    return () => {
      OrderBycreatedAt && unsubGET() 
      !OrderBycreatedAt && unsubGETunorder()
    }
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection]);


  return {docs}
}

export function postFirestore({collection,data}) {

  var _date =data.date.split("-")
  var data_obj = {
    createdAt:new Date(_date[0],parseInt(_date[1])-1,_date[2]),
    date:data.date,
    title:data.title,
    info:data.info
  }
  projectFirestore.collection(collection).add({...data_obj})
  setTimeout(() => {
    window.location.reload()
  }, 1500);

}

export default useFirestore;  