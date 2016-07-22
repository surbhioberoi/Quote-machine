function getJoke() {
  function display(data) {
    $("#quote").html(data.value.joke);
  }

  $.ajax({
    'url': 'http://api.icndb.com/jokes/random',
    'success': display
  })
}

getJoke();