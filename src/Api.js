import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts/";

const getPosts = async () =>{
    try {
        let posts = await (await axios.get(BASE_URL)).data
        return posts;
    } catch (error) {
        console.error(error);
    }
}

export {getPosts};