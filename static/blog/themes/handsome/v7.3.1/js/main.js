//动态标题和动态网页图标
var OriginTitile = document.title,titleTime;
document.addEventListener("visibilitychange",
function() {
    if (document.hidden) {
        $('[rel="shortcut icon"]').attr("href", "https://cdn.jsdelivr.net/gh/jamesyangget/cdn@static/blog/img/favicon-back.ico");
        document.title = "页面已崩溃！点击恢复！";
        clearTimeout(titleTime)
    } else {
        $('[rel="shortcut icon"]').attr("href", "https://white-album.top/favicon.ico");
        document.title = "(/≧▽≦/)咦！又好了！" + OriginTitile;
        titleTime = setTimeout(function() {
            document.title = OriginTitile
        },
        2000)
    }
});

//倒计时
function RT(time,id) {
    countDown();
    function addZero(i){return i < 10 ? "0" + i: i + "";}
    function countDown() {
        var nowtime=new Date();
        var endtime=new Date(time);
        var lefttime=parseInt((endtime.getTime()-nowtime.getTime())/1000);
        var d=parseInt(lefttime/(24*60*60))
        var h=parseInt(lefttime/(60*60)%24);
        var m=parseInt(lefttime/60%60);
        var s=parseInt(lefttime%60);
        d=addZero(d);h=addZero(h);m=addZero(m);s=addZero(s);
        document.getElementById(id).innerHTML=`${d}天${h}时${m}分${s}秒`;
        if(lefttime<=0){document.getElementById(id).innerHTML = "已到期";return;}
        setTimeout(countDown, 1000);
    }
}
