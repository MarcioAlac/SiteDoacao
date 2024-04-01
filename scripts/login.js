fetch('http://127.0.0.1:3000/login.html', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({chave: 'valor'}),
})
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.error('Erro:', error));
