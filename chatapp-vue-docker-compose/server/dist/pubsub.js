var redis = require("redis"), subscriber = redis.createClient(), publisher = redis.createClient();
subscriber.on("message", function (channel, message) {
    console.log("Message '" + message + "' on channel '" + channel + "' arrived!");
});
subscriber.subscribe("test1", "test2");
publisher.publish("test1", "haaaaai");
publisher.publish("test2", "kthxbai");
//# sourceMappingURL=pubsub.js.map