$(document).ready(function () {
  const marginTopFromNavbar = $("nav.navbar").outerHeight();
  $(".after-navbar-section").css("margin-top", marginTopFromNavbar);

  //   // modal
  //   $("#open-login-modal").click(function () {
  //     $("#signup-modal").modal("hide");
  //     $("#login-modal").modal("show");
  //   });
  //   $("#open-signup-modal-2").click(function () {
  //     $("#login-modal").modal("hide");
  //     $("#signup-modal").modal("show");
  //   });
  // show password
  //   $(".show-password").on("click", function () {
  //     if ($(this).siblings("input").attr("type") === "password") {
  //       $(this).siblings("input").prop("type", "text");
  //       $(this).prop("src", "/assets/images/icons/eye-close.svg");
  //     } else {
  //       $(this).siblings("input").prop("type", "password");
  //       $(this).prop("src", "/assets/images/icons/password.svg");
  //     }
  //   });
  // scrolltotop
});
