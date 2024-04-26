document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
  
    let nome = document.getElementById('nome').value;
    let telefone = document.getElementById('telefone').value;

    if (!isNaN(nome)) {
        alert("Por favor, insere apenas letras no campo de nome ");
        return;
    }
    
    if (isNaN(telefone)) {
        alert("por favor, insere apenas os número no campo de telefone.");
        return;}
  
    adicionarContato(nome, telefone);
  
   
    document.getElementById('nome').value = '';
    document.getElementById('telefone').value = '';
  });
  
  function adicionarContato(nome, telefone) {
    let tabela = document.getElementById('tabela');
    let novaLinha = tabela.insertRow(-1); 
  
    let colunaNome = novaLinha.insertCell(0);
    let colunaTelefone = novaLinha.insertCell(1);
  
    colunaNome.textContent = nome;
    colunaTelefone.textContent = telefone;

  }

  alert("INsira seu nome e telefone nos campos para cadastro.")