var path = require('path');
var cheerio = require('cheerio');
var childProcess = require('child_process');
var phantomjs = require('phantomjs-prebuilt');
var binPath = phantomjs.path;

var url = 'http://mp.weixin.qq.com/s?timestamp=1481860922&src=3&ver=1&signature=NSHhzaanpeK1gahxw0u-8DSKsBL63f*bg1XTV9JTnqsUp7vnSRY629rfyVCwVb1aJ2b85ikgl*GFA2VfYVKVi*1Oxh2x2WcgGq3bsC0Ld0YeKKxptYH6HtGp02x0kxh-vGdDh5LPMH3uUyrILafD52UxFUiljMqyP34yXHpORSg=';

var childArgs = [
  path.join(__dirname, 'script.js'),
  url
]

childProcess.execFile(binPath, childArgs, function(err, stdout, stderr) {
  var html = stdout;
  $ = cheerio.load(html);
  var content = $('#sg_cmt_list').text();
  console.log(content);
})
