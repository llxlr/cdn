const switchCDN = function(){
  try {
    if (returnCitySN.cid !== 'CN') {
      document.body.innerHTML = document.body.innerHTML.replace(/s-bj-92-blog\.oss\.dogecdn\.com/g, 'cdn.white-album.top');
    }
  } catch {
    document.body.innerHTML = document.body.innerHTML.replace(/cdn\.white-album\.top/g, 's-bj-92-blog.oss.dogecdn.com');
  }
}

document.addEventListener('pjax:send', function(){
  switchCDN();
});
document.addEventListener('load', function(){
  switchCDN();
});
