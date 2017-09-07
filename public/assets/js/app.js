// Initialize modals
$(document).ready(function () {
  // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});

$(".btn-devour").click(function (e) { 
  e.preventDefault();
  $("#devour-form").attr("action", "/" + $(this).attr("data-id") + "?_method=PUT");
});