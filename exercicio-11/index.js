// Função para adicionar um jogador à lista
function addPlayer() {
    // Obtém os valores digitados pelo usuário nos campos de entrada do HTML
    const position = document.getElementById('position').value;
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
  
    // Exibe uma caixa de confirmação perguntando se o usuário deseja escalar o jogador
    const confirmation = confirm("Escalar " + name + " como " + position + "?");
  
    // Se o usuário confirmar (clicar em "OK"), o jogador será adicionado à lista
    if (confirmation) {
      const teamList = document.getElementById('team-list'); // Obtém a referência da lista de jogadores
  
      const playerItem = document.createElement('li'); // Cria um novo elemento de lista (<li>)
      playerItem.id = "player-" + number; // Define um ID único para o jogador usando o número da camisa
  
      // Define o texto do item da lista, exibindo a posição, nome e número do jogador
      playerItem.innerText = position + ": " + name + " (" + number + ")";
  
      teamList.appendChild(playerItem); // Adiciona o novo jogador à lista exibida na página
  
      // Limpa os campos do formulário após adicionar o jogador
      document.getElementById('position').value = "";
      document.getElementById('name').value = "";
      document.getElementById('number').value = "";
    }
  }
  
  // Função para remover um jogador da lista pelo número da camisa
  function removePlayer() {
    const number = document.getElementById('numberToRemove').value; // Obtém o número digitado pelo usuário
  
    // Tenta encontrar o jogador na lista pelo ID único (player-<número>)
    const playerToRemove = document.getElementById("player-" + number);
  
    // Se o jogador for encontrado, exibe uma confirmação antes de remover
    if (playerToRemove) {
      const confirmation = confirm("Remover o jogador " + playerToRemove.innerText + "?");
  
      if (confirmation) { // Se o usuário confirmar a remoção
        document.getElementById('team-list').removeChild(playerToRemove); // Remove o jogador da lista
        document.getElementById('numberToRemove').value = ""; // Limpa o campo de entrada
      }
    } else {
      alert("Jogador não encontrado!"); // Se o jogador não existir, exibe uma mensagem de erro
    }
  }
  