
//top效果
$(function () {
    var fixedTop = $('#fixedTop');
    // 當超連結的按鈕被左鍵一下時
    fixedTop.on('click', function () {
        // 捲動到最上面的位置（scrollTop:0）
        $('html,body').animate({ scrollTop: '0' }, 500);
    });
    // 產生按鈕的時機（截入、捲動、視窗大小）
    $(window).on('load scroll resize', function () {
        // 檢查目前捲軸捲動的高度值有沒有超100，如果有，就出現TOP按鈕
        // 捲軸捲動的高度值預設為100
        var showTop = 100;
        if ($(window).scrollTop() > showTop) {
            // 淡入
            fixedTop.fadeIn('normal');
        } else {
            // 淡出
            fixedTop.fadeOut('normal');
        }
    });
});


// contact
var initSubject = '', initBody = '';

//按下傳送按鈕後執行
function submitHandler() {
    var to = "juolinlee@gmail.com";
    var name = nameText.value;
    var subject = subText.value;
    //把user填的資料都塞到 mail body 中
    var body = "" + bodyText.value + '%0A%0A%0A';
    body += "From：" + nameText.value + '%0A';
    //傳送的主要程式碼
    mailTo.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
    mailTo.click();
}
//在body onload
function init() {
    subText.value = initSubject;
    toText.value = initTo;
    bodyText.value = initBody;
}



// contact-small

function copyEvent(id) {
    var str = document.getElementById(id);
    window.getSelection().selectAllChildren(str);
    document.execCommand("Copy")
}

// Nav-small

function sidebar_open() {
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("close").style.display = "block";
    document.getElementById("open").style.display = "none";
}

function sidebar_close() {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("close").style.display = "none";
    document.getElementById("open").style.display = "block";
}

// Performance option
function list_open() {
    if(document.getElementById('option-list') .style.display=='none') {document.getElementById('option-list') .style.display=''}
    else{document.getElementById('option-list') .style.display='none'}
}




