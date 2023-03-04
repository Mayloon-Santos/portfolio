const boxesSociais = document.querySelectorAll('.redes-sociais .box-sociais');

boxesSociais.forEach(function(box) {
  box.addEventListener('click', function(event) {
    const link = box.querySelector('a'); // Obtém o link dentro do elemento clicado
    if (link) {
      event.preventDefault(); // Previne o comportamento padrão do link
      window.open(link.href, '_blank'); // Abre o link em uma nova aba
    }
  });
});


