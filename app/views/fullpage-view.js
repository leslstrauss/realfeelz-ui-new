import Ember from 'ember';

export default Ember.View.extend({
  didInsertElement: function() {
    Ember.$(document).ready(function() {
      $(document).ready(function() {
          $('#fullpage').fullpage({
            sectionsColor: ['#E6E6E6', '#B8B8B8', '#666666'],
              //Navigation
              // menu: false,
              anchors:['firstSlide', 'secondSlide', '3rdPage'],
              navigation: true,
              navigationPosition: 'right',
              navigationTooltips: ['firstSlide', 'secondSlide', 'Third and last page'],
              // slidesNavigation: true,
              // slidesNavPosition: 'bottom',

              responsive: 900,

              //Scrolling
              css3: true
              // scrollingSpeed: 700,
              // autoScrolling: true,
              // scrollBar: false,
              // easing: 'easeInQuart',
              // easingcss3: 'ease',
              // loopBottom: false,
              // loopTop: false,
              // loopHorizontal: true,
              // continuousVertical: false,
              // normalScrollElements: '#element1, .element2',
              // scrollOverflow: false,
              // touchSensitivity: 15,
              // normalScrollElementTouchThreshold: 5,

              // //Accessibility
              // keyboardScrolling: true,
              // animateAnchor: true,

              // // Design
              // controlArrows: true,
              // verticalCentered: true,
              // resize : true,
              // // sectionsColor : ['#ccc', '#fff'],
              // paddingTop: '3em',
              // paddingBottom: '10px',
              // fixedElements: '#header, .footer',
              // responsive: 0,

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
          });
      });
    });
  }
});
