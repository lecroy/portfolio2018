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
    Technical Challenge
  </h6>
  <h6 class="page-subhead-responsibilities">
    December 2019
  </h6>
</div>


<div class="page-body-wrapper">
  <h3 class="page-body-subhead">
    Part 1 - Design Critique
  </h3>
  <p class="page-body-copy">
    The first part of the design brief calls for an exploration of Mural's current dashboard experience. Problems as they relate to UX and UI are to be documented and potential improvements suggested.
  </p>
  <p class="page-body-copy">
    Upon loading the dashboard on a new free trial and going through various tasks like creating new rooms and murals, I decided the best approach would be to lay out my critique one component at a time, then work toward a solution that would fit them all together.
  </p>
  <h4 class="page-body-interior-subhead">
    Component 1: Left Sidebar
  </h4>
  <p class="page-body-copy">
    Starting in the top left, I saw that my chosen workspace title, though rather short, was truncated after 15 characters. I bet that happens often and wondered if the font size could be smaller while still remaining accessible and readable.
  </p>
  <p class="page-body-copy">
    Moving down from there, I sought to get my head around the five bolder options presented. Going through the list, it became apparent that the first three were essentially filtered views of the Workspace above. The bottom two items - Templates and Guides were more to browse suggested ways to start new murals. I made a note to explore separating those two concepts in my solution.
  </p>
  <p class="page-body-copy">
    Beneath the top five links, I see rooms divided into two categories: Private and Open. I noticed from the screen shot provided in the brief that Celeste's dashboard view had a lot of overflow in these sections, and that once a certain number of rooms was reached, the list collapsed into an accordion that could be expanded back out with a button. I wondered if somehow the lists could be condensed into one, and the problem of discoverability (finding a buried list) might be mitigated.
  </p>
  <p class="page-body-copy">
    Creating a new room of each type further gave me hope that the lists could become one, as I noticed the modal shown was identical for public and open, except for defaulting to the privacy type selected.
  </p>
  <p class="page-body-copy">
    Regarding the modal itself, I saw a potential improvement in that the open room modal has a tooltip that looks alarming and can't be dismissed. It's putpose is to convey what Mural means by an "Ope"n" room type. I also noticed the interaction pattern for selecting a room type is a dropdown with only two options. In most cases I find there is a better option for the interaction and made a note to try it out in my prototype.
  </p>
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
  <h4 class="page-body-interior-subhead">
    Component 3: Main canvas
  </h4>
  <p class="page-body-copy">
    My reaction to this was that things might be grouped more contextually. The room description, or "purpose" should be visually paired with the title, and search and filtering functions should live together as well, rather than search by itself up top.
  </p>
  <figure class="figure-inline">
    <img src="img/olark/dash-flow.png" class="dash-flow-img" alt="User flow diagram for the new dashboard" />
    <figcaption class="case-study-caption">Early flow diagram for a better dashboard experience</figcaption>
  </figure>
  <p class="page-body-copy">
    With a path to added value getting clearer, I began prototyping this modular approach that would enable admins to customize their own dashboard, shuffling the components to suit their needs or hiding the ones that weren't as relevant for them.
  </p>
  <figure class="figure-inline">
    <img src="img/olark/dash-wireframe.png" class="dash-wire-img" alt="Wireframe for a modular approach to the Dashboard" />
    <figcaption class="case-study-caption">Wireframe showing a modular, customizeable approach to the Dashboard</figcaption>
  </figure>
  <p class="page-body-copy">
    After working with the project team to scope the work to a specific number of sprints, we were able to make further refinements based on priority. Design specs mapped to user stories (e.g. "As an admin, I can see which agents are logged in now") helped the team build agreement on what things were musts, and which could be deprioritized if time became a factor.
  </p>
  <figure class="figure-pullout">
    <img src="img/olark/dash-user-stories.png" class="dash-stories-img" alt="Spreadsheet of user stories for the new dashboard" />
    <figcaption class="case-study-caption">Design specs mapped to user stories help build agreement on priority.</figcaption>
  </figure>
  <p class="page-body-copy">
    As the engineers turned the user stories into tech specs for the initial build, I refined the prototype and showed it to a handful of current customers with a short list of tasks to catch anything we might be overlooking.
  </p>
  <p class="page-body-copy">
    One insight I was able to pull out from those sessions was a strong desire to be able to change the date range that the data on the dashboard would be scoped to. We had chosen 2 weeks as a default, but a lot of folks preferred various ranges for various reasons. I was able to present those findings to the team and eventually get a date range picker option shipped with the beta version. Here's how it looked at rollout:
  </p>

  <figure class="figure-inline">
    <img src="img/olark/dash-v2.png" class="dash-finished-img" alt="The dashboard when it launched" />
    <figcaption class="case-study-caption">The dashboard when it launched in April 2019</figcaption>
  </figure>

  <h3 class="page-body-subhead">
    Brand &amp; UI Design System
  </h3>
  <p class="page-body-copy">
    By 2017, Olark had been in business 9 years. With a founding team consisting only of engineers, the brand's look and feel hadn't been given as much attention as, well, more engineer-y concerns.
  </p>
  <p class="page-body-copy">
    To begin we needed a north star to guide our efforts. I put together a short survey and sent it out to a cross section of coworkers to get a feel for how employees generally perceived Olark as a brand, what our voice was, and how we'd like those things to be perceived in the future.
  </p>
  <p class="page-body-copy">
    From the survey results, I compiled a list of words that people used to describe the kind of company they wanted to work for. When I began tallying words used most often, a theme emerged: <span class="body-copy-strong">Humanity.</span>
  </p>
  <figure class="figure-pullout">
    <img src="img/olark/olark-logo.gif" class="olark-logo-gif" alt="Animation showing the logo redesign process" />
    <figcaption class="case-study-caption">Vectorizing the new logo.</figcaption>
  </figure>
  <p class="page-body-copy">
    When it came to the logo, I wanted to use something hand lettered to capture the human feel. Stakeholders wanted to keep some of the flavor of the original logo, so we stayed with the speech bubble concept and the subtle upward skew.
  </p>
  <figure class="figure-inline">
    <img src="img/olark/old-vs-new-logo.png" class="olark-logo-compare-img" alt="The old logo and the new one for comparison" width="540" />
    <figcaption class="case-study-caption">Original logo on left, redesign on right.</figcaption>
  </figure>
  <p class="page-body-copy">
    Another decision I made early on was that I wanted to use real photography rather then illustration. Besides being the more Human thing to do, real faces cause visceral reactions in audiences. There was also a sea of sameness emerging around that time with tech companies and startups all using illustration on their branding and marketing sites.
  </p>
  <p class="page-body-copy">
    The tradeoff I faced with using real photography was that I was going to have to use stock photography. We didn't have the time or resources to do our own shoot. Fortunately, I was able to find a nice set of portraits with a background I could recreate for future use.
  </p>
  <figure class="figure-inline">
    <img src="img/olark/portrait-example.jpg" class="portrait-example" alt="Sample of portrait images used in the styleguide" width="540" />
    <figcaption class="case-study-caption">Well-lit portraits would be used to represent chat agents and customers. It was important to include a diversity of racial backgrounds and ages.</figcaption>
  </figure>
  <p class="page-body-copy">
    To round out the photography specs in the styleguide, I wanted to create a photo treatment that any designer could use, that would make our lifestyle imagery feel less stock-y and give it all a consistent feel. I settled on a dreamy, almost light-leaky treatment that felt human and warm. I then recorded a <a href="https://www.youtube.com/watch?v=ow-m6EErJuk" class="paragraph-link">screencast tutorial</a> so that other designers would be able to easily apply the treatment.
  </p>
  <figure class="figure-inline">
    <img src="img/olark/photo-treatment.jpg" class="olark-photo-treatment-img" alt="A woman sitting at a computer" width="540" />
    <figcaption class="case-study-caption">I chose a warm, dreamy treatment for lifestyle photography.</figcaption>
  </figure>
  <p class="page-body-copy">
    Next up, we needed a color palette. I'd learned from trying to work within previous styleguides that having too limited a palette led to frustration and an overwhelming desire to use "in-between" colors in certain sitations where the guide didn't spec out something light or dark enough. This was often the case with section backgrounds. To keep it feeling human and diverse, I decided on a full-spectrum palette that would include all colors of the spectrum, rather than honing in on one color that the brand would try to own.
  </p>
  <figure class="figure-pullout">
    <img src="img/olark/color-palette.png" class="olark-color-palette" alt="The color palette for Olark Live Chat" />
    <figcaption class="case-study-caption">Olark's color palette</figcaption>
  </figure>
  <p class="page-body-copy">
    After selecting a sample of colors to be used as "primaries", I used lightness and saturation to create levels within each color, which were used as CSS variables. The lightest shade, <code>{color}50</code>, was typically used as a background color for a section or component.
  </p>
  <p class="page-body-copy">
    Another important aspect of the redesigned branding would be vector elements. "Make Business Human" was our new tagline, so it was important to have some consistent pieces that designers could use to convey humanity and business graphically.
  </p>
  <figure class="figure-inline">
    <img src="img/olark/vector-elements.png" class="olark-vector-elements" alt="Vector elements including slimey faces and various graphs and charts" />
    <figcaption class="case-study-caption">Vector elements to marry the concepts of business and humanity.</figcaption>
  </figure>
  <p class="page-body-copy">
    With the main pieces in place, I went on to define styling for typography, buttons, forms, lists, cards, spacing and other aspects.
  </p>
  <h4 class="page-body-interior-subhead">
    Extensible CSS
  </h4>
  <p class="page-body-copy">
    Our current way of styling things showed the classic signs of different contributors doing things their own ways over the years. As is often the case when many hands are involved, from one repo to the next you might see Sass, Stylus or vanilla CSS.
  </p>
  <p class="page-body-copy">
    We decided to consolidate everything to Stylus and codify the presentational aspects of the styleguide components – colors, shadows, everything except where it goes on the page and the space around it – into base classes.
  </p>
  <code class="element-descriptor-code"><div class="code-green">$card</div>
  </code>
  <br/>
  <code class="element-descriptor-code code-indented"><div class="code-blue">background-color: <span class="code-purple">white;</span></div>
    <div class="code-blue">border-radius: <span class="code-purple">22px;</span></div>
    <div class="code-blue">box-shadow: <span class="code-purple">$card-shadow;</span></div>
  </code>
  <div class="styleguide-card-example">
    <div class="styleguide-card-header">
      This is the card title
    </div>
    This is the body of the card
  </div>
  <code class="element-descriptor-code"><span class="code-red">@extends</span> <span class="code-green">$card</span>
  </code>
  <br>
  <code class="element-descriptor-code bottom-pad"><span class="code-blue">text-align:</span> <span class="code-purple">center;</span>
  </code>
  <p class="page-body-copy">
    To give designers flexibility within the system, I only included the styles in the base classes that I felt strongly would apply in nearly any layout situation, allowing room for overrides in more specific classes.
  </p>
  <p class="page-body-copy">
    Check out our <a href="https://www.olark.com/styleguide" class="paragraph-link">public style guide</a>
  </p>

  <h3 class="page-body-subhead">
    Simplifying Billing
  </h3>
  <p class="page-body-copy">
    There's no more sensitive part of an app you can touch than the system that charges your customers money. You can play fast and loose with just about anything else and only receive mild frustration if something goes unaccounted for. Overcharge a customer by accident, however, and you risk being perceived as a dishonest swindler - and word travels fast.
  </p>
  <p class="page-body-copy">
    When I arrived at Olark in 2014, Olark was using a simple rails app to handle billing. There soon came a desire to allow customers more options and flexibility over their live chat team and plan, while keeping the cognitive overhead low. This is a screen grab I took of the billing app circa that time:
  </p>
  <figure class="figure-inline">
    <img src="img/olark/billing-before.png" class="olark-billing-before" alt="Screen grab of the billing app circa 2014" />
    <figcaption class="case-study-caption">The Olark billing app circa 2014 was just three large buttons.</figcaption>
  </figure>
  <p class="page-body-copy">
    Customers had little control over what they were paying us each month. They could pick from four different tiers of pricing, each allowing a fixed number of agents on the chat team, and some elevated features for the more premium tiers.
  </p>
  <p class="page-body-copy">
    What we found our customers wanted was to pay for only what they were using, rather than prearranged batches of features and agent seats they weren't using. We decided to move to a per-agent billing system, where a customer would needed only make two decisions: how many agents they wanted and how often they wanted to be billed. Everything else would just work.
  </p>
  <figure class="figure-inline">
    <img src="img/olark/billing-wire.png" class="olark-billing-wire" alt="Wireframe of the new per-agent billing concept" />
    <figcaption class="case-study-caption">Wireframe showing an early look at proposed functionality.</figcaption>
  </figure>
  <p class="page-body-copy">
    We also decided to offer a discount for a longer commitment. Paying monthly would cost a little more than paying for a year or two years at a time. In addition, we wanted to surface valuable information that our CS team was getting bogged down with: How many seats weren't being used, when the next billing cycle began, and the amount that would be charged at that time.
  </p>
  <figure class="figure-inline">
    <img src="img/olark/billing-after.png" class="olark-billing-after" alt="Screen grab of the billing app circa 2018" />
    <figcaption class="case-study-caption">The billing app after redesign.</figcaption>
  </figure>

  <h3 class="page-body-subhead">
    Integrations
  </h3>
  <p class="page-body-copy">
    Olark is a simple yet powerful tool for chatting with visitors on your website, but in order to me more useful to people, it needed to fit into existing workflows. Many of our customers use CRM tools like Salesforce and Zendesk to manage customer relationships over time, and a chat transcript with a customer helps add valuable context to those cases and leads.
  </p>
  <p class="page-body-copy">
    For most of 2016, I worked on Olark's Integrations Team to build out the number and quality of our connections to third party apps, and was tasked with creating an interface for the full catalog of connections and how our customers would configure them, manage them and better understand their value.
  </p>
  <figure class="figure-pullout">
    <img src="img/olark/integrations-flow.png" class="olark-integrations-flow" alt="Sketch showing a user flow for connecting integrations" />
    <figcaption class="case-study-caption">An early user flow diagram showing integrations with user stories.</figcaption>
  </figure>
  <p class="page-body-copy">
    After wireframing the flow to better understand how user needs would map to page states, I began exploring layout options that would give a summary of the benefits of each integration option in an easily scannable menu.
  </p>
  <figure class="figure-inline">
    <img src="img/olark/integrations-portal-iter.jpg" class="olark-integrations-iter" alt="Early iteration of Olark's integrations portal" />
    <figcaption class="case-study-caption">One early iteration of the integrations portal.</figcaption>
  </figure>
  <p class="page-body-copy">
    An early layout option, shown above, made it easy to understand which integrations were connected and how to configure them, but in the context of an ever-growing list we weren't satisfied that it would be easy to scan the list and find the integration one was looking for.
  </p>
  <p class="page-body-copy">
    In parallel, I also began defining the experience of configuring each individual integration. An early idea looked clean and simple, but I wasn't satisfied with the side-by-side layout of the form fields. It looked like too much work compared to a single-column fieldset:
  </p>
  <figure class="figure-inline">
    <img src="img/olark/integration-config-page-iter.png" class="olark-config-page-iter" alt="Early iteration of an individual integration config page" />
    <figcaption class="case-study-caption">An early idea for the configuration page that didn't make the cut.</figcaption>
  </figure>
  <p class="page-body-copy">
    Wanting to make the portal page easier to scan, I tried a list layout instead of a grid and found it made a world of difference. We then added search and filtering by integration type to make it a snap to find the app a visitor was looking for.
  </p>
  <figure class="figure-inline">
    <img src="img/olark/integrations-portal-final.png" class="olark-integrations-final" alt="Final design of Olark's integrations portal" />
    <figcaption class="case-study-caption">We finally settled on a list-based layout for easy scanning.</figcaption>
  </figure>
  <p class="page-body-copy">
    For the configuration pages, we moved toward a side-by-side layout that would allow a single column fieldset to sit alongside a step-by-step visual demonstration of the benefits of the integration, in order to both sell the merits of connecting Olark to the app and make it easy to set things up to certain specifications.
  </p>
  <figure class="figure-inline">
    <img src="img/olark/integration-config-page-final.png" class="olark-config-page-final" alt="Final iteration of an individual integration config page" />
    <figcaption class="case-study-caption">A side-by-side layout for the config pages allowed for a single column fieldset and a ste-by-step demo of the integration.</figcaption>
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
