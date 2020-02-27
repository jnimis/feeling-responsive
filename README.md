JN 13 Feb 2020

This site is based on the "Feeling Responsive" theme that runs on Jekyll (see below for details) - I have basically just "hacked" it for Wisconsin Golden Gloves

To build, you must install jekyll (I have used MacOS) and run the following commands on Terminal from inside the project folder (gg-www):
(only the very first time) : bundle install
bundle exec jekyll serve : this creates a locally hosted site you can view at http://localhost:4000
bundle exec jekyll build : this builds the site to prepare for deployment (it uses different constants than the "serve" function above)
s3_website push : this send the "built" site to the s3 bucket that serves https://www.wisconsingoldengloves.org

BASIC UPDATES:
Most pages are updated under "pages":
  donate.md = "In our corner"
  national.md = "National GG Tournament"
  2020.md = "2020 State Tournament"
  register.md = registration page
    ** to disable registration, I just add the following inside the main div tag: style="display:none;" 
      and add a message like "registration is closed part on top"
To update top menu: /_data/navigation.yml
  * note the menu is split into "right" and "left" navigation
  I just comment out menu items when they aren't in use (using # marks)
To update front page: /pages/pages-root-folder/index.md
  (add/remove/update sponsor logos, 3 photos and blurbs, action button, video/poster)
To update the registration page:
  the file survey.js is my custom javascript, which goes to a server and stores registration info
    there are two configuration variables, well-labeled, in this code
  the way to change from one year to the next is on the server-side lambda - an environment variable
  ** IMPORTANT: the survey.js file is coupled with the register.md file - if you make changes in one without changing the other,
    it will probably break functionality (especially validation)

OTHER INFORMATION:
Google Analytics is linked to the boblynchboxingfoundation email, so
  you can see stats by logging in to that google account and visiting analytics.google.com



JN: BELOW IS THE README THAT CAME WITH THIS THEME
---------------------------------------------------------

## You like and use this theme? Then support me. Just [paypal.me/PhlowMedia](https://www.paypal.me/PhlowMedia) :)

[![Flattr this git repo](http://api.flattr.com/button/flattr-badge-large.png)](https://flattr.com/submit/auto?user_id=Phlow&url=https://github.com/Phlow/feeling-responsive&title=Support%20Feeling%20Responsive%20Jekyll%20Theme&language=en_GB&tags=github,jekyll,theme,webdesign&category=software)


# Newsletter: Stay in Touch for Future Updates

If you are a webdesigner interested in Jekyll, the static website generator, this little newsletter is for you. I share tutorials, clever code snippets and information about my own Jekyll Themes called [*Feeling Responsive*][7] and [*Simplicity*][8]. Please don't expect weekly emails :)

[![Subscribe to Jekyll Newsletter](https://phlow.github.io/static/tinyletter_subscribe_button.png)](https://tinyletter.com/feeling-responsive)


[![Start Video](https://github.com/Phlow/feeling-responsive/blob/gh-pages/images/video-feeling-responsive-1280x720.jpg)](https://www.youtube.com/embed/3b5zCFSmVvU)

## A Responsive Jekyll Theme: *Feeling Responsive*

Do you want to get to know *Feeling Responsive*? Than check it out first and have a look on its home at  <http://phlow.github.io/feeling-responsive/>.

To get to know *Feeling Responsive* check out all the features explained in the [documentation][1].

And what license is *Feeling Responsive* released under? [This one][2].



## Why use this theme?

Feeling Responsive is heavily customizable.

1. Language-Support :)
2. Optimized for speed and it's responsive.
3. Built on Foundation Framework.
4. Six different Headers.
5. Customizable navigation, footer,...

**[More ›][3]**



## Changelog

*Feeling Responsive* is in active development. Thank you to everyone who contributed, especially [Róbert Papp][5], [Alexandra von Criegern](https://github.com/plutonik-a) and [Juan Jose Amor Iglesias](https://github.com/jjamor).

**[Read Changelog ›][6]**



## Video Tutorial

Click the image to [watch the YouTube-Video-Tutorial][4].

[![Start Video](https://github.com/Phlow/feeling-responsive/blob/gh-pages/images/video-feeling-responsive-tutorial-frontpage.jpg)](https://www.youtube.com/watch?v=rLS-BEvlEyY)








 [1]: http://phlow.github.io/feeling-responsive/documentation/
 [2]: https://github.com/Phlow/feeling-responsive/blob/gh-pages/LICENSE
 [3]: http://phlow.github.io/feeling-responsive/info/
 [4]: https://www.youtube.com/watch?v=rLS-BEvlEyY
 [5]: https://github.com/TWiStErRob
 [6]: https://phlow.github.io/feeling-responsive/changelog/
 [7]: http://phlow.github.io/feeling-responsive/
 [8]: http://phlow.github.io/simplicity/
 [9]: #
 [10]: #
