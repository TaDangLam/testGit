import axios from 'axios'
const url = '/api/post'

export default class API {
    // get all the post into database
    static async getAllPost(){
        const res = await axios.get(url);
        return res.data;
    }

    // get follow id the post into database
    static async getPostById(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }

    // post follow id the post into database
    static async addPost(post){
        const res = await axios.post(url, post);
        return res.data;
    }

    // update follow id the post into database
    static async updatePostById(id, post){
        const res = await axios.patch(`${url}/${id}`, post);
        return res.data;
    }

    // get follow id the post into database
    static async Delete(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}
