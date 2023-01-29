This is the code:

```javascript
const fetch = require('isomorphic-fetch');

function parse(opts) {
  let url;
  if (opts.user) {
    url = `https://medium.com/feed/@${opts.user}`;
  } else if (opts.publication) {
    url = `https://medium.com/feed/${opts.publication}`;
  } else {
    return new Error('Argument Error. Must supply an options object with either "user" or "publication" key.');
  }

  return fetch(`https://api.rss2json.com/v1/api.json?rss_url=${url}`)
  .then((res) => res.json());
}

module.exports = parse;
```

```js
// index.js
exports.parse = parse;
```

Example use:

```
npm install medium-post-parser
```

```
const { parse } = require('medium-post-parser')
const posts = await parse({ user: 'PopularDemand' })
```
