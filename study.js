var fs = require('fs');
var cheerio = require('cheerio');
var webshot = require('webshot');
var fileType = require('file-type');
var fs = require('fs');

var url = '';

var html = fs.readFileSync('test.html', 'utf8');
$ = cheerio.load(html);

var articles = [];

$('.news-list').find('li').each(function(){
  var title = $(this).find('h3 a').text();
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
    title: title,
    author: author,
    authorLink: authorLink,
    link: link,
    postDate: postDate
  }

  articles.push(article);
});

var pageNumber = $('.p-fy span').text();

var nextPage = 'http://weixin.sogou.com/weixin' + $('a[id="sogou_next"]').attr('href');

var result = {
    articles: articles,
    nextPage: nextPage,
    pageNumber: pageNumber
};

console.log(result);

function screenShot(url){
  var option = {
    renderDelay: 60000,
    customHeaders:{
      'User-Agent':'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0'
    }
  }

  var renderStream = webshot(url, null, option);
  var file = null;

  renderStream.on('data', function(data) {
      if(!file){
        file = new Buffer(data);
      }else{
        file = Buffer.concat([file, data]);
      }
  });

  renderStream.on('end', function(){
    console.log(fileType(file));
    fs.writeFileSync('test.png', file);
  });
}
