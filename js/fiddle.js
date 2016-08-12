var htmlEditor = document.getElementById("htmlEditor");
var htmlPreview = document.getElementById("htmlPreview");
var previewButton = document.getElementById("previewButton");
var saveButton = document.getElementById("saveButton");

previewButton.onclick = function() {
  htmlPreview.innerHTML = htmlEditor.value;
};