---
layout: case-study
title: Mural
permalink: /mural
---

<div class="page-hero-wrapper">
  <div class="slideshow">
    <div class="slide__bg slide__bg--8"></div>
    <h1 class="word">Mural</h1>
  </div>
  <h6 class="page-subhead-timespan">
    2020-2022
  </h6>
  <h6 class="page-subhead-responsibilities">
    Sr. Product Designer
  </h6>
</div>


<div class="page-body-wrapper">
  <h3 class="page-body-subhead">
    Redesigning signup
  </h3>
  <p class="page-body-copy">
    In Spring 2021, Mural was growing quickly. The pandemic had accellerated remote work and all of a sudden everyone needed a digital whiteboard to keep collaboration flowing on their newly distributed teams. The moment called for something big. Internally, we began working toward what we called "lightning strike" moments - big upcoming releases to wow our users and announce ourselves as first-class tool in the newly coined category of Collaborative Intelligence. 
    
    In my corner of the product - Growth and Acquisition - this meant managing the bridge between marketing and the users' first product experience. Specifically, we needed to iterate on the existing signup flow to align with a company-wide brand & product refresh, with a focus on delightful moments.
  </p>
  <h4 class="page-body-interior-subhead">
    The problem
  </h4>
  <p class="page-body-copy">
    Starting in the top left, I saw that my chosen workspace title, though rather short, was truncated after 15 characters. I bet that happens often and wondered if the font size could be smaller while still remaining accessible and readable.
  </p>
  <p class="page-body-copy">
    Moving down from there, I sought to get my head around the five bolder options presented. Going through the list, it became apparent that the first three were essentially filtered views of the Workspace above. The bottom two items - Templates and Guides were more to browse suggested ways to start new murals. I made a note to explore separating those two concepts in my solution.
  </p>
  <figure class="figure-pullout">
    <img src="img/mural/taylor-arr.svg" width="400" class="mural-arr" alt="Image showing ARR increase after I was hired (and the pandemic started)" />
    <figcaption class="case-study-caption">*Also the start of the pandemic, but who's to say what had the bigger impact on ARR?</figcaption>
  </figure>
  <p class="page-body-copy">
    Beneath the top five links, I see rooms divided into two categories: Private and Open. I noticed from the screen shot provided in the brief that Celeste's dashboard view had a lot of overflow in these sections, and that once a certain number of rooms was reached, the list collapsed into an accordion that could be expanded back out with a button. I wondered if somehow the lists could be condensed into one, and the problem of discoverability (finding a buried list) might be mitigated.
  </p>
  <p class="page-body-copy">
    Creating a new room of each type further gave me hope that the lists could become one, as I noticed the modal shown was identical for public and open, except for defaulting to the privacy type selected.
  </p>
  <p class="page-body-copy">
    Regarding the modal itself, I saw a potential improvement in that the open room modal has a tooltip that looks alarming and can't be dismissed. It's putpose is to convey what Mural means by an "Open" room type. I also noticed the interaction pattern for selecting a room type is a dropdown with only two options. In most cases I find there is a better option for the interaction and made a note to try it out in my prototype.
  </p>
  <figure class="figure-inline">
    <img src="img/mural/current-create-room.png" class="mural-img" alt="Current MURAL sidebar navigation" />
    <figcaption class="case-study-caption">The tooltip here is just telling me what Open means, but makes me feel like I made a mistake.</figcaption>
  </figure>
  <p class="page-body-copy">
    Finally at the bottom of the sidebar I have a menu to access my personal information and account-related things. This is a pattern I'm familiar with and don't see any issue here except for the large font size mentioned regarding the Workspace dropdown.
  </p>
  <h4 class="page-body-interior-subhead">
    Component 2: Top bar
  </h4>
  <p class="page-body-copy">
    My attention shifted next to the top area of the dashboard interface. There's a top stripe with the Title aligned left and an Invite/Share button, search, and question mark icon aligned right. Beneath that, there's a grey bar that houses a room description and filtering options.
  </p>
  <p class="page-body-copy">
    When in a room, there's a caret to the right of the room name which shows some options that can be taken on the room, and a 'person' icon to the right showing how many people have been invited to the room.
  </p>
  <p class="page-body-copy">
    My reaction to this was that things might be grouped more contextually. The room description, or "purpose" should be visually paired with the title, and search and filtering functions should live together as well, rather than search by itself up top.
  </p>
  <figure class="figure-inline">
    <img src="img/mural/current-top-bar.png" class="mural-img" alt="Current MURAL top bar" />
    <figcaption class="case-study-caption">The top bar works well enough, but could make better use of space and group elements more contextually.</figcaption>
  </figure>
  <p class="page-body-copy">
    I also wondered if, rather than writing "Created by John Doe" next to the title, we might be able to represent the room creator visually.
  </p>
  <h4 class="page-body-interior-subhead">
    Component 3: Main canvas
  </h4>
  <p class="page-body-copy">
    In the main body of the dashboard view we see our murals organized as tiles. On my laptop, the tiles were 4-up, with one fo the four on the top row occupied by the "create a new mural" tile/button.
  </p>
  <figure class="figure-pullout">
    <img src="img/mural/mural-tooltip.gif" class="mural-img" alt="tooltip behavior" />
    <figcaption class="case-study-caption"></figcaption>
  </figure>
  <figure class="figure-pullout">
    <img src="img/mural/mural-tooltip-2.gif" class="mural-img" alt="tooltip behavior" />
    <figcaption class="case-study-caption">Inconsistent tooltip behavior</figcaption>
  </figure>
  <p class="page-body-copy">
    My immediate reaction was that it would be interesting to explore the trade-offs of showing the preview tiles larger, at the expense of seeing fewer on screen at one time. As I interacted with the tiles, it made me further wish for more space, not only to show more of a visual preview of the mural board, but to have more room for text and information. The preview function there now feels inconsistent with other info tooltips.
  </p>
  <figure class="figure-inline">
    <img src="img/mural/current-main-canvas.png" class="mural-img" alt="Current MURAL top bar" />
    <figcaption class="case-study-caption">The top bar works well enough, but could make better use of space and group elements more contextually.</figcaption>
  </figure>
  <p class="page-body-copy">
    In addition, while I see the merit in styling the create new mural button like the murals, I feel like it's getting lost somewhat because it blends in so well. I wondered about the tradeoffs of dedicating the entire space to mural tiles.
  </p>
  <h3 class="page-body-subhead">
    Part 2 - Design Proposal
  </h3>
  <p class="page-body-copy">
    In part 2 of the exercise, we'll design a new version of the dashboard to include some insight into team activity on murals and rooms, with the goal of increasing weekly engagement, and while we're at it, why not try and address some of the potential improvements from part 1.
  </p>
  <p class="page-body-copy">
    I first needed to work out where in the layout an activity feed would make the most sense. Rather than hide the activity away, to be shown on a click or some other interaction, I decided to display a feed of team activity by default that could be hidden away if users were doing heads-down work or simply didn't want to see it at any time.
  </p>
  <p class="page-body-copy">
    My sense was that a horizontal layout would make it difficult to read through, so I was down to two vertical layout options for the feed - one on the left side of the murals and the other on the right. I decided to try the feed on the right so that it wouldn't compete with the main navigation sidebar.
  </p>
  <figure class="figure-inline">
    <img src="img/mural/news-feed-placement.png" class="news-feed-img" alt="Placement options for a team activity feed" />
    <figcaption class="case-study-caption">I decided on a vertical layout for the team activity feed, placed on the opposite side of the main navigation sidebar.</figcaption>
  </figure>
  <p class="page-body-copy">
    Based on what I know about how teams work together on Mural, I next to document which team activities a user might find value in knowing. To answer the brief, I need to focus on surfacing relevant activity on murals and rooms, and ultimately decided a user should be notified when a teammate:
    <br/>
    <br/>
    • Creates a new open room
    <br/>
    • Creates a new mural in a room you belong to
    <br/>
    • Leaves comments on a mural you belong to
    <br/>
    • Responds to your comment
    <br/>
    • Invites you to a workspace, room or mural
    <br/>
    • Invites someone else to a room or mural you belong to
    <br/>
    • Archives, moves, renames or deletes a room or mural you belong to
  </p>
  <p class="page-body-copy">
    It also occurred to me that a feed including all those activity types might become too noisy for some, or might contain a lot of information they may not be interested in. I made a note to try a solution with some abilty to configure the type of news that would appear in the feed.
  </p>
  <p class="page-body-copy">
    One approach to satisfy the business goal of increased weekly engagement is to send out an emailed digest of activity, perhaps defaulted to once weekly. If users know there are conversations waiting for them or invitations to accept, it would be a strong incentive to open the app and complete those tasks.
  </p>
  <figure class="figure-inline">
    <img src="img/mural/team-activity-options.png" class="options-img" alt="Content options for a team activity feed" />
    <figcaption class="case-study-caption">Users might be able to choose which kinds of activity are most relevant to them.</figcaption>
  </figure>
  <p class="page-body-copy">
    Here's a final mockup of everything put together, along with a link to the Figma board if you want to look around and click through the prototypes:
  </p>
  <figure class="figure-inline-wider">
    <img src="img/mural/dashboard-static.png" width="800" class="options-img" alt="new dashboard concept for Mural" />
    <figcaption class="case-study-caption">New dashboard concept for MURAL</figcaption>
  </figure>
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
