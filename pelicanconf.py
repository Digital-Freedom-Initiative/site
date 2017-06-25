#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = u'The DFI Team'
SITENAME = u'Digital Freedom Initiative'
SITESUBTITLE = u'Educate // Disseminate // Empower'
SITEURL = ''

PATH = 'content'

TIMEZONE = 'America/New_York'

DEFAULT_LANG = u'en'

# Feed generation is usually not desired when developing
FEED_ALL_ATOM = None
CATEGORY_FEED_ATOM = None
TRANSLATION_FEED_ATOM = None
AUTHOR_FEED_ATOM = None
AUTHOR_FEED_RSS = None
THEME = "themes/clean-blog"

# Blogroll
# LINKS = (('Pelican', 'http://getpelican.com/'),
#          ('Python.org', 'http://python.org/'),
#          ('Jinja2', 'http://jinja.pocoo.org/'),
#          ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('Twitter', 'https://twitter.com/DFI_Cle'),('Facebook', 'https://www.facebook.com/DigitalFreedomInitiative/'),)

DEFAULT_PAGINATION = 10

# Uncomment following line if you want document-relative URLs when developing
#RELATIVE_URLS = True

CSS_OVERRIDE = 'theme/css/overides.css'
HEADER_COVER = 'images/logo-backgroud.jpg'
FOOTER_INCLUDE = 'custom_footer.html'
