const express = require('express');
const app = express();
const port = 3000;


app.get('/soma/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
   
   
    
  res.send(`Resultado :${a + b} `);
});


app.get('/subtracao/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
   
   
    
  res.send(`Resultado :${a - b} `);
});

app.get('/mult/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
   
   
    
  res.send(`Resultado :${a * b} `);
});

app.get('/div/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
   if(b == 0){

 res.send(`A divisão não pode ser por zero! `);

   }else{
   

  res.send(`Resultado :${a / b} `);
  }
});

app.get('/potencia/:a/:b', (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
   
   
    
  res.send(`Resultado :${a ^ b} `);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});