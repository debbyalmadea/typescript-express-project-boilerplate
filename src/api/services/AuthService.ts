class AuthService {
    public async login(email: string, password: string) {
        // Do some stuff
        return { id: 1, email: email }
    }

    public async logout(user: any) {
        // Do some stuff
    }
}

export default AuthService