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
      $('#status').append(data.result);
    }
  });
  return false;
}
