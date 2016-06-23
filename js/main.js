$(window).load(init());

function init() {
  isActive();
}

function isActive() {
  $.ajax({
    type: 'POST',
    url: 'cgi/connect.cgi',
    contentType: 'application/json',
    success: function(data) {
      $('#status').empty();
      if (data.result === 'Active') {
        $('#status').append('<h2 id="active">'+data.result+'</h2>');
      } else {
        $('#status').append('<h2 id="inactive">'+data.result+'</h2>');
      }
    }
  });
  return false;
}
