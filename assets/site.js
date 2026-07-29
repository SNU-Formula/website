const root = "/";

const bilingual = (ko, en, className = "") =>
  `<span class="lang lang-ko ${className}">${ko}</span><span class="lang lang-en ${className}">${en}</span>`;

const snuFormulaWordmark = (tone = "") => `
  <span class="snu-formula-wordmark ${tone}" role="img" aria-label="SNU FORMULA">
    <span class="wordmark-part wordmark-crest" aria-hidden="true"></span>
    <span class="wordmark-part wordmark-snu" aria-hidden="true"></span>
    <span class="wordmark-part wordmark-formula" aria-hidden="true"></span>
  </span>`;

const headerMarkup = `
  <header class="site-header" data-site-header>
    <a class="brand-link" href="${root}" aria-label="SNU FORMULA home">
      ${snuFormulaWordmark()}
    </a>
    <nav class="desktop-nav" aria-label="Primary navigation">
      <a href="${root}" data-nav="home">${bilingual("HOME", "HOME")}</a>
      <a href="${root}#road-to-2028">${bilingual("ROAD TO 2028", "ROAD TO 2028")}</a>
      <a href="${root}about/" data-nav="about">${bilingual("ABOUT", "ABOUT")}</a>
      <a href="${root}vehicle/" data-nav="vehicle">${bilingual("VEHICLE", "VEHICLE")}</a>
      <a href="${root}team/" data-nav="team">${bilingual("TEAM", "TEAM")}</a>
      <a href="${root}partners/" data-nav="partners">${bilingual("PARTNERS", "PARTNERS")}</a>
      <a href="${root}join/" data-nav="join">${bilingual("JOIN", "JOIN")}</a>
    </nav>
    <div class="header-actions">
      <div class="language-switch" role="group" aria-label="Language">
        <button type="button" data-set-lang="ko" aria-pressed="true">KO</button>
        <span aria-hidden="true"></span>
        <button type="button" data-set-lang="en" aria-pressed="false">EN</button>
      </div>
      <a class="header-contact" href="${root}join/#contact">${bilingual("CONTACT", "CONTACT")}</a>
      <button class="menu-button" type="button" aria-label="메뉴 열기" aria-expanded="false" data-menu-button data-aria-ko="메뉴 열기" data-aria-en="Open menu">
        <span></span><span></span>
      </button>
    </div>
  </header>
  <div class="mobile-menu" data-mobile-menu aria-hidden="true">
    <div class="mobile-menu-grid" aria-hidden="true"></div>
    <nav aria-label="Mobile navigation">
      <a href="${root}"><span>01</span>${bilingual("HOME", "HOME")}</a>
      <a href="${root}#road-to-2028"><span>02</span>${bilingual("ROAD TO 2028", "ROAD TO 2028")}</a>
      <a href="${root}about/"><span>03</span>${bilingual("ABOUT", "ABOUT")}</a>
      <a href="${root}vehicle/"><span>04</span>${bilingual("VEHICLE", "VEHICLE")}</a>
      <a href="${root}team/"><span>05</span>${bilingual("TEAM", "TEAM")}</a>
      <a href="${root}partners/"><span>06</span>${bilingual("PARTNERS", "PARTNERS")}</a>
      <a href="${root}join/"><span>07</span>${bilingual("JOIN & CONTACT", "JOIN & CONTACT")}</a>
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
        <a href="${root}team/">Team</a>
      </div>
      <div>
        <span class="footer-label">CONNECT</span>
        <a href="${root}partners/">Partners</a>
        <a href="${root}join/">Join</a>
        <a href="${root}join/#contact">Contact</a>
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

document.querySelectorAll("[data-accordion-button]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".accordion-item");
    const open = item.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(open));
    item.querySelector(".accordion-panel").hidden = !open;
  });
});

document.querySelectorAll("[data-roadmap]").forEach((roadmap) => {
  const buttons = [...roadmap.querySelectorAll("[data-roadmap-year]")];
  const details = [...roadmap.querySelectorAll("[data-roadmap-detail]")];
  const progressByYear = { 2026: 0.08, 2027: 0.5, 2028: 1 };

  function activateRoadmap(year, focusDetail = false) {
    buttons.forEach((button) => {
      const active = button.dataset.roadmapYear === year;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    details.forEach((detail) => {
      const active = detail.dataset.roadmapDetail === year;
      detail.classList.toggle("is-active", active);
      detail.hidden = !active;
      if (active && focusDetail) detail.focus({ preventScroll: true });
    });
    roadmap.style.setProperty("--road-progress", progressByYear[year] || 0.08);
  }

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => activateRoadmap(button.dataset.roadmapYear));
    button.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(event.key)) return;
      event.preventDefault();
      const direction = ["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1;
      const nextIndex = (index + direction + buttons.length) % buttons.length;
      buttons[nextIndex].focus();
      activateRoadmap(buttons[nextIndex].dataset.roadmapYear);
    });
  });
});

const heroCover = document.querySelector("[data-hero-cover]");
if (heroCover && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const hero = heroCover.closest(".hero") || heroCover.parentElement;
  hero.addEventListener("pointermove", (event) => {
    const bounds = hero.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    heroCover.style.setProperty("--parallax-x", `${x * 12}px`);
    heroCover.style.setProperty("--parallax-y", `${y * 8}px`);
  });
  hero.addEventListener("pointerleave", () => {
    heroCover.style.setProperty("--parallax-x", "0px");
    heroCover.style.setProperty("--parallax-y", "0px");
  });
}

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

window.addEventListener("pageshow", () => body.classList.add("page-ready"));
