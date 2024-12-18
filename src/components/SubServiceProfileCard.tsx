import React, { useState } from 'react';
import styles from './styles/SubServiceProfileCard.module.css';
import { ImCross } from "react-icons/im";

import ContactUsCard from '../components/ContactUsCard';

interface SubServiceProfileCardProps {
  title: string;
  shortDescription: JSX.Element;
  longDescription: JSX.Element;
  subServiceImg: string;
}

const SubServiceProfileCard: React.FC<SubServiceProfileCardProps> = ({subServiceImg, title, shortDescription, longDescription}) => {
  const [openOverlay, setOpenOverlay] = useState(false);
  
  function onOpenOverlay() {
    setOpenOverlay(true);
  }

  function onCloseOverlay() {
    setOpenOverlay(false);
  }

  return(
    <div className={styles.subServiceCardGlobalContainer}>
      <div className={styles.subServiceCard}  onClick={onOpenOverlay}>
        <div className={styles.subServiceImgTitleContainer}>
          <img src={subServiceImg} alt="subService_image" />
          <h1>{title}</h1>
        </div>
        {shortDescription}
      </div>
      {openOverlay && 
        <div className={styles.contactUsOverlay}>
          <ImCross className={styles.crossOverlay} onClick={onCloseOverlay}/>
          <ContactUsCard title={title} description={longDescription} contactUsImg={subServiceImg}/>
        </div>
      }
    </div>
  );
};

export default SubServiceProfileCard;
