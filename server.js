import express from "express";
import sample_data from './assets/sample_data.json' assert { type: "json" };
import bodyParser from "body-parser";
import fs from "fs";

const app = express();

app.use("/", express.static("./assets"));
app.get("/sample", (req, res) => {
    res.json(sample_data);
})

app.post("/addsample", bodyParser.json(),(req, res) => {
    sample_data.menu.popup.menuitem.push(req.body)
    save();
    res.json({
        staus: "success",
        data: sample_data
    });
})

app.delete("/deletesample/:item", bodyParser.json(),(req, res) => {
    sample_data.menu.popup.menuitem.filter !== req.params.item; 
    save();
    res.json({
        staus: "success",
        data: req.params.item
    });
})

const save = () => {
    fs.writeFile("./assets/sample_data.json", JSON.stringify(sample_data, null, 2), err => {
        if(err){
            throw err;
        }
    })
}

app.listen(3000, () => {
    console.log("server running on port 3000");
})