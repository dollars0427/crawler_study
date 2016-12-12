var fs = require('fs');
var cheerio = require('cheerio');

var html = fs.readFileSync('test.html', 'utf8');
$ = cheerio.load(html);

var articles = [];

$('.news-list').find('li').each(function(){
  var author = $(this).find('.account').text();
  var authorLink = $(this).find('.account').attr('href');
  var postDate = $(this).find('.s2').text();
  var link = $(this).find('h3 a').attr('href');

  var postDateRegex = /document\.write\(timeConvert\(\'([0-9]+)\'\)\)/;
  if(postDate.match(postDateRegex)){
    var timeStamp = postDateRegex.exec(postDate)[1] * 1000;
    postDate = new Date(timeStamp);
  }

  var article = {
    author: author,
    authorLink: authorLink,
    link: link,
    postDate: postDate
  }

  articles.push(article);
});

var nextPage = 'http://weixin.sogou.com/weixin' + $('a[id="sogou_next"]').attr('href');
var result = {articles: articles, nextPage: nextPage};
