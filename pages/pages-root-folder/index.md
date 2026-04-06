---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage

# NOTE: JN 5/15/19 - need to correct margins/size of container for this - it is too tall - look in _layouts/frontpage.html
callforaction:
#  url: /tickets
#  text: 'BUY TICKETS NOW'
#  style: alert

specialannouncement:
  text: 'Congratulations to the 2026 Wisconsin Golden Gloves National Team!<br/><br/>119 F: Laura Grulke-Reuter<br/>125 F: TBD<br/>132 F: Violet Lopez<br/>121 M: Sylas De Leon<br/>132 M: John Stenerson<br/>143 M: Cody Erke<br/>154 M: Shamari Knox<br/>165 M: Alex Brisk<br/>176 M: Roy Nelson<br/>187 M: Evan LaBarge<br/>198+ M: Deondre Isham'
  # registration button: <a href="/2026/">Registration and Information</a>
  imageUrl: /images/2026NationalsTeam.png

widget1:
  title: "WI Golden Gloves Facebook Page"
  url: 'https://www.facebook.com/WIGoldenGloves'
  image: FacebookPagePic.png
  text: 'Visit and like the Wisconsin Golden Gloves Facebook page to stay up to date with the latest news and information'
widget2:
  title: "WI Golden Gloves Instagram Page"
  url: 'https://www.instagram.com/wigoldengloves?igsh=dmFvcmllOG9ydGcy'
  image: knowledgeWin.jpg
  text: 'See recent photos and videos from current and past Wisconsin champions, fights, and tournaments on our Instagram channel. Keep in touch and we will do the same!'
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
