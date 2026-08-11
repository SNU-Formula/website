const root = "/";

const bilingual = (ko, en, className = "") =>
  `<span class="lang lang-ko ${className}">${ko}</span><span class="lang lang-en ${className}">${en}</span>`;

const snuFormulaWordmark = (tone = "") =>
  `<span class="snu-formula-wordmark ${tone}" role="img" aria-label="SNU FORMULA"></span>`;

const headerMarkup = `
  <header class="site-header" data-site-header>
    <a class="brand-link" href="${root}" aria-label="SNU FORMULA home">
      ${snuFormulaWordmark()}
    </a>
    <nav class="desktop-nav" aria-label="Primary navigation">
      <a href="${root}" data-nav="home">${bilingual("HOME", "HOME")}</a>
      <a href="${root}about/" data-nav="about">${bilingual("ABOUT", "ABOUT")}</a>
      <a href="${root}vehicle/" data-nav="vehicle">${bilingual("VEHICLE", "VEHICLE")}</a>
      <a href="${root}team/" data-nav="team">${bilingual("MEMBERS", "MEMBERS")}</a>
      <a href="${root}partners/" data-nav="partners">${bilingual("PARTNERS", "PARTNERS")}</a>
      <a href="${root}join/" data-nav="join">${bilingual("JOIN", "JOIN")}</a>
    </nav>
    <div class="header-actions">
      <div class="language-switch" role="group" aria-label="Language">
        <button type="button" data-set-lang="ko" aria-pressed="true">KO</button>
        <span aria-hidden="true"></span>
        <button type="button" data-set-lang="en" aria-pressed="false">EN</button>
      </div>
      <button class="menu-button" type="button" aria-label="메뉴 열기" aria-expanded="false" data-menu-button data-aria-ko="메뉴 열기" data-aria-en="Open menu">
        <span></span><span></span>
      </button>
    </div>
  </header>
  <div class="mobile-menu" data-mobile-menu aria-hidden="true">
    <div class="mobile-menu-grid" aria-hidden="true"></div>
    <nav aria-label="Mobile navigation">
      <a href="${root}"><span>01</span>${bilingual("HOME", "HOME")}</a>
      <a href="${root}about/"><span>02</span>${bilingual("ABOUT", "ABOUT")}</a>
      <a href="${root}vehicle/"><span>03</span>${bilingual("VEHICLE", "VEHICLE")}</a>
      <a href="${root}team/"><span>04</span>${bilingual("MEMBERS", "MEMBERS")}</a>
      <a href="${root}partners/"><span>05</span>${bilingual("PARTNERS", "PARTNERS")}</a>
      <a href="${root}join/"><span>06</span>${bilingual("JOIN", "JOIN")}</a>
    </nav>
    <div class="mobile-menu-foot">
      <p>SAFETY · DATA · RECORDS · CONTINUITY</p>
      <p>SEOUL NATIONAL UNIVERSITY</p>
    </div>
  </div>
  <div class="scroll-progress" aria-hidden="true"><span data-scroll-progress></span></div>
`;

const footerMarkup = `
  <footer class="site-footer">
    <div class="footer-gridlines" aria-hidden="true"></div>
    <div class="footer-top">
      <a class="footer-logo" href="${root}" aria-label="SNU FORMULA home">
        ${snuFormulaWordmark()}
      </a>
      <p>${bilingual(
        "서울대학교 학생들이 설계하고, 제작하고, 시험하고, 검증하는 Formula Student Team.",
        "A Formula Student team at Seoul National University — designing, building, testing, and validating."
      )}</p>
      <a class="text-link light" href="${root}join/">${bilingual("함께 만들기", "BUILD WITH US")}<span>↗</span></a>
    </div>
    <div class="footer-links">
      <div>
        <span class="footer-label">EXPLORE</span>
        <a href="${root}about/">About</a>
        <a href="${root}vehicle/">Vehicle</a>
        <a href="${root}team/">Members</a>
      </div>
      <div>
        <span class="footer-label">CONNECT</span>
        <a href="${root}partners/">Partners</a>
        <a href="${root}join/">Join</a>
      </div>
      <div class="footer-principles">
        <span class="footer-label">TEAM PRINCIPLES</span>
        <p>SAFETY</p><p>DATA</p><p>RECORDS</p><p>CONTINUITY</p>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 SNU FORMULA</span>
      <span>SEOUL · KOREA</span>
      <a href="#top">${bilingual("맨 위로", "BACK TO TOP")} ↑</a>
    </div>
  </footer>
`;

// Opening logo animation. It plays on the first view of a session and on every
// reload, but not when moving between pages inside the site — clicking through
// the nav should not sit through the logo each time. Reduced-motion visitors
// never see it.
const INTRO_KEY = "snu-formula-intro-played";
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function isReload() {
  const entry = performance.getEntriesByType("navigation")[0];
  if (entry) return entry.type === "reload";
  // Safari < 15 and other stragglers still only expose the legacy API.
  return performance.navigation && performance.navigation.type === 1;
}

function shouldPlayIntro() {
  if (isReload()) return true;
  try {
    return sessionStorage.getItem(INTRO_KEY) !== "1";
  } catch (error) {
    return false;
  }
}

if (!prefersReducedMotion && shouldPlayIntro()) {
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<div class="intro-veil" data-intro aria-hidden="true">
       <div class="intro-mark">${snuFormulaWordmark()}</div>
     </div>`
  );
}

document.body.insertAdjacentHTML("afterbegin", headerMarkup);
document.body.insertAdjacentHTML("beforeend", footerMarkup);

const html = document.documentElement;
const body = document.body;
const header = document.querySelector("[data-site-header]");
const menuButton = document.querySelector("[data-menu-button]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const progressBar = document.querySelector("[data-scroll-progress]");
const languageButtons = [...document.querySelectorAll("[data-set-lang]")];

function updateDocumentMetadata(language) {
  const title = language === "en" ? body.dataset.titleEn : body.dataset.titleKo;
  const description =
    language === "en" ? body.dataset.descriptionEn : body.dataset.descriptionKo;
  if (title) document.title = title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription && description) metaDescription.setAttribute("content", description);
}

function setLanguage(language) {
  const nextLanguage = language === "en" ? "en" : "ko";
  html.lang = nextLanguage;
  localStorage.setItem("snu-formula-language", nextLanguage);
  languageButtons.forEach((button) => {
    const active = button.dataset.setLang === nextLanguage;
    button.setAttribute("aria-pressed", String(active));
  });
  document.querySelectorAll("[data-aria-ko]").forEach((element) => {
    element.setAttribute(
      "aria-label",
      nextLanguage === "en" ? element.dataset.ariaEn : element.dataset.ariaKo
    );
  });
  const menuOpen = body.classList.contains("menu-open");
  menuButton.setAttribute(
    "aria-label",
    menuOpen
      ? (nextLanguage === "en" ? "Close menu" : "메뉴 닫기")
      : (nextLanguage === "en" ? "Open menu" : "메뉴 열기")
  );
  updateDocumentMetadata(nextLanguage);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.setLang));
});

setLanguage(localStorage.getItem("snu-formula-language") || html.lang);

const currentSection = body.dataset.page;
if (currentSection) {
  document
    .querySelectorAll(`[data-nav="${currentSection}"]`)
    .forEach((link) => link.setAttribute("aria-current", "page"));
}

function setMenu(open) {
  body.classList.toggle("menu-open", open);
  menuButton.setAttribute("aria-expanded", String(open));
  const english = html.lang === "en";
  menuButton.setAttribute(
    "aria-label",
    open ? (english ? "Close menu" : "메뉴 닫기") : (english ? "Open menu" : "메뉴 열기")
  );
  mobileMenu.setAttribute("aria-hidden", String(!open));
  if (open) {
    mobileMenu.querySelector("a")?.focus();
  } else {
    menuButton.focus({ preventScroll: true });
  }
}

menuButton.addEventListener("click", () => {
  setMenu(!body.classList.contains("menu-open"));
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && body.classList.contains("menu-open")) {
    setMenu(false);
  }
});

function updateScrollState() {
  const scrollTop = window.scrollY;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  header.classList.toggle("is-scrolled", scrollTop > 24);
  if (progressBar) {
    progressBar.style.transform = `scaleX(${scrollable > 0 ? scrollTop / scrollable : 0})`;
  }
}

window.addEventListener("scroll", updateScrollState, { passive: true });
updateScrollState();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
);

document.querySelectorAll("[data-reveal]").forEach((element) => {
  revealObserver.observe(element);
});

document.querySelectorAll("[data-system-tabs]").forEach((group) => {
  const buttons = [...group.querySelectorAll("[data-panel]")];
  const scope = group.closest("[data-system-scope]") || document;
  const panels = [...scope.querySelectorAll("[data-panel-content]")];

  function activate(target, focusPanel = false) {
    buttons.forEach((button) => {
      const active = button.dataset.panel === target;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
      button.tabIndex = active ? 0 : -1;
    });
    panels.forEach((panel) => {
      const active = panel.dataset.panelContent === target;
      panel.classList.toggle("is-active", active);
      panel.hidden = !active;
      if (active && focusPanel) panel.focus({ preventScroll: true });
    });
  }

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => activate(button.dataset.panel));
    button.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
      event.preventDefault();
      const direction = ["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1;
      const nextIndex = (index + direction + buttons.length) % buttons.length;
      buttons[nextIndex].focus();
      activate(buttons[nextIndex].dataset.panel);
    });
  });
});

document.querySelectorAll("a[href]").forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetUrl = new URL(link.href, window.location.href);
    const sameDocument =
      targetUrl.origin === window.location.origin &&
      targetUrl.pathname === window.location.pathname &&
      targetUrl.hash;
    if (!sameDocument) return;
    const target = document.querySelector(targetUrl.hash);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", targetUrl.hash);
  });
});

// Roster: clicking a member moves that card out of the grid and into a detail
// layout beside it. The card itself is reused rather than duplicated, so there
// is only ever one copy of a member's markup.
const rosterPanels = [...document.querySelectorAll("[data-roster]")].map((panel) => {
  const grid = panel.querySelector(".roster-grid");
  const detail = panel.querySelector(".roster-detail");
  if (!grid || !detail) return null;

  const slot = detail.querySelector(".roster-detail-card");
  const education = detail.querySelector(".roster-detail-edu");
  const activity = detail.querySelector(".roster-detail-activity");
  const backButton = detail.querySelector(".roster-detail-close");
  let openCard = null;
  let returnBefore = null;

  function close(moveFocus) {
    if (!openCard) return;
    const card = openCard;
    openCard = null;
    grid.insertBefore(card, returnBefore);
    card.classList.remove("is-open");
    card.querySelector(".roster-card-toggle").setAttribute("aria-expanded", "false");
    detail.hidden = true;
    grid.hidden = false;
    education.replaceChildren();
    activity.replaceChildren();
    if (moveFocus) card.querySelector(".roster-card-toggle").focus({ preventScroll: true });
  }

  function open(card) {
    if (openCard === card) {
      close(true);
      return;
    }
    close(false);
    returnBefore = card.nextElementSibling;

    const major = card.querySelector(".roster-major");
    education.replaceChildren();
    if (major) education.append(...[...major.cloneNode(true).childNodes]);

    const template = card.querySelector(".roster-activity");
    activity.replaceChildren();
    if (template && template.content.children.length) {
      activity.appendChild(template.content.cloneNode(true));
      activity.classList.remove("is-pending");
    } else {
      const pending = document.createElement("li");
      pending.innerHTML = bilingual("추후 업데이트됩니다", "To be updated");
      activity.appendChild(pending);
      activity.classList.add("is-pending");
    }

    slot.replaceChildren(card);
    card.classList.add("is-open");
    card.querySelector(".roster-card-toggle").setAttribute("aria-expanded", "true");
    grid.hidden = true;
    detail.hidden = false;
    openCard = card;
    backButton.focus({ preventScroll: true });
  }

  grid.querySelectorAll(".roster-card").forEach((card) => {
    card
      .querySelector(".roster-card-toggle")
      .addEventListener("click", () => open(card));
  });
  backButton.addEventListener("click", () => close(true));

  return { close };
}).filter(Boolean);

function closeAllRosterDetails() {
  rosterPanels.forEach((panel) => panel.close(false));
}

// Switching team, or pressing Escape, returns to the grid.
document.querySelectorAll(".team-tab").forEach((tab) => {
  tab.addEventListener("click", closeAllRosterDetails);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeAllRosterDetails();
});

window.addEventListener("pageshow", () => body.classList.add("page-ready"));

const introVeil = document.querySelector("[data-intro]");
if (introVeil) {
  try {
    sessionStorage.setItem(INTRO_KEY, "1");
  } catch (error) {
    // Private browsing can refuse writes; the intro simply plays again.
  }
  body.classList.add("intro-active");

  let introFinished = false;
  function finishIntro() {
    if (introFinished) return;
    introFinished = true;
    introVeil.remove();
    body.classList.remove("intro-active");
  }

  window.setTimeout(() => {
    introVeil.classList.add("is-leaving");
    introVeil.addEventListener("transitionend", finishIntro, { once: true });
    // Never leave the page scroll-locked if the transition does not fire.
    window.setTimeout(finishIntro, 1200);
  }, 1450);
}
