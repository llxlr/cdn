window.onload = function(){
  function switchCDN(origin, cdn){document.body.innerHTML = document.body.innerHTML.replace(origin, cdn);}
  try {
    if (returnCitySN.cid !== 'CN') {
      switchCDN(/s-bj-92-blog\.oss\.dogecdn\.com/g, 'cdn.white-album.top');
    }
  } catch {
    switchCDN(/cdn\.white-album\.top/g, 's-bj-92-blog.oss.dogecdn.com');
  }
}
