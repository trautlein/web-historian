var fs = require('fs');
var path = require('path');
var _ = require('underscore');
var Promise = require('bluebird');


/*
 * You will need to reuse the same paths many times over in the course of this sprint.
 * Consider using the `paths` object below to store frequently used file paths. This way,
 * if you move any files, you'll only need to change your code in one place! Feel free to
 * customize it in any way you wish.
 */

exports.paths = {
  siteAssets: path.join(__dirname, '../web/public'),
  archivedSites: path.join(__dirname, '../archives/sites'),
  list: path.join(__dirname, '../archives/sites.txt')
};

var pathToUrlList = './archives/sites.txt';

// Used for stubbing paths for tests, do not modify
exports.initialize = function(pathsObj) {
  _.each(pathsObj, function(path, type) {
    exports.paths[type] = path;
  });
};

// The following function names are provided to you to suggest how you might
// modularize your code. Keep it clean!

exports.readListOfUrls = function() {
  //add promise to wait for propogation of array of sites

  return new Promise( (resolve, reject) => {
    var readUrls = fs.readFile(pathToUrlList, (err, data) => {
      if (err) {
        reject(err);
      }
      return data.toString().split('\n');
    });

    resolve(readUrls);
  });


};

exports.isUrlInList = function(url) {

  var isUrlInList = exports.readListOfUrls()
    .then( readUrls => {
      
    });


  if (url in sites.txt[urlList]) {
    return true;
  }
  return false;
};

exports.addUrlToList = function() {
};

exports.isUrlArchived = function() {

};

exports.downloadUrls = function() {
};
