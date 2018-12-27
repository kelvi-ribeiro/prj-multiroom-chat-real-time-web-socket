/* Importando módulos usados no projeto */
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();

/* Setando as variáveis 'view engine' e 'views' do express */

app.set('view engine','ejs');
app.set('views','./app/views');

/* Configuração de middleware */
app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressValidator());

/* Efetua o autoload das rotas, models e dos controllers
 para o objeto app com o Consign para facilitar esse processo  */


consign()
         .include('app/routes')
         .then('app/models')
         .then('app/controllers')
         .into(app);


/* Exportandoo objeto app */ 

module.exports = app; 

