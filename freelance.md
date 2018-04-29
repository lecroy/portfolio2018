---
layout: case-study
title: Freelance
permalink: /freelance
---

<div class="page-hero-wrapper">
  <div class="slideshow">
    <div class="slide__bg slide__bg--8"></div>
    <h1 class="word">Freelance</h1>
  </div>
  <h6 class="page-subhead-timespan">
    2013-2014
  </h6>
  <h6 class="page-subhead-responsibilities">
    Visual Design, Frontend Dev
  </h6>
</div>


<div class="page-body-wrapper">
  <h3 class="page-body-subhead">
    Hillary for America
  </h3>
  <p class="page-body-copy">
    In early 2013, before Hillary Clinton had officially announced her candidacy for President in the upcoming 2014 election, some friends from my time at The Obama campaign reached out looking for some design help to launch her campaign.
  </p>
  <p class="page-body-copy">
    Working under the project management of Laura Olin at Precision Strategies, I was tasked with delivering some look-and-feel concepts for her official homepage, as well as providing some visual styling for the site's donation flow. There were loose ideas being floated for content strategy but nothing had been made official yet, so the exploration was fairly blue-sky at that point.
  </p>
  <p class="page-body-copy">
    My homepage ideas didn't end up getting used, but the donation flow styling made it in to become the first iteration. Shortly to follow, HFA began hiring an amazing design team which took over and created a gorgeous visual campaign for candidate Clinton, and my work faded into history, but I am proud to have made some small mark on her historic run for President. Here is some of the work I delivered.
  </p>
  <figure class="figure-inline">
    <img src="img/freelance/hillary-hero-section.jpg" class="hillary-hero-img" alt="Concept image for Hillary Clinton's website" />
    <figcaption class="case-study-caption">Concept image for hillaryclinton.com</figcaption>
  </figure>
  <figure class="figure-inline">
    <img src="img/freelance/hillary-post-thumbnail.jpg" class="hillary-thumbnail-img" alt="Concept image for Hillary Clinton's website" />
    <figcaption class="case-study-caption">Concept image for hillaryclinton.com</figcaption>
  </figure>

</div>


<script>
  {
    const effects = [
      {
        options: {
          shapeColors: ['#A2D48B','#a375dc','#f14c4f','#90c9f9','#fbb041'],
          shapesOnTop: true
        },
        hide: {
          shapesAnimationOpts: {
            duration: 50,
            easing: 'easeOutExpo',
            translateX: t => t.dataset.tx,
            translateY: t => t.dataset.ty,
            scale: 0,
            rotate: 0,
            opacity: {
              value: 0,
              duration: 50,
              easing: 'linear'
            }
          }
        },
        show: {
          shapesAnimationOpts: {
            duration: () => anime.random(1000,3000),
            delay: (t,i) => i*20,
            easing: 'easeOutElastic',
            translateX: t => {
              const tx = anime.random(-250,250);
              t.dataset.tx = tx;
              return [0,tx];
            },
            translateY: t => {
              const ty = anime.random(-250,250);
              t.dataset.ty = ty;
              return [0,ty];
            },
            scale: t => {
              const s = randomBetween(0.1,0.6);
              t.dataset.s = s;
              return [s,s];
            },
            rotate: () => anime.random(-90,90),
            opacity: {
              value: .6,
              duration: 1000,
              easing: 'linear'
            }
          }
        }
      },
    ];

    class Slideshow {
      constructor(el) {
        this.DOM = {};
        this.DOM.el = el;
        this.DOM.slides = Array.from(this.DOM.el.querySelectorAll('.slide'));
        this.DOM.bgs = Array.from(this.DOM.el.querySelectorAll('.slide__bg'));
        this.DOM.words = Array.from(this.DOM.el.querySelectorAll('.word'));
        this.slidesTotal = this.DOM.slides.length;
        this.current = 0;
        this.words = [];
        this.DOM.words.forEach((word, pos) => {
          this.words.push(new Word(word, effects[pos].options));
        });

        this.isAnimating = true;
        this.words[this.current].show(effects[this.current].show).then(() => this.isAnimating = false);
      }
      show(direction) {
        if ( this.isAnimating ) return;
        this.isAnimating = true;

        let newPos;
        let currentPos = this.current;
        if ( direction === 'next' ) {
          newPos = currentPos < this.slidesTotal - 1 ? currentPos+1 : 0;
        }
        else if ( direction === 'prev' ) {
          newPos = currentPos > 0 ? currentPos-1 : this.slidesTotal - 1;
        }

        this.DOM.slides[newPos].style.opacity = 1;
        this.DOM.bgs[newPos].style.transform = 'none';
        anime({
          targets: this.DOM.bgs[currentPos],
          duration: 600,
          easing: [0.2,1,0.3,1],
          translateY: ['0%', direction === 'next' ? '-100%' : '100%'],
          complete: () => {
            this.DOM.slides[currentPos].classList.remove('slide--current');
            this.DOM.slides[currentPos].style.opacity = 0;
            this.DOM.slides[newPos].classList.add('slide--current');
            this.words[newPos].show(effects[newPos].show).then(() => this.isAnimating = false);
          }
        });

        this.words[newPos].hide();
        this.words[this.current].hide(effects[currentPos].hide).then(() => {

          this.current = newPos;
        });
      }
      }

    const slideshow = new Slideshow(document.querySelector('.slideshow'));
    document.querySelector('.slidenav__item--prev').addEventListener('click', () => slideshow.show('prev') );
    document.querySelector('.slidenav__item--next').addEventListener('click', () => slideshow.show('next') );
    document.addEventListener('keydown', (ev) => {
      const keyCode = ev.keyCode || ev.which;
      if ( keyCode === 37 ) {
        slideshow.show('prev');
      }
      else if ( keyCode === 39 ) {
        slideshow.show('next');
      }
    });
  }
</script>
