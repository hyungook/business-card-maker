import {firebaseAuth, githubProvider, googleProvider} from './firebase';
// import firebase from 'firebase';

class AuthService {
    login(providerName) {
        const authProvider = this.getProvider(providerName);
        return firebaseAuth.signInWithPopup(authProvider);
        // 이니셜라이즈 된 파이어베이스를 사용해야 된다
    }

    logout() {
        firebaseAuth.signOut();
    }

    onAuthChange(onUserChanged) {
        firebaseAuth.onAuthStateChanged(user => {
            onUserChanged(user);
        });
    };

getProvider(providerName) {
    switch(providerName) {
        case 'Google':
            return googleProvider;
        case 'Github':
            return githubProvider;
            default:
            throw new Error(`not supported provider: ${providerName}`);
    }
}


}

export default AuthService;