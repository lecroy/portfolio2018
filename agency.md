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
    ...there was art direction. It was 2005 and fresh out of school I got a job in Chicago creating TV commercials at a big ad agency called DDB. It was a dream job for me at that time, but intimidating – I was 25 and surrounded by some of the best comedy writers outside of Hollywood. All my partner and I had to do was write funnier scripts than them, and they'd fly us out to LA to cast, shoot and edit them. And we somehow managed to do that a time or two.
  </p>

  <h4 class="page-body-interior-subhead">
    Bud Light
  </h4>

  <p class="page-body-copy">
    Ted Ferguson, Bud Light Daredevil was an up and coming YouTube star who would film himself doing stunts like resisting the last slice of pizza and talking to his parents about his future, all for the promise of a cold one if he could make it. We made a bunch of these but something about this one is my favorite.
  </p>

  <div class="iframe-wrapper">
    <iframe width="540" height="315" src="https://www.youtube.com/embed/Xw5sJ04HkbM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <p class="page-body-copy">
    The writer at my agency who originally pitched the chatacter did such a good job the folks at Anheuser-Busch casted him as Ted Ferguson. Shout out to Jeb Quaid.
  </p>

  <p class="page-body-copy">
    If you're a person of a certain age, you likely remember the "Real Men of Genius" radio campaign for Bud Light. It celebrated the often overlooked heroes of everyday of life in the good ol' US of A, and I had a chance to work on this one.
  </p>

  <div class="iframe-wrapper">
    <iframe width="540" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/48091067&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
  </div>

  <h4 class="page-body-interior-subhead">
    Big Ten Network
  </h4>

  <p class="page-body-copy">
    Basketball dimples as goosebumps. It was a lot of fun seeing this one through the special effects process.
  </p>

  <div class="iframe-wrapper">
    <iframe src="https://player.vimeo.com/video/19639144" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
  </div>

  <h4 class="page-body-interior-subhead">
    Premier Dermatology
  </h4>

  <p class="page-body-copy">
    I also got to work on some smaller local clients. This campaign stood out as a time when one of them was willing to take a fun risk. The idea was that all these MediSpa's were popping up and doing dermatology work without being certified, which was as bad as trusting uncertified people in any other profession.
  </p>

  <figure class="figure-inline">
    <img src="img/premier_derm/2_PREMIER_lifeguard.jpg" class="premier-lifeguard-img" alt="An unqualified lifeguard" />
    <figcaption class="case-study-caption"></figcaption>
  </figure>

  <figure class="figure-inline">
    <img src="img/premier_derm/1_PREMIER_hair.jpg" class="premier-hair-img" alt="An unqualified hairstylist" />
    <figcaption class="case-study-caption"></figcaption>
  </figure>

  <figure class="figure-inline">
    <img src="img/premier_derm/3_PREMIER_ref.jpg" class="premier-ref-img" alt="An unqualified referee" />
    <figcaption class="case-study-caption"></figcaption>
  </figure>

  <h4 class="page-body-interior-subhead">
    Korte Construction
  </h4>

  <figure class="figure-inline">
    <img src="img/korte/korte-retro1.jpg" class="korte-retro1-img" alt="Retro ad for Korte construction company" />
    <figcaption class="case-study-caption"></figcaption>
  </figure>

  <figure class="figure-inline">
    <img src="img/korte/korte-retro2.jpg" class="korte-retro2-img" alt="Retro ad for Korte construction company" />
    <figcaption class="case-study-caption"></figcaption>
  </figure>

  <figure class="figure-inline">
    <img src="img/korte/korte-retro3.jpg" class="korte-retro3-img" alt="Retro ad for Korte construction company" />
    <figcaption class="case-study-caption">A campaign for Korte Construction. They were getting into green building methods and wanted a cheeky campaign to show they they would even recycle their "old ads".</figcaption>
  </figure>

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
