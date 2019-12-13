---
layout: case-study
title: Bandcamp
permalink: /bandcamp
---

<div class="page-hero-wrapper">
  <div class="slideshow">
    <div class="slide__bg slide__bg--8"></div>
    <h1 class="word">Bandcamp</h1>
  </div>
  <h6 class="page-subhead-timespan">
    December 2019
  </h6>
  <h6 class="page-subhead-responsibilities">
    Design Exercise
  </h6>
</div>


<div class="page-body-wrapper">
  <h3 class="page-body-subhead">
    Unifying Discovery
  </h3>
  <p class="page-body-copy">
    Over the years, Bandcamp had developed two distinct patterns for discovering new music. A Discover feature allows visitors to filter for the type of music they're looking for along five dimensions: genre, location, format, release date (time), and best-selling/new arrivals/artist-recommended.
  </p>
  <p class="page-body-copy">
    Additionally, visitors are able to select music tagged with a particular location or genre using a Browse By Tags feature.
  </p>
  <p class="page-body-copy">
    To simplify discovery on the platform, let's look at how we might bring the Search and Discovery experiences closer together to provide a cohesive, powerful, yet simple way to find new music and emerging artists.
  </p>
  <h4 class="page-body-interior-subhead">
    Process
  </h4>
  <p class="page-body-copy">
    Absent any users to speak with or analytics to consult, I began by experimenting with the possibilities allowed by the current discovery solutions. An early conclusion from this was that the functionality provided by "browse by tags" is duplicated in the Discover filters. By adding the Location option, I was now able to filter on both Genre and Location within the Discovery interface, which effectively replaced Browse by Tags. While it may serve legacy functions I'm not aware of, I'm going to assume we're safe to deprecate this and focus my attention on Discover and Search.
  </p>
  <figure class="figure-inline">
    <img src="img/bandcamp/browsebytags.png" />
    <figcaption class="case-study-caption">Goodnight, sweet prince. 🎻 </figcaption>
  </figure>
  <p class="page-body-copy">
    Next, I wanted to see what was possible using the horizontal Discover filtering menus. After spending some time selecting different filter combinations and looking at the output, I found myself wishing certain things were possible. First, a way to select multiple genres, locations or formats rather than just one of each. Second, a more semantic, straightforward way to see and read what I had filtered for. Lastly,
    the filters take up a lot of space in the view, which is particularly problematic in the native app where viewport width is constrained. How might we condense them?
  </p>
  <p class="page-body-copy">
    One potential solution to satisfy these requirements is to organize Discovery filtering into a single row, and allow users to build their filters in a logical progression that reads as a plain english sentence. I put together a <a href="https://www.figma.com/proto/0OFEsclIerWtWRMgVdpwZr/bandcamp?node-id=0%3A44&viewport=-136%2C-8524%2C0.5&scaling=min-zoom" target="_blank">prototype</a> in Figma to show an example flow:
  </p>
  <figure class="figure-inline">
    <img src="img/bandcamp/bandcamp-discover.gif" />
    <figcaption class="case-study-caption">Here's where I point out there are absolutely no visual design suggestions here 😅</figcaption>
  </figure>
  <p class="page-body-copy">
    I chose not to include best selling vs. new releases vs. artist-recommended in the filtering. My inclination would be to scrap New Releases as a standalone option since Release Date (Time) as a filtering option can satisfy that need with even better flexibility. Best-selling / Artist-recommended could be a toggleable option beneath the filtering, separated out under subheadings, or we could make a call based on research and simply show one or the other.
  </p>
  <p class="page-body-copy">
    To answer the brief, I needed to make sure the Search and Discover experiences felt cohesive, so now that I had some familiarity around the Discover tools under my belt, I began looking for ways to make Search feel like part of the same app and experience.
  </p>
  <figure class="figure-pullout">
    <img src="img/bandcamp/search-current.png" width="300" />
    <figcaption class="case-study-caption">It's tough to discern between entries and categories in the current search dropdown.</figcaption>
  </figure>
  <p class="page-body-copy">
    I tried typing various strings into the Search field to observe how the system responded, noting that simply putting it into focus displayed a menu of popular genres.
  </p>
  <p class="page-body-copy">
    When I enered text, my first observation was that the visual affordances were quite disparate from what I was used to in Discover. Gone were the punchy colors and plump pill buttons, giving way to a more stripped down, system look and feel.
  </p>
  <p class="page-body-copy">
    When I clicked through to the results page, I saw three different categories represented: Artists, Albums and Labels; however there was no way to indicate which category I was interested in and ignore the rest. I came away with the impression that Search as currently designed is better suited to finding something or someone very specific, rather than discovering new stuff I might be into.
  </p>
  <p class="page-body-copy">
    As a new user, I found myself wishing for better category differentiation, and a look and feel that afforded better cohesion with the pill-button styling of the discovery interface. I put together a quick wireframe:
  </p>
  <figure class="figure-inline">
    <img src="img/bandcamp/search-new.png" width="300"/>
    <figcaption class="case-study-caption">Bringing genre into the search results in the same pill-button style could be one way to tie Search to Discovery visually.</figcaption>
  </figure>
  <p class="page-body-copy">
    By grouping the instant results in the dropdown together by type (artists, albums, labels), with the top result shown by default, we allow users to quickly access the type of content they're looking for, rather than sifting through all categories and results mashed together.
  </p>
  <p class="page-body-copy">
    If a genre is searched for, say "Rock", we can use a similar pattern to lead to the genre exploration (Discover filtered by Rock), as well as results grouped by artist, album or label; perhaps even including a 'featured' item in the instant results (new revenue stream?). Showing results that contain the string "rock" is less helpful in the search dropdown but could be accessed and browsed as a separate category:
  </p>
  <figure class="figure-inline">
    <img src="img/bandcamp/search-genre.png" />
    <figcaption class="case-study-caption"></figcaption>
  </figure>
  <p class="page-body-copy">
    The results view could then be separated by type, perhaps using tabs, and the results below treated in the same grid style as the discover results, marrying the two conceptually. The flow might look something like this:
  </p>
  <figure class="figure-inline">
    <img src="img/bandcamp/search-proto.gif" />
    <figcaption class="case-study-caption"></figcaption>
  </figure>
  <p class="page-body-copy">
    And that's that! I'm sure some of this thinkng is naive to business and/or technical constraints, but knowing only what I know, I think it's a step in the right direction. I really enjoyed thinking through this! Cheers.
  </p>
  <nav class="case-study-end-nav">
    <a href="/" class="case-study-previous-link">
      Home
    </a>
    <a href="/freelance" class="case-study-next-link freelance-next-link">
      <div class="next-link-timespan">
        2013-2014
      </div>
      Freelance
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
