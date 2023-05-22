const playButton = document.getElementById('playButton');

// Cria uma nova instância do objeto de áudio
const audio = new Audio('imagens/y2mate.com_-_06_Baco_Exu_do_Blues_Flamingos_ft_Tuyo.mp3');

// Define a função de reprodução quando o botão for clicado
playButton.addEventListener('click', function() {
  // Verifica se a música já está tocando, pausa se estiver
  if (audio.paused) {
    audio.play();
    playButton.textContent = 'Pausar "Flamingos"';
  } else {
    audio.pause();
    playButton.textContent = 'Clique para tocar "Flamingos"';
  }
});