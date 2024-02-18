function loading() {
  // Gsap Animation
  const time = gsap.timeline();

  time.to(".yellow", {
    top: "-100%",
    delay: 0.5,
    duration: 0.7,
    ease: "expo.out",
  });

  time.from(
    ".yellow_second",
    {
      top: "100%",
      delay: 0.5,
      duration: 0.7,
      ease: "expo.out",
    },
    "pasa"
  );

  time.to(
    ".loader h1",
    {
      delay: 0.6,
      duration: 0.7,
      color: "black",
    },
    "pasa"
  );

  time.to(".loader", {
    opacity: 0,
  });

  time.to(".loader", {
    display: "none",
  });
}

loading();

//Locomotive
const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
