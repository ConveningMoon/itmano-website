import React from 'react';
import styles from './styles/ServiceProfileCard.module.css';
import { SubServiceType } from '../types/types';

import socialAppImg from '../assets/images/social_app_img.png';
import adminAppImg from '../assets/images/admin_app_img.png';
import customeAppImg from '../assets/images/custome_app_img.png';

import socialWebImg from '../assets/images/social_web_img.png';
import adminWebImg from '../assets/images/admin_web_img.png';
import customeWebImg from '../assets/images/custome_web_img.png';

import vrImg from '../assets/images/vr_img.png';
import arImg from '../assets/images/ar_img.png';
import customeRequestImg from '../assets/images/custome_request_img.png';

import SubServiceProfileCard from './SubServiceProfileCard';

interface ServiceProfileCardProps {
  title: string;
  id: string;
}

const socialApp: SubServiceType = {
    shorDescription: <p>Small description for the Social App Development</p>,
    longDescription: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget quam nec tellus varius dictum. Nam egestas, mi nec egestas blandit, velit ante vulputate neque, in pretium ipsum tellus eget justo. Curabitur nibh neque, ornare at malesuada id, ullamcorper eu massa. Quisque a mollis tortor. Praesent eu gravida purus. Sed aliquam magna id pretium tempus.</p>
}
const adminApp: SubServiceType = {
    shorDescription: <p>Small description for the Admin App Development</p>,
    longDescription: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget quam nec tellus varius dictum. Nam egestas, mi nec egestas blandit, velit ante vulputate neque, in pretium ipsum tellus eget justo. Curabitur nibh neque, ornare at malesuada id, ullamcorper eu massa. Quisque a mollis tortor. Praesent eu gravida purus. Sed aliquam magna id pretium tempus.</p>
}
const customeApp: SubServiceType = {
    shorDescription: <p>Small description for the Custome App Development</p>,
    longDescription: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget quam nec tellus varius dictum. Nam egestas, mi nec egestas blandit, velit ante vulputate neque, in pretium ipsum tellus eget justo. Curabitur nibh neque, ornare at malesuada id, ullamcorper eu massa. Quisque a mollis tortor. Praesent eu gravida purus. Sed aliquam magna id pretium tempus.</p>
}

const socialWeb: SubServiceType = {
    shorDescription: <p>Small description for the Social Web Development</p>,
    longDescription: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget quam nec tellus varius dictum. Nam egestas, mi nec egestas blandit, velit ante vulputate neque, in pretium ipsum tellus eget justo. Curabitur nibh neque, ornare at malesuada id, ullamcorper eu massa. Quisque a mollis tortor. Praesent eu gravida purus. Sed aliquam magna id pretium tempus.</p>
}
const adminWeb: SubServiceType = {
    shorDescription: <p>Small description for the Admin Web Development</p>,
    longDescription: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget quam nec tellus varius dictum. Nam egestas, mi nec egestas blandit, velit ante vulputate neque, in pretium ipsum tellus eget justo. Curabitur nibh neque, ornare at malesuada id, ullamcorper eu massa. Quisque a mollis tortor. Praesent eu gravida purus. Sed aliquam magna id pretium tempus.</p>
}
const customeWeb: SubServiceType = {
    shorDescription: <p>Small description for the Custome Web Development</p>,
    longDescription: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget quam nec tellus varius dictum. Nam egestas, mi nec egestas blandit, velit ante vulputate neque, in pretium ipsum tellus eget justo. Curabitur nibh neque, ornare at malesuada id, ullamcorper eu massa. Quisque a mollis tortor. Praesent eu gravida purus. Sed aliquam magna id pretium tempus.</p>
}

const vr: SubServiceType = {
    shorDescription: <p>Small description for the VR Development</p>,
    longDescription: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget quam nec tellus varius dictum. Nam egestas, mi nec egestas blandit, velit ante vulputate neque, in pretium ipsum tellus eget justo. Curabitur nibh neque, ornare at malesuada id, ullamcorper eu massa. Quisque a mollis tortor. Praesent eu gravida purus. Sed aliquam magna id pretium tempus.</p>
}
const ar: SubServiceType = {
    shorDescription: <p>Small description for the AR Development</p>,
    longDescription: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget quam nec tellus varius dictum. Nam egestas, mi nec egestas blandit, velit ante vulputate neque, in pretium ipsum tellus eget justo. Curabitur nibh neque, ornare at malesuada id, ullamcorper eu massa. Quisque a mollis tortor. Praesent eu gravida purus. Sed aliquam magna id pretium tempus.</p>
}
const customeRequest: SubServiceType = {
    shorDescription: <p>Small description for the Custome Request Development</p>,
    longDescription: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget quam nec tellus varius dictum. Nam egestas, mi nec egestas blandit, velit ante vulputate neque, in pretium ipsum tellus eget justo. Curabitur nibh neque, ornare at malesuada id, ullamcorper eu massa. Quisque a mollis tortor. Praesent eu gravida purus. Sed aliquam magna id pretium tempus.</p>
}

const ServiceProfileCard: React.FC<ServiceProfileCardProps> = ({title, id}) => (
  <div className={styles.ServiceProfileContainer} id={id}>
    <h1 className={styles.serviceProfileTitle}>{title}</h1>
    {title === 'App Development' && 
        <div className={styles.subServiceProfileMainContainer}>        
            <SubServiceProfileCard subServiceImg={socialAppImg} title='Social App'  shortDescription={socialApp.shorDescription} longDescription={socialApp.longDescription}/>
            <SubServiceProfileCard subServiceImg={adminAppImg} title='Administrative App' shortDescription={adminApp.shorDescription} longDescription={adminApp.longDescription}/>
            <SubServiceProfileCard subServiceImg={customeAppImg} title='Custome App' shortDescription={customeApp.shorDescription} longDescription={customeApp.longDescription}/>       
        </div>   
    } 
    {title === 'Web Development' && 
        <div className={styles.subServiceProfileMainContainer}>        
            <SubServiceProfileCard subServiceImg={socialWebImg} title='Social Website' shortDescription={socialWeb.shorDescription} longDescription={socialWeb.longDescription}/>
            <SubServiceProfileCard subServiceImg={adminWebImg} title='Administrative Website' shortDescription={adminWeb.shorDescription} longDescription={adminWeb.longDescription}/>
            <SubServiceProfileCard subServiceImg={customeWebImg} title='Custome Website' shortDescription={customeWeb.shorDescription} longDescription={customeWeb.longDescription}/>       
        </div>   
    } 
    {title === 'VR/AR Tours' && 
        <div className={styles.subServiceProfileMainContainer}>        
            <SubServiceProfileCard subServiceImg={vrImg} title='VR Tours' shortDescription={vr.shorDescription} longDescription={vr.longDescription}/>
            <SubServiceProfileCard subServiceImg={arImg} title='AR Tours' shortDescription={ar.shorDescription} longDescription={ar.longDescription}/>
            <SubServiceProfileCard subServiceImg={customeRequestImg} title='Custome Request' shortDescription={customeRequest.shorDescription} longDescription={customeRequest.longDescription}/>       
        </div>   
    } 
  </div>
);

export default ServiceProfileCard;
