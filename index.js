Promise = require('bluebird');

const name = 'markserv-mod-markdown';

const handleRequest = (req) => {
  return new Promise((resolve, reject) => {
    // {statusCode, contentType, data}
    let payload;

    // Pass Back to HTTP Request Handler or HTTP Exporter
    payload = {
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
  handleRequest
};
