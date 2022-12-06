

function printError(errors){
    var html = "";
    for(var i = 0; i < errors.length; i++){
      html += "<li>" + errors[i][0] + ": " + errors[i][1] + "</li>";
    }
    document.getElementById('error-list').innerHTML = html;
    dakra.removeClass(document.querySelector('.error'), 'hidden');
  }
  var form = document.getElementById('basic-form');
  form.addEventListener('submit', function(event){
    var errors = dakra.validate('#basic-form');
    if(errors.length > 0){
      printError(errors);
      event.preventDefault();
    }
  });