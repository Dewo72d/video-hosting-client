import axios from "axios";

export async function request({path, method, data, headers}) {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await axios({
                method: method? method : "GET",
                data: data ? data : {},
                url: `http://45.83.1.227:60110/${path}`,
                headers: headers ? { ...headers } : {},

            })
            resolve(res)

        } catch (error) {
            console.log("AXIOS ERROR >>>> ", error)
            reject(error)
        }
    })
}