import http from './configAxios'

export const Daftar = (first_name,last_name,email,password) => async () => {
    var register = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: password
    }
    try {
        const res = await http.post("/users-add",register)
        if(res.data !== 'Error')
        {
            console.log(register);
            localStorage.setItem("id", res.data.id)
        }
    } catch (err) {
        Promise.reject(err)
    }
}

export const Login = (email, password) =>  async() => {
    var dataLogin = {
        email: email,
        password: password
    }

    try {
        const res = await http.post("api/login",dataLogin)
        
        if(res.data !== 'Error')
        {
            localStorage.setItem("id", res.data.id)
            return res.data
        }
    } catch (err) {
         return Promise.reject(err)
    }
}

export const Logout = () => {
    return () => {
        localStorage.removeItem('user');
    }
}

export const GetUser = () => async (dispatch) => {
    try {
        const res = await http.get("auth/user",{
            withCredentials: true,
        })

        return res.data

    } catch (err) {
        console.log(err);
    }
}