import { initializeApp } from "firebase";

const ERROR = {
    duplicatedApp: {
        code: "app/duplicate-app",
        message:
            "Hot reload tried to initiate firebase again. Ignoring duplicated initialization",
    },
};

const firebaseConfig = () => ({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MSG_SENDER_ID,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
});

export const initializeFirebase = () => {
    try {
        initializeApp(firebaseConfig());
    } catch (error) {
        if (error.code === ERROR.duplicatedApp.code) {
            console.info(ERROR.duplicatedApp.message);
        } else {
            throw error;
        }
    }
};