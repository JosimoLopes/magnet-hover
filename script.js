const iconBox = document.querySelector('[data-icon="box"]');
const icon = document.querySelector(".icon");

function handleMouseEnter(e) {
  handleMouseLeave.element = this;

  this.addEventListener("mousemove", handleMouseMove);
  this.addEventListener("mouseleave", handleMouseLeave);
}

const handleMouseLeave = {
  element: "",
  handleEvent() {
    resetIconPosition();
    this.element.removeEventListener("mousemove", handleMouseMove);
  },
};

function resetIconPosition() {
  icon.style.transform = "translate(0px, 0px)";
  icon.style.transition = "transform 0.2s ease-in-out";
}

function handleMouseMove(e) {
  const x = e.offsetX;
  const y = e.offsetY;
  const transformX = (x - 50) / 3;
  const transformY = (y - 50) / 3;
  icon.setAttribute("style", `transform: translate(${transformX}px, ${transformY}px)`);
}

iconBox.addEventListener("mouseenter", handleMouseEnter);
