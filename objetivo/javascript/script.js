window.onload = function ()
{
  var botao = document.getElementById('btn-menu');
  var menu = document.getElementById('menu');

  botao.addEventListener('click', function (e)
  {
     if (menu.className.match(/ativo/gi)) {
      menu.className = menu.className.replace(' ativo', '');
     } else {
      menu.className += ' ativo';
     }
  });

}
