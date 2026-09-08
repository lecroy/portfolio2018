---
layout: case-study
title: Bubbles
permalink: /bubbles
---

<div class="page-hero-wrapper">
  <div class="slideshow">
    <div class="slide__bg slide__bg--8"></div>
    <h1 class="word">Bubbles</h1>
  </div>
  <h6 class="page-subhead-timespan">
    2022-2024
  </h6>
  <h6 class="page-subhead-responsibilities">
    Principal Product Designer
  </h6>
</div>


<div class="page-body-wrapper">
  <h3 class="page-body-subhead">
    Reimagining Remote Collaboration
  </h3>
  <p class="page-body-copy">
    In 2022 I joined a seed-stage startup called Bubbles as Principal Designer. At the time, Bubbles was a single-player, free-to-use screen recorder - think Loom, but with a vision to become a video-first, back-and-forth conversational platform for remote team collaboration, rather than one-way presentations.

    What followed was two years of learning how hard it is to get people to actually change how they work, and occasionally succeeding anyway.
  </p>
  <h3 class="page-body-subhead">
    The challenge
  </h3>
  <p class="page-body-copy">
    Bubbles had a core group of about 20,000 monthly active users. They were big fans. They loved the app for its lightweight onboarding, ease-of-use, and most of all the fact that it cost nothing to use.

    Bubbles was well-liked and useful, but not yet transformative. Users could record their screen, add their camera feed, and share links. While functional, it wasn't living up to our long-term vision of an async communication platform for remote teams. My task was to turn a lightweight screen recorder into a tool for remote teams, addressing the deeper challenges of collaborating across time zones, when your teammates are going to sleep as you're starting your day.
  </p>
  <p class="page-body-copy">
    We also faced the existential crisis all venture-backed startups eventually hit: figure out how to make money, or die trying.
  </p>
  <h4 class="page-body-interior-subhead">
    Uncovering the real problem
  </h4>
  <p class="page-body-copy">
    After interviewing a bunch of remote workers, we realized we'd been solving the wrong problem. Nobody actually cared about recording quality or features. What was killing them was uncertainty – the awful limbo of not knowing if your teammate in Berlin would get back to you before your deadline in SF. 
  </p>
  <p class="page-body-copy">
    People working together across time zones were stuck in perpetual uncertainty, never knowing when (or if) they'd get the input or feedback they need to keep their projects moving on schedule. Work would stall, momentum would fade, frustration would mount. This revelation led to our first major innovation: time-bounded collaboration.
  </p>
  <h4 class="page-body-interior-subhead">
    The power of the deadline
  </h4>
  <p class="page-body-copy">
    We introduced a timer that creators could set when recording their video messages – a simple feature that profoundly impacted users' behavior. Authors could set clear expectations for response times and tag people as either 'Response required' or 'Just FYI.' We'd send reminders to the first group until the deadline hit.
  </p>
  <figure class="figure-inline">
    <img src="img/bubbles/activity.png" class="bubbles-inbox" alt="The bubbles activity inbox ahowing new videos" loading="lazy" />
    <figcaption class="case-study-caption">The Bubbles inbox. Wake up to a feed of screen recordings from your remote teammates, with response expectations attached.</figcaption>
  </figure>
  <figure class="figure-rive">
    <div class="bubbles-timer-wrap">
      <canvas id="bubbles-responses-canvas" width="1028" height="578" aria-label="The bubble author adjusting the response expectations and time frame for the desired response"></canvas>
    </div>
    <script>
      (function() {
        var canvas = document.getElementById('bubbles-responses-canvas');
        var r;
        r = new rive.Rive({
          src: "img/bubbles/bubbles_responses.riv",
          canvas: canvas,
          autoplay: true,
          layout: new rive.Layout({
            fit: rive.Fit.Cover,
            alignment: rive.Alignment.Center
          }),
          onLoad: function() {
            r.resizeDrawingSurfaceToCanvas();
          }
        });
        window.addEventListener('resize', function() {
          if (r) r.resizeDrawingSurfaceToCanvas();
        });
      })();
    </script>
    <figcaption class="case-study-caption">Remote teams need to be direct about who needs to respond, and by when.</figcaption>
  </figure>
  <p class="page-body-copy">
    Replies to video updates could also be videos. Context is equally important when giving feedback as when asking for it. Our core belief was that screen sharing allowed for visual context that just doesn't come across in an email, bullet points or a wall of text.
  </p>
  <figure class="figure-inline">
    <img src="img/bubbles/video-reply.png" class="bubbles-video-reply" alt="Participants can leave replies in the form of video and screen share as well as text." loading="lazy" />
    <figcaption class="case-study-caption">Participants can leave replies in multi-modal format: video, screen share, as well as text.</figcaption>
  </figure>
  <h4 class="page-body-interior-subhead">
    Building for scale and security
  </h4>
  <p class="page-body-copy">
    After a successful Product Hunt launch, we started getting attention from enterprise customers. As thrilling as that was, we had to address the kind of non-starters you get from customers of that scale:
  </p>
  <p class="page-body-copy">
      • Role-based access control (because not everyone should see everything)<br/>
      • Project channels to keep topics separated<br/>
      • Flexible timer extensions for Pro users<br/>
      • SOCC 2 + GDPR compliance
  </p>
  <h4 class="page-body-interior-subhead">
    The AI evolution
  </h4>
  <p class="page-body-copy">
    Then we made our biggest bet: if we couldn't convince people to change their habits, we'd meet them where they already were – in endless meetings on Zoom, Microsoft Teams, and Google Meet. We built an intelligent meeting recorder that auto-joined calls, generated AI transcripts, surfaced action items, and fed everything back into Bubbles so teams could follow up async without scheduling <em>yet another</em> meeting.
  </p>
  <br/>
  <figure class="figure-inline">
    <img src="img/bubbles/notetaker.png" class="bubbles-notetaker" alt="Meetings are perfectly encapsulated with AI transcript and next steps, with a space for highlights and discussion. Participants can follow-up without scheduling <em>another</em> synchronous meeting." loading="lazy" />
    <figcaption class="case-study-caption">Meetings are perfectly encapsulated with AI transcript and next steps, with space for highlights and discussion. Participants can follow-up without scheduling <em>another</em> synchronous meeting.</figcaption>
  </figure>
  <figure class="figure-inline">
    <img src="img/bubbles/notetaker-inbox.png" class="bubbles-notetaker" alt="Meetings are perfectly encapsulated with AI transcript and next steps, with a space for highlights and discussion. Participants can follow-up without scheduling <em>another</em> synchronous meeting." loading="lazy" />
    <figcaption class="case-study-caption">All recordings and transcripts were saved in the app, with granular settings to control which meetings got recorded and who they were shared with.</figcaption>
  </figure>
  <h4 class="page-body-interior-subhead">
    The final vision: Your remote team's video inbox
  </h4>
  <p class="page-body-copy">
    The end product of our work was a beautifully designed video inbox – a morning destination for catching up with your team's updates. It represented a fundamental shift from reactive to proactive collaboration.
  </p>
  <h3 class="page-body-subhead">
    Impact & Learnings
  </h3>
  <p class="page-body-copy">
    While Bubbles ultimately didn't unlock the explosive growth needed to secure its next round, we we proved our concept with significant milestones. The company grew from $0 to $500K ARR through word-of-mouth, converted thousands of free users into paying customers, and built a product that users raved about using. When we had downtime, folks got LOUD in our public Slack channel. And as stressful as that was, it also felt good to know we'd given them something worth missing, even for a short while.
  </p>
  <h4 class="page-body-interior-subhead">
    What we learned the hard way
  </h4>
  <p class="page-body-copy">
  • Free users are great for ego, and terrible for business.<br/>
  • The best validation isn't what users say, it's whether they actually miss your product when it's gone.<br/>
  • Deadlines are more powerful than features. A simple timer did more for collaboration than any amount of slick UI.<br/>
  • People hate changing their communication habits more than they hate bad communication. We had to piggyback on existing workflows instead of replacing them.<br/>
  </p>
  <h4 class="page-body-interior-subhead">
    Design principles I internalized
  </h4>
  <p class="page-body-copy">
  • Start with user psychology, not features<br/>
  • Make complexity feel effortless<br/>
  • It's nearly impossible to change long-held behavior, no matter how novel the solution, therefore...<br/>
  • Balance innovation with familiarity<br/>
  </p>
  <h4 class="page-body-interior-subhead">
    Reflection
  </h4>
  <p class="page-body-copy">
    Bottom line: Bubbles didn't become the new Slack. We built something people genuinely loved, grew to half a million in ARR through pure word-of-mouth, and got really good at async collaboration. Then the market decided it wasn't quite ready to break up with Zoom.
  </p>
  <p class="page-body-copy">
    Turns out, getting people to change how they communicate is hard. Like, <em>really</em> hard. You can nail the UX, solve real problems, and still lose to the inertia of "this is how we've always done it."
    But I'm proud of what we built. We proved that deadlines make async actually work. We showed that screen sharing beats text walls 10 times out of 10. And we created a product that people actively missed when it was gone – which might be the best measure of good design there is.
    Sometimes you build the right thing at the wrong time. That's startup life. At least we looked good doing it.
  </p>
  
  <nav class="case-study-end-nav">
    <a href="/" class="case-study-previous-link">
      Home
    </a>
    <a href="/mural" class="case-study-next-link freelance-next-link">
      <span class="next-link-timespan">
        2020-2022
      </span>
      Mural
    </a>
  </nav>





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
