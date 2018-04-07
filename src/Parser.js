require('isomorphic-fetch');

function parser(opts) {
  if (opts.user) {
    this.url = `medium.com/feed/@${opts.user}`;
  } else if (opts.publication) {
    this.url = `medium.com/feed/${opts.publication}`;
  } else {
    return new Error('Argument Error. Must supply an options object with either "user" or "publication" key.');
  }

  return fetch('https://api.rss2json.com/v1/api.json', { rss_url: this.url })
  .then((res) => res);
}

parser({ user: 'RightActioning' });

module.exports = parser;
