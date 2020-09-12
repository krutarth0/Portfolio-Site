import React, { useEffect } from 'react';
import useStorage from "../../database/useStorage"
import "../../static/Progressbar/progressbar.css"
import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile,name,quote}) => {
  const { progress, url } = useStorage(file,name,quote);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return ( <div className="progress-bar" style={{width:progress + "%" }}></div> );
} 

export default ProgressBar;