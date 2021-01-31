import firebase from 'firebase';
import firebaseApp from './firebase';

class AuthService {
    login(providerName) {
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
        // 이니셜라이즈 된 파이어베이스를 사용해야 된다
    }

    logout() {
        firebase.auth().signOut();
    }

    onAuthChange(onUserChanged) {
        firebase.auth().onAuthStateChanged(user => {
            onUserChanged(user)
        })
    };
}

export default AuthService;