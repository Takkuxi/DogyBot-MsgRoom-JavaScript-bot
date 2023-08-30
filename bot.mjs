import Client from "msgroom";

const client = new Client("[&]DogyBot[BOT]", [ "&" ]);
await client.connect();

client.commands.hey = () => "hey";

client.commands.repeat = (reply, ...args) => {
    return args.join(" ");
};

client.commands.thanks = () => "thanks to NanderTGA for help the bot creation and thanks to Kris47 too!";

client.commands.repeat = (reply, ...args) => {
    return args.join(" ");
};

client.commands.hello = () => "Hello world!";

client.commands.repeat = (reply, ...args) => {
    return args.join(" ");
};

client.commands.welcome = () => "Welcome to all new in chat!";

client.commands.repeat = (reply, ...args) => {
    return args.join(" ");
};

client.commands.youtube = () => "there is the bot creator's youtube channel [here](https://www.youtube.com/@jussed)";

client.commands.repeat = (reply, ...args) => {
    return args.join(" ");
};

client.commands.about = () => "DogyBot© a bot made by jussed with the help of NanderTGA and Kris47 thanks to us! (DoggyBot© about command)";

client.commands.repeat = (reply, ...args) => {
    return args.join(" ");
};
