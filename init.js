const mongoose = require("mongoose");
const Chat = require("./models/chat");

main().then(()=>{
    console.log("Connection successful");
}).catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "Alice",
        to: "Bob",
        msg: "Hey Bob, how are you?",
        created_at: new Date()
    },
    {
        from: "Bob",
        to: "Alice",
        msg: "Hi Alice, I'm doing well. Thanks for asking!",
        created_at: new Date()
    },
    {
        from: "Charlie",
        to: "David",
        msg: "Hey David, can we meet tomorrow?",
        created_at: new Date()
    },
    {
        from: "kamal",
        to:"Aryan",
        msg: "Send me your notes",
        created_at: new Date(),
    }
]

Chat.insertMany(allChats);
