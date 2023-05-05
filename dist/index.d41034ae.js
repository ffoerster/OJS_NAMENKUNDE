(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function n(t){if(t.ep)return;t.ep=!0;const e=r(t);fetch(t.href,e)}})();console.log("Hello World");const l=async()=>{const s=document.createElement("div");s.id="scrollToTop",document.body.appendChild(s)},o=()=>{document.getElementById("scrollToTop").addEventListener("click",()=>{window.scrollTo(0,0)}),window.addEventListener("scroll",()=>{const s=document.getElementById("scrollToTop");window.pageYOffset>0?s.classList.add("is-visible"):s.classList.remove("is-visible")})};window.addEventListener("load",()=>{l().then(()=>{o()})});document.querySelector("#app").innerHTML=`
<html lang="de-DE" xml:lang="de-DE"><script type="module" src="chrome-extension://jdkknkkbebbapilgoeccciglkfbmbnfm/hook.js"><\/script><head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>
		
							| Namenkundliche Informationen
			</title>

	
<meta name="generator" content="Open Journal Systems 3.3.0.13">
<script>
console.log('Hello World');

// create a div on load
const scrollToTop = async () => {
    const div = document.createElement('div');
    div.id = 'scrollToTop';
    document.body.appendChild(div);
}

const scrollToTopEvent = () => {
    document.getElementById('scrollToTop').addEventListener('click', () => {
        window.scrollTo(0, 0);
    });
    window.addEventListener('scroll', () => {
        const div = document.getElementById('scrollToTop');
        if (window.pageYOffset > 0) {
            div.classList.add('is-visible');
        } else {
            div.classList.remove('is-visible');
        }
    });
}

// add event listener
window.addEventListener('load', () => {
    scrollToTop().then(() => {
        scrollToTopEvent();
    });
});

// show scrollToTop once user has reached end of page


// scroll to top on click



<\/script>
	<link rel="stylesheet" href="https://journals.qucosa.de/ni/$$$call$$$/page/page/css?name=stylesheet" type="text/css"><link rel="stylesheet" href="https://journals.qucosa.de/ni/$$$call$$$/page/page/css?name=font" type="text/css"><link rel="stylesheet" href="https://journals.qucosa.de/lib/pkp/styles/fontawesome/fontawesome.css?v=3.3.0.13" type="text/css"><link rel="stylesheet" href="https://journals.qucosa.de/public/journals/1/styleSheet.css?d=2022-12-08+17%3A15%3A58" type="text/css">
</head>
<body class="pkp_page_issue pkp_op_current has_site_logo" dir="ltr" cz-shortcut-listen="true">

	<div class="pkp_structure_page">

				<header class="pkp_structure_head" id="headerNavigationContainer" role="banner">
						 <nav class="cmp_skip_to_content" aria-label="Springe zu Inhalt-Links">
	<a href="#pkp_content_main">Zum Inhalt springen</a>
	<a href="#siteNav">Zur Hauptnavigation springen</a>
		<a href="#pkp_content_footer">Zur Fu\xDFzeile springen</a>
</nav>

			<div class="pkp_head_wrapper">

				<div class="pkp_site_name_wrapper">
					<button class="pkp_site_nav_toggle">
						<span>Open Menu</span>
					</button>
										<div class="pkp_site_name">
																<a href="						https://journals.qucosa.de/ni/index
					" class="is_img">
							<img src="https://journals.qucosa.de/public/journals/1/pageHeaderLogoImage_de_DE.png" width="330" height="100" alt="Logo">
						</a>
										</div>
				</div>

				
				<nav class="pkp_site_nav_menu" aria-label="Website-Navigation">
					<a id="siteNav"></a>
					<div class="pkp_navigation_primary_row">
						<div class="pkp_navigation_primary_wrapper">
																				<ul id="navigationPrimary" class="pkp_navigation_primary pkp_nav_list">
								<li class="">
				<a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="pkpDropdown0">
					\xDCber NI
				</a>
									<ul class="dropdown-menu" aria-labelledby="pkpDropdown0">
																					<li class="">
									<a href="https://journals.qucosa.de/ni/about">
										\xDCber die Zeitschrift
									</a>
								</li>
																												<li class="">
									<a href="https://journals.qucosa.de/ni/about/editorialTeam">
										Wissenschaftlicher Beirat
									</a>
								</li>
																												<li class="">
									<a href="https://journals.qucosa.de/ni/about/privacy">
										Schutz personenbezogener Daten
									</a>
								</li>
																												<li class="">
									<a href="https://journals.qucosa.de/ni/about/contact">
										Kontakt
									</a>
								</li>
																												<li class="">
									<a href="https://journals.qucosa.de/ni/about/imprint">
										Impressum
									</a>
								</li>
																		</ul>
							</li>
								<li class="">
				<a href="https://journals.qucosa.de/ni/issue/current">
					Aktuelle Ausgabe
				</a>
							</li>
								<li class="">
				<a href="https://journals.qucosa.de/ni/issue/archive">
					Archiv
				</a>
							</li>
								<li class="">
				<a href="https://journals.qucosa.de/ni/information/authors">
					F\xFCr AutorInnen
				</a>
							</li>
								<li class="">
				<a href="https://journals.qucosa.de/ni/catalog/category/rezensionen">
					Rezensionen
				</a>
							</li>
										</ul>

				

																						<div class="pkp_navigation_search_wrapper">
									<a href="https://journals.qucosa.de/ni/search" class="pkp_search pkp_search_desktop">
										<span class="fa fa-search" aria-hidden="true"></span>
										Suchen
									</a>
								</div>
													</div>
					</div>
					<div class="pkp_navigation_user_wrapper" id="navigationUserWrapper">
							<ul id="navigationUser" class="pkp_navigation_user pkp_nav_list">
																						<li class="profile">
				<a href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="pkpDropdown1">
					ffoerster
<span class="task_count">
	0
</span>

				</a>
									<ul class="dropdown-menu" aria-labelledby="pkpDropdown1">
																					<li class="profile">
									<a href="https://journals.qucosa.de/ni/submissions">
										Dashboard
<span class="task_count">
	0
</span>

									</a>
								</li>
																												<li class="profile">
									<a href="https://journals.qucosa.de/ni/user/profile">
										Profil ansehen
									</a>
								</li>
																																									<li class="profile">
									<a href="https://journals.qucosa.de/ni/login/signOut">
										Ausloggen
									</a>
								</li>
																		</ul>
							</li>
			</ul>

					</div>
				</nav>
			</div><!-- .pkp_head_wrapper -->
		</header><!-- .pkp_structure_head -->

						<div class="pkp_structure_content has_sidebar">
			<div class="pkp_structure_main" role="main">
				<a id="pkp_content_main"></a>

<div class="page page_issue">

				<nav class="cmp_breadcrumbs" role="navigation" aria-label="Sie sind hier:">
	<ol>
		<li>
			<a href="https://journals.qucosa.de/ni/index">
				Home
			</a>
			<span class="separator">/</span>
		</li>
		<li>
			<a href="https://journals.qucosa.de/ni/issue/archive">
				Archiv
			</a>
			<span class="separator">/</span>
		</li>
		<li class="current" aria-current="page">
			<span aria-current="page">
									Keine aktuelle Ausgabe
							</span>
		</li>
	</ol>
</nav>
		<h1>
			Keine aktuelle Ausgabe
		</h1>
		<div class="cmp_notification warning">
			Von der Zeitschrift ist keine Ausgabe erschienen.
	</div>

		</div>

	</div><!-- pkp_structure_main -->

									<div class="pkp_structure_sidebar left" role="complementary" aria-label="Seitenleiste">
				<div class="pkp_block block_language">
	<h2 class="title">
		Sprache
	</h2>

	<div class="content">
		<ul>
							<li class="locale_de_DE current" lang="de-DE">
					<a href="https://journals.qucosa.de/ni/user/setLocale/de_DE?source=%2Fni%2Fissue%2Fcurrent">
						Deutsch
					</a>
				</li>
							<li class="locale_en_US" lang="en-US">
					<a href="https://journals.qucosa.de/ni/user/setLocale/en_US?source=%2Fni%2Fissue%2Fcurrent">
						English
					</a>
				</li>
							<li class="locale_fr_FR" lang="fr-FR">
					<a href="https://journals.qucosa.de/ni/user/setLocale/fr_FR?source=%2Fni%2Fissue%2Fcurrent">
						Fran\xE7ais (France)
					</a>
				</li>
					</ul>
	</div>
</div><!-- .block_language -->

			</div><!-- pkp_sidebar.left -->
			</div><!-- pkp_structure_content -->

<div class="pkp_structure_footer_wrapper" role="contentinfo">
	<a id="pkp_content_footer"></a>

	<div class="pkp_structure_footer">

					<div class="pkp_footer_content">
				<div class="copyright">
<div id="c744" class="csc-default">
<p>Herausgegeben im Auftrag der Philologischen Fakult\xE4t der Universit\xE4t Leipzig</p>
</div>
<div id="c1673" class="csc-default">
<p>F\xFCr diese Internetseiten gilt die&nbsp;<a title="external-link-new-window" href="https://www.uni-leipzig.de/service/datenschutz.html" target="https://www.uni-leipzig.de/service/datenschutz.html">Datenschutzerkl\xE4rung</a>&nbsp;der Universit\xE4t Leipzig.</p>
</div>
<nav id="c1513" class="csc-default">
<ul class="csc-menu csc-menu-def">
<li><a title="Kontakt" href="https://www.namenkundliche-informationen.de/kontakt/">Kontakt</a></li>
<li><a title="Impressum" href="https://www.namenkundliche-informationen.de/statischer-inhalt/impressum/">Impressum</a></li>
</ul>
</nav></div>
<div class="adress">
<div id="c745" class="csc-default">
<p>Deutsche Gesellschaft f\xFCr Namenforschung e.V.<br>c/o Universit\xE4t Leipzig,<br>Namenkundliches Zentrum<br>Beethovenstra\xDFe 15, D-04107 Leipzig</p>
</div>
</div>
<div class="contact">
<div id="c746" class="csc-default">
<p>Telefon:&nbsp;+49 341 97 37 463<br>Telefax:&nbsp;+49 341 97 37 497<br>E-Mail:&nbsp;gfn@uni-leipzig.de</p>
</div>
</div>
			</div>
		
		<div class="pkp_brand_footer" role="complementary">
			<a href="https://journals.qucosa.de/ni/about/aboutThisPublishingSystem">
				<img alt="Mehr Informationen \xFCber dieses Publikationssystem, die Plattform und den Workflow von OJS/PKP." src="https://journals.qucosa.de/templates/images/ojs_brand.png">
			</a>
		</div>
	</div>
</div><!-- pkp_structure_footer_wrapper -->

</div><!-- pkp_structure_page -->

<script src="https://journals.qucosa.de/lib/pkp/lib/vendor/components/jquery/jquery.min.js?v=3.3.0.13" type="text/javascript"><\/script><script src="https://journals.qucosa.de/lib/pkp/lib/vendor/components/jqueryui/jquery-ui.min.js?v=3.3.0.13" type="text/javascript"><\/script><script src="https://journals.qucosa.de/plugins/themes/default/js/lib/popper/popper.js?v=3.3.0.13" type="text/javascript"><\/script><script src="https://journals.qucosa.de/plugins/themes/default/js/lib/bootstrap/util.js?v=3.3.0.13" type="text/javascript"><\/script><script src="https://journals.qucosa.de/plugins/themes/default/js/lib/bootstrap/dropdown.js?v=3.3.0.13" type="text/javascript"><\/script><script src="https://journals.qucosa.de/plugins/themes/default/js/main.js?v=3.3.0.13" type="text/javascript"><\/script>




<div id="scrollToTop"></div></body></html>
`;
