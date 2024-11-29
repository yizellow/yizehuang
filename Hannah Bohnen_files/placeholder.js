document.addEventListener("DOMContentLoaded", () =>  {

  const transitionEvent = whichTransitionEvent();
  const cursor = document.getElementById('cursor');
  const rock = cursor.children[0];
  const slideshow = document.querySelector('.slideshow');
  const slides = document.querySelectorAll('.slide');
  let mouseX = mouseY = rockIx = 0;
  let shiftAni;

  // gsap.registerEffect({
  //   name: "toggleCaption",
  //   effect: (target, config) => {
  //     const t = gsap.to(target, {
  //         duration: 0.2,
  //         height: 'auto',
  //         marginTop: '0.4rem',
  //         autoAlpha: 1,
  //         paused: true
  //       });
  //     if(config.reversed) {
  //       t.reversed();
  //     } else {
  //       t.play();
  //     }
  //   },
  //   defaults: {reversed: false}
  // });

  slides.forEach(s => {

    const caption = s.querySelector('.caption');

    if(caption) {

      caption.animation = gsap.to(caption, {
        duration: 0.2,
        height: 'auto',
        marginTop: '0.4rem',
        autoAlpha: 1,
        paused: true
      });

      s.addEventListener('mouseenter', () => caption.animation.play());
      s.addEventListener('mouseleave', () => caption.animation.reverse());
    }


    s.addEventListener('mouseup', (evt) => {

      evt.stopPropagation();

      rock.classList.remove('clicked');
      nextRock();

      const slide = evt.currentTarget;
      const tiltWrapper = slide.children[0];

      const tl = gsap.timeline({ onComplete: () => slide.classList.add('missing') });
      tl.to(tiltWrapper, {
        rotateX: 90,
        skewX: 24,
        skewY: "random(-80, 80)",
        duration: "random(0.6, 0.9)",
        ease: "power1.in"
      });
      tl.to(slide, {width: 0, marginLeft: 0, duration: 0.5, ease: "power1.out"});
    });
  });

  document.addEventListener("mouseup", nextSlide);

  document.addEventListener("mousemove", moveRock);
  document.addEventListener("touchmove", moveRock);

  document.addEventListener("touchmove", registerHover);

  document.addEventListener("mousedown", restRock);
  document.addEventListener("touchstart", restRock);

  document.addEventListener("touchend", () => {
    rock.classList.remove('clicked');
  });

  function registerHover(evt) {

    const x = evt.touches[0].clientX;
    const y = evt.touches[0].clientY;

    const remainingSlides = document.querySelectorAll('.slide:not(.missing):not(.shifted):not(.empty)');
    const visibleSlides = [];

    for (var i = 0; i < remainingSlides.length; i++) {
      const rs = remainingSlides[i];
      if(rs.getBoundingClientRect().left < window.innerWidth) {
        visibleSlides.push(rs);
      } else {
        break;
      }
    }

    visibleSlides.forEach(s => {

      const bcr = s.getBoundingClientRect();
      const caption = s.querySelector('.caption');

      if(x > bcr.left && x < bcr.right && y > bcr.top && y < bcr.bottom) {
        if(!caption.show) {
          caption.show = true;
          caption.animation.play();
        }
      } else if(caption.show) {
        caption.show = false;
        caption.animation.reverse();
      }
    });
  }

  function restRock() {
    rock.classList.add('clicked');
  }

  function moveRock(evt) {
    if(evt.touches) {
      mouseX = evt.touches[0].clientX;
      mouseY = evt.touches[0].clientY;
    } else {
      mouseX = evt.clientX;
      mouseY = evt.clientY;
    }

    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
  }

  function nextSlide() {
    rock.classList.remove('clicked');
    nextRock();

    if(gsap.isTweening('.slideshow, .slide, .translate-wrapper')) {
      // cancel if any tilting or shifting is already happening
      return;
    }

    let firstSlide = document.querySelector('.slide:not(.missing):not(.shifted)');

    if(!firstSlide) {
      resetSlideshow();
      firstSlide = slides[0];
    }

    const brc = firstSlide.getBoundingClientRect();

    shiftAni = gsap.to(slideshow, {x: '-=' + brc.right, onComplete: () => {
      firstSlide.classList.add('shifted');

      if(!document.querySelector('.slide:not(.missing):not(.shifted)')) {
        resetSlideshow();
      }
    }});

  }

  function nextRock() {
    rockIx = (rockIx + 1 + rockUrls.length) % rockUrls.length;
    rock.src = rockUrls[rockIx];
  };

  function resetSlideshow() {
    gsap.set(slideshow, {x: 0});
    slides.forEach((s, ix) => {
      const caption = s.querySelector('.caption');
      if(caption) {
        caption.animation.pause(0);
      }

      s.classList.remove('shifted', 'missing');
      gsap.set(s, {clearProps: "all"});
      gsap.set(s.querySelector('.tilt-wrapper'), {clearProps: "all"});
      gsap.set(s, {zIndex: -ix})
    });
  }


  // source http://davidwalsh.name/css-animation-callback
  function whichTransitionEvent(){
    const el = document.createElement("fakeelement");

    const transitions = {
      "transition"      : "transitionend",
      "OTransition"     : "oTransitionEnd",
      "MozTransition"   : "transitionend",
      "WebkitTransition": "webkitTransitionEnd"
    }

    for (const t in transitions){
      if (el.style[t] !== undefined){
        return transitions[t];
      }
    }
  }

});

