window.onload = function ()
{
  var botao = document.getElementById('btn-menu');
  var menu = document.getElementById('menu');

  botao.addEventListener('click', function (e)
  {
     if (menu.className.match(/ativo/gi)) {
      menu.className = menu.className.replace(' ativo', '');
     } 
     else 
     {
      menu.className += ' ativo';
     }
  });

  window.addEventListener("scroll", function (e)
  {
    if (window.scrollY <= 0) {
      menu.className = menu.className.replace(' menu-scroll', '');
      logo.className = logo.className.replace(' logo-scroll', '')

    } 
    else 
    {
      if (!menu.className.match(/menu-scroll/gi))
      {
        menu.className += ' menu-scroll';
      }
      if (!logo.className.match(/logo-scroll/gi))
      {
        logo.className += ' logo-scroll';
      }
    }
  })

}
