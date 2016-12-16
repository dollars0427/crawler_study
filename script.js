var page = require('webpage').create();
var system = require('system');
var args = system.args;
var url = args[1];

page.customHeaders = {
  "X-Test": "foo",
  "DNT": "1"
};

//var url = "http://mp.weixin.qq.com/s?src=3&timestamp=1481856834&ver=1&signature=ev5QYqU9aIvwaeqel6LiYivSQFxhRZ-L6zHbiqGX7A1e-FW6-AzoM*Oo*aYsHJrIaJEz7CHx*0Azcy5NT4jwPzn0Ha2pbXioJ-ryZdU3D-8tJ4CQJrYndO2ZOzmuAVp-W59S1*1wzC14TZK1LOmWpevKl1pwN0CZ6kCqGf99iOQ=";
page.open(url, function() {
  page.includeJs("https://code.jquery.com/jquery-3.1.1.slim.min.js", function () {
           console.log(page.content);
           phantom.exit();
         });
});
