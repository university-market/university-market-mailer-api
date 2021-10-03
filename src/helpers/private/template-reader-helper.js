const fs = require("fs");

module.exports = function (path, callback) {

  fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
    
    if (err) {
      callback(err);
      throw err;
      return;
    }
    callback(null, html);
  });
};
