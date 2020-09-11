require('dotenv').config()
const EventEmitter = require('events');
const { api } = require('./shared.js');
var redis = require('redis');

var tunnel = redis.createClient(process.env.REDIS_URL);

tunnel.on("error", function (error) {
    console.error('redis tunnel error:', error);
});

tunnel.on("connect", function () {
    console.log('redis tunnel connected');
});

tunnel.on("pmessage", function (pattern, channel, message) {
    var body = JSON.parse(message)
    if (channel == 'schedule:skipto') {
        //
    }
    else if (channel == 'schedule:heho') {
        //
    }
});

tunnel.psubscribe("schedule:*");