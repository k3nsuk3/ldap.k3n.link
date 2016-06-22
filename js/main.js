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
      $('#status').val(data.result);
    }
  });
  return false;
}
