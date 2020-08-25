window.addEventListener("DOMContentLoaded", () => {
  let wrapper = document.getElementById("wrapper");
  let topLayer = wrapper.querySelector(".top");
  let handle = wrapper.querySelector(".handle");
  let skew = 0;
  let delta = 0;
});

if (wrapper.className.indexOf("skewed") != -1) {
  skew = 1500;
}

wrapper.addEventListener("mousemove", (e) => {
  console.log("movement of mouse", e.clientX);
});
