import React, { useEffect } from 'react';
import useStorage from "../../database/useStorage"
import "../../static/Progressbar/progressbar.css"
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile,name,quote,reload,setReview}) => {
  const { progress, url } = useStorage(file,name,quote,reload);
  console.log(reload);
  useEffect(() => {
    if (url && reload) {
      setFile(null);
      setReview(true)
    }
    else{
      setReview(false)
    }
  }, [url, setFile]);

  return ( <div className="progress-bar" style={{width:progress + "%" }}></div> );
} 

export default ProgressBar;