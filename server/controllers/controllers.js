// const { Author, Card } = require('./../models/post')
const Card = require('./../models/post')
const fs = require('fs');

module.exports = class API {
    // fetch all post
    static async fetchAllPost(req, res) {
        try {
            const cards = await Card.find();
            res.status(200).json(cards)
        } catch (err) {
            res.status(404).json(err)
        }
    };

    // fetch post by ID
    static async fetchPostById(req, res) {
        const id = req.params.id;
        try {
            const cards = await Card.findById(id);
            res.status(200).json(cards);
        } catch (err) {
            res.status(404).json("message: Data not found");

        }
    };

    // create post
    static async createPost(req, res) {
        const cards = req.body
        // console.log("-----------------------------req.file-----------------------------------------")
        // console.log(req.file)
        // console.log("-----------------------------req.file-----------------------------------------")
        const imageName = req.file.filename;
        cards.image = imageName;
        try {
            await Card.create(cards);
            res.status(200).json("Data was create");
        } catch (err) {
            res.status(404).json(err);
        }
    };

    // update post
    static async updatePost(req, res) {
        const id = req.params.id;
        let new_image = "";

        // nếu đã có file ảnh đã gửi trước đó
        // req.file cho infor 1 mảng các file ảnh dã gửi
        if (req.file) {
            new_image = req.file.filename;
            
            // nếu chưa có ảnh trước đó thì new_image = ...
        } else {
            new_image = req.body.old_image;
        }
        
        const newCard = req.body;
        // console.log("----------------------------------req.body2----------------------------------------------------\n")
        // console.log(req.body);
        // console.log("-------------------------------req.body2-----------------------------------------------------------\n")
        newCard.image = new_image;

        try {
            await Card.findByIdAndUpdate(id, newCard);
            res.status(200).json("Update is Succesfully");
        } catch (err) {
            res.status(404).json(err);
        }
    };

    // delete post
    static async deletelPost(req, res) {
        const id = req.params.id;
        try {
            const result = await Card.findByIdAndDelete(id);
            if (result.image != '') {
                try {
                    fs.unlinkSync('./uploads/'+ result.image);
                } catch (err) {
                    console.log(err);
                }
            res.status(200).json("Delete is Successfully");
            }
        } catch(err) {
            res.status(404).json(err);

        }

    };
}