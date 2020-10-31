function search() {
  var img = document.getElementById("img").value;
  location =
    "https://www.google.co.in/search?q=" +
    img +
    "&sxsrf=ALeKk01RLhvuOTJX7XWp0Xf2pZ5tYzfIEA:1600510159262&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiw74H8_PTrAhUiyosBHUY2Dk8Q_AUoAXoECBwQAw&biw=1920&bih=920";
  return false;
}

function advanceSearch() {
  var id1 = document.getElementById("id1").value;
  var id2 = document.getElementById("id2").value;
  var id3 = document.getElementById("id3").value;
  var id4 = document.getElementById("id4").value;
  location =
    "https://google.com/search?q=" +
    id1 +
    " " +
    id2 +
    " " +
    id3 +
    " " +
    "-" +
    id4;
  return false;
}

function lucky() {
  var val = document.getElementById("luck").value;
  location =
    "http://www.google.com/search?q=" + val + "&btnI=I%27m+Feeling+Lucky";

  console.log(location);
  return false;
}
