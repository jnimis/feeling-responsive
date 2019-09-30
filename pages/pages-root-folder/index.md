---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage

# NOTE: JN 5/15/19 - need to correct margins/size of container for this - it is too tall - look in _layouts/frontpage.html
#callforaction:
#  url: /register
#  text: Register now for the 2019 Tournament ›
#  style: alert

widget1:
  title: "2019 Wisconsin State Golden Gloves"
  url: '/2019/'
  image: LucasPunchCrop.png
  text: 'The first Wisconsin Golden Gloves tournament ever hosted in Madison was a great success! Read more information here, or check out photos and videos in the links above.'
widget2:
  title: "National Golden Gloves Tournament"
  url: '/national'
  image: briAndreaBelt.png
  text: 'Our first National Golden Gloves team and trip were by all accounts a huge success. We had 3 in the semi finals, and Briana winning in the finals to bring home a Championship belt! Way to go represent Bri!! The new Wisconsin Golden Gloves is on the map and getting recognized.'
widget3:
  title: "Bob Lynch Boxing Foundation"
  url: 'http://boblynchboxingfoundation.org'
  image: gym_group.png
  text: 'Wisconsin Golden Gloves is organized by the <a href="http://boblynchboxingfoundation.org">Bob Lynch Boxing Foundation</a>, a 501(c)3 non-profit that promotes amateur boxing in Wisconsin'
#
# Use the call for action to show a button on the frontpage
#
# To make internal links, just use a permalink like this
# url: /getting-started/
#
# To style the button in different colors, use no value
# to use the main color or success, alert or secondary.
# To change colors see sass/_01_settings_colors.scss
#
permalink: /index.html
#
# This is a nasty hack to make the navigation highlight
# this page as active in the topbar navigation
#
homepage: true
---

<!-- <div id="videoModal" class="reveal-modal large" data-reveal="">
  <div class="flex-video widescreen vimeo" style="display: block;">
    <iframe width="1280" height="720" src="https://www.youtube.com/embed/3b5zCFSmVvU" frameborder="0" allowfullscreen></iframe>
  </div>
  <a class="close-reveal-modal">&#215;</a>
</div> -->
