
document.getElementById("add-form").addEventListener("submit", saveCredentials("asdf", "asdf"));

function checkCredentials(username, password, callback) {
  // TODO: Check credentials
  callback(false);
}

function saveCredentials(username, password) {
  alert("foo -- " + username + password);
  console.log("hello");
  return false;
}
