---
layout: case-study
title: Advertising
permalink: /agency
---

<div class="page-hero-wrapper">
  <div class="slideshow">
    <div class="slide__bg slide__bg--8"></div>
    <h1 class="word">Advertising</h1>
  </div>
  <h6 class="page-subhead-timespan">
    2005-2011
  </h6>
  <h6 class="page-subhead-responsibilities">
    Art Director
  </h6>
</div>


<div class="page-body-wrapper">
  <h3 class="page-body-subhead">
    In the beginning
  </h3>
  <p class="page-body-copy">
    ...there was art direction. It was 2005 and fresh out of school I got a job in Chicago creating TV commercials at a big ad agency called DDB. It was a dream job for me at that time, but intimidating – I was 25 and surrounded by some of the best comedy writers outside of Hollywood. All my partner Kent and I had to do was write funnier scripts than them, and they'd fly us out to LA to cast, shoot and edit them. And we even managed to do that a time or two.
  </p>

  <iframe width="540" height="315" src="https://www.youtube.com/embed/Xw5sJ04HkbM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  <iframe width="540" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/48091067&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>


  <nav class="case-study-end-nav">
    <a href="/ofa" class="case-study-previous-link">
      <div class="next-link-timespan">
        2011-2012
      </div>
      Obama 2012
    </a>
    <a href="/" class="case-study-next-link home-next-link">
      Home
    </a>
  </nav>

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