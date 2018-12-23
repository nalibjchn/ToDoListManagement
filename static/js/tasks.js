$(document).ready(function () {
    $("#btnSignout").click(function () {
       cookie.clear();
    });
});

$(document).ready(function(){
    $("#tasksearch").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#tasklistTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });