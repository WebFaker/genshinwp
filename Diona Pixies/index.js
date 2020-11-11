console.clear();
let am = 30;

document.addEventListener("mousemove", (e) => {
  let xx = e.pageX;
  let yy = e.pageY;

  for (let i = 0; i < am; i++) {
    createCircles(xx, yy, i);
  }
});

function createCircles(x, y, tuSam) {
  let circle = document.createElement("circle");

  document.body.appendChild(circle);

  let size = Math.floor(Math.random() * 5);

  circle.style.width = `${size}px`;
  circle.style.height = `${size}px`;

  let destinationX = x + (Math.random() - 0.5) * tuSam * 20;
  let destinationY = y + (Math.random() - 0.5) * tuSam * 20;

  let roate = (Math.random() + 1) * tuSam * 20;

  let animation = circle.animate(
    [
      {
        transform: `translate3d(${x - tuSam}px, ${y - tuSam}px, 0)`,
        opacity: 1,
        filter: `hue-rotate(${0}deg`
      },
      {
        transform: `translate3d(${destinationX - size}px, ${
          destinationY - size
        }px, 0) rotateZ(${roate}deg)  translateX(${tuSam}px)`,
        opacity: 0.5,
        filter: `hue-rotate(${360}deg`
      },
      {
        transform: `translate3d(${destinationX}px, ${destinationY}px, 0) rotateZ(${roate}deg)  translateX(${
          tuSam * 30
        }px)`,
        opacity: 0,
        filter: `hue-rotate(${720}deg`
      }
    ],
    {
      duration: 10 + Math.random() * 4000,
      easing: "ease-out",

      delay: Math.random() * 200
    }
  );

  animation.onfinish = () => {
    circle.remove();
  };
}
