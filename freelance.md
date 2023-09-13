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
    In the run-up to Hillary Clinton's official declaration for candidacy in the upcoming Presidential election, some friends from my time at The Obama campaign reached out looking for some design help to launch her campaign.
  </p>
  <p class="page-body-copy">
    Working under the project management of Laura Olin at Precision Strategies, I was tasked with delivering some look-and-feel concepts for her official homepage and donation flow. There were loose ideas being floated for content strategy but nothing had been made official yet, so the exploration was fairly blue-sky at that point.
  </p>

  <figure class="figure-inline">
    <img src="img/freelance/hillary-donate.jpg" class="hfa-donate-img" alt="The interface for HFA's donation flow" />
    <figcaption class="case-study-caption"></figcaption>
  </figure>

  <p class="page-body-copy">
    My homepage ideas didn't end up getting used, but the donation flow was built out as the first iteration. Shortly to follow, Hillary for America began onboarding an amazing design team which took over and created a gorgeous visual campaign for candidate Clinton. My work would rightfully fade into history soon thereafter, but I'm proud to have made some small mark on her historic run for President. Here's some of the work I delivered.
  </p>
  <figure class="figure-inline">
    <img src="img/freelance/hillary-hero-section.jpg" class="hillary-hero-img" alt="Concept image for Hillary Clinton's website" />
    <figcaption class="case-study-caption">Concept image for hillaryclinton.com</figcaption>
  </figure>
  <figure class="figure-inline">
    <img src="img/freelance/hillary-post-thumbnail.jpg" class="hillary-thumbnail-img" alt="Concept image for Hillary Clinton's website" />
    <figcaption class="case-study-caption">Concept image for hillaryclinton.com</figcaption>
  </figure>

  <h3 class="page-body-subhead">
    World Food Program
  </h3>

  <p class="page-body-copy">
    I had a lot of fun designing and building the online annual report for World Food Program. Since the content was divided into chapters, I opted for a scrolling behavior that felt like turning the pages of a large book.
  </p>

  <figure class="figure-inline">
    <img src="img/freelance/wfp-cover.jpg" class="wfp-cover-img" alt="Cover of the World Food Program annual report" />
    <figcaption class="case-study-caption">Cover of the report with chaptered navigation</figcaption>
  </figure>

  <p class="page-body-copy">
    WFP had access to a trove of beautiful and heartbreaking photography, showing the need for food around the globe, and the immense scale of their aid and outreach.
  </p>

  <figure class="figure-inline">
    <img src="img/freelance/wfp-plane.jpg" class="wfp-plane-img" alt="A large airplane being loaded up with food" />
    <figcaption class="case-study-caption"></figcaption>
  </figure>

  <figure class="figure-pullout">
    <img src="img/freelance/wfp-scrolling.gif" class="wfp-scrolling-img" alt="The information architecture allowed for scrolling in any direction on most views." />
    <figcaption class="case-study-caption">The information architecture allowed for keyboard friendly scrolling in any direction on most views.</figcaption>
  </figure>

  <p class="page-body-copy">
    Beyond conveying emotion, WFP needed to communicate what it had delivered over the previous year with data. The report would eventually include tables, graphs and an interactive world map showing all the locations visited, and benefitted, by WFP that year.
  </p>

  <figure class="figure-inline">
    <img src="img/freelance/wfp-graph.jpg" class="wfp-graph-img" alt="Pie chart showing which regions received the most WFP grants" />
    <figcaption class="case-study-caption">Dynamically generated pie chart showing which regions received the most WFP grants</figcaption>
  </figure>

  <figure class="figure-inline">
    <img src="img/freelance/wfp-thankyou.jpg" class="wfp-thankyou-img" alt="Children wave and show peace signs from a window" />
    <figcaption class="case-study-caption"></figcaption>
  </figure>

  <p class="page-body-copy">
    I'm proud to have contributed what I could to this wonderful cause. The project was managed by Lauren Parks and Aliya Karim.
  </p>

  <nav class="case-study-end-nav">
    <a href="/olark" class="case-study-previous-link">
      <div class="next-link-timespan">
        2014-2019
      </div>
      Olark
    </a>
    <a href="/enso" class="case-study-next-link enso-next-link">
      <span class="next-link-timespan">
        2013
      </span>
      Enso
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
