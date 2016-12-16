var page = require('webpage').create();
var url = "http://mp.weixin.qq.com/s?src=3&timestamp=1481853774&ver=1&signature=9f4rYV9MBZ2kbADkjAGQaHVrpS8WOUrpbzC12pflTBHmfjog61Arl8hYwuc*bTjydq3eAVVp29PQ-LP2VaSlG5CVOOTkIvJXgNtd8CD64MgZLACdP4B6OjLKiCrHD9ek3rT8T4AgghBVq1EOlAaYKw==";
page.open(url, function (status) {
  just_wait();
});

function just_wait() {
   page.includeJs("http://cdn.bootcss.com/jquery/2.1.4/jquery.min.js", function () {
     setTimeout(function() {
            var content = page.evaluate(function () {
              return $('#sg_cmt_list').html();
            });
            console.log(content);
            phantom.exit();
    }, 2000);
   });
}
