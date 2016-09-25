var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
  'article-one':{
    title:'article-one',
    heading: 'article-one | sruthi menta',
    date: 'sep 25, 2016',
    content:  ` <p>
                        hello....how are you doing today?? this is article hello....how are you doing today?? this is article hello....how are you doing today?? this is article hello....how are you doing today?? this is article
                   </p>
               <p>
                        hello....how are you doing today?? this is article hello....how are you doing today?? this is article hello....how are you doing today?? this is article hello....how are you doing today?? this is article
                   </p>
              <p>
                        hello....how are you doing today?? this is article hello....how are you doing today?? this is article hello....ho=
                how are you doing today?? this is article hello....how are you doing today?? this is article
                   </p>  
               `    
    

},
  'article-two':{ title:'article-one',
    heading: 'article-two | sruthi menta',
    date: 'sep 25, 2016',
    content:  ` <p>
                        hello....how are you doing today?? this is article-two 
               <p>
                        hello....how are you doing today?? this is article-two hello....how are you doing today?? this is article-two hello....how are you doing today?? this is article-two hello....how are you doing today?? this is article-two
                   </p>
              <p>
                     hello....how are you doing today?? this is article-two hello....how are you doing today?? this is article-two hello....how are you doing today?? this is article-two hello....how are you doing today?? this is article-two
                   </p>  `
                   
                   }, 
  'article-three':{ title:'article-one',
    heading: 'article-two | sruthi menta',
    date: 'sep 25, 2016',
    content:  ` <p>
                        hello....how are you doing today?? this is article-three 
                        </p>
               <p>
                        hello....how are you doing today?? this is article-three hello....how are you doing today?? this is article-three hello....how are you doing today?? this is article-three hello....how are you doing today?? this is article-three
                   </p>
              <p>
                   hello....how are you doing today?? this is article-three hello....how are you doing today?? this is article-three hello....how are you doing today?? this is article-three hello....how are you doing today?? this is article-three
                   </p>  `
}
};


function createtemplate (data) {
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
            var htmltemplate =
            `
            <html>
                <head>
                    <title>  
                        
                        ${title}
                    </title>
                    <meta name="viewport" content="width=device-width" intital-scale="1"/>
              <link href="/ui/style.css" rel="stylesheet" />
                 </head>
                <body>
                    <div>
               <a href="/">home</a>
                  </div>
                      <div>
                               <h3>${heading}</h3>
                               ${date}
                               
                           </div>
                             <div class="container">
                           ${content}
                           </div>
                </div>
                </body>
            </html> `;

 return htmltemplate;
}             




app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/articlenames', function (req,res) {
    var articlenames=req.params.articlenames;
     res.send(createtemplate(articles([articlenames])));
     
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
