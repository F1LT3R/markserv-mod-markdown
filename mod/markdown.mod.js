const markserv = require('markserv-cli');

const Promise = require('bluebird');
const Handlebars = require('handlebars');
const marked = require('marked');

const markdownToHtml = markdownText => {
  return new Promise((resolve, reject) => {
    marked(markdownText, (err, data) => {
      if (err) {
        return reject(err);
      }

      resolve(data);
    });
  });
};


markserv(plugin => {
  // console.log(plugin);

  return requestPath => {
    return new Promise((resolve, reject) => {
      // console.log(plugin.meta);

      markserv.fs.readfile(requestPath)
      .then(markdownToHtml)
      .then(html => {
        const payload = {
          statusCode: 200,
          contentType: 'text/html',
          data: html
        };

        resolve(payload);
      }).catch(err => {

      });

    });
  };
});
