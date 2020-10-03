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
        if (msg.content.match(/s{1,2}au(ss|c)i(?:(s{2,3}|c))on[a-z]{0,1}/gi) !== null && msg.author.id !== client.user?.id) {
            const image = rel("pics/" + (Math.floor(Math.random() * 5) + 1) + ".jpg");
            msg.channel.send("", {
                files: [
                    image
                ]
            });
        }
    });
    client.login(token);
}




