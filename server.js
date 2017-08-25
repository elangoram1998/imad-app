var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
 'article-one':{
    title:'article one i elangoram',
    heading:'article one',
    date:'aug 25,2017',
    content:   ` 
            <p>
                this is the content of my first article. this is the content of my first article. this is the content of my first article. this is the content of my first article. this is the content of my first article. this is the content of my first article. this is the content of my first article. this is the content of my first article. this is the content of my first article.
            </p>
            <p>
                this is the content of my first article. this is the content of my first article. this is the content of my first article. this is the content of my first article. this is the content of my first article. this is the content of my first article. this is the content of my first article. this is the content of my first article. this is the content of my first article.
            </p>
            <p>
                this is the content of my first article. this is the content of my first article. this is the content of my first article. this is the content of my first article. this is the content of my first article. this is the content of my first article. this is the content of my first article. this is the content of my first article. this is the content of my first article.
            </p>`
    
},
 'article-two':{
     title:'article two i elangoram',
    heading:'article two',
    date:'aug 25,2017',
    content:   ` 
            <p>
                this is the content of my second article. 
            </p>`
 },
 'article-three':{
     title:'article three i elangoram',
    heading:'article three',
    date:'aug 25,2017',
    content:   ` 
            <p>
                this is the content of my third article. 
            </p>`
 }
};
function createtemplate(data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
var htmltemplate=`
<html>
    <head>
        <title>
            ${title}
        </title>
         <meta name="viewport" content="width=device-width, initial-scale=1"/>
         <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
          <a href="/">
            home
          </a>
          <div>
            <hr/>
            <h3>
                ${heading}
            </h3>
          </div>
               ${date}
          <div>
            ${content}
          </div>
        </div>
    </body>
</html>`
;
return htmltemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articlename',function(req,res){
    var  articlename=req.parans.articlename;
   res.send(createtemplate(articles[articlename]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
