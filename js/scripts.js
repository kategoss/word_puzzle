$(document).ready(function() {
  $("#inputForm").submit(function(event) {

    var vowels = {'a':'-', 'e':'-', 'i':'-', 'o':'-', 'u':'-'};
    var phrase = $('#phrase').val();
    var newphrase = []

    phrase = phrase.replace(/[aeiou]/g, m => vowels[m]);
    console.log(phrase);

    newphrase.push(phrase);

    $('#message').text(newphrase);
    $('#inputForm').hide();

    event.preventDefault();
  });
});
