/**
 * Created by xuyang on 2018/5/9.
 */



$(".place").mouseover(function () {
    $(".update-avator").css("bottom", "0px");
});
$(".place").mouseout(function () {
    $(".update-avator").css("bottom", "-30px");
});


function closemodal() {
    $(".modal-play").hide();
    $(".modal-backout").hide();
    return false;
}
function openmodal() {
    $(".modal-play").show();
    $(".modal-backout").show();
}

//更换头像
$(".js-avator-link").html("更换头像");

$(".js-avator-link").click(function () {
    var pic = $(".user-img")[0].src;
    $(".avator-img").attr('src', pic);
    openmodal();
});
$(".modal-close").click(function () {
    closemodal();
});

//    取消
$(".js-avator-cancel").click(function () {
    $(".modal-play").hide();
    $(".modal-backout").hide();
    return false;
});
//    随机选择图片
$(".js-avator-try").click(function () {

    var num = Math.floor(Math.random() * 6 + 1);
    $(".avator-img").attr('src', 'sources/random/' + num + '.jpg')

});
//    确认头像
$(".js-avator-save").click(function () {
    var newpic = $(".avator-img")[0].src;
    $(".user-img").attr('src', newpic);
    $(".modal-play").hide();
    $(".modal-backout").hide();
    return false;

});
//上传头像
$(".avator-btn-fake").click(function () {
    $("#upload").click();
});
$("#upload").change(function () {
    var filePath = $(this).val();
    console.log(filePath);
});