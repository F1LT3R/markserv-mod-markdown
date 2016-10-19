const name = 'markserv-mod-markdown';

// Includes
const Promise = require('bluebird');

// Http Request Modifier
const httpResponseModifier = requestPath => {
  return new Promise((resolve, reject) => {
    console.log(requestPath);
    // console.log(module.exports.configure);
    // console.log(module.exports.Markconf);

    const result = requestPath;

    // Pass Back to HTTP Request Handler or HTTP Exporter
    const payload = {
      statusCode: 200,
      contentType: 'text/html',
      data: result
    };

    // return payload;
    resolve(payload);
  });
};

module.exports = {
  name,
  httpResponseModifier
};
