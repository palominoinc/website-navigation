Website navigation
==================

- Plugin for WebPal-powered applications
- Simply add this plugin to your WebPal extensions and start using it in your template
- Includes main navigation (including mobile), side navigation, and breadcrumbs
- This plugin will be easy to plug into your template
- Navigation name uses shorttitle of each pages under 'thecontent' and link is generated from the name of each page
- Any pages that should be hidden from navigation can be to to 'show-in-menu=no'
- In your template, include the following where you want the main navigation should render:

![](__resources/img6JXEE05sVOHA.PNG)

- In your template, include the following where you want the mobile navigation to render:

<div>![](__resources/imgvK60F2UTE6Wa.PNG)

 </div>For example:

![](__resources/imgWZhi4iWKtM3o.PNG)

- If you need to increase or decrease the number of max-levels to render, you can change the '_NUMBER_' in < xsl:with-param name="max-levels" select="number(_NUMBER_)" / > to what you want
- End result would look like this:

![](__resources/imgodvjpV_ogNny.PNG)

Optional:
---------

To include breadcrumbs, add the following code to your template :

![](__resources/imgu1Z8DxfjSIUn.PNG)

To include side navigation, add the following code to your template:

![](__resources/img3aKIdIq81jF6.PNG)

To add sidebar title to be current page name, add the following:

![](__resources/imglTRaeSrgedUY.PNG)

Plugin used:
------------

- Bootstrap 3
- Sidr - https://www.berriart.com/sidr/
- SmartMenu - http://www.smartmenus.org/