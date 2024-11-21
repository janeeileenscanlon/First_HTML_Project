function showTab(month, element) {
  var tabs = document.getElementsByClassName("tab-content");
  for (const tab of tabs) {
    tab.classList.remove("active");
  }
  document.getElementById(month).classList.add("active");

  var buttons = document.querySelectorAll(".tabs button");
  buttons.forEach(function (button) {
    button.classList.remove("active");
  });
  element.classList.add("active");
}
