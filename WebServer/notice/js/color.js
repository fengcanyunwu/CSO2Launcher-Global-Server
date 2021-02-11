var themeButton = $(".js-theme-switch");
themeButton.on({
click: function () {
var currentTheme = $("html").attr("data-theme");
var desiredTheme = currentTheme === "white" ? "black" : "white";
 
localStorage.setItem('data-theme', desiredTheme);
$("html").attr("data-theme", desiredTheme);
$(".text", themeButton).html(currentTheme + " Mode");
}
});
var themeStatus = localStorage.getItem('data-theme'),
nextStatus = themeStatus === "white" ? "black" : "white";
if (themeStatus !== null) {
$("html").attr("data-theme", themeStatus);
$(".text", themeButton).html(nextStatus + " Mode");
}