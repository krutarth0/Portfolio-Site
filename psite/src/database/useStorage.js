import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from './firebase_config';

const useStorage = (file,name,quote,reload) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);


  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('ourTeam');
   
    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      console.log(name,quote);

      if(reload) {
        await collectionRef.add({ url, createdAt,name,quote});
        setUrl(url);
        window.location.reload(true)
      }
      else{
        await collectionRef.doc('TEMP').set({ url, createdAt,name,quote})
        setUrl(url);
        // window.location.reload(true)
      }
    });

  }, [file]);

  return { progress, url, error };
}

export default useStorage;