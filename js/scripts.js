$(document).ready(function() {
  $("#inputForm").submit(function(event) {

    var input1 = parseInt($("#input1").val());
    var input2 = parseInt($("#input2").val());
    var setnumbers = []
  

    for (var index = input2; index <= input1; index += input2)
      setnumbers.push(index);

    $('#answer').text(setnumbers);
  event.preventDefault();
  });
});
