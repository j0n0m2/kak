function downloadImage() {
  const target = document.querySelector(".frame-container");

  html2canvas(target, {
    useCORS: true,
    allowTaint: true,
    backgroundColor: null,
  }).then((canvas) => {
    const imageData = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = imageData;
    link.download = "kak-photo.png";
    link.click();
  });
}
