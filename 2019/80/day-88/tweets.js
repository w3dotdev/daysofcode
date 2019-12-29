// GET TWEETS
const request = require('request');
// pefabiodemelo
// evaristocosta
const options = {
  url: 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=evaristocosta&count=40',
  headers: {
    'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAEfTFQAAAAAAUgfC9xAVwxTVmk05O1r6VBxXKt8%3DF8YItCRrBjkE3IbkCOx4PHX79fZirjlm7hJZLsMYeRsTtImcgf'
  }
};
const tweets = [];
const callback = (error, response, body) => {
  if (!error && response.statusCode == 200) {
    const info = JSON.parse(body);
    info.forEach(tweet => {
      const t = { input: tweet.text, output: { evaristocosta: 1 } };
      tweets.push(t);

      console.log(tweets);
    });
  }
}

request(options, callback);
