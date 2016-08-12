/**
 * Created by nalantianyi on 16/8/12.
 */
var Wechat = require('wechat');
var WechatAPI = require('wechat-api');
var express = require('express');
var app = express();
var api = new WechatAPI('wx5786fae623fb9353', '94dba368c96a9ff97e16337b887d9547');
var config = {
    "appid": "wx2171bd1549ac505c",
    "appSecret": "bd0ff4b87c32c729036236761b3f8135",
    "token": "bdVci937jADFQGkxo2ratUyz6XK48C5M",
    "encodingAESKey": "MdrrEUETgRvRVMF9Caos64DEYE7LP2EqDieUxOSOYbJ",
    "admins": 'oHv8is2fgmO4G0dUUTKVFjXICjqs'

};
app.use('/', Wechat(config, Wechat.text(text_handler).event(eventHandler)));
var eventHandlers = {
    "ABOUT_ME": eventAboutMe,
    "DEVELOPING": eventDeveloping
};

function eventAboutMe(msg, req, res) {
    res.reply('欢迎光临 纳兰天忆的小作坊！');
}
function eventDeveloping(msg, req, res) {
    res.reply('该功能正在研发中!');
}
function eventHandler(msg, req, res, next) {
    var event = msg.EventKey;
    var handler = eventHandlers[event];
    if (handler) {
        handler(msg, req, res);
    }
}

function text_handler(msg, req, res, next) {
    res.reply('Hi, 欢迎来到纳兰天忆的小作坊,相关功能正在开发哦');
    tryProcessCmd(msg);
}

function tryProcessCmd(msg) {

    console.log(msg.FromUserName);
    if (config.admins.indexOf(msg.FromUserName) == -1) {
        return;
    }

    if (msg.Content.length > 25 || !/^\#cmd\:\S+$/.test(msg.Content)) return;
    var cmd = msg.Content;
    switch (cmd) {
        case '#cmd:updatemenu': {

            var menu = loadMenu();
            api.createMenu(menu, function (err, rslt) {
                console.log('error:', err, rslt);
            });
        }
    }
}

/**
 *
 *
 * 加载菜单
 * @returns {{button: *[]}}
 */
function loadMenu() {

    var site = 'http://m.nalantianyi.com';
    return{

        button: [
            {
                name: '测试', sub_button: [
                {type: 'view', name: '移动端重构', url: site + '/test'},
                {type: 'view', name: '加菲派纯webapp', url: site + '/jiafeipai'}
            ]
            },
            {
                name: '我的', sub_button: [
                {type: 'view', name: '个人主页', url: site + '/'}
                 ]
            }
        ]
    };
}

module.exports = app;