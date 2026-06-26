// Aguarda o carregamento completo do HTML antes de executar qualquer comportamento JavaScript.
document.addEventListener('DOMContentLoaded', function() {
  // Captura referência ao formulário e aos elementos de mensagem de erro/sucesso.
  var contatoForm = document.getElementById('contatoForm');
  var botaoModoEscuro = document.getElementById('modoEscuro');

  if (contatoForm) {
    contatoForm.addEventListener('submit', function(event) {
      event.preventDefault();

      // Captura os valores informados pelo usuário.
      var nome = document.getElementById('nome').value.trim();
      var email = document.getElementById('email').value.trim();
      var mensagem = document.getElementById('mensagem').value.trim();

      // Elementos para exibir mensagens de erro.
      var erroNome = document.getElementById('erroNome');
      var erroEmail = document.getElementById('erroEmail');
      var erroMensagem = document.getElementById('erroMensagem');
      var sucessoEnvio = document.getElementById('sucessoEnvio');

      // Limpa mensagens antigas antes de validar novamente.
      erroNome.textContent = '';
      erroEmail.textContent = '';
      erroMensagem.textContent = '';
      sucessoEnvio.textContent = '';

      var valido = true;

      // Validação simples de cada campo do formulário.
      if (!nome) {
        erroNome.textContent = 'Por favor, informe o nome.';
        valido = false;
      }

      if (!email) {
        erroEmail.textContent = 'Por favor, informe o e-mail.';
        valido = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        erroEmail.textContent = 'Por favor, informe um e-mail válido.';
        valido = false;
      }

      if (!mensagem) {
        erroMensagem.textContent = 'Por favor, escreva uma mensagem.';
        valido = false;
      }

      // Se algum campo não estiver válido, não prossegue com o envio.
      if (!valido) {
        return;
      }

      // Exibe mensagem de sucesso e reseta o formulário.
      sucessoEnvio.textContent = 'Mensagem enviada com sucesso! Essa é uma simulação de envio.';
      contatoForm.reset();
    });
  }

  if (botaoModoEscuro) {
    // Função que alterna entre tema claro e tema escuro.
    function alternarModoEscuro() {
      document.documentElement.classList.toggle('dark-theme');
      botaoModoEscuro.textContent = document.documentElement.classList.contains('dark-theme') ? 'Modo claro' : 'Modo escuro';
    }

    botaoModoEscuro.addEventListener('click', alternarModoEscuro);
  }

  // Torna os cartões expansíveis e acessíveis via teclado.
  var cardsCollapsibles = document.querySelectorAll('[data-collapsible]');
  cardsCollapsibles.forEach(function(card) {
    var header = card.querySelector('.card-header');

    if (!header) {
      return;
    }

    header.addEventListener('click', function() {
      card.classList.toggle('collapsed');
      var isExpanded = !card.classList.contains('collapsed');
      header.setAttribute('aria-expanded', isExpanded);
    });

    header.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        header.click();
      }
    });
  });
});
