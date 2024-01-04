class UserRepository {
    public async findUserByEmail(email: string) {
        return { id: 1, email: email }
    }
}

export default UserRepository