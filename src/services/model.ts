export interface LoginBody {
    username: string;
    password: string;
}

export interface RegisterBody {
    name: string;
    lastName: string,
    userName: string;
    password: string;
    confirmPassword: string;
}