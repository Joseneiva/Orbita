fetch('http://localhost:3000/cursos')
  .then(res => res.json())
  .then(data => {
    console.log('Cursos recebidos:', data);
    // Exibir na tela, por exemplo
  })
  .catch(err => console.error('Erro:', err));
