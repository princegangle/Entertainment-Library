import axios from "axios";
console.log("cdc")

const BASE_URL = "https://api.themoviedb.org/3"
const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN 
const headers = {
    Authorization :  'bearer '+ TMDB_TOKEN
}

const FecthdatafromApi = async(url, params ) =>{
       try {
           const{data}= await axios.get(BASE_URL + url, {params,headers} )
        //    const json = await JSON.stringify(data)
        //    const jsons = await JSON.parse(json)

           return data
           
        } catch (error) {
            console.log(error + "error in Api.js")
            return error
        }
    }
    export default FecthdatafromApi