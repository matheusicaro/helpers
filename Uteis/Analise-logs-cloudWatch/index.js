const file = require("./logs.json");

const start = () => {
  let mensagens = [];

  file.logs.map(e => {
    const message = JSON.parse(e.message);
    const newObjMessage = {
      date: new Date(message.timestamp),
      messageLog: message.meta
    };
    mensagens.push(newObjMessage);
  });

  mensagens = mensagens.sort((a, b)=> a.date.getTime() - b.date.getTime());
  mensagens.map(msg => {
    const date = `${msg.date.getDate()}/${msg.date.getMonth()} ${msg.date.getHours()}:${msg.date.getMinutes()}:${msg.date.getSeconds()}`;
    console.log("-----------------------------------------");
    console.log(`${date} - ${msg.messageLog})`);
  })
};

start();