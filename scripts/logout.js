$(document).ready(function() {
  //check if user is logged in and show correct button
  if(window.localStorage.getItem("user") !== "") {
    document.getElementById("loginBtn").style.display = 'none';
    document.getElementById("logoutBtn").style.display = 'block';

  //  document.getElementById("currentUser").style.display = 'block';
  //  document.getElementById("currentUser").innerText = window.localStorage.getItem("user");
  } else {
  //  document.getElementById("loginBtn").style.display = 'block';
  //  document.getElementById("logoutBtn").style.display = 'none';
  //  document.getElementById("currentUser").style.display = 'none';
  }
  document.getElementById("logoutBtn").addEventListener("click", function() {
    logout();
  });
});

function logout() {
  window.localStorage.setItem("user" , "");
  document.getElementById("loginBtn").style.display = 'block';
  document.getElementById("logoutBtn").style.display = 'none';
};
