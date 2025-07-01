$(function () {
  $(".gnb li").click(function (e) {
    e.preventDefault();

    let idx = $(this).index();
    let section = $("#contents > div").eq(idx);
    let section_dis = section.offset().top;

    $("html,body").stop().animate({ scrollTop: section_dis });
  });

  $(window).scroll(function () {
    $("#contents > div").each(function () {
      if ($(window).scrollTop() >= $(this).offset().top) {
        let idx = $(this).index();
        $(".gnb li").removeClass("on");
        $(".gnb li").eq(idx).addClass("on");
      }
    });
  });
});


