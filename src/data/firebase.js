import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where} from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_REACT_APP_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_REACT_APP_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default app;

export async function projectsFirebase(){
    const projectsRef = collection(db, "proyectsDB");
    const snapshot = await getDocs(projectsRef)
    
    const projectsDB = snapshot.docs.map((elem) => {
    let projects = elem.data()
    projects.id = elem.id;
    return projects;
});
    return projectsDB;
}

export async function getProyect(idp){
    const proyectsRef = collection(db, "proyectsDB")
    const docRef = doc(proyectsRef, idp)
    const snapshot = await getDoc(docRef);
    return {...snapshot.data(), id: snapshot.id}
}

export async function projectsFirebaseCategory(categoryUrl){
    const projectsRef = collection(db, "proyectsDB")

    const q = query(projectsRef, where("category", "==", categoryUrl))
    const snapshot = await getDocs(q);

    const projectsCategory = snapshot.docs.map((elem) => {
        let projects = elem.data();
        projects.id = elem.id;
        return projects
    });
    return projectsCategory;
}