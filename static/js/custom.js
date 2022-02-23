console.log(`             -. .
       _____   ',' ,
     ,'     ,'   ', ',
   ,'     ,'      |  |
   \\       \\       |  |
     \\ /^\\   \\    ,' ,'
           \\   \\ ,' ,'      L'Internationale,
     / ~-.___\\.-'  ,'            Sera le genre humain.
   /   .______.- ~ \\
 /   /'          \\   \\
 \\./               \\/'
`);

!(function() {
  let cdn = document.getElementById('cdn');
  if(!cdn){return;}
  fetch('/cdn-cgi/trace').then(resp => resp.text()).then(res => {
    let area = res.split('colo=')[1].split('\\n')[0];
    fetch('https://cdn.jsdelivr.net/gh/llxlr/cdn/static/areas.json').then(resp => resp.json()).then(data => {
      for(var i in data){
        if (data[i].colo == area) {
          let info = data[i].city+', '+data[i].region;
          console.log(info);cdn.innerHTML = info;
        }
      }
    })
  })
})();
