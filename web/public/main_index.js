$(document).ready(function() {
  console.log('this file loads');
  $('form').on('submit', function (e) {
    e.preventDefault();
    console.log($('input').val());
    $.post('http://127.0.0.1:8080', $('input').val(), function () {
      console.log('submitted');
    });
    // $('input').val('');
  });
});