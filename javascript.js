$(function () {
  $('#menu-btn').on('click', function () {
    $('#js_menu-icon').toggleClass('open');
    var menuList = $('#menu-list');
    var menuView = 'menu-view';
    if (menuList.hasClass(menuView)) {
      menuList.fadeIn();
      menuList.removeClass(menuView);
    } else {
      menuList.fadeOut();
      menuList.addClass(menuView);
    };
  });
});
