function loadFile(input) {
  const files = input.files;

  for (let i = 0; i < 4; i++) {
    let image = document.getElementById("img" + (i + 1));

    if (files[i]) {
      image.src = URL.createObjectURL(files[i]);
      image.style.display = "block";
      document.getElementById("select-img-button").style.display = "none";
    }
  }
}
