import React, { useState, FormEvent }  from 'react';
import { useNavigate } from 'react-router-dom';

import { addUser, isEmailTaken, generateUserId, authenticateUser } from '../services/userService';
import { User } from '../types/types';

import styles from './styles/AccountCard.module.css';

interface AccountCardProps {
    isRegister: boolean;
}

function forgotPasswordHanlder() {
    alert("Forgot Password Handler!");
}

const AccountCard: React.FC<AccountCardProps> = ({ isRegister}) => {
    const [emailInput, setEmailInput] = useState<string>('');
    const [passwordInput, setPasswordInput] = useState<string>('');
    const [repeatPasswordInput, setRepeatPasswordInput] = useState<string>('');
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    const navigate = useNavigate();

    async function sendSignInFormHandler(e: FormEvent) {
        e.preventDefault();
        setMessage(null);
        // Basic Validation
        if (!emailInput.trim() || !passwordInput || !repeatPasswordInput) {
            setMessage({ type: 'error', text: 'All fields are required.' });
            return;
        }
    
        if (passwordInput !== repeatPasswordInput) {
            setMessage({ type: 'error', text: 'Passwords do not match.' });
            return;
        }
    
        if (isEmailTaken(emailInput)) {
            setMessage({ type: 'error', text: 'Email is already taken. Please choose another one.' });
            return;
        }
    
        // Create New User
        const newUser: User = {
            id: generateUserId(),
            email: emailInput.trim(),
            password: passwordInput, // MUST hash passwords!
        };
    
        addUser(newUser);
        setMessage({ type: 'success', text: 'Registration successful! You can now log in.' });
        navigate('/login');

        // Clear Form Fields
        setEmailInput('');
        setPasswordInput('');
        setRepeatPasswordInput('');
    }

    async function sendLoginFormHandler(e: FormEvent) {
        e.preventDefault();
        setMessage(null);

        if (!emailInput.trim() || !passwordInput) {
          setMessage({ type: 'error', text: 'Both fields are required.' });
          return;
        }
    
        const user = authenticateUser(emailInput, passwordInput);
    
        if (user) {
          setMessage({ type: 'success', text: `Welcome, ${user.email}! You have successfully logged in.` });
        } else {
          setMessage({ type: 'error', text: 'Invalid username or password. Please try again.' });
        }
    }

    function goToRegister() {
        navigate('/register');
    }

    function goToLogin() {
        navigate('/login');
    }

    return (
    <div className={styles.AccountCardCcontainer}>
        <div className={styles.AccountTitle}>{isRegister ? "Sign In" : "Log In"}</div>
        {message &&
            <p 
                className={styles.authMessage}
                style={{color: message.type === "error" ? 'red' : "green"}}
            >
                    {message.text}
            </p>
        }        
        <form onSubmit={isRegister ? sendSignInFormHandler : sendLoginFormHandler} className={styles.AccountForm}>
            <input 
                required
                className={styles.AccountInput} 
                type="email" 
                name="email" 
                id="email" 
                placeholder="E-mail"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
            />
            <input 
                required={true} 
                className={styles.AccountInput} 
                type="password" 
                name="password" 
                id="password" 
                placeholder="Password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
            />
            {isRegister && 
                <input required={true} 
                    className={styles.AccountInput} 
                    type="password" 
                    name="repeat_password" 
                    id="repeat_password" 
                    placeholder="Repeat Password"
                    value={repeatPasswordInput}
                    onChange={(e) => setRepeatPasswordInput(e.target.value)}
                />
            }
            {!isRegister && 
                <p className={styles.forgotPassword} onClick={forgotPasswordHanlder}>Forgot Password?</p>
            }
            <input 
                className={styles.AccountFormButton} 
                type="submit" 
                value={isRegister ? "Create new account" : "Log In"}
            />            
            {!isRegister && 
                <p className={styles.notAccountText}>Don't have account? <span onClick={goToRegister}>Register</span></p>
            }
            {isRegister && 
                <p className={styles.notAccountText}>Already have an account? <span onClick={goToLogin}>Login</span></p>
            }
        </form>
        <div className={styles.socialAccountContainer}>
            <span className={styles.title}>Or Sign in with</span>
            <div className={styles.socialAccounts}>                    
                <button className={styles.socialButton}>
                    <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 488 512">
                        <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                    </svg>
                </button>
                <button className={styles.socialButton}>
                    <svg className={styles.svg}  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
                    </svg>
                </button>
                <button className={styles.socialButton}>
                    <svg className={styles.svg}  xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    );
};

export default AccountCard;
