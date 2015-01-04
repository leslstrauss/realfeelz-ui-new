import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {
        Ember.$('#fullpage').fullpage({
          anchors: ['firstPage'],
          sectionsColor: ['#4A6FB1'],
          autoScrolling: false,
          css3: true
        });
      });
  }
});

// sectionsColor: ['#4884A9', '#D55C2B', '#666666'],
//Navigation
// menu: '#menu',
// anchors:['', 'whatsreal', 'about'],
// navigation: true,
// navigationPosition: 'right',
// navigationTooltips: ['firstSlide', 'secondSlide', 'Third and last page'],
// slidesNavigation: true,
// slidesNavPosition: 'bottom',

// responsive: 900,

//Scrolling
// scrollingSpeed: 0,
// css3: true,
// autoScrolling: false,
// scrollBar: true,
// easing: 'easeInQuart',
// easingcss3: 'ease',
// loopBottom: false,
// loopTop: false,
// loopHorizontal: true,
// continuousVertical: false,
// normalScrollElements: '#element1, .element2',
// scrollOverflow: false,
// touchSensitivity: 15,
// normalScrollElementTouchThreshold: 15,

// //Accessibility
// keyboardScrolling: true,
// animateAnchor: true

// // Design
// controlArrows: true,
// verticalCentered: false,
// resize : true,
// // sectionsColor : ['#ccc', '#fff'],
// paddingTop: '3em',
// paddingBottom: '10px',
// fixedElements: '#header, .footer'
// responsive: 0

// //Custom selectors
// sectionSelector: '.section',
// slideSelector: '.slide',

// //events
// onLeave: function(index, nextIndex, direction){},
// afterLoad: function(anchorLink, index){},
// afterRender: function(){},
// afterResize: function(){},
// afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
// onSlideLeave: function(anchorLink, index, slideIndex, direction){}