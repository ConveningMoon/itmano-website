import React, { FormEvent, useState } from 'react';
import styles from './styles/CreateUser.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

import SimpleInput from '../../components/SimpleInput';
import SimpleTextArea from '../../components/SimpleTextArea';

import { addUser } from '../../services/userService';

interface NewUser {
    id: number;
    email: string;
    password: string;
    name: string;
    companyName: string;
    description: string;
}

interface LocationState {
    newUser: NewUser;
}

const CreateUser: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [companyName, setCompanyName] = useState<string>('');
    const [description, setDecription] = useState<string>('');

    const navigate = useNavigate();
    const location = useLocation();

    const state = location.state as LocationState;
    const { newUser } = state;
    

    async function createNewUser(e:FormEvent) {
        e.preventDefault();
        newUser.name = name;
        newUser.companyName = companyName;
        newUser.description = description;
        addUser(newUser);
        navigate('/login');
    }

    return(
        <div className={styles.CreateUserContainer}>
            <div className={styles.CreateUserFormContainer}>
                <h1 className={styles.title}>Create an Account</h1>
                <p className={styles.subtitle}>Tell us a little more about yourself and your company for a more personalized assistance</p>
                <form 
                    onSubmit={createNewUser}
                    className={styles.CreateUserForm}
                >
                    <SimpleInput 
                        nameId='name'
                        type='text'
                        placeholder='Your Full Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <SimpleInput 
                        nameId='company_name'
                        type='text'
                        placeholder="Company's Name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                    />
                    <h2 className={styles.label}>Give Us a Short Description of Your Company</h2>
                    <p className={styles.request}>Briefly describe your business model, add important details such as: <span style={{fontStyle: 'italic', fontWeight: '600'}}>type of market, country in which you operate, target audience, etc.</span> The more details you provide, the faster and more efficient the consultation we will be able to offer you.</p>
                    <SimpleTextArea 
                        nameId='description'
                        placeholder='Description'
                        value={description}
                        onChange={(e) => setDecription(e.target.value)}
                    />
                    <input 
                        className={styles.CreateUserFormButton} 
                        type="submit" 
                        value="CREATE NEW ACCOUNT"
                    />  
                    <p 
                        onClick={() => {navigate('/register'); localStorage.clear()}}
                        className={styles.goBackPressable}
                    >
                        Go Back and Cancel Registration
                    </p>
                </form>
            </div>
        </div>
    );
};

export default CreateUser;
