document.addEventListener("DOMContentLoaded", function() {
    // Selecionar o formulário
    const form = document.querySelector("form");
  
    // Adicionar um ouvinte de evento para o evento de envio do formulário
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Impedir o envio do formulário
  
      // Obter os valores dos campos de entrada
      const emailInput = document.querySelector("#usuario");
      const senhaInput = document.querySelector("#senha");
  
      // Verificar a estrutura correta do email usando uma expressão regular
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        alert("Por favor, insira um email válido.");
        return;
      }
  
      // Verificar se a senha tem pelo menos 8 caracteres
      if (senhaInput.value.length < 8) {
        alert("A senha deve ter no mínimo 8 caracteres.");
        return;
      }
  
      // Os dados do usuário são válidos, você pode fazer algo com eles aqui, como enviar uma solicitação AJAX para o servidor
      alert("Dados do usuário válidos. Enviando formulário...");
      form.submit(); // Enviar o formulário
    });
  });
  