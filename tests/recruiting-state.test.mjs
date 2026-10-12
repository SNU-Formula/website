import test from "node:test";
import assert from "node:assert/strict";
import { getRecruitmentState, getAnnouncementUrl } from "../assets/recruiting.mjs";

const campaign = {
  acceptingApplications: true,
  opensAt: "2026-10-01T00:00:00+09:00",
  closesAt: "2026-10-31T00:00:00+09:00",
};

test("accepts applications through the last second of the deadline in Korea", () => {
  assert.equal(getRecruitmentState(campaign, Date.parse("2026-10-30T23:59:59+09:00")), "open");
});
test("closes at midnight after the deadline, including the equivalent UTC instant", () => {
  assert.equal(getRecruitmentState(campaign, Date.parse("2026-10-31T00:00:00+09:00")), "closed");
  assert.equal(getRecruitmentState(campaign, Date.parse("2026-10-30T15:00:00Z")), "closed");
});
test("announces a future campaign and opens at its start time", () => {
  assert.equal(getRecruitmentState(campaign, Date.parse("2026-09-30T23:59:59+09:00")), "upcoming");
  assert.equal(getRecruitmentState(campaign, Date.parse(campaign.opensAt)), "open");
});
test("manual closure takes precedence over dates", () => {
  assert.equal(getRecruitmentState({ ...campaign, acceptingApplications: false }, Date.parse("2026-10-12T12:00:00+09:00")), "closed");
});
test("invalid or reversed dates do not advertise an open campaign", () => {
  assert.equal(getRecruitmentState({ ...campaign, closesAt: "invalid" }), "closed");
  assert.equal(getRecruitmentState({ ...campaign, opensAt: campaign.closesAt }), "closed");
});
test("the notice slot accepts only complete http(s) URLs", () => {
  assert.equal(getAnnouncementUrl(""), "");
  assert.equal(getAnnouncementUrl("javascript:alert(1)"), "");
  assert.equal(getAnnouncementUrl("/notice/1"), "");
  assert.equal(getAnnouncementUrl("https://example.com/notice?id=1"), "https://example.com/notice?id=1");
  assert.equal(getAnnouncementUrl("http://example.com/notice"), "http://example.com/notice");
});
