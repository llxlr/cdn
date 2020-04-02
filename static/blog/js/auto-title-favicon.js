var OriginTitile = document.title,
titleTime;
document.addEventListener("visibilitychange",
function() {
    if (document.hidden) {
        $('[rel="shortcut icon"]').attr("href", "//white-album.top/fail.ico");
        document.title = "页面已崩溃！点击恢复！";
        clearTimeout(titleTime)
    } else {
        $('[rel="shortcut icon"]').attr("href", "//white-album.top/favicon.ico");
        document.title = "(/≧▽≦/)咦！又好了！ " + OriginTitile;
        titleTime = setTimeout(function() {
            document.title = OriginTitile
        },
        2000)
    }
});