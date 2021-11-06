window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  window.addEventListener("resize", () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
  });

  let painting = false;

  function draw(e) {
    if (!painting) {
      return;
    }
    ctx.lineWidth = 10;
    ctx.lineCap = "round";

    console.log(e.clientX, e.clientY);

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
  }

  function startPostion(e) {
    painting = true;
    draw(e);
  }

  function finishedPostion() {
    painting = false;
    ctx.beginPath();
  }

  canvas.addEventListener("mousedown", startPostion);
  canvas.addEventListener("mouseup", finishedPostion);
  canvas.addEventListener("mousemove", draw);
});
