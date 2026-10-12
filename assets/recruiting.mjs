import { recruitingConfig } from "./recruiting-config.mjs?v=20261012-9";

export function getRecruitmentState(config, now = Date.now()) {
  if (!config.acceptingApplications) return "closed";
  const start = config.opensAt ? Date.parse(config.opensAt) : -Infinity;
  const end = config.closesAt ? Date.parse(config.closesAt) : Infinity;
  if (Number.isNaN(start) || Number.isNaN(end) || start >= end) return "closed";
  if (now >= end) return "closed";
  return now < start ? "upcoming" : "open";
}

export function getAnnouncementUrl(value) {
  if (!value) return "";
  try {
    const url = new URL(value);
    return ["https:", "http:"].includes(url.protocol) ? url.href : "";
  } catch {
    return "";
  }
}

const statusLabels = {
  open: ["신규 팀원 모집 중", "Recruitment open"],
  upcoming: ["신규 팀원 모집 예정", "Recruitment opening soon"],
  closed: ["현재 모집하지 않습니다", "Recruitment closed"],
};

function setBilingualText(element, ko, en) {
  const spans = ["ko", "en"].map((language, index) => {
    const span = document.createElement("span");
    span.className = `lang lang-${language}${language === "ko" && /[가-힣]/.test(ko) ? " korean-copy" : ""}`;
    span.textContent = [ko, en][index];
    return span;
  });
  element.replaceChildren(...spans);
}

function dateLabel(timestamp, language) {
  return new Intl.DateTimeFormat(language === "ko" ? "ko-KR" : "en-US", {
    timeZone: "Asia/Seoul", year: "numeric", month: "long", day: "numeric",
    hour: "2-digit", minute: "2-digit", hourCycle: "h23",
  }).format(timestamp);
}

export function renderRecruitment(config = recruitingConfig, now = Date.now()) {
  const state = getRecruitmentState(config, now);
  document.querySelectorAll("[data-recruitment-root]").forEach(element => {
    element.dataset.recruitmentState = state;
  });
  document.querySelectorAll("[data-recruitment-status], [data-recruitment-banner-title]").forEach(element => {
    setBilingualText(element, ...statusLabels[state]);
  });
  document.querySelectorAll("[data-recruitment-badge]").forEach(element => {
    element.textContent = { open: "OPEN", upcoming: "COMING SOON", closed: "CLOSED" }[state];
  });

  let deadlineText;
  if (state === "open" && config.closesAt) {
    const deadline = Date.parse(config.closesAt) - 1;
    deadlineText = [`모집 마감: ${dateLabel(deadline, "ko")}`, `Applications close: ${dateLabel(deadline, "en")} (KST)`];
  } else if (state === "upcoming") {
    const start = Date.parse(config.opensAt);
    deadlineText = [`모집 시작: ${dateLabel(start, "ko")}`, `Applications open: ${dateLabel(start, "en")} (KST)`];
  } else if (state === "open") {
    deadlineText = ["모집 일정은 공고에서 확인하세요.", "Please check the recruitment notice for dates."];
  } else {
    deadlineText = ["다음 모집 일정은 추후 안내합니다.", "The next recruitment dates will be announced."];
  }
  document.querySelectorAll("[data-recruitment-deadline]").forEach(element => {
    setBilingualText(element, ...deadlineText);
  });
  document.querySelectorAll("[data-recruitment-banner-deadline]").forEach(element => {
    element.hidden = state !== "open" || !config.closesAt;
    if (!element.hidden) {
      const deadline = new Date(Date.parse(config.closesAt) - 1);
      const date = new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit" }).format(deadline);
      element.dateTime = date;
      element.textContent = `~${date.replaceAll("-", ".")}`;
    }
  });

  const announcementUrl = getAnnouncementUrl(config.announcementUrl);
  document.querySelectorAll("[data-recruitment-notice-link]").forEach(element => {
    element.hidden = !announcementUrl;
    if (announcementUrl) element.href = announcementUrl;
    else element.removeAttribute("href");
  });
  document.querySelectorAll("[data-recruitment-notice-pending]").forEach(element => {
    element.hidden = Boolean(announcementUrl);
  });

  if (document.body.dataset.page === "recruiting") {
    document.body.dataset.descriptionKo = `SNU FORMULA 모집 안내. ${statusLabels[state][0]}. ${deadlineText[0]}`;
    document.body.dataset.descriptionEn = `SNU FORMULA recruitment. ${statusLabels[state][1]}. ${deadlineText[1]}`;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.content = document.body.dataset[document.documentElement.lang === "en" ? "descriptionEn" : "descriptionKo"];
  }
  return state;
}

if (typeof document !== "undefined") {
  let timer;
  const refresh = () => {
    const now = Date.now();
    renderRecruitment(recruitingConfig, now);
    clearTimeout(timer);
    const boundaries = [recruitingConfig.opensAt, recruitingConfig.closesAt]
      .filter(Boolean).map(Date.parse).filter(time => time > now);
    if (boundaries.length) timer = setTimeout(refresh, Math.min(Math.min(...boundaries) - now + 20, 86_400_000));
  };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", refresh, { once: true });
  else refresh();
  window.addEventListener("pageshow", refresh);
  document.addEventListener("visibilitychange", () => { if (!document.hidden) refresh(); });
}
