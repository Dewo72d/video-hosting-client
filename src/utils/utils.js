import axios from "axios";

export async function request({ path, method, data, headers }) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios({
                method: method ? method : "GET",
                data: data ? data : {},
                url: `https://api.dewo.pp.ua/${path}`,
                headers: headers ? { ...headers } : {},
                withCredentials: true,
            })
            resolve(res)

        } catch (error) {
            console.log("AXIOS ERROR >>>> ", error)
            reject(error)
        }
    })
}