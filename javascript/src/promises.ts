import axios, { AxiosResponse } from 'axios';

type ResponseUser = {
    id: number,
    name: string,
    email: string
}

axios.get<Array<ResponseUser>>("http://localhost:3001/users")
    .then(response => {
        const result = response.data;
        console.log(result);
    })

const getUser = (id: number): Promise<AxiosResponse<ResponseUser>> => {
    return axios.get("http://localhost:3001/users/" + id)
}

getUser(1).then(response => console.log(response.data));

const createUser = (obj: {name: string, email: string}, run: boolean = false): Promise<ResponseUser> | null => {
    if (run) {
        return axios.post<ResponseUser>("http://localhost:3001/users", obj)
            .then(response => { return response.data });
    }
    return null;
}

createUser({name: "Maria", email: "maria@gmail.com"});

// Async Await ###############################################

async function name(): Promise<string> {
    return "João";
}

name().then(value => console.log(value));

const otherGetUser = async (id: number): Promise<ResponseUser> => {
    try {
        const response = await axios.get("http://localhost:3001/users/" + id);
        return response.data
    } catch(e) {
        throw e
    }
}

otherGetUser(4)
    .then(data => console.log(data))
    .catch(error => console.log(error.message));