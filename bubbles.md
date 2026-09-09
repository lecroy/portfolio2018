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
    Redesigning Remote Collaboration
  </h3>
  <p class="page-body-copy">
    In 2022 I joined a seed-stage startup called Bubbles as Principal Designer. At the time, Bubbles was a single-player, free-to-use screen recorder - think Loom, but with a vision to become a video-first, back-and-forth conversational platform for remote team collaboration, rather than one-way presentations.
  </p>
  <p class="page-body-copy">
    What followed was two years of learning how hard it is to get people to actually change how they work, and occasionally succeeding anyway.
  </p>
  <h4 class="page-body-interior-subhead">
    The baseline and the vision
  </h4>
  <p class="page-body-copy">
    Bubbles had a core group of about 20,000 monthly active users. They were outspoken supporters who loved the app for its lightweight onboarding, ease-of-use, and most of all the fact that it was entirely free.
  </p>
  <p class="page-body-copy">
    While a no-cost, single-player screen recorder was well-liked and useful, it wasn't yet transformative. Our team shared a distaste for hastily typed, low-signal feedback, and a long-term vision of a video-first, async communication platform for remote teams. As Principal Designer, I was tasked with transforming Bubbles into a product that supported that vision. It would mean addressing not just technical challenges but psychological ones. How might we convince teams - not just individual users - to rethink and change the ways they'd been communicating for decades?
  </p>
  <p class="page-body-copy">
    And then there was the existential crisis all venture-backed startups eventually face: become profitable, or die trying.
  </p>
  <h4 class="page-body-interior-subhead">
    Uncovering the real problem
  </h4>
  <p class="page-body-copy">
    We spent a month interviewing remote workers and realized we'd been solving the wrong problem. Nobody actually cared about recording quality or features. What was killing them was uncertainty. The awful limbo of not knowing if your stakeholder in Berlin would get back to you before your deadline in San Francisco. 

    Remote teams relying on traditional channels like Slack and email had a common pain point. Work would stall, momentum would fade, frustration would mount. This revelation led to our first major bet: time-bounded collaboration.
  </p>
  <h4 class="page-body-interior-subhead">
    The power of the deadline
  </h4>
  <p class="page-body-copy">
    We introduced a timer that creators could set when recording their video messages – a simple feature that profoundly impacted users' behavior. Authors could set clear expectations for response times and tag people as either 'Response required' or 'Just FYI.' We'd send reminders to the first group until the deadline hit.
  </p>
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
    By adding the ability to configure who needed to respond, who was just being kept in the loop, and when you needed to hear back; we now had the ability to sort the inbox by highest priority videos. Remote workers could wake up everyday to video responses or contextual written comments on their videos from colleagues in other time zones who had viewed the recordings during their work hours.
  </p>
  <figure class="figure-inline">
    <img src="img/bubbles/activity.png" class="bubbles-inbox" alt="Bubbles Activity inbox grouping new and completed video updates, with assignees, reply status, and response deadlines." loading="lazy" />
    <figcaption class="case-study-caption">The Bubbles inbox. Wake up to a feed of screen recordings from your remote teammates, with response expectations attached.</figcaption>
  </figure>
  <p class="page-body-copy">
    Replies to video updates were multi-modal. Video, screen, audio or text could be used not just in the original recording, but in the follow-up conversation and feedback.
  </p>
  <figure class="figure-inline">
    <img src="img/bubbles/video-reply.png" class="bubbles-video-reply" alt="A Bubbles video update with a participant's video reply displayed in the conversation panel." loading="lazy" />
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
    When AI hit the scene in earnest around 2023, we made our biggest bet yet. If we couldn't convince people to change their habits, we'd meet them where they already were – in endless meetings on Zoom, Microsoft Teams, and Google Meet. We built an intelligent meeting recorder that auto-joined calls, generated AI transcripts, surfaced action items, and fed everything back into Bubbles so teams had a place to follow up async without scheduling <em>yet another</em> meeting.
  </p>
  <br/>
  <figure class="figure-inline">
    <img src="img/bubbles/notetaker.png" class="bubbles-notetaker" alt="A recorded team video call with the Bubbles Notetaker, searchable transcript, highlighted passage, and threaded comments." loading="lazy" />
    <figcaption class="case-study-caption">Meetings are perfectly encapsulated with AI transcript and next steps, with space for highlights and discussion. Participants can follow-up without scheduling <em>another</em> synchronous meeting.</figcaption>
  </figure>
  <figure class="figure-inline">
    <img src="img/bubbles/notetaker-inbox.png" class="bubbles-notetaker" alt="Bubbles Live Meetings inbox showing saved recordings, detected action items, a calendar, and per-meeting recording controls." loading="lazy" />
    <figcaption class="case-study-caption">All recordings and transcripts were saved in the app, with granular settings to control which meetings got recorded and who they were shared with.</figcaption>
  </figure>
  <h3 class="page-body-subhead">
    Signup - Balancing UX, Education & Conversion
  </h3>
  <p class="page-body-copy">
    If I had my way, every product designer would have to spend a couple years at an early stage startup. You've never had to make a truly hard decision until you've been faced with having to increase a certain metric by X%, by Y date, or else the company goes insolvent. How you continue to strategize on behalf of the user and resist the allure of dark patterns and cheap, short-term wins is where real creativity shines through.
  </p>
  <figure class="figure-inline">
    <img src="img/bubbles/signup-funnel.png" class="bubbles-notetaker" alt="Signup funnel showing the steepest drop-off at the step for adding a qualified calendar, highlighted as the conversion opportunity." loading="lazy" />
    <figcaption class="case-study-caption"></figcaption>
  </figure>
  <p class="page-body-copy">
    Looking at our signup funnel, we knew it was critical to raise the percentage of new signups who connected their calendar during signup. This metric correlated so highly with retention and engagement that every percentage point in conversion increase meant a meaningful lift in our chances of survival. Further, the real value of the product couldn't be realized without a connected calendar. We needed a signup flow that made people <em>want</em> to connect their calendar, not feel like they were being pressured into it. Here's what I landed on - a tactful mix of social proof, telling-by-showing, and surfacing the ask in the right moment:
  </p>
  <figure class="figure-inline">
    <img src="img/bubbles/signup-1.png" class="bubbles-notetaker" alt="Email verification screen paired with a customer testimonial about reducing meeting time." loading="lazy" />
    <figcaption class="case-study-caption">Light social proof without distracting from the task at hand.</figcaption>
  </figure>
  <figure class="figure-inline">
    <img src="img/bubbles/signup-2.png" class="bubbles-notetaker" alt="Workspace creation form with optional coworker invitations and logos from companies using Bubbles." loading="lazy" />
    <figcaption class="case-study-caption">Education. Answering "What is a bubble anyway?" while keeping the social proof coming.</figcaption>
  </figure>
  <figure class="figure-inline">
    <img src="img/bubbles/signup-3.png" class="bubbles-notetaker" alt="Live meeting settings for choosing automatic recording and whether summaries and action items are shared with invitees." loading="lazy" />
    <figcaption class="case-study-caption">Get out in front of any hesitation around privacy by allowing some security config during the flow.</figcaption>
  </figure>
  <figure class="figure-inline">
    <img src="img/bubbles/signup-4.png" class="bubbles-notetaker" alt="Calendar connection prompt explaining security and recording benefits, with Google and Outlook options and a preview of event controls." loading="lazy" />
    <figcaption class="case-study-caption">When asking anything of the user, it's key to answer "What's in it for me?"</figcaption>
  </figure>
  <p class="page-body-copy">
    The result was 19% lift on calendar connection compared to control (where we waited to ask until the user landed in the product). I don't know what that translated to revenue-wise, but Bubbles is still going strong today, when for a minute there it was looking pretty dicey.
  </p>
  <h3 class="page-body-subhead">
    Branding Bubbles
  </h3>
  <p class="page-body-copy">
    With only two designers working closely together, we didn't have need an extensive system, but being designers we couldn't help but establish a shared design vocabulary to keep things looking fresh and consistent. Here are a few of the artifacts from our minimal style guide - typography, color, spacing, tone and voice, and plenty of collaboration was all we needed to stay in lock step.
  </p>
  <figure class="figure-inline">
    <img src="img/bubbles/brand-color.png" class="bubbles-notetaker" alt="Bubbles color system with grayscale and blue primary scales, opacity examples, and pink, green, violet, yellow, and red secondary scales." loading="lazy" />
    <figcaption class="case-study-caption"></figcaption>
  </figure>
  <figure class="figure-inline">
    <img src="img/bubbles/brand-logo.png" class="bubbles-notetaker" alt="Bubbles logo guidelines showing approved variants, spacing rules, contrast guidance, and examples of incorrect usage." loading="lazy" />
    <figcaption class="case-study-caption"></figcaption>
  </figure>
  <figure class="figure-inline">
    <img src="img/bubbles/brand-voice.png" class="bubbles-notetaker" alt="Bubbles brand voice mood board combining playful copy, gradients, abstract bubble graphics, iconography, emojis, and a remote-work landing page." loading="lazy" />
    <figcaption class="case-study-caption"></figcaption>
  </figure>
  <h3 class="page-body-subhead">
    Impact & Learnings
  </h3>
  <p class="page-body-copy">
    While Bubbles ultimately didn't unlock the explosive growth needed to secure its next round, we we proved our concept with significant milestones. The company grew from $0 to $750K ARR through word-of-mouth, converted thousands of free users into paying customers, and built a product that users raved about using. When we had downtime, folks got LOUD in our public Slack channel. And as stressful as that was, it also felt good to know we'd given them something worth missing, even for a short while.
  </p>
  <h4 class="page-body-interior-subhead">
    What we learned the hard way
  </h4>
  <p class="page-body-copy">
  • Free users are great for ego, terrible for business.<br/>
  • The best validation isn't what users say, it's whether they actually miss your product when it's gone.<br/>
  • So much more goes into business success than building great product.<br/>
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
    Bottom line: Bubbles didn't become the new Slack. We built something people genuinely loved, grew to half a million in ARR through pure word-of-mouth, and got really good at async collaboration. Then the market decided it wasn't quite ready to break up with Slack and Zoom.
  </p>
  <p class="page-body-copy">
    Turns out, getting people to change how they communicate is hard. Like, <em>really</em> hard. You can nail the UX, solve real problems, and still lose to the inertia of "this is how we've always done it."
  </p>
  <p class="page-body-copy">
    I'm proud of what we built. We proved that deadlines make async actually work. We showed that screen sharing beats text walls 10 times out of 10. And we created a product that people actively missed when it was gone, which might be the best measure of good design there is. Sometimes you build the right thing, but the timing or the way you take it to market isn't right. 
  </p>
  <p class="page-body-copy">  
    That's startup life. At least we looked good doing it.
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
