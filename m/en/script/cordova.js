





<!DOCTYPE html>
<html lang="en">
    <head>
    <meta charset="utf-8">



    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-d7b19415c108234b91acac0d0c02091c860993c13687a757ee345cc1ecd3a9d1.css" integrity="sha256-17GUFcEII0uRrKwNDAIJHIYJk8E2h6dX7jRcwezTqdE=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-17f1ca8f007e30b1dc631d50182cbe4540c034b0271be65e2c5075027099a461.css" integrity="sha256-F/HKjwB+MLHcYx1QGCy+RUDANLAnG+ZeLFB1AnCZpGE=" media="all" rel="stylesheet" />


    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-31e734ccd973c9caaf1772ffbdc4d3b16e38f41a7e57c14f99593e2e6a6e3db9.css" integrity="sha256-Mec0zNlzycqvF3L/vcTTsW449Bp+V8FPmVk+LmpuPbk=" media="all" rel="stylesheet" />


    <meta name="viewport" content="width=device-width">

    <title>cordova-js/cordova.js at master · apache/cordova-js · GitHub</title>
<link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <meta property="fb:app_id" content="1401488693436528">


    <meta content="https://avatars1.githubusercontent.com/u/47359?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="apache/cordova-js" property="og:title" /><meta content="https://github.com/apache/cordova-js" property="og:url" /><meta content="cordova-js - Mirror of Apache Cordova js" property="og:description" />

    <link rel="assets" href="https://assets-cdn.github.com/">

    <meta name="pjax-timeout" content="1000">

    <meta name="request-id" content="DDBC:1C245:69802D:A1023C:58F8DB1B" data-pjax-transient>


<meta name="selected-link" value="repo_source" data-pjax-transient>

<meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="DDBC:1C245:69802D:A1023C:58F8DB1B" name="octolytics-dimension-request_id" />
    <meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




    <meta class="js-ga-set" name="dimension1" content="Logged Out">




    <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

    <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="ZjQwYmU5MjgxNTQ2ZTQyNWU3NmIxZTg2N2FjZTc4ZjE5NTA2NjAzZmNiNWM4OWZkYTllM2ZjM2MzM2NhNDI5OHx7InJlbW90ZV9hZGRyZXNzIjoiMzkuMzcuMTQyLjIxOCIsInJlcXVlc3RfaWQiOiJEREJDOjFDMjQ1OjY5ODAyRDpBMTAyM0M6NThGOERCMUIiLCJ0aW1lc3RhbXAiOjE0OTI3MDQwMjcsImhvc3QiOiJnaXRodWIuY29tIn0=">


    <meta name="html-safe-nonce" content="b9ad886de83b8b2db55bd690fdf4f0610da634b1">

    <meta http-equiv="x-pjax-version" content="ea9aacf3eb50d792d31f76980bf3c439">



    <meta name="description" content="cordova-js - Mirror of Apache Cordova js">
    <meta name="go-import" content="github.com/apache/cordova-js git https://github.com/apache/cordova-js.git">

    <meta content="47359" name="octolytics-dimension-user_id" /><meta content="apache" name="octolytics-dimension-user_login" /><meta content="6898382" name="octolytics-dimension-repository_id" /><meta content="apache/cordova-js" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="6898382" name="octolytics-dimension-repository_network_root_id" /><meta content="apache/cordova-js" name="octolytics-dimension-repository_network_root_nwo" />
    <link href="https://github.com/apache/cordova-js/commits/master.atom" rel="alternate" title="Recent Commits to cordova-js:master" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/apache/cordova-js/blob/master/src/cordova.js" data-pjax-transient>


<meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

    <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="theme-color" content="#1e2327">


    <meta name="u2f-support" content="true">

    </head>

    <body class="logged-out env-production page-blob">



    <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
<div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>







    <header class="site-header js-details-container Details" role="banner">
    <div class="container-responsive">
    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
    <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
    </a>

    <button class="btn-link float-right site-header-toggle js-details-target" type="button" aria-label="Toggle navigation">
    <svg aria-hidden="true" class="octicon octicon-three-bars" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
    </button>

    <div class="site-header-menu">
    <nav class="site-header-nav">
    <a href="/features" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features">
    Features
    </a>        <a href="/business" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/security /business/customers /business">
    Business
    </a>        <a href="/explore" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship /showcases /explore">
    Explore
    </a>        <a href="/pricing" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing/developer /pricing/team /pricing/business-hosted /pricing/business-enterprise /pricing">
    Pricing
    </a>      </nav>

    <div class="site-header-actions">
    <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/apache/cordova-js/search" class="js-site-search-form" data-scoped-search-url="/apache/cordova-js/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
    <a href="/apache/cordova-js/blob/master/src/cordova.js" class="header-search-scope no-underline">This repository</a>
<input type="text"
class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
data-hotkey="s"
name="q"
value=""
placeholder="Search"
aria-label="Search this repository"
data-unscoped-placeholder="Search GitHub"
data-scoped-placeholder="Search"
autocapitalize="off">
    <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
    </form></div>


    <a class="text-bold site-header-link" href="/login?return_to=%2Fapache%2Fcordova-js%2Fblob%2Fmaster%2Fsrc%2Fcordova.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    <span class="text-gray">or</span>
    <a class="text-bold site-header-link" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
</div>
</div>
</div>
</header>


</div>

<div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
    </div>



    <div role="main">
    <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>




<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
    <div class="container repohead-details-container">


    <ul class="pagehead-actions">
    <li>
    <a href="/login?return_to=%2Fapache%2Fcordova-js"
class="btn btn-sm btn-with-count tooltipped tooltipped-n"
aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
    </a>
    <a class="social-count" href="/apache/cordova-js/watchers"
aria-label="71 users are watching this repository">
    71
    </a>

    </li>

    <li>
    <a href="/login?return_to=%2Fapache%2Fcordova-js"
class="btn btn-sm btn-with-count tooltipped tooltipped-n"
aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
    </a>

    <a class="social-count js-social-count" href="/apache/cordova-js/stargazers"
aria-label="428 users starred this repository">
    428
    </a>

    </li>

    <li>
    <a href="/login?return_to=%2Fapache%2Fcordova-js"
class="btn btn-sm btn-with-count tooltipped tooltipped-n"
aria-label="You must be signed in to fork a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
    Fork
    </a>

    <a href="/apache/cordova-js/network" class="social-count"
aria-label="670 users forked this repository">
    670
    </a>
    </li>
    </ul>

    <h1 class="public repo-mirror">
    <svg aria-hidden="true" class="octicon octicon-mirror" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15.5 4.7L8.5 0l-7 4.7c-.3.19-.5.45-.5.8V16l7.5-4 7.5 4V5.5c0-.34-.2-.61-.5-.8zm-.5 9.8l-6-3.25V10H8v1.25L2 14.5v-9l6-4V6h1V1.5l6 4v9zM6 7h5V5l3 3-3 3V9H6v2L3 8l3-3v2z"/></svg>
    <span class="author" itemprop="author"><a href="/apache" class="url fn" rel="author">apache</a></span><!--
        --><span class="path-divider">/</span><!--
        --><strong itemprop="name"><a href="/apache/cordova-js" data-pjax="#js-repo-pjax-container">cordova-js</a></strong>

    <span class="mirror-flag">
    <span class="text">mirrored from <a href="git://git.apache.org/cordova-js.git">git://git.apache.org/cordova-js.git</a></span>
</span>
</h1>

</div>
<div class="container">

    <nav class="reponav js-repo-nav js-sidenav-container-pjax"
itemscope
itemtype="http://schema.org/BreadcrumbList"
role="navigation"
data-pjax="#js-repo-pjax-container">

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/apache/cordova-js" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /apache/cordova-js" itemprop="url">
    <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
    <span itemprop="name">Code</span>
    <meta itemprop="position" content="1">
    </a>  </span>


    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/apache/cordova-js/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /apache/cordova-js/pulls" itemprop="url">
    <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
    <span itemprop="name">Pull requests</span>
<span class="Counter">5</span>
    <meta itemprop="position" content="3">
    </a>  </span>

    <a href="/apache/cordova-js/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /apache/cordova-js/projects">
    <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
    Projects
    <span class="Counter" >0</span>
    </a>


    <a href="/apache/cordova-js/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /apache/cordova-js/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
    </a>
    <a href="/apache/cordova-js/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /apache/cordova-js/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
    </a>

    </nav>

    </div>
    </div>

    <div class="container new-discussion-timeline experiment-repo-nav">
    <div class="repository-content">




    <a href="/apache/cordova-js/blob/7c5fcc5a5adfbf3fb8ceaf36fbdd4bd970bd9c20/src/cordova.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

    <!-- blob contrib key: blob_contributors:v21:5ae8fbf1d5422eb562c97272525f0897 -->

<div class="file-navigation js-zeroclipboard-container">

    <div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
    <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"

type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
<span class="js-select-button css-truncate-target">master</span>
    </button>

    <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

<div class="select-menu-modal">
    <div class="select-menu-header">
    <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    <span class="select-menu-title">Switch branches/tags</span>
</div>

<div class="select-menu-filters">
    <div class="select-menu-text-filter">
    <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
    </div>
    <div class="select-menu-tabs">
    <ul>
    <li class="select-menu-tab">
    <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
    </li>
    <li class="select-menu-tab">
    <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
    </li>
    </ul>
    </div>
    </div>

    <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

    <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


    <a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/blob/2.6.x/src/cordova.js"
data-name="2.6.x"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
    2.6.x
    </span>
    </a>
    <a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/blob/2.7.x/src/cordova.js"
data-name="2.7.x"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
    2.7.x
    </span>
    </a>
    <a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/blob/2.8.x/src/cordova.js"
data-name="2.8.x"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
    2.8.x
    </span>
    </a>
    <a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/blob/2.9.x/src/cordova.js"
data-name="2.9.x"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
    2.9.x
    </span>
    </a>
    <a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/blob/3.0.x/src/cordova.js"
data-name="3.0.x"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
    3.0.x
    </span>
    </a>
    <a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/blob/3.1.x/src/cordova.js"
data-name="3.1.x"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
    3.1.x
    </span>
    </a>
    <a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/blob/3.2.x/src/cordova.js"
data-name="3.2.x"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
    3.2.x
    </span>
    </a>
    <a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/blob/3.3.x/src/cordova.js"
data-name="3.3.x"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
    3.3.x
    </span>
    </a>
    <a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/blob/3.4.x/src/cordova.js"
data-name="3.4.x"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
    3.4.x
    </span>
    </a>
    <a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/blob/3.5.x/src/cordova.js"
data-name="3.5.x"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
    3.5.x
    </span>
    </a>
    <a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/blob/3.6.x/src/cordova.js"
data-name="3.6.x"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
    3.6.x
    </span>
    </a>
    <a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/blob/3.7.x/src/cordova.js"
data-name="3.7.x"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
    3.7.x
    </span>
    </a>
    <a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/blob/3.8.x/src/cordova.js"
data-name="3.8.x"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
    3.8.x
    </span>
    </a>
    <a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/blob/3.9.x/src/cordova.js"
data-name="3.9.x"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
    3.9.x
    </span>
    </a>
    <a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/blob/4.0.x/src/cordova.js"
data-name="4.0.x"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
    4.0.x
    </span>
    </a>
    <a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/blob/4.1.x/src/cordova.js"
data-name="4.1.x"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
    4.1.x
    </span>
    </a>
    <a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/blob/4.2.x/src/cordova.js"
data-name="4.2.x"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
    4.2.x
    </span>
    </a>
    <a class="select-menu-item js-navigation-item js-navigation-open selected"
href="/apache/cordova-js/blob/master/src/cordova.js"
data-name="master"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
    master
    </span>
    </a>
    <a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/blob/promise/src/cordova.js"
data-name="promise"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
    promise
    </span>
    </a>
    </div>

    <div class="select-menu-no-results">Nothing to show</div>
</div>

<div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
    <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


    <a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/wp8-3.8.2/src/cordova.js"
data-name="wp8-3.8.2"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="wp8-3.8.2">
    wp8-3.8.2
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/wp8-3.8.1/src/cordova.js"
data-name="wp8-3.8.1"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="wp8-3.8.1">
    wp8-3.8.1
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/wp8-3.8.0/src/cordova.js"
data-name="wp8-3.8.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="wp8-3.8.0">
    wp8-3.8.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/windowsphone-3.7.0/src/cordova.js"
data-name="windowsphone-3.7.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="windowsphone-3.7.0">
    windowsphone-3.7.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/windowsphone-3.6.4/src/cordova.js"
data-name="windowsphone-3.6.4"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="windowsphone-3.6.4">
    windowsphone-3.6.4
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/windows-5.0.0/src/cordova.js"
data-name="windows-5.0.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="windows-5.0.0">
    windows-5.0.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/windows-4.4.3/src/cordova.js"
data-name="windows-4.4.3"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="windows-4.4.3">
    windows-4.4.3
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/windows-4.4.2/src/cordova.js"
data-name="windows-4.4.2"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="windows-4.4.2">
    windows-4.4.2
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/windows-4.4.1/src/cordova.js"
data-name="windows-4.4.1"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="windows-4.4.1">
    windows-4.4.1
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/windows-4.4.0/src/cordova.js"
data-name="windows-4.4.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="windows-4.4.0">
    windows-4.4.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/windows-4.3.2/src/cordova.js"
data-name="windows-4.3.2"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="windows-4.3.2">
    windows-4.3.2
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/windows-4.3.1/src/cordova.js"
data-name="windows-4.3.1"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="windows-4.3.1">
    windows-4.3.1
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/windows-4.3.0/src/cordova.js"
data-name="windows-4.3.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="windows-4.3.0">
    windows-4.3.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/windows-4.2.0/src/cordova.js"
data-name="windows-4.2.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="windows-4.2.0">
    windows-4.2.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/windows-4.1.0/src/cordova.js"
data-name="windows-4.1.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="windows-4.1.0">
    windows-4.1.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/windows-4.0.0/src/cordova.js"
data-name="windows-4.0.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="windows-4.0.0">
    windows-4.0.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/windows-3.8.2/src/cordova.js"
data-name="windows-3.8.2"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="windows-3.8.2">
    windows-3.8.2
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/windows-3.8.1/src/cordova.js"
data-name="windows-3.8.1"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="windows-3.8.1">
    windows-3.8.1
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/windows-3.8.0/src/cordova.js"
data-name="windows-3.8.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="windows-3.8.0">
    windows-3.8.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/windows-3.7.0/src/cordova.js"
data-name="windows-3.7.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="windows-3.7.0">
    windows-3.7.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/windows-3.6.4/src/cordova.js"
data-name="windows-3.6.4"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="windows-3.6.4">
    windows-3.6.4
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/webos-3.7.0/src/cordova.js"
data-name="webos-3.7.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="webos-3.7.0">
    webos-3.7.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/ubuntu-4.3.5/src/cordova.js"
data-name="ubuntu-4.3.5"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="ubuntu-4.3.5">
    ubuntu-4.3.5
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/ubuntu-4.3.4/src/cordova.js"
data-name="ubuntu-4.3.4"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="ubuntu-4.3.4">
    ubuntu-4.3.4
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/ubuntu-4.3.3/src/cordova.js"
data-name="ubuntu-4.3.3"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="ubuntu-4.3.3">
    ubuntu-4.3.3
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/ubuntu-4.3.2/src/cordova.js"
data-name="ubuntu-4.3.2"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="ubuntu-4.3.2">
    ubuntu-4.3.2
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/ubuntu-4.3.1/src/cordova.js"
data-name="ubuntu-4.3.1"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="ubuntu-4.3.1">
    ubuntu-4.3.1
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/ubuntu-4.0.0/src/cordova.js"
data-name="ubuntu-4.0.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="ubuntu-4.0.0">
    ubuntu-4.0.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/rel/4.2.1/src/cordova.js"
data-name="rel/4.2.1"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="rel/4.2.1">
    rel/4.2.1
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/rel/4.2.0/src/cordova.js"
data-name="rel/4.2.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="rel/4.2.0">
    rel/4.2.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/rel/4.1.4/src/cordova.js"
data-name="rel/4.1.4"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="rel/4.1.4">
    rel/4.1.4
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/osx-4.0.1/src/cordova.js"
data-name="osx-4.0.1"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="osx-4.0.1">
    osx-4.0.1
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/osx-4.0.0/src/cordova.js"
data-name="osx-4.0.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="osx-4.0.0">
    osx-4.0.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/ios-4.3.1/src/cordova.js"
data-name="ios-4.3.1"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="ios-4.3.1">
    ios-4.3.1
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/ios-4.3.0/src/cordova.js"
data-name="ios-4.3.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="ios-4.3.0">
    ios-4.3.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/ios-4.2.1/src/cordova.js"
data-name="ios-4.2.1"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="ios-4.2.1">
    ios-4.2.1
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/ios-4.2.0/src/cordova.js"
data-name="ios-4.2.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="ios-4.2.0">
    ios-4.2.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/ios-4.1.1/src/cordova.js"
data-name="ios-4.1.1"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="ios-4.1.1">
    ios-4.1.1
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/ios-4.1.0/src/cordova.js"
data-name="ios-4.1.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="ios-4.1.0">
    ios-4.1.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/ios-4.0.1/src/cordova.js"
data-name="ios-4.0.1"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="ios-4.0.1">
    ios-4.0.1
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/ios-4.0.0/src/cordova.js"
data-name="ios-4.0.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="ios-4.0.0">
    ios-4.0.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/ios-3.9.2/src/cordova.js"
data-name="ios-3.9.2"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="ios-3.9.2">
    ios-3.9.2
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/ios-3.9.1/src/cordova.js"
data-name="ios-3.9.1"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="ios-3.9.1">
    ios-3.9.1
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/ios-3.9.0/src/cordova.js"
data-name="ios-3.9.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="ios-3.9.0">
    ios-3.9.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/ios-3.8.0/src/cordova.js"
data-name="ios-3.8.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="ios-3.8.0">
    ios-3.8.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/ios-3.7.0/src/cordova.js"
data-name="ios-3.7.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="ios-3.7.0">
    ios-3.7.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/firefoxos-3.7.0/src/cordova.js"
data-name="firefoxos-3.7.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="firefoxos-3.7.0">
    firefoxos-3.7.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/browser-4.1.0/src/cordova.js"
data-name="browser-4.1.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="browser-4.1.0">
    browser-4.1.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/browser-4.0.0/src/cordova.js"
data-name="browser-4.0.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="browser-4.0.0">
    browser-4.0.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/browser-3.6.0/src/cordova.js"
data-name="browser-3.6.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="browser-3.6.0">
    browser-3.6.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/blackberry-3.8.0/src/cordova.js"
data-name="blackberry-3.8.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="blackberry-3.8.0">
    blackberry-3.8.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/android/src/cordova.js"
data-name="android"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="android">
    android
    </span>
    </a>
    <a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/android-6.2.1/src/cordova.js"
data-name="android-6.2.1"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="android-6.2.1">
    android-6.2.1
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/android-6.2.0/src/cordova.js"
data-name="android-6.2.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="android-6.2.0">
    android-6.2.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/android-6.1.2/src/cordova.js"
data-name="android-6.1.2"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="android-6.1.2">
    android-6.1.2
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/android-6.1.1/src/cordova.js"
data-name="android-6.1.1"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="android-6.1.1">
    android-6.1.1
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/android-6.1.0/src/cordova.js"
data-name="android-6.1.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="android-6.1.0">
    android-6.1.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/android-6.0.0/src/cordova.js"
data-name="android-6.0.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="android-6.0.0">
    android-6.0.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/android-5.2.2/src/cordova.js"
data-name="android-5.2.2"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="android-5.2.2">
    android-5.2.2
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/android-5.2.1/src/cordova.js"
data-name="android-5.2.1"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="android-5.2.1">
    android-5.2.1
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/android-5.2.0/src/cordova.js"
data-name="android-5.2.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="android-5.2.0">
    android-5.2.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/android-5.1.1/src/cordova.js"
data-name="android-5.1.1"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="android-5.1.1">
    android-5.1.1
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/android-5.1.0/src/cordova.js"
data-name="android-5.1.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="android-5.1.0">
    android-5.1.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/android-5.0.0/src/cordova.js"
data-name="android-5.0.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="android-5.0.0">
    android-5.0.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/android-4.1.1/src/cordova.js"
data-name="android-4.1.1"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="android-4.1.1">
    android-4.1.1
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/android-4.1.0/src/cordova.js"
data-name="android-4.1.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="android-4.1.0">
    android-4.1.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/android-4.0.2/src/cordova.js"
data-name="android-4.0.2"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="android-4.0.2">
    android-4.0.2
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/android-4.0.1/src/cordova.js"
data-name="android-4.0.1"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="android-4.0.1">
    android-4.0.1
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/android-4.0.0/src/cordova.js"
data-name="android-4.0.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="android-4.0.0">
    android-4.0.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/android-3.7.2/src/cordova.js"
data-name="android-3.7.2"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="android-3.7.2">
    android-3.7.2
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/android-3.7.1/src/cordova.js"
data-name="android-3.7.1"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="android-3.7.1">
    android-3.7.1
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/android-3.7.0/src/cordova.js"
data-name="android-3.7.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="android-3.7.0">
    android-3.7.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/android-3.6.4/src/cordova.js"
data-name="android-3.6.4"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="android-3.6.4">
    android-3.6.4
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/4.2.1/src/cordova.js"
data-name="4.2.1"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="4.2.1">
    4.2.1
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/4.2.0/src/cordova.js"
data-name="4.2.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="4.2.0">
    4.2.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/4.1.4/src/cordova.js"
data-name="4.1.4"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="4.1.4">
    4.1.4
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/4.1.3/src/cordova.js"
data-name="4.1.3"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="4.1.3">
    4.1.3
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/4.1.2/src/cordova.js"
data-name="4.1.2"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="4.1.2">
    4.1.2
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/4.1.1/src/cordova.js"
data-name="4.1.1"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="4.1.1">
    4.1.1
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/4.1.0/src/cordova.js"
data-name="4.1.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="4.1.0">
    4.1.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/4.0.0/src/cordova.js"
data-name="4.0.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="4.0.0">
    4.0.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/3.9.0/src/cordova.js"
data-name="3.9.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="3.9.0">
    3.9.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/3.8.0/src/cordova.js"
data-name="3.8.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="3.8.0">
    3.8.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/3.7.3/src/cordova.js"
data-name="3.7.3"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="3.7.3">
    3.7.3
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/3.7.2/src/cordova.js"
data-name="3.7.2"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="3.7.2">
    3.7.2
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/3.7.1/src/cordova.js"
data-name="3.7.1"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="3.7.1">
    3.7.1
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/3.7.0/src/cordova.js"
data-name="3.7.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="3.7.0">
    3.7.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/3.6.4/src/cordova.js"
data-name="3.6.4"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="3.6.4">
    3.6.4
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/3.6.3/src/cordova.js"
data-name="3.6.3"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="3.6.3">
    3.6.3
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/3.6.1/src/cordova.js"
data-name="3.6.1"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="3.6.1">
    3.6.1
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/3.6.0/src/cordova.js"
data-name="3.6.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="3.6.0">
    3.6.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/3.5.0/src/cordova.js"
data-name="3.5.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="3.5.0">
    3.5.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/3.5.0-rc1/src/cordova.js"
data-name="3.5.0-rc1"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="3.5.0-rc1">
    3.5.0-rc1
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/3.4.0/src/cordova.js"
data-name="3.4.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="3.4.0">
    3.4.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/3.4.0-rc1/src/cordova.js"
data-name="3.4.0-rc1"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="3.4.0-rc1">
    3.4.0-rc1
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/3.3.0/src/cordova.js"
data-name="3.3.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="3.3.0">
    3.3.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/3.3.0-rc1/src/cordova.js"
data-name="3.3.0-rc1"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="3.3.0-rc1">
    3.3.0-rc1
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/3.2.0/src/cordova.js"
data-name="3.2.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="3.2.0">
    3.2.0
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/3.2.0-rc1/src/cordova.js"
data-name="3.2.0-rc1"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="3.2.0-rc1">
    3.2.0-rc1
</span>
</a>
<a class="select-menu-item js-navigation-item js-navigation-open "
href="/apache/cordova-js/tree/3.1.0/src/cordova.js"
data-name="3.1.0"
data-skip-pjax="true"
rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
    <span class="select-menu-item-text css-truncate-target" title="3.1.0">
    3.1.0
</span>
</a>
</div>

<div class="select-menu-no-results">Nothing to show</div>
</div>

</div>
</div>
</div>

<div class="BtnGroup float-right">
    <a href="/apache/cordova-js/find/master"
class="js-pjax-capture-input btn btn-sm BtnGroup-item"
data-pjax
data-hotkey="t">
    Find file
</a>
<button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
</div>
<div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/apache/cordova-js"><span>cordova-js</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/apache/cordova-js/tree/master/src"><span>src</span></a></span><span class="separator">/</span><strong class="final-path">cordova.js</strong>
    </div>
    </div>



    <div class="commit-tease">
    <span class="float-right">
    <a class="commit-tease-sha" href="/apache/cordova-js/commit/5fdee87b2814bdafb9126f09bdb95f255db25d42" data-pjax>
5fdee87
</a>
<relative-time datetime="2015-08-12T13:41:15Z">Aug 12, 2015</relative-time>
</span>
<div>
<img alt="@daserge" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/4272078?v=3&amp;s=40" width="20" />
    <a href="/daserge" class="user-mention" rel="contributor">daserge</a>
    <a href="/apache/cordova-js/commit/5fdee87b2814bdafb9126f09bdb95f255db25d42" class="message" data-pjax="true" title="CB-9342 Fix deviceReady event not fired on Windows 10 in hosted environment">CB-9342 Fix deviceReady event not fired on Windows 10 in hosted envir…</a>
</div>

<div class="commit-tease-contributors">
    <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
    <strong>8</strong>
    contributors
    </button>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="purplecabbage" href="/apache/cordova-js/commits/master/src/cordova.js?author=purplecabbage"><img alt="@purplecabbage" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/46134?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="stevengill" href="/apache/cordova-js/commits/master/src/cordova.js?author=stevengill"><img alt="@stevengill" class="avatar" height="20" src="https://avatars0.githubusercontent.com/u/169536?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="stacic" href="/apache/cordova-js/commits/master/src/cordova.js?author=stacic"><img alt="@stacic" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/5342469?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="robpaveza" href="/apache/cordova-js/commits/master/src/cordova.js?author=robpaveza"><img alt="@robpaveza" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/1490290?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="mdudek" href="/apache/cordova-js/commits/master/src/cordova.js?author=mdudek"><img alt="@mdudek" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/5558549?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="daserge" href="/apache/cordova-js/commits/master/src/cordova.js?author=daserge"><img alt="@daserge" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/4272078?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="brianleroux" href="/apache/cordova-js/commits/master/src/cordova.js?author=brianleroux"><img alt="@brianleroux" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/990?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="agrieve" href="/apache/cordova-js/commits/master/src/cordova.js?author=agrieve"><img alt="@agrieve" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/1369484?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
    <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
<ul class="facebox-user-list" data-facebox-id="facebox-description">
    <li class="facebox-user-list-item">
    <img alt="@purplecabbage" height="24" src="https://avatars2.githubusercontent.com/u/46134?v=3&amp;s=48" width="24" />
    <a href="/purplecabbage">purplecabbage</a>
    </li>
    <li class="facebox-user-list-item">
    <img alt="@stevengill" height="24" src="https://avatars2.githubusercontent.com/u/169536?v=3&amp;s=48" width="24" />
    <a href="/stevengill">stevengill</a>
    </li>
    <li class="facebox-user-list-item">
    <img alt="@stacic" height="24" src="https://avatars0.githubusercontent.com/u/5342469?v=3&amp;s=48" width="24" />
    <a href="/stacic">stacic</a>
    </li>
    <li class="facebox-user-list-item">
    <img alt="@robpaveza" height="24" src="https://avatars1.githubusercontent.com/u/1490290?v=3&amp;s=48" width="24" />
    <a href="/robpaveza">robpaveza</a>
    </li>
    <li class="facebox-user-list-item">
    <img alt="@mdudek" height="24" src="https://avatars0.githubusercontent.com/u/5558549?v=3&amp;s=48" width="24" />
    <a href="/mdudek">mdudek</a>
    </li>
    <li class="facebox-user-list-item">
    <img alt="@daserge" height="24" src="https://avatars3.githubusercontent.com/u/4272078?v=3&amp;s=48" width="24" />
    <a href="/daserge">daserge</a>
    </li>
    <li class="facebox-user-list-item">
    <img alt="@brianleroux" height="24" src="https://avatars1.githubusercontent.com/u/990?v=3&amp;s=48" width="24" />
    <a href="/brianleroux">brianleroux</a>
    </li>
    <li class="facebox-user-list-item">
    <img alt="@agrieve" height="24" src="https://avatars3.githubusercontent.com/u/1369484?v=3&amp;s=48" width="24" />
    <a href="/agrieve">agrieve</a>
    </li>
    </ul>
    </div>
    </div>

    <div class="file">
    <div class="file-header">
    <div class="file-actions">

    <div class="BtnGroup">
    <a href="/apache/cordova-js/raw/master/src/cordova.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
    <a href="/apache/cordova-js/blame/master/src/cordova.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
    <a href="/apache/cordova-js/commits/master/src/cordova.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

    <a class="btn-octicon tooltipped tooltipped-nw"
href="https://windows.github.com"
aria-label="Open this file in GitHub Desktop"
data-ga-click="Repository, open with desktop, type:windows">
    <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
    </a>

    <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
aria-label="You must be signed in to make or propose changes">
    <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
    </button>
    <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
aria-label="You must be signed in to make or propose changes">
    <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
    </button>
    </div>

    <div class="file-info">
    248 lines (228 sloc)
<span class="file-info-divider"></span>
    8.62 KB
</div>
</div>



<div itemprop="text" class="blob-wrapper data type-javascript">
    <table class="highlight tab-size js-file-line-container" data-tab-size="8">
    <tr>
    <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
    <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*</span></td>
     </tr>
     <tr>
     <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
     <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
     </tr>
     <tr>
     <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
     <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Licensed to the Apache Software Foundation (ASF) under one</span></td>
     </tr>
     <tr>
     <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
     <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * or more contributor license agreements.  See the NOTICE file</span></td>
     </tr>
     <tr>
     <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
     <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * distributed with this work for additional information</span></td>
     </tr>
     <tr>
     <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
     <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * regarding copyright ownership.  The ASF licenses this file</span></td>
     </tr>
     <tr>
     <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
     <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * to you under the Apache License, Version 2.0 (the</span></td>
     </tr>
     <tr>
     <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
     <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * &quot;License&quot;); you may not use this file except in compliance</span></td>
     </tr>
     <tr>
     <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
     <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * with the License.  You may obtain a copy of the License at</span></td>
     </tr>
     <tr>
     <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
     <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
     </tr>
     <tr>
     <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
     <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *   http://www.apache.org/licenses/LICENSE-2.0</span></td>
     </tr>
     <tr>
     <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
     <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
     </tr>
     <tr>
     <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
     <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Unless required by applicable law or agreed to in writing,</span></td>
     </tr>
     <tr>
     <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
     <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * software distributed under the License is distributed on an</span></td>
     </tr>
     <tr>
     <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
     <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * &quot;AS IS&quot; BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY</span></td>
     </tr>
     <tr>
     <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
     <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * KIND, either express or implied.  See the License for the</span></td>
     </tr>
     <tr>
     <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
     <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * specific language governing permissions and limitations</span></td>
     </tr>
     <tr>
     <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
     <td id="LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * under the License.</span></td>
     </tr>
     <tr>
     <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
     <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
     </tr>
     <tr>
     <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
     <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-c">*/</span></td>
    </tr>
    <tr>
    <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
    <td id="LC21" class="blob-code blob-code-inner js-file-line">
    </td>
    </tr>
    <tr>
    <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
    <td id="LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> Workaround for Windows 10 in hosted environment case</span></td>
    </tr>
    <tr>
    <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
    <td id="LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">//</span> http://www.w3.org/html/wg/drafts/html/master/browsers.html#named-access-on-the-window-object</span></td>
    </tr>
    <tr>
    <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
    <td id="LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-k">if</span> (<span class="pl-c1">window</span>.<span class="pl-smi">cordova</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>(<span class="pl-c1">window</span>.<span class="pl-smi">cordova</span> <span class="pl-k">instanceof</span> <span class="pl-c1">HTMLElement</span>)) {</td>
</tr>
<tr>
<td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
    <td id="LC25" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>cordova already defined<span class="pl-pds">&quot;</span></span>);</td>
</tr>
<tr>
<td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
    <td id="LC26" class="blob-code blob-code-inner js-file-line">}</td>
</tr>
<tr>
<td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
    <td id="LC27" class="blob-code blob-code-inner js-file-line">
    </td>
    </tr>
    <tr>
    <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
    <td id="LC28" class="blob-code blob-code-inner js-file-line">
    </td>
    </tr>
    <tr>
    <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
    <td id="LC29" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> channel <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>cordova/channel<span class="pl-pds">&#39;</span></span>);</td>
</tr>
<tr>
<td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
    <td id="LC30" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> platform <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>cordova/platform<span class="pl-pds">&#39;</span></span>);</td>
</tr>
<tr>
<td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
    <td id="LC31" class="blob-code blob-code-inner js-file-line">
    </td>
    </tr>
    <tr>
    <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
    <td id="LC32" class="blob-code blob-code-inner js-file-line">
    </td>
    </tr>
    <tr>
    <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
    <td id="LC33" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
     </tr>
     <tr>
     <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
     <td id="LC34" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Intercept calls to addEventListener + removeEventListener and handle deviceready,</span></td>
     </tr>
     <tr>
     <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
     <td id="LC35" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * resume, and pause events.</span></td>
     </tr>
     <tr>
     <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
     <td id="LC36" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
    </tr>
    <tr>
    <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
    <td id="LC37" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> m_document_addEventListener <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-smi">addEventListener</span>;</td>
</tr>
<tr>
<td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
    <td id="LC38" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> m_document_removeEventListener <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-smi">removeEventListener</span>;</td>
</tr>
<tr>
<td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
    <td id="LC39" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> m_window_addEventListener <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-smi">addEventListener</span>;</td>
</tr>
<tr>
<td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
    <td id="LC40" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> m_window_removeEventListener <span class="pl-k">=</span> <span class="pl-c1">window</span>.<span class="pl-smi">removeEventListener</span>;</td>
</tr>
<tr>
<td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
    <td id="LC41" class="blob-code blob-code-inner js-file-line">
    </td>
    </tr>
    <tr>
    <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
    <td id="LC42" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/**</span></td>
     </tr>
     <tr>
     <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
     <td id="LC43" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Houses custom event handlers to intercept on document + window event listeners.</span></td>
     </tr>
     <tr>
     <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
     <td id="LC44" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> */</span></td>
    </tr>
    <tr>
    <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
    <td id="LC45" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> documentEventHandlers <span class="pl-k">=</span> {},</td>
</tr>
<tr>
<td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
    <td id="LC46" class="blob-code blob-code-inner js-file-line">    windowEventHandlers <span class="pl-k">=</span> {};</td>
</tr>
<tr>
<td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
    <td id="LC47" class="blob-code blob-code-inner js-file-line">
    </td>
    </tr>
    <tr>
    <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
    <td id="LC48" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">document</span>.<span class="pl-en">addEventListener</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">evt</span>, <span class="pl-smi">handler</span>, <span class="pl-smi">capture</span>) {</td>
</tr>
<tr>
<td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
    <td id="LC49" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> e <span class="pl-k">=</span> <span class="pl-smi">evt</span>.<span class="pl-c1">toLowerCase</span>();</td>
</tr>
<tr>
<td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
    <td id="LC50" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">typeof</span> documentEventHandlers[e] <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
</tr>
<tr>
<td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
    <td id="LC51" class="blob-code blob-code-inner js-file-line">        documentEventHandlers[e].<span class="pl-en">subscribe</span>(handler);</td>
</tr>
<tr>
<td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
    <td id="LC52" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
</tr>
<tr>
<td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
    <td id="LC53" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">m_document_addEventListener</span>.<span class="pl-c1">call</span>(<span class="pl-c1">document</span>, evt, handler, capture);</td>
</tr>
<tr>
<td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
    <td id="LC54" class="blob-code blob-code-inner js-file-line">    }</td>
</tr>
<tr>
<td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
    <td id="LC55" class="blob-code blob-code-inner js-file-line">};</td>
</tr>
<tr>
<td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
    <td id="LC56" class="blob-code blob-code-inner js-file-line">
    </td>
    </tr>
    <tr>
    <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
    <td id="LC57" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">window</span>.<span class="pl-en">addEventListener</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">evt</span>, <span class="pl-smi">handler</span>, <span class="pl-smi">capture</span>) {</td>
</tr>
<tr>
<td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
    <td id="LC58" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> e <span class="pl-k">=</span> <span class="pl-smi">evt</span>.<span class="pl-c1">toLowerCase</span>();</td>
</tr>
<tr>
<td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
    <td id="LC59" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">typeof</span> windowEventHandlers[e] <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
</tr>
<tr>
<td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
    <td id="LC60" class="blob-code blob-code-inner js-file-line">        windowEventHandlers[e].<span class="pl-en">subscribe</span>(handler);</td>
</tr>
<tr>
<td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
    <td id="LC61" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
</tr>
<tr>
<td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
    <td id="LC62" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">m_window_addEventListener</span>.<span class="pl-c1">call</span>(<span class="pl-c1">window</span>, evt, handler, capture);</td>
</tr>
<tr>
<td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
    <td id="LC63" class="blob-code blob-code-inner js-file-line">    }</td>
</tr>
<tr>
<td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
    <td id="LC64" class="blob-code blob-code-inner js-file-line">};</td>
</tr>
<tr>
<td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
    <td id="LC65" class="blob-code blob-code-inner js-file-line">
    </td>
    </tr>
    <tr>
    <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
    <td id="LC66" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">document</span>.<span class="pl-en">removeEventListener</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">evt</span>, <span class="pl-smi">handler</span>, <span class="pl-smi">capture</span>) {</td>
</tr>
<tr>
<td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
    <td id="LC67" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> e <span class="pl-k">=</span> <span class="pl-smi">evt</span>.<span class="pl-c1">toLowerCase</span>();</td>
</tr>
<tr>
<td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
    <td id="LC68" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> If unsubscribing from an event that is handled by a plugin</span></td>
    </tr>
    <tr>
    <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
    <td id="LC69" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">typeof</span> documentEventHandlers[e] <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span>) {</td>
</tr>
<tr>
<td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
    <td id="LC70" class="blob-code blob-code-inner js-file-line">        documentEventHandlers[e].<span class="pl-en">unsubscribe</span>(handler);</td>
</tr>
<tr>
<td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
    <td id="LC71" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
</tr>
<tr>
<td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
    <td id="LC72" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">m_document_removeEventListener</span>.<span class="pl-c1">call</span>(<span class="pl-c1">document</span>, evt, handler, capture);</td>
</tr>
<tr>
<td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
    <td id="LC73" class="blob-code blob-code-inner js-file-line">    }</td>
</tr>
<tr>
<td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
    <td id="LC74" class="blob-code blob-code-inner js-file-line">};</td>
</tr>
<tr>
<td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
    <td id="LC75" class="blob-code blob-code-inner js-file-line">
    </td>
    </tr>
    <tr>
    <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
    <td id="LC76" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">window</span>.<span class="pl-en">removeEventListener</span> <span class="pl-k">=</span> <span class="pl-k">function</span>(<span class="pl-smi">evt</span>, <span class="pl-smi">handler</span>, <span class="pl-smi">capture</span>) {</td>
</tr>
<tr>
<td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
    <td id="LC77" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> e <span class="pl-k">=</span> <span class="pl-smi">evt</span>.<span class="pl-c1">toLowerCase</span>();</td>
</tr>
<tr>
<td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
    <td id="LC78" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> If unsubscribing from an event that is handled by a plugin</span></td>
    </tr>
    <tr>
    <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
    <td id="LC79" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (<span class="pl-k">typeof</span> windowEventHandlers[e] <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>undefined<span class="pl-pds">&quot;</span></span>) {</td>
</tr>
<tr>
<td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
    <td id="LC80" class="blob-code blob-code-inner js-file-line">        windowEventHandlers[e].<span class="pl-en">unsubscribe</span>(handler);</td>
</tr>
<tr>
<td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
    <td id="LC81" class="blob-code blob-code-inner js-file-line">    } <span class="pl-k">else</span> {</td>
</tr>
<tr>
<td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
    <td id="LC82" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">m_window_removeEventListener</span>.<span class="pl-c1">call</span>(<span class="pl-c1">window</span>, evt, handler, capture);</td>
</tr>
<tr>
<td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
    <td id="LC83" class="blob-code blob-code-inner js-file-line">    }</td>
</tr>
<tr>
<td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
    <td id="LC84" class="blob-code blob-code-inner js-file-line">};</td>
</tr>
<tr>
<td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
    <td id="LC85" class="blob-code blob-code-inner js-file-line">
    </td>
    </tr>
    <tr>
    <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
    <td id="LC86" class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span class="pl-en">createEvent</span>(<span class="pl-smi">type</span>, <span class="pl-smi">data</span>) {</td>
</tr>
<tr>
<td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
    <td id="LC87" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">var</span> <span class="pl-c1">event</span> <span class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">createEvent</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>Events<span class="pl-pds">&#39;</span></span>);</td>
</tr>
<tr>
<td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
    <td id="LC88" class="blob-code blob-code-inner js-file-line">    <span class="pl-c1">event</span>.<span class="pl-c1">initEvent</span>(type, <span class="pl-c1">false</span>, <span class="pl-c1">false</span>);</td>
</tr>
<tr>
<td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
    <td id="LC89" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">if</span> (data) {</td>
</tr>
<tr>
<td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
    <td id="LC90" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span> (<span class="pl-k">var</span> i <span class="pl-k">in</span> data) {</td>
</tr>
<tr>
<td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
    <td id="LC91" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (<span class="pl-smi">data</span>.<span class="pl-en">hasOwnProperty</span>(i)) {</td>
</tr>
<tr>
<td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
    <td id="LC92" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">event</span>[i] <span class="pl-k">=</span> data[i];</td>
</tr>
<tr>
<td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
    <td id="LC93" class="blob-code blob-code-inner js-file-line">            }</td>
</tr>
<tr>
<td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
    <td id="LC94" class="blob-code blob-code-inner js-file-line">        }</td>
</tr>
<tr>
<td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
    <td id="LC95" class="blob-code blob-code-inner js-file-line">    }</td>
</tr>
<tr>
<td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
    <td id="LC96" class="blob-code blob-code-inner js-file-line">    <span class="pl-k">return</span> <span class="pl-c1">event</span>;</td>
</tr>
<tr>
<td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
    <td id="LC97" class="blob-code blob-code-inner js-file-line">}</td>
</tr>
<tr>
<td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
    <td id="LC98" class="blob-code blob-code-inner js-file-line">
    </td>
    </tr>
    <tr>
    <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
    <td id="LC99" class="blob-code blob-code-inner js-file-line">
    </td>
    </tr>
    <tr>
    <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
    <td id="LC100" class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> cordova <span class="pl-k">=</span> {</td>
    </tr>
    <tr>
    <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
    <td id="LC101" class="blob-code blob-code-inner js-file-line">    define<span class="pl-k">:</span>define,</td>
</tr>
<tr>
<td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
    <td id="LC102" class="blob-code blob-code-inner js-file-line">    require<span class="pl-k">:</span>require,</td>
</tr>
<tr>
<td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
    <td id="LC103" class="blob-code blob-code-inner js-file-line">    version<span class="pl-k">:</span><span class="pl-c1">PLATFORM_VERSION_BUILD_LABEL</span>,</td>
</tr>
<tr>
<td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
    <td id="LC104" class="blob-code blob-code-inner js-file-line">    platformVersion<span class="pl-k">:</span><span class="pl-c1">PLATFORM_VERSION_BUILD_LABEL</span>,</td>
</tr>
<tr>
<td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
    <td id="LC105" class="blob-code blob-code-inner js-file-line">    platformId<span class="pl-k">:</span><span class="pl-smi">platform</span>.<span class="pl-c1">id</span>,</td>
</tr>
<tr>
<td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
    <td id="LC106" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**</span></td>
     </tr>
     <tr>
     <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
     <td id="LC107" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Methods to add/remove your own addEventListener hijacking on document + window.</span></td>
     </tr>
     <tr>
     <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
     <td id="LC108" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     */</span></td>
    </tr>
    <tr>
    <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
    <td id="LC109" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">addWindowEventHandler</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-c1">event</span>) {</td>
</tr>
<tr>
<td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
    <td id="LC110" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> (windowEventHandlers[<span class="pl-c1">event</span>] <span class="pl-k">=</span> <span class="pl-smi">channel</span>.<span class="pl-en">create</span>(<span class="pl-c1">event</span>));</td>
</tr>
<tr>
<td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
    <td id="LC111" class="blob-code blob-code-inner js-file-line">    },</td>
</tr>
<tr>
<td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
    <td id="LC112" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">addStickyDocumentEventHandler</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-c1">event</span>) {</td>
</tr>
<tr>
<td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
    <td id="LC113" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> (documentEventHandlers[<span class="pl-c1">event</span>] <span class="pl-k">=</span> <span class="pl-smi">channel</span>.<span class="pl-en">createSticky</span>(<span class="pl-c1">event</span>));</td>
</tr>
<tr>
<td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
    <td id="LC114" class="blob-code blob-code-inner js-file-line">    },</td>
</tr>
<tr>
<td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
    <td id="LC115" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">addDocumentEventHandler</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-c1">event</span>) {</td>
</tr>
<tr>
<td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
    <td id="LC116" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> (documentEventHandlers[<span class="pl-c1">event</span>] <span class="pl-k">=</span> <span class="pl-smi">channel</span>.<span class="pl-en">create</span>(<span class="pl-c1">event</span>));</td>
</tr>
<tr>
<td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
    <td id="LC117" class="blob-code blob-code-inner js-file-line">    },</td>
</tr>
<tr>
<td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
    <td id="LC118" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">removeWindowEventHandler</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-c1">event</span>) {</td>
</tr>
<tr>
<td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
    <td id="LC119" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">delete</span> windowEventHandlers[<span class="pl-c1">event</span>];</td>
</tr>
<tr>
<td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
    <td id="LC120" class="blob-code blob-code-inner js-file-line">    },</td>
</tr>
<tr>
<td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
    <td id="LC121" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">removeDocumentEventHandler</span><span class="pl-k">:</span><span class="pl-k">function</span>(<span class="pl-c1">event</span>) {</td>
</tr>
<tr>
<td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
    <td id="LC122" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">delete</span> documentEventHandlers[<span class="pl-c1">event</span>];</td>
</tr>
<tr>
<td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
    <td id="LC123" class="blob-code blob-code-inner js-file-line">    },</td>
</tr>
<tr>
<td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
    <td id="LC124" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**</span></td>
     </tr>
     <tr>
     <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
     <td id="LC125" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Retrieve original event handlers that were replaced by Cordova</span></td>
     </tr>
     <tr>
     <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
     <td id="LC126" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     *</span></td>
     </tr>
     <tr>
     <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
     <td id="LC127" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * <span class="pl-k">@return</span> object</span></td>
     </tr>
     <tr>
     <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
     <td id="LC128" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     */</span></td>
    </tr>
    <tr>
    <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
    <td id="LC129" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">getOriginalHandlers</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
</tr>
<tr>
<td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
    <td id="LC130" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">return</span> {<span class="pl-s"><span class="pl-pds">&#39;</span>document<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {<span class="pl-s"><span class="pl-pds">&#39;</span>addEventListener<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> m_document_addEventListener, <span class="pl-s"><span class="pl-pds">&#39;</span>removeEventListener<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> m_document_removeEventListener},</td>
</tr>
<tr>
<td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
    <td id="LC131" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>window<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> {<span class="pl-s"><span class="pl-pds">&#39;</span>addEventListener<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> m_window_addEventListener, <span class="pl-s"><span class="pl-pds">&#39;</span>removeEventListener<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> m_window_removeEventListener}};</td>
</tr>
<tr>
<td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
    <td id="LC132" class="blob-code blob-code-inner js-file-line">    },</td>
</tr>
<tr>
<td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
    <td id="LC133" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**</span></td>
     </tr>
     <tr>
     <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
     <td id="LC134" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Method to fire event from native code</span></td>
     </tr>
     <tr>
     <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
     <td id="LC135" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * bNoDetach is required for events which cause an exception which needs to be caught in native code</span></td>
     </tr>
     <tr>
     <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
     <td id="LC136" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     */</span></td>
    </tr>
    <tr>
    <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
    <td id="LC137" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">fireDocumentEvent</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">type</span>, <span class="pl-smi">data</span>, <span class="pl-smi">bNoDetach</span>) {</td>
</tr>
<tr>
<td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
    <td id="LC138" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> evt <span class="pl-k">=</span> <span class="pl-en">createEvent</span>(type, data);</td>
</tr>
<tr>
<td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
    <td id="LC139" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">typeof</span> documentEventHandlers[type] <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
</tr>
<tr>
<td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
    <td id="LC140" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>( bNoDetach ) {</td>
</tr>
<tr>
<td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
    <td id="LC141" class="blob-code blob-code-inner js-file-line">                documentEventHandlers[type].<span class="pl-en">fire</span>(evt);</td>
</tr>
<tr>
<td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
    <td id="LC142" class="blob-code blob-code-inner js-file-line">            }</td>
</tr>
<tr>
<td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
    <td id="LC143" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">else</span> {</td>
</tr>
<tr>
<td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
    <td id="LC144" class="blob-code blob-code-inner js-file-line">                <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>() {</td>
</tr>
<tr>
<td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
    <td id="LC145" class="blob-code blob-code-inner js-file-line">                    <span class="pl-c"><span class="pl-c">//</span> Fire deviceready on listeners that were registered before cordova.js was loaded.</span></td>
    </tr>
    <tr>
    <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
    <td id="LC146" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">if</span> (type <span class="pl-k">==</span> <span class="pl-s"><span class="pl-pds">&#39;</span>deviceready<span class="pl-pds">&#39;</span></span>) {</td>
</tr>
<tr>
<td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
    <td id="LC147" class="blob-code blob-code-inner js-file-line">                        <span class="pl-c1">document</span>.<span class="pl-c1">dispatchEvent</span>(evt);</td>
</tr>
<tr>
<td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
    <td id="LC148" class="blob-code blob-code-inner js-file-line">                    }</td>
</tr>
<tr>
<td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
    <td id="LC149" class="blob-code blob-code-inner js-file-line">                    documentEventHandlers[type].<span class="pl-en">fire</span>(evt);</td>
</tr>
<tr>
<td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
    <td id="LC150" class="blob-code blob-code-inner js-file-line">                }, <span class="pl-c1">0</span>);</td>
</tr>
<tr>
<td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
    <td id="LC151" class="blob-code blob-code-inner js-file-line">            }</td>
</tr>
<tr>
<td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
    <td id="LC152" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
</tr>
<tr>
<td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
    <td id="LC153" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">document</span>.<span class="pl-c1">dispatchEvent</span>(evt);</td>
</tr>
<tr>
<td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
    <td id="LC154" class="blob-code blob-code-inner js-file-line">        }</td>
</tr>
<tr>
<td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
    <td id="LC155" class="blob-code blob-code-inner js-file-line">    },</td>
</tr>
<tr>
<td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
    <td id="LC156" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">fireWindowEvent</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">type</span>, <span class="pl-smi">data</span>) {</td>
</tr>
<tr>
<td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
    <td id="LC157" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> evt <span class="pl-k">=</span> <span class="pl-en">createEvent</span>(type,data);</td>
</tr>
<tr>
<td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
    <td id="LC158" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">typeof</span> windowEventHandlers[type] <span class="pl-k">!=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
</tr>
<tr>
<td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
    <td id="LC159" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">setTimeout</span>(<span class="pl-k">function</span>() {</td>
</tr>
<tr>
<td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
    <td id="LC160" class="blob-code blob-code-inner js-file-line">                windowEventHandlers[type].<span class="pl-en">fire</span>(evt);</td>
</tr>
<tr>
<td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
    <td id="LC161" class="blob-code blob-code-inner js-file-line">            }, <span class="pl-c1">0</span>);</td>
</tr>
<tr>
<td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
    <td id="LC162" class="blob-code blob-code-inner js-file-line">        } <span class="pl-k">else</span> {</td>
</tr>
<tr>
<td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
    <td id="LC163" class="blob-code blob-code-inner js-file-line">            <span class="pl-c1">window</span>.<span class="pl-c1">dispatchEvent</span>(evt);</td>
</tr>
<tr>
<td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
    <td id="LC164" class="blob-code blob-code-inner js-file-line">        }</td>
</tr>
<tr>
<td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
    <td id="LC165" class="blob-code blob-code-inner js-file-line">    },</td>
</tr>
<tr>
<td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
    <td id="LC166" class="blob-code blob-code-inner js-file-line">
    </td>
    </tr>
    <tr>
    <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
    <td id="LC167" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**</span></td>
     </tr>
     <tr>
     <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
     <td id="LC168" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Plugin callback mechanism.</span></td>
     </tr>
     <tr>
     <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
     <td id="LC169" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     */</span></td>
    </tr>
    <tr>
    <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
    <td id="LC170" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> Randomize the starting callbackId to avoid collisions after refreshing or navigating.</span></td>
    </tr>
    <tr>
    <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
    <td id="LC171" class="blob-code blob-code-inner js-file-line">    <span class="pl-c"><span class="pl-c">//</span> This way, it&#39;s very unlikely that any new callback would get the same callbackId as an old callback.</span></td>
    </tr>
    <tr>
    <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
    <td id="LC172" class="blob-code blob-code-inner js-file-line">    callbackId<span class="pl-k">:</span> <span class="pl-c1">Math</span>.<span class="pl-c1">floor</span>(<span class="pl-c1">Math</span>.<span class="pl-c1">random</span>() <span class="pl-k">*</span> <span class="pl-c1">2000000000</span>),</td>
</tr>
<tr>
<td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
    <td id="LC173" class="blob-code blob-code-inner js-file-line">    callbacks<span class="pl-k">:</span>  {},</td>
</tr>
<tr>
<td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
    <td id="LC174" class="blob-code blob-code-inner js-file-line">    callbackStatus<span class="pl-k">:</span> {</td>
</tr>
<tr>
<td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
    <td id="LC175" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">NO_RESULT</span><span class="pl-k">:</span> <span class="pl-c1">0</span>,</td>
</tr>
<tr>
<td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
    <td id="LC176" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">OK</span><span class="pl-k">:</span> <span class="pl-c1">1</span>,</td>
</tr>
<tr>
<td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
    <td id="LC177" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">CLASS_NOT_FOUND_EXCEPTION</span><span class="pl-k">:</span> <span class="pl-c1">2</span>,</td>
</tr>
<tr>
<td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
    <td id="LC178" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">ILLEGAL_ACCESS_EXCEPTION</span><span class="pl-k">:</span> <span class="pl-c1">3</span>,</td>
</tr>
<tr>
<td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
    <td id="LC179" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">INSTANTIATION_EXCEPTION</span><span class="pl-k">:</span> <span class="pl-c1">4</span>,</td>
</tr>
<tr>
<td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
    <td id="LC180" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">MALFORMED_URL_EXCEPTION</span><span class="pl-k">:</span> <span class="pl-c1">5</span>,</td>
</tr>
<tr>
<td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
    <td id="LC181" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">IO_EXCEPTION</span><span class="pl-k">:</span> <span class="pl-c1">6</span>,</td>
</tr>
<tr>
<td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
    <td id="LC182" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">INVALID_ACTION</span><span class="pl-k">:</span> <span class="pl-c1">7</span>,</td>
</tr>
<tr>
<td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
    <td id="LC183" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">JSON_EXCEPTION</span><span class="pl-k">:</span> <span class="pl-c1">8</span>,</td>
</tr>
<tr>
<td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
    <td id="LC184" class="blob-code blob-code-inner js-file-line">        <span class="pl-c1">ERROR</span><span class="pl-k">:</span> <span class="pl-c1">9</span></td>
    </tr>
    <tr>
    <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
    <td id="LC185" class="blob-code blob-code-inner js-file-line">    },</td>
</tr>
<tr>
<td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
    <td id="LC186" class="blob-code blob-code-inner js-file-line">
    </td>
    </tr>
    <tr>
    <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
    <td id="LC187" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**</span></td>
     </tr>
     <tr>
     <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
     <td id="LC188" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Called by native code when returning successful result from an action.</span></td>
     </tr>
     <tr>
     <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
     <td id="LC189" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     */</span></td>
    </tr>
    <tr>
    <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
    <td id="LC190" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">callbackSuccess</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">callbackId</span>, <span class="pl-smi">args</span>) {</td>
</tr>
<tr>
<td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
    <td id="LC191" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">cordova</span>.<span class="pl-en">callbackFromNative</span>(callbackId, <span class="pl-c1">true</span>, <span class="pl-smi">args</span>.<span class="pl-c1">status</span>, [<span class="pl-smi">args</span>.<span class="pl-smi">message</span>], <span class="pl-smi">args</span>.<span class="pl-smi">keepCallback</span>);</td>
</tr>
<tr>
<td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
    <td id="LC192" class="blob-code blob-code-inner js-file-line">    },</td>
</tr>
<tr>
<td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
    <td id="LC193" class="blob-code blob-code-inner js-file-line">
    </td>
    </tr>
    <tr>
    <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
    <td id="LC194" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**</span></td>
     </tr>
     <tr>
     <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
     <td id="LC195" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Called by native code when returning error result from an action.</span></td>
     </tr>
     <tr>
     <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
     <td id="LC196" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     */</span></td>
    </tr>
    <tr>
    <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
    <td id="LC197" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">callbackError</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">callbackId</span>, <span class="pl-smi">args</span>) {</td>
</tr>
<tr>
<td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
    <td id="LC198" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> TODO: Deprecate callbackSuccess and callbackError in favour of callbackFromNative.</span></td>
    </tr>
    <tr>
    <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
    <td id="LC199" class="blob-code blob-code-inner js-file-line">        <span class="pl-c"><span class="pl-c">//</span> Derive success from status.</span></td>
    </tr>
    <tr>
    <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
    <td id="LC200" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">cordova</span>.<span class="pl-en">callbackFromNative</span>(callbackId, <span class="pl-c1">false</span>, <span class="pl-smi">args</span>.<span class="pl-c1">status</span>, [<span class="pl-smi">args</span>.<span class="pl-smi">message</span>], <span class="pl-smi">args</span>.<span class="pl-smi">keepCallback</span>);</td>
</tr>
<tr>
<td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
    <td id="LC201" class="blob-code blob-code-inner js-file-line">    },</td>
</tr>
<tr>
<td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
    <td id="LC202" class="blob-code blob-code-inner js-file-line">
    </td>
    </tr>
    <tr>
    <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
    <td id="LC203" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">/**</span></td>
     </tr>
     <tr>
     <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
     <td id="LC204" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     * Called by native code when returning the result from an action.</span></td>
     </tr>
     <tr>
     <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
     <td id="LC205" class="blob-code blob-code-inner js-file-line"><span class="pl-c">     */</span></td>
    </tr>
    <tr>
    <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
    <td id="LC206" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">callbackFromNative</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">callbackId</span>, <span class="pl-smi">isSuccess</span>, <span class="pl-smi">status</span>, <span class="pl-smi">args</span>, <span class="pl-smi">keepCallback</span>) {</td>
</tr>
<tr>
<td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
    <td id="LC207" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">try</span> {</td>
</tr>
<tr>
<td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
    <td id="LC208" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> callback <span class="pl-k">=</span> <span class="pl-smi">cordova</span>.<span class="pl-smi">callbacks</span>[callbackId];</td>
</tr>
<tr>
<td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
    <td id="LC209" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (callback) {</td>
</tr>
<tr>
<td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
    <td id="LC210" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (isSuccess <span class="pl-k">&amp;&amp;</span> status <span class="pl-k">==</span> <span class="pl-smi">cordova</span>.<span class="pl-smi">callbackStatus</span>.<span class="pl-c1">OK</span>) {</td>
</tr>
<tr>
<td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
    <td id="LC211" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">callback</span>.<span class="pl-smi">success</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">callback</span>.<span class="pl-smi">success</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">null</span>, args);</td>
</tr>
<tr>
<td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
    <td id="LC212" class="blob-code blob-code-inner js-file-line">                } <span class="pl-k">else</span> <span class="pl-k">if</span> (<span class="pl-k">!</span>isSuccess) {</td>
</tr>
<tr>
<td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
    <td id="LC213" class="blob-code blob-code-inner js-file-line">                    <span class="pl-smi">callback</span>.<span class="pl-smi">fail</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-smi">callback</span>.<span class="pl-smi">fail</span>.<span class="pl-c1">apply</span>(<span class="pl-c1">null</span>, args);</td>
</tr>
<tr>
<td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
    <td id="LC214" class="blob-code blob-code-inner js-file-line">                }</td>
</tr>
<tr>
<td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
    <td id="LC215" class="blob-code blob-code-inner js-file-line">                <span class="pl-c">/*</span></td>
     </tr>
     <tr>
     <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
     <td id="LC216" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                else</span></td>
     </tr>
     <tr>
     <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
     <td id="LC217" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                    Note, this case is intentionally not caught.</span></td>
     </tr>
     <tr>
     <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
     <td id="LC218" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                    this can happen if isSuccess is true, but callbackStatus is NO_RESULT</span></td>
     </tr>
     <tr>
     <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
     <td id="LC219" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                    which is used to remove a callback from the list without calling the callbacks</span></td>
     </tr>
     <tr>
     <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
     <td id="LC220" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                    typically keepCallback is false in this case</span></td>
     </tr>
     <tr>
     <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
     <td id="LC221" class="blob-code blob-code-inner js-file-line"><span class="pl-c">                */</span></td>
    </tr>
    <tr>
    <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
    <td id="LC222" class="blob-code blob-code-inner js-file-line">                <span class="pl-c"><span class="pl-c">//</span> Clear callback if not expecting any more results</span></td>
    </tr>
    <tr>
    <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
    <td id="LC223" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">if</span> (<span class="pl-k">!</span>keepCallback) {</td>
</tr>
<tr>
<td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
    <td id="LC224" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">delete</span> <span class="pl-smi">cordova</span>.<span class="pl-smi">callbacks</span>[callbackId];</td>
</tr>
<tr>
<td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
    <td id="LC225" class="blob-code blob-code-inner js-file-line">                }</td>
</tr>
<tr>
<td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
    <td id="LC226" class="blob-code blob-code-inner js-file-line">            }</td>
</tr>
<tr>
<td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
    <td id="LC227" class="blob-code blob-code-inner js-file-line">        }</td>
</tr>
<tr>
<td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
    <td id="LC228" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">catch</span> (err) {</td>
</tr>
<tr>
<td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
    <td id="LC229" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> msg <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Error in <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> (isSuccess <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Success<span class="pl-pds">&quot;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&quot;</span>Error<span class="pl-pds">&quot;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> callbackId: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> callbackId <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&quot;</span> : <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> err;</td>
</tr>
<tr>
<td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
    <td id="LC230" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">console</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">console</span>.<span class="pl-smi">log</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-en">console</span>.<span class="pl-c1">log</span>(msg);</td>
</tr>
<tr>
<td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
    <td id="LC231" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">cordova</span>.<span class="pl-en">fireWindowEvent</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>cordovacallbackerror<span class="pl-pds">&quot;</span></span>, { <span class="pl-s"><span class="pl-pds">&#39;</span>message<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> msg });</td>
</tr>
<tr>
<td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
    <td id="LC232" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">throw</span> err;</td>
</tr>
<tr>
<td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
    <td id="LC233" class="blob-code blob-code-inner js-file-line">        }</td>
</tr>
<tr>
<td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
    <td id="LC234" class="blob-code blob-code-inner js-file-line">    },</td>
</tr>
<tr>
<td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
    <td id="LC235" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">addConstructor</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">func</span>) {</td>
</tr>
<tr>
<td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
    <td id="LC236" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">channel</span>.<span class="pl-smi">onCordovaReady</span>.<span class="pl-en">subscribe</span>(<span class="pl-k">function</span>() {</td>
</tr>
<tr>
<td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
    <td id="LC237" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">try</span> {</td>
</tr>
<tr>
<td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
    <td id="LC238" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">func</span>();</td>
</tr>
<tr>
<td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
    <td id="LC239" class="blob-code blob-code-inner js-file-line">            } <span class="pl-k">catch</span>(e) {</td>
</tr>
<tr>
<td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
    <td id="LC240" class="blob-code blob-code-inner js-file-line">                <span class="pl-en">console</span>.<span class="pl-c1">log</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>Failed to run constructor: <span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> e);</td>
</tr>
<tr>
<td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
    <td id="LC241" class="blob-code blob-code-inner js-file-line">            }</td>
</tr>
<tr>
<td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
    <td id="LC242" class="blob-code blob-code-inner js-file-line">        });</td>
</tr>
<tr>
<td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
    <td id="LC243" class="blob-code blob-code-inner js-file-line">    }</td>
</tr>
<tr>
<td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
    <td id="LC244" class="blob-code blob-code-inner js-file-line">};</td>
</tr>
<tr>
<td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
    <td id="LC245" class="blob-code blob-code-inner js-file-line">
    </td>
    </tr>
    <tr>
    <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
    <td id="LC246" class="blob-code blob-code-inner js-file-line">
    </td>
    </tr>
    <tr>
    <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
    <td id="LC247" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">module</span>.<span class="pl-smi">exports</span> <span class="pl-k">=</span> cordova;</td>
</tr>
</table>

</div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
<button type="submit" class="btn">Go</button>
    </form></div>


    </div>
    <div class="modal-backdrop js-touch-events"></div>
    </div>

    </div>
    </div>

    </div>

    <div class="container site-footer-container">
    <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
    <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
<li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
    <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
    <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
    <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
    <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
    <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
    </a>
    <ul class="site-footer-links">
    <li>&copy; 2017 <span title="0.07698s from github-fe153-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
<li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
    <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
    <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
    <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
    <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
    </div>
    </div>





    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
    <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
</div>


<script crossorigin="anonymous" integrity="sha256-ikMY/+oJoM24IUt2zykmufagztMYoxe+1BnbGSFMaQ0=" src="https://assets-cdn.github.com/assets/compat-8a4318ffea09a0cdb8214b76cf2926b9f6a0ced318a317bed419db19214c690d.js"></script>
    <script crossorigin="anonymous" integrity="sha256-bRCeda2EcbpBUIJybADDX7kpzquXUIJJKDXxHsqMB9k=" src="https://assets-cdn.github.com/assets/frameworks-6d109e75ad8471ba415082726c00c35fb929ceab975082492835f11eca8c07d9.js"></script>
    <script async="async" crossorigin="anonymous" integrity="sha256-cAD7i5UE1qGJqb5QSGuw4DxjDQQQQN3+6GrnkYT++TM=" src="https://assets-cdn.github.com/assets/github-7000fb8b9504d6a189a9be50486bb0e03c630d041040ddfee86ae79184fef933.js"></script>




    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
<span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
</div>
<div class="facebox" id="facebox" style="display:none;">
    <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
    <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    </div>
    </div>


    </body>
    </html>

