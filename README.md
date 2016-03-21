<span style="font-family:arial,helvetica,sans-serif">Website navigation</span>
==============================================================================

- <span style="font-family:arial,helvetica,sans-serif">Plugin for WebPal-powered applications</span>
- <span style="font-family:arial,helvetica,sans-serif">Simply add this plugin to your WebPal extensions and start using it in your template</span>
- <span style="font-family:arial,helvetica,sans-serif">Includes main navigation (including mobile), side navigation, and breadcrumbs </span>
- <span style="font-family:arial,helvetica,sans-serif">This plugin will be easy to plug into your template </span>
- <span style="font-family:arial,helvetica,sans-serif">Navigation name uses shorttitle of each pages under 'thecontent' and link is generated from the name of each page</span>
- <span style="font-family:arial,helvetica,sans-serif">Any pages that should be hidden from navigation can be to to 'show-in-menu=no'</span>
- <span style="font-family:arial,helvetica,sans-serif">In your template, include the following where you want the main navigation should render: </span>

<div style="background:#eee;border:1px solid #ccc;padding:5px 10px;">  
<span style="font-family:arial,helvetica,sans-serif"> <xsl:call-template name="navigation">  
 <xsl:with-param name="name" select="'topNav'" />  
 <xsl:with-param name="root" select="//pages" />  
 <xsl:with-param name="the-chapter" select="./@name" />  
 <xsl:with-param name="max-levels" select="number(4)" />  
 </xsl:call-template></span>  
 </div>- <span style="font-family:arial,helvetica,sans-serif">In your template, include the following where you want the mobile navigation to render: </span>

<div style="background:#eee;border:1px solid #ccc;padding:5px 10px;"><span style="font-family:arial,helvetica,sans-serif"> <button id="simple-menu" type="button" class="navbar-toggle visible-xs pull-right collapsed" data-toggle="collapse" data-target="#sidr" aria-expanded="false">  
 <span class="sr-only">Toggle navigation</span>  
 <span class="icon-bar"></span>  
 <span class="icon-bar"></span>  
 <span class="icon-bar"></span>  
 </button></span>

<span style="font-family:arial,helvetica,sans-serif"> <!-- Mobile navigation -->  
 <div id="sidr">  
 <xsl:call-template name="mobile-navigation">  
 <xsl:with-param name="name" select="'topNav'" />  
 <xsl:with-param name="root" select="//pages" />  
 <xsl:with-param name="the-chapter" select="./@name" />  
 <xsl:with-param name="max-levels" select="number(4)" />  
 </xsl:call-template>  
 </div></span>

 </div><span style="font-family:arial,helvetica,sans-serif">For example: </span>

<span style="font-family:arial,helvetica,sans-serif">![](__resources/imgWZhi4iWKtM3o.PNG)</span>

- <span style="font-family:arial,helvetica,sans-serif">If you need to increase or decrease the number of max-levels to render, you can change the '_NUMBER_' in <xsl:with-param name="max-levels" select="number(_NUMBER_)" /> to what you want</span>
- <span style="font-family:arial,helvetica,sans-serif">End result would look like this: </span>

![](__resources/imgodvjpV_ogNny.PNG)

### <span style="font-family:arial,helvetica,sans-serif">Optional:</span>

<span style="font-family:arial,helvetica,sans-serif">To include breadcrumbs, add the following code to your template : </span>

<div style="background:#eee;border:1px solid #ccc;padding:5px 10px;"><span style="font-family:arial,helvetica,sans-serif"> <xsl:call-template name="breadcrumbs">  
 <xsl:with-param name="the-chapter" select="."/>  
 </xsl:call-template></span></div><span style="font-family:arial,helvetica,sans-serif"> To include side navigation, add the following code to your template: </span>

<div style="background:#eee;border:1px solid #ccc;padding:5px 10px;"><span style="font-family:arial,helvetica,sans-serif"> <xsl:call-template name="side-navigation">  
 <xsl:with-param name="name" select="'sideNav'" />  
 <xsl:with-param name="root" select="(self::page)[1]"/>  
 <xsl:with-param name="current-path" select="(self::page)/@name[1]" />  
 <xsl:with-param name="max-levels" select="number(5)" />  
 </xsl:call-template></span></div><span style="font-family:arial,helvetica,sans-serif">To add sidebar title to be current page name, add the following:</span>

<div style="background:#eee;border:1px solid #ccc;padding:5px 10px;"><span style="font-family:arial,helvetica,sans-serif"> <xsl:call-template name="sidebarTitle">  
 <xsl:with-param name="root" select="(self::page)[1]"/>  
 </xsl:call-template></span></div>### <span style="font-family:arial,helvetica,sans-serif">Plugin used:</span>

- <span style="font-family:arial,helvetica,sans-serif">Bootstrap 3</span>
- <span style="font-family:arial,helvetica,sans-serif">Sidr - https://www.berriart.com/sidr/</span>
- <span style="font-family:arial,helvetica,sans-serif">SmartMenu - http://www.smartmenus.org/</span>