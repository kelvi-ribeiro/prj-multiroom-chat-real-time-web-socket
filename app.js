var app = require('./config/server');

var server = app.listen(80,function(){
    console.log('Servidor online');
});

var io = require('socket.io').listen(server);
app.set('io',io)

/* Criar a conexão por websocket */
io.on('connection',function(socket){
    console.log('Usuário Conectou');
    socket.on('disconnect',function(){
        console.log('Usuário desconectou');
    });
    socket.on('msgParaServidor',function(data){        
        console.log(data)
        socket.emit('msgParaCliente',
        {apelido:data.apelido,mensagem:data.mensagem}
        );        
        socket.broadcast.emit('msgParaCliente',
        {apelido:data.apelido,mensagem:data.mensagem}
        );        
    });   
});