/*
 * ==========================================================================================
 *  Guro Documentation JavaScript
 *  File: docs/javascripts/extra.js
 *
 *  Purpose:
 *      Provides safe progressive enhancements for the Guro MkDocs Material documentation site.
 *      The script avoids external dependencies, analytics, cookies, popups, and visible path metadata.
 *
 *  Features:
 *      - Reading progress bar
 *      - Scroll-to-top control
 *      - Page link and print buttons
 *      - Heading link copy buttons
 *      - Large-table filtering
 *      - Code-block language labels
 *      - Code-block expand/collapse for long examples
 *      - API reference filtering and expand/collapse controls
 *      - API reference type badges
 *      - External-link hardening
 *      - Active table-of-contents highlighting
 *      - Keyboard focus mode
 *      - MkDocs Material instant-navigation compatibility
 * ==========================================================================================
 */

(function () {
	"use strict";

	const GuroDocs = {
		config: {
			scrollTopId: "guro-scroll-top",
			pageToolsId: "guro-page-tools",
			progressId: "guro-reading-progress",
			tableFilterClass: "guro-table-filter",
			headingLinkClass: "guro-heading-link",
			codeLabelClass: "guro-code-label",
			codeToggleClass: "guro-code-toggle",
			initializedAttribute: "data-guro-enhanced",
			navScrollKey: "guro-docs-nav-scroll",
			maxCollapsedCodeHeight: 420,
			largeTableMinimumRows: 8,
			headingSelector: ".md-typeset h2[id], .md-typeset h3[id], .md-typeset h4[id]",
			contentSelector: ".md-content__inner",
			navSelector: ".md-nav--primary .md-nav__list",
			tocSelector: ".md-nav--secondary",
			tableSelector: ".md-typeset table:not([data-guro-no-filter])",
			codeSelector: ".md-typeset pre > code",
			apiObjectSelector:
				".doc.doc-object, .doc-class, .doc-function, .doc-method, .doc-attribute, .doc-property"
		},

		state: {
			scrollTicking: false,
			resizeTicking: false
		},

		init: function () {
			if (document.documentElement.getAttribute(this.config.initializedAttribute) === "true") {
				return;
			}

			document.documentElement.setAttribute(this.config.initializedAttribute, "true");

			this.removeLegacyPathMetadata();
			this.enhanceExternalLinks();
			this.customizeSearch();
			this.addReadingProgress();
			this.addScrollTopButton();
			this.addPageTools();
			this.addHeadingLinks();
			this.addTableFilters();
			this.addCodeLabels();
			this.addCodeToggles();
			this.restoreNavigationScroll();
			this.enhanceKeyboardFocus();
			this.enhanceApiReference();
			this.addApiTools();
			this.enhanceTocProgress();
			this.initializeMermaid();
			this.bindLifecycleEvents();

			this.updateReadingProgress();
			this.updateScrollTopVisibility();
			this.updateTocProgress();
		},

		initializeMermaid: function () {
			if (typeof mermaid === "undefined" || !mermaid || typeof mermaid.initialize !== "function") {
				return;
			}

			mermaid.initialize({
				startOnLoad: false,
				theme: "dark",
				securityLevel: "strict"
			});

			if (typeof mermaid.run === "function") {
				mermaid.run({ querySelector: ".mermaid" }).catch(function () {
					return;
				});
			}
		},

		bindLifecycleEvents: function () {
			const self = this;

			window.addEventListener("scroll", function () {
				if (!self.state.scrollTicking) {
					window.requestAnimationFrame(function () {
						self.updateReadingProgress();
						self.updateScrollTopVisibility();
						self.updateTocProgress();
						self.state.scrollTicking = false;
					});

					self.state.scrollTicking = true;
				}
			}, { passive: true });

			window.addEventListener("resize", function () {
				if (!self.state.resizeTicking) {
					window.requestAnimationFrame(function () {
						self.updateReadingProgress();
						self.updateTocProgress();
						self.state.resizeTicking = false;
					});

					self.state.resizeTicking = true;
				}
			}, { passive: true });

			document.addEventListener("click", function (event) {
				self.handleDocumentClick(event);
			});

			document.addEventListener("keydown", function (event) {
				self.handleKeyboardShortcuts(event);
			});

			window.addEventListener("beforeunload", function () {
				self.saveNavigationScroll();
			});

			if (typeof document$ !== "undefined" && document$ && typeof document$.subscribe === "function") {
				document$.subscribe(function () {
					document.documentElement.removeAttribute(self.config.initializedAttribute);

					setTimeout(function () {
						self.init();
					}, 25);
				});
			}
		},

		removeLegacyPathMetadata: function () {
			const selectors = [
				".guro-page-path",
				".project-page-path",
				".buddy-page-path",
				".cutey-page-path",
				".sake-page-path",
				"[data-page-path]",
				"[data-doc-path]"
			];

			selectors.forEach(function (selector) {
				document.querySelectorAll(selector).forEach(function (element) {
					element.remove();
				});
			});

			document.querySelectorAll(".md-content__inner div, .md-content__inner p, .md-content__inner span").forEach(function (element) {
				const text = (element.textContent || "").trim();

				if (/^(Docs path|Page path|Source path|File path|Path):\s*/i.test(text)) {
					element.remove();
				}
			});
		},

		handleDocumentClick: function (event) {
			const target = event.target;

			if (!target) {
				return;
			}

			if (target.closest && target.closest("#" + this.config.scrollTopId)) {
				event.preventDefault();
				this.scrollToTop();
				return;
			}

			if (target.closest && target.closest("[data-guro-copy-heading]")) {
				event.preventDefault();
				this.copyHeadingLink(target.closest("[data-guro-copy-heading]"));
				return;
			}

			if (target.closest && target.closest("[data-guro-copy-page]")) {
				event.preventDefault();
				this.copyPageLink(target.closest("[data-guro-copy-page]"));
				return;
			}

			if (target.closest && target.closest("[data-guro-print-page]")) {
				event.preventDefault();
				window.print();
				return;
			}

			if (target.closest && target.closest("[data-guro-toggle-code]")) {
				event.preventDefault();
				this.toggleCodeBlock(target.closest("[data-guro-toggle-code]"));
				return;
			}

			if (target.closest && target.closest("[data-guro-api-expand]")) {
				event.preventDefault();
				this.setApiDetailsState(true);
				return;
			}

			if (target.closest && target.closest("[data-guro-api-collapse]")) {
				event.preventDefault();
				this.setApiDetailsState(false);
				return;
			}

			if (target.closest && target.closest("[data-guro-api-clear]")) {
				event.preventDefault();
				this.clearApiFilter();
			}
		},

		handleKeyboardShortcuts: function (event) {
			const key = (event.key || "").toLowerCase();

			if (event.altKey && key === "t") {
				event.preventDefault();
				this.scrollToTop();
			}

			if (event.altKey && key === "p") {
				event.preventDefault();
				window.print();
			}

			if (event.altKey && key === "l") {
				event.preventDefault();
				this.copyCurrentPageToClipboard();
			}

			if (event.altKey && key === "f") {
				const apiSearch = document.getElementById("guro-api-search");

				if (apiSearch) {
					event.preventDefault();
					apiSearch.focus();
				}
			}
		},

		enhanceExternalLinks: function () {
			const links = document.querySelectorAll(".md-typeset a[href]");
			const currentHost = window.location.host;

			links.forEach(function (link) {
				try {
					const url = new URL(link.href, window.location.href);

					if (url.host && url.host !== currentHost) {
						link.setAttribute("target", "_blank");
						link.setAttribute("rel", "noopener noreferrer");
						link.classList.add("guro-external-link");

						if (!link.querySelector(".guro-external-indicator")) {
							const indicator = document.createElement("span");
							indicator.className = "guro-external-indicator";
							indicator.setAttribute("aria-hidden", "true");
							indicator.textContent = " ↗";
							link.appendChild(indicator);
						}
					}
				} catch (error) {
					return;
				}
			});
		},

		customizeSearch: function () {
			const searchInputs = document.querySelectorAll("input.md-search__input");

			searchInputs.forEach(function (input) {
				input.setAttribute("placeholder", "Search Guro docs...");
				input.setAttribute("aria-label", "Search Guro documentation");
			});
		},

		addReadingProgress: function () {
			if (document.getElementById(this.config.progressId)) {
				return;
			}

			const progress = document.createElement("div");
			progress.id = this.config.progressId;
			progress.setAttribute("aria-hidden", "true");
			progress.innerHTML = "<span></span>";

			document.body.appendChild(progress);
		},

		updateReadingProgress: function () {
			const progress = document.querySelector("#" + this.config.progressId + " span");

			if (!progress) {
				return;
			}

			const content = document.querySelector(this.config.contentSelector);
			const scrollTop = window.scrollY || document.documentElement.scrollTop;

			if (content) {
				const rect = content.getBoundingClientRect();
				const contentTop = rect.top + scrollTop;
				const contentHeight = Math.max(content.offsetHeight, 1);
				const contentScroll = Math.min(Math.max(scrollTop - contentTop, 0), contentHeight);
				const percent = Math.min(Math.max(contentScroll / contentHeight, 0), 1);

				progress.style.width = (percent * 100).toFixed(2) + "%";
				return;
			}

			let maxScroll = document.documentElement.scrollHeight - window.innerHeight;

			if (maxScroll <= 0) {
				maxScroll = 1;
			}

			progress.style.width = Math.min(Math.max((scrollTop / maxScroll) * 100, 0), 100).toFixed(2) + "%";
		},

		addScrollTopButton: function () {
			if (document.getElementById(this.config.scrollTopId)) {
				return;
			}

			const button = document.createElement("button");
			button.id = this.config.scrollTopId;
			button.type = "button";
			button.className = "guro-scroll-top";
			button.setAttribute("aria-label", "Scroll to top");
			button.setAttribute("title", "Scroll to top (Alt+T)");
			button.innerHTML = "↑";

			document.body.appendChild(button);
		},

		updateScrollTopVisibility: function () {
			const button = document.getElementById(this.config.scrollTopId);

			if (!button) {
				return;
			}

			if ((window.scrollY || document.documentElement.scrollTop) > 420) {
				button.classList.add("is-visible");
			} else {
				button.classList.remove("is-visible");
			}
		},

		scrollToTop: function () {
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		},

		addPageTools: function () {
			if (document.getElementById(this.config.pageToolsId)) {
				return;
			}

			const content = document.querySelector(this.config.contentSelector);

			if (!content) {
				return;
			}

			const title = content.querySelector("h1");

			if (!title) {
				return;
			}

			const tools = document.createElement("div");
			tools.id = this.config.pageToolsId;
			tools.className = "guro-page-tools";
			tools.innerHTML = [
				"<button type=\"button\" data-guro-copy-page title=\"Copy page link\" aria-label=\"Copy page link\">Copy link</button>",
				"<button type=\"button\" data-guro-print-page title=\"Print page\" aria-label=\"Print page\">Print</button>"
			].join("");

			title.insertAdjacentElement("afterend", tools);
		},

		copyPageLink: function (button) {
			this.copyTextToClipboard(window.location.href, button, "Copied", "Copy link");
		},

		copyCurrentPageToClipboard: function () {
			const button = document.querySelector("[data-guro-copy-page]");
			this.copyTextToClipboard(window.location.href, button, "Copied", "Copy link");
		},

		addHeadingLinks: function () {
			const headings = document.querySelectorAll(this.config.headingSelector);

			headings.forEach(function (heading) {
				if (heading.querySelector("." + GuroDocs.config.headingLinkClass)) {
					return;
				}

				const button = document.createElement("button");
				button.type = "button";
				button.className = GuroDocs.config.headingLinkClass;
				button.setAttribute("data-guro-copy-heading", heading.id);
				button.setAttribute("aria-label", "Copy link to " + heading.textContent.trim());
				button.setAttribute("title", "Copy section link");
				button.textContent = "§";

				heading.appendChild(button);
			});
		},

		copyHeadingLink: function (button) {
			const id = button.getAttribute("data-guro-copy-heading");

			if (!id) {
				return;
			}

			const url = window.location.origin + window.location.pathname + window.location.search + "#" + encodeURIComponent(id);
			this.copyTextToClipboard(url, button, "Copied", "§");
		},

		copyTextToClipboard: function (text, button, successText, defaultText) {
			const updateButton = function () {
				if (!button) {
					return;
				}

				const previous = button.textContent;
				button.textContent = successText || "Copied";

				setTimeout(function () {
					button.textContent = defaultText || previous;
				}, 1400);
			};

			if (navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
				navigator.clipboard.writeText(text).then(updateButton).catch(function () {
					GuroDocs.fallbackCopyText(text);
					updateButton();
				});

				return;
			}

			this.fallbackCopyText(text);
			updateButton();
		},

		fallbackCopyText: function (text) {
			const textarea = document.createElement("textarea");
			textarea.value = text;
			textarea.setAttribute("readonly", "readonly");
			textarea.style.position = "fixed";
			textarea.style.top = "-9999px";
			textarea.style.left = "-9999px";

			document.body.appendChild(textarea);
			textarea.select();

			try {
				document.execCommand("copy");
			} catch (error) {
				return;
			} finally {
				document.body.removeChild(textarea);
			}
		},

		addTableFilters: function () {
			const tables = document.querySelectorAll(this.config.tableSelector);

			tables.forEach(function (table, index) {
				if (table.getAttribute("data-guro-filtered") === "true") {
					return;
				}

				const tbody = table.querySelector("tbody");

				if (!tbody) {
					return;
				}

				const rows = Array.prototype.slice.call(tbody.querySelectorAll("tr"));

				if (rows.length < GuroDocs.config.largeTableMinimumRows) {
					return;
				}

				table.setAttribute("data-guro-filtered", "true");

				const wrapper = document.createElement("div");
				wrapper.className = "guro-table-tools";

				const input = document.createElement("input");
				input.type = "search";
				input.className = GuroDocs.config.tableFilterClass;
				input.placeholder = "Filter table...";
				input.setAttribute("aria-label", "Filter table " + (index + 1));

				const count = document.createElement("span");
				count.className = "guro-table-count";
				count.textContent = rows.length + " rows";

				wrapper.appendChild(input);
				wrapper.appendChild(count);

				table.parentNode.insertBefore(wrapper, table);

				input.addEventListener("input", function () {
					GuroDocs.filterTable(table, input.value, count);
				});
			});
		},

		filterTable: function (table, query, countElement) {
			const normalizedQuery = (query || "").toLowerCase().trim();
			const rows = Array.prototype.slice.call(table.querySelectorAll("tbody tr"));
			let visible = 0;

			rows.forEach(function (row) {
				const text = row.textContent.toLowerCase();

				if (!normalizedQuery || text.indexOf(normalizedQuery) !== -1) {
					row.style.display = "";
					visible += 1;
				} else {
					row.style.display = "none";
				}
			});

			if (countElement) {
				countElement.textContent = visible + " / " + rows.length + " rows";
			}
		},

		addCodeLabels: function () {
			const codeBlocks = document.querySelectorAll(this.config.codeSelector);

			codeBlocks.forEach(function (code) {
				const pre = code.parentElement;

				if (!pre || pre.getAttribute("data-guro-labeled") === "true") {
					return;
				}

				const language = GuroDocs.detectCodeLanguage(code);

				if (!language) {
					return;
				}

				pre.setAttribute("data-guro-labeled", "true");

				const label = document.createElement("div");
				label.className = GuroDocs.config.codeLabelClass;
				label.textContent = language;

				pre.insertAdjacentElement("beforebegin", label);
			});
		},

		detectCodeLanguage: function (code) {
			const className = code.className || "";
			const match = className.match(/language-([a-zA-Z0-9_+-]+)/);

			if (match && match[1]) {
				return this.formatLanguageName(match[1]);
			}

			const text = code.textContent.trim();

			if (/^site_name:|^theme:|^plugins:|^nav:/m.test(text)) {
				return "YAML";
			}

			if (/def\s+\w+\(|class\s+\w+/.test(text)) {
				return "Python";
			}

			if (/^mkdocs\s|^python\s|-m\s+|^\.\w+\\Scripts\\/m.test(text)) {
				return "Shell";
			}

			if (/^\{[\s\S]*\}$/.test(text)) {
				return "JSON";
			}

			if (/^#\s|^##\s|```/.test(text)) {
				return "Markdown";
			}

			return "";
		},

		formatLanguageName: function (language) {
			const map = {
				py: "Python",
				python: "Python",
				ps1: "PowerShell",
				powershell: "PowerShell",
				bash: "Shell",
				sh: "Shell",
				shell: "Shell",
				yaml: "YAML",
				yml: "YAML",
				json: "JSON",
				md: "Markdown",
				markdown: "Markdown",
				html: "HTML",
				css: "CSS",
				js: "JavaScript",
				javascript: "JavaScript"
			};

			const key = String(language || "").toLowerCase();

			return map[key] || key.toUpperCase();
		},

		addCodeToggles: function () {
			const codeBlocks = document.querySelectorAll(this.config.codeSelector);

			codeBlocks.forEach(function (code) {
				const pre = code.parentElement;

				if (!pre || pre.getAttribute("data-guro-toggle-ready") === "true") {
					return;
				}

				pre.setAttribute("data-guro-toggle-ready", "true");

				if (pre.scrollHeight <= GuroDocs.config.maxCollapsedCodeHeight + 80) {
					return;
				}

				pre.classList.add("guro-code-collapsed");
				pre.style.maxHeight = GuroDocs.config.maxCollapsedCodeHeight + "px";

				const button = document.createElement("button");
				button.type = "button";
				button.className = GuroDocs.config.codeToggleClass;
				button.setAttribute("data-guro-toggle-code", "collapsed");
				button.textContent = "Show full code";

				pre.insertAdjacentElement("afterend", button);
			});
		},

		toggleCodeBlock: function (button) {
			const pre = button.previousElementSibling;

			if (!pre || pre.tagName.toLowerCase() !== "pre") {
				return;
			}

			const state = button.getAttribute("data-guro-toggle-code");

			if (state === "collapsed") {
				pre.classList.remove("guro-code-collapsed");
				pre.style.maxHeight = "";
				button.setAttribute("data-guro-toggle-code", "expanded");
				button.textContent = "Collapse code";
			} else {
				pre.classList.add("guro-code-collapsed");
				pre.style.maxHeight = this.config.maxCollapsedCodeHeight + "px";
				button.setAttribute("data-guro-toggle-code", "collapsed");
				button.textContent = "Show full code";
			}
		},

		saveNavigationScroll: function () {
			const nav = document.querySelector(this.config.navSelector);

			if (!nav) {
				return;
			}

			try {
				window.sessionStorage.setItem(this.config.navScrollKey, String(nav.scrollTop || 0));
			} catch (error) {
				return;
			}
		},

		restoreNavigationScroll: function () {
			const nav = document.querySelector(this.config.navSelector);

			if (!nav) {
				return;
			}

			try {
				const value = window.sessionStorage.getItem(this.config.navScrollKey);

				if (value !== null) {
					nav.scrollTop = parseInt(value, 10) || 0;
				}
			} catch (error) {
				return;
			}
		},

		enhanceKeyboardFocus: function () {
			document.body.addEventListener("keydown", function (event) {
				if (event.key === "Tab") {
					document.body.classList.add("guro-keyboard-mode");
				}
			});

			document.body.addEventListener("mousedown", function () {
				document.body.classList.remove("guro-keyboard-mode");
			});
		},

		enhanceApiReference: function () {
			const apiContainers = document.querySelectorAll(this.config.apiObjectSelector);

			apiContainers.forEach(function (container) {
				if (container.getAttribute("data-guro-api-enhanced") === "true") {
					return;
				}

				container.setAttribute("data-guro-api-enhanced", "true");

				const heading = container.querySelector("h2, h3, h4, h5");

				if (!heading || heading.querySelector(".guro-api-badge")) {
					return;
				}

				const badge = document.createElement("span");
				badge.className = "guro-api-badge";

				if (container.className.indexOf("doc-class") !== -1) {
					badge.textContent = "class";
				} else if (container.className.indexOf("doc-method") !== -1) {
					badge.textContent = "method";
				} else if (container.className.indexOf("doc-function") !== -1) {
					badge.textContent = "function";
				} else if (container.className.indexOf("doc-attribute") !== -1) {
					badge.textContent = "attribute";
				} else if (container.className.indexOf("doc-property") !== -1) {
					badge.textContent = "property";
				} else {
					badge.textContent = "api";
				}

				heading.appendChild(badge);
			});
		},

		addApiTools: function () {
			const content = document.querySelector(this.config.contentSelector);

			if (!content || content.querySelector(".guro-api-tools")) {
				return;
			}

			const apiObjects = content.querySelectorAll(this.config.apiObjectSelector);
			const detailsBlocks = content.querySelectorAll("details");

			if (apiObjects.length === 0 && detailsBlocks.length === 0) {
				return;
			}

			const firstHeading = content.querySelector("h1");

			if (!firstHeading) {
				return;
			}

			const panel = document.createElement("section");
			panel.className = "guro-api-tools";
			panel.setAttribute("aria-label", "API tools");

			panel.innerHTML = [
				"<h2 class=\"guro-api-tools-title\">API Tools</h2>",
				"<label class=\"guro-api-search-label\" for=\"guro-api-search\">Filter classes, methods, properties, or text</label>",
				"<input id=\"guro-api-search\" class=\"guro-api-search\" type=\"search\" placeholder=\"Filter classes, methods, properties, or text...\" autocomplete=\"off\">",
				"<div class=\"guro-api-tool-buttons\">",
				"<button type=\"button\" class=\"guro-api-tool-button\" data-guro-api-expand>Expand all</button>",
				"<button type=\"button\" class=\"guro-api-tool-button\" data-guro-api-collapse>Collapse all</button>",
				"<button type=\"button\" class=\"guro-api-tool-button\" data-guro-api-clear>Clear filter</button>",
				"</div>",
				"<p class=\"guro-api-filter-status\" aria-live=\"polite\"></p>"
			].join("");

			firstHeading.insertAdjacentElement("afterend", panel);

			const input = panel.querySelector("#guro-api-search");
			const status = panel.querySelector(".guro-api-filter-status");

			if (input) {
				input.addEventListener("input", function () {
					GuroDocs.filterApiObjects(input.value, status);
				});
			}
		},

		filterApiObjects: function (query, statusElement) {
			const normalizedQuery = String(query || "").trim().toLowerCase();
			const content = document.querySelector(this.config.contentSelector);

			if (!content) {
				return;
			}

			const objects = Array.prototype.slice.call(content.querySelectorAll(this.config.apiObjectSelector));

			if (objects.length === 0) {
				if (statusElement) {
					statusElement.textContent = "";
				}

				return;
			}

			let visibleCount = 0;

			objects.forEach(function (object) {
				const text = object.textContent.toLowerCase();

				if (!normalizedQuery || text.indexOf(normalizedQuery) !== -1) {
					object.classList.remove("guro-api-hidden");
					visibleCount += 1;
				} else {
					object.classList.add("guro-api-hidden");
				}
			});

			if (statusElement) {
				statusElement.textContent = normalizedQuery ? visibleCount + " matching API sections" : "";
			}
		},

		setApiDetailsState: function (open) {
			const detailsBlocks = document.querySelectorAll(".md-content__inner details");

			detailsBlocks.forEach(function (details) {
				details.open = open;
			});
		},

		clearApiFilter: function () {
			const input = document.getElementById("guro-api-search");
			const status = document.querySelector(".guro-api-filter-status");

			if (!input) {
				return;
			}

			input.value = "";
			this.filterApiObjects("", status);
			input.focus();
		},

		enhanceTocProgress: function () {
			const toc = document.querySelector(this.config.tocSelector);

			if (!toc || toc.getAttribute("data-guro-toc-enhanced") === "true") {
				return;
			}

			toc.setAttribute("data-guro-toc-enhanced", "true");
		},

		updateTocProgress: function () {
			const headings = Array.prototype.slice.call(document.querySelectorAll(this.config.headingSelector));

			if (headings.length === 0) {
				return;
			}

			let activeHeading = headings[0];
			const offset = 120;

			headings.forEach(function (heading) {
				const rect = heading.getBoundingClientRect();

				if (rect.top <= offset) {
					activeHeading = heading;
				}
			});

			const tocLinks = document.querySelectorAll(this.config.tocSelector + " a[href^='#']");
			const activeId = activeHeading ? activeHeading.id : "";

			tocLinks.forEach(function (link) {
				const href = decodeURIComponent((link.getAttribute("href") || "").replace(/^#/, ""));

				if (href === activeId) {
					link.classList.add("guro-toc-active");
				} else {
					link.classList.remove("guro-toc-active");
				}
			});
		}
	};

	function ready(callback) {
		if (document.readyState === "loading") {
			document.addEventListener("DOMContentLoaded", callback);
		} else {
			callback();
		}
	}

	ready(function () {
		GuroDocs.init();
	});
})();
