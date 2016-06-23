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
      $('#status').removeClass();
      $('#status').append(data.result);
      if (data.result === 'Active') {
        $('#status').addClass('active');
      } else {
        $('#status').addClass('inactive');
      }
    }
  });
  return false;
}
