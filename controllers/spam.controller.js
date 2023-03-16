const { WebClient, ErrorCode } = require('@slack/web-api')

module.exports.send =(req, res) => {
    const { Email: email, Type: type } = req.body;
    const text = `Spam alert for ${email}`;
     
    if (type !== 'SpamNotification') 
      return res.status(409).send({message: 'Type not SpamNotification'});
  
    const client = new WebClient();
  
    client.chat.postMessage({
      token:process.env.TOKEN,
      channel: process.env.CHANNEL,
      text
    })
      .then(() => res.status(200).send({message: 'Alert sent to Slack.'}))
      .catch(err => {
        if(err.code === ErrorCode.PlatformError && err.data.error === "not_in_channel") {
          return res.status(500).send({ message: "The bot is not the channel."})
        }
        return res.status(500).send({ message: 'Oops! Something went wrong.'})
      })
}

