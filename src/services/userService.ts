import { User } from '../types/types';

const USERS_KEY = 'registeredUsers';

/**
 * Fetches users from Local Storage.
 * returns an array of User objects.
 */
export const getUsers = (): User[] => {
  const storedUsers = localStorage.getItem(USERS_KEY);
  return storedUsers ? JSON.parse(storedUsers) : [];
};

/**
 * Adds a new user to Local Storage.
 * param newUser - The User object to add.
 */
export const addUser = (newUser: User): void => {
  const users = getUsers();
  users.push(newUser);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
};

/**
 * Checks if a email is already taken.
 * param email - The email to check.
 * returns True if the email exists, false otherwise.
 */
export const isEmailTaken = (email: string): boolean => {
  const users = getUsers();
  return users.some((user) => user.email.toLowerCase() === email.toLowerCase());
};

/**
 * Authenticates a user based on email and password.
 * param email - The entered email.
 * param password - The entered password.
 * returns The authenticated User object if credentials match, otherwise null.
 */
export const authenticateUser = (email: string, password: string): User | null => {
  const users = getUsers();
  const user = users.find(
    (user) =>
      user.email.toLowerCase() === email.toLowerCase() && user.password === password
  );
  return user || null;
};

/**
 * Generates a unique ID for a new user.
 * returns A unique number ID.
 */
export const generateUserId = (): number => {
  const users = getUsers();
  return users.length > 0 ? users[users.length - 1].id + 1 : 1;
};
