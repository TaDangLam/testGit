const mongoose = require('mongoose');
const Schema = mongoose.schema;

const cardSchema = new mongoose.Schema({
    title: {type: String, required: true },
    category: {type: String, required: true},
    content: {type: String, required: true},
    image: {type: String, required: true},
    createAt: {type: Date, default: Date.now},
    // author: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "author",
    // },
});

// const authorSchema = new mongoose.Schema({
//     nameAuthor: {type: String, required: true },
//     writeDate: {type: Date, default: Date.now},
//     address: {type: String},
//     phone: {type: String},
//     card: [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "card",
//         },
//     ]
// });

// ref sao thì param trong model tên y vậy
// const Author = mongoose.model("author", authorSchema);

const Card = mongoose.model("card", cardSchema);

// module.exports = { Author, Card };
module.exports = Card;
