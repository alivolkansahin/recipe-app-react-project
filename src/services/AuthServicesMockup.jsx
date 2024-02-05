// This is a mock authentication service  (KULLANILMIYOR BU PROJEDE!)

const AuthService = {
    isAuthenticated: false,

    loginService(username, password) {
        // in a real app, you'd have an API calls here.
        // This is just a mockup, so we'll simulate async behavior with a promise
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if(username === "admin" && password === "password"){
                    this.isAuthenticated = true;
                    resolve();
                } else {
                    reject("hata");
                }
            }, 1000);
        });
    },
    logoutService(){
        this.isAuthenticated = false;
    }
};

export default AuthService
