export class User {
    /**
     * Constructor for User class
     * @param email
     * @param password
     * @param userName
     */
    constructor(public email: string,
                public password: string,
                public userName?: string
                ) {}
}