"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _fs = __importStar(require("fs"));
var discord_js_1 = __importDefault(require("discord.js"));
var path_1 = __importDefault(require("path"));
var fs = _fs.promises;
var rel = function (file) { return path_1.default.join(__dirname, file); };
try {
    fs.readFile(rel("token.txt")).then(function (v) {
        next(v.toString());
    });
}
catch (_a) {
    console.log("you must write your token in token.txt");
    fs.writeFile(rel("token.txt"), "token goes here");
}
function next(token) {
    var client = new discord_js_1.default.Client();
    client.on('ready', function () {
        console.log("bot running: saucisson");
    });
    client.on('message', function (msg) {
        var _a;
        if (msg.content.match(/s{1,2}au(ss|c)i(?:(s{2,3}|c))on[a-z]{0,1}/gi) !== null && msg.author.id !== ((_a = client.user) === null || _a === void 0 ? void 0 : _a.id)) {
            var image = rel("pics/" + (Math.floor(Math.random() * 5) + 1) + ".jpg");
            msg.channel.send("", {
                files: [
                    image
                ]
            });
        }
    });
    client.login(token);
}
