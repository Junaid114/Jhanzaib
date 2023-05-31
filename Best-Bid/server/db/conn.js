// const mongoose = require('mongoose');




// mongoose.connect("mongodb+srv://junaid8597:JUNaid@1254@cluster0.7epnvou.mongodb.net/").then(() => {
//     console.log(`connection Successful`);
// }).catch((err) => console.log(`no connection`));

const mon = require("mongoose")


const db = "mongodb+srv://mj8597176:JUNaid@1254@cluster0.wfz3l37.mongodb.net/";

mon.connect(db).then(() => {
    console.log("Connected")
}).catch(() => {
    console.log("Not Connected")
})