const markserv = require('markserv-cli');

const Promise = require('bluebird');
const Handlebars = require('handlebars');
const marked = require('marked');

markserv(plugin => {
  // console.log(plugin);

  return requestPath => {
    return new Promise((resolve, reject) => {
      // console.log(plugin.meta);

      markserv.fs.readfile(requestPath)
      .then(contents => {
        console.log(contents);
      });

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
});
