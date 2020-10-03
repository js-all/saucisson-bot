import * as _fs from 'fs'
import discord from "discord.js"
import path from 'path'

const fs = _fs.promises;
const rel = (file: string) => path.join(__dirname, file);


try {
    fs.readFile(rel("token.txt")).then((v) => {
        next(v.toString());
    });

} catch {
    console.log("you must write your token in token.txt")
    fs.writeFile(rel("token.txt"), "token goes here")
}

function next(token: string) {
    const client = new discord.Client();
    client.on('ready', () => {
        console.log("bot running: saucisson");
    });
    client.on('message', msg => {
        if(msg.content.includes("saucisson")) {
            const image = rel((Math.floor(Math.random() * 6) + 1) + ".jpg");
            client.user?.send(image);
        }
    });
    client.login(token);
}




