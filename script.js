var page = require('webpage').create();
var url = "http://mp.weixin.qq.com/s?timestamp=1481860922&src=3&ver=1&signature=NSHhzaanpeK1gahxw0u-8DSKsBL63f*bg1XTV9JTnqsUp7vnSRY629rfyVCwVb1aJ2b85ikgl*GFA2VfYVKVi*1Oxh2x2WcgGq3bsC0Ld0YeKKxptYH6HtGp02x0kxh-vGdDh5LPMH3uUyrILafD52UxFUiljMqyP34yXHpORSg=";
page.open(url, function() {
  page.includeJs("http://cdn.bootcss.com/jquery/2.1.4/jquery.min.js", function () {
           var content = page.evaluate(function () {
             return $('#sg_cmt_list').text();
           });
           console.log(content);
           phantom.exit();
         });
});
