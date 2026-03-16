async function downloadImage() {
  const target = document.querySelector(".frame-container");

  const canvas = await html2canvas(target, {
    useCORS: true,
    allowTaint: true,
    backgroundColor: "#000",
    scale: 10,
    onclone: (clonedDoc) => {
      const boxes = clonedDoc.querySelectorAll(".photo-box");
      boxes.forEach((box) => {
        box.style.backgroundSize = "cover";
        box.style.backgroundPosition = "center center";
      });
    },
  });

  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = "kak-photo.png";
  link.click();
}
