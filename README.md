# SNU FORMULA Website

서울대학교 SNU FORMULA의 한글·영문 정적 홈페이지입니다.

## 로컬 실행

이 폴더에서 다음 명령을 실행한 뒤 <http://127.0.0.1:4173/>를 엽니다.

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

## 메뉴와 페이지

Home → About → Members → Partners → Vehicle → News → Recruiting.

| 메뉴 | 경로 | 내용 |
| --- | --- | --- |
| Home | `/` | DESIGN. BUILD. RACE., 흰 팀 로고, 파트너 로고 띠, 뉴스 2건, 차량 공개 예정 |
| About | `/about/` | 흰 배경의 Renovatio 소개, Formula Student와 FSG |
| Members | `/team/` | Manager / Engineering / Business / Advisor |
| Partners | `/partners/` | 소속·센터 소개, Main / Platinum / Sponsor / Supporter |
| Vehicle | `/vehicle/` | 공개 전 차량 티저 |
| News | `/news/` | 페라리코리아·서울대 협약과 팀 창단 보도 |
| Recruiting | `/recruiting/` | FSG 2028까지 Full commitment, 팀원 체계, 모집 분야와 사용 도구 |

Recruiting의 주소는 `/recruiting/`이며 기존 `/join/`은 새 주소로 이동합니다. 김민우님의 `e99632c`
(2026-10-12) 수정본을 가져와 합쳤으며 팀원 체계와 14개 모집 분야를 유지했습니다.
사용자 후속 요청에 따라 설명을 명사형 bullet로 바꿨습니다.
정회원 설명은 수습 부원의 성실하고 적극적인 활동 시 전환, 차량 설계·제작 직접 참여로 확정했습니다.
데스크톱의 팀원 체계는 3열, 모집 분야는 2열이며 설명 글씨는 20px입니다.
공용 파일의 충돌을 해소하고 서체와 캐시 키(`20261012-9`)를 맞췄습니다.

## 서체와 기록

모든 크기의 영문은 Michroma Regular, 한글은 Pretendard Variable입니다.
한글 문장에 섞인 CFD 같은 영문도 Pretendard Variable로 표시합니다.
두 서체를 자체 호스팅하며 라이선스 원문을 `assets/fonts/`에 포함합니다.
공식 로고는 원래 이미지 형태를 유지합니다.

- [서체·라이선스·문구 후보·직책 출처](docs/typography-and-copy.md)
- [강경운 팀복 사진의 AI 편집 기록](docs/kang-kyungwoon-portrait-20261012.md)
- [외부 이미지와 폰트 출처](THIRD_PARTY_NOTICES.md)

## 이미지

- 뉴스는 2건을 표시하며 제목을 사진 아래에 둡니다. 페라리 사진은 전체를 표시하고, 뉴시스 사진은 사용자 요청에 따라 하단을 표시 영역에서 크롭합니다.
- 기사 이용 허락은 2026-10-12 사용자의 기존 확인에 근거합니다.
  매체·사진 출처는 `assets/img/news/SOURCES.md`에 기록되어 있습니다.
- 코오롱은 공식 영문 SVG `assets/sponsors/kolon-en.svg`를 사용합니다.
- 강경운 프로필은 사용자 제공 사진을 기존 파란 팀복에 맞춰 AI 편집한
  `assets/img/team/members/kang-kyungwoon-teamwear.png`입니다.
- 공개 전 차량은 사용자 CAD 실루엣을 참고한 생성 티저입니다.

## 모집 상태와 센터 공고

`assets/recruiting-config.mjs` 한 파일에서 홈 배너와 Recruiting 안내를 설정합니다.

- `acceptingApplications`: `false`이면 모집 중단, `true`이면 기간에 따라 상태 표시.
- `opensAt`: 시작 시각 또는 `null`. 시작 전에는 모집 예정 상태.
- `closesAt`: 배타적 종료 시각. 현재는 `2026-10-31T00:00:00+09:00`으로, 한국 시간 10월 30일 하루 전체를 포함한 뒤 자동 종료.
- `announcementUrl`: 센터 공고의 전체 `http(s)` URL. 빈 값이면 공고 등록 예정, URL이 있으면 공고 보기 링크 표시.

기간을 바꿀 때는 한국 시간 오프셋 `+09:00`을 포함합니다. 브라우저가 열린 상태에서도
경계 시각에 상태가 갱신됩니다. 파일 변경 후 모듈의 캐시 키도 갱신합니다.
상태 검증: `node --test tests/recruiting-state.test.mjs`.

- [한글·영문 교정 기록](docs/copy-proofreading-20261012.md)
- [사진 하단 수정 기록과 저장 경로](docs/member-shirt-repairs-20261012.md)

## 시작 애니메이션

첫 방문과 명시적 새로고침에 팀 로고가 재생됩니다. 같은 세션의 페이지 이동에서는
반복하지 않으며 `prefers-reduced-motion: reduce`에서는 생략합니다.

## 방문 통계

7개 주요 페이지에서 Vercel Web Analytics로 방문자 수, 페이지별 조회수, 유입 경로,
국가와 기기 종류를 수집합니다. 공통 `assets/site.js`에서 HTTPS 페이지에만
추적 스크립트를 연결하며 로컬 미리보기와 `/join/` 이동 페이지는 집계하지 않습니다.
쿠키를 사용하지 않는 기본 통계이며 연동 이후 방문부터 집계됩니다.

확인 위치: [Vercel 방문 통계](https://vercel.com/snu-formula/snuformula/analytics).
현재 Hobby 요금제에서는 팀 전체 월 50,000개 이벤트까지 무료이며,
한도 이후에는 추가 결제 없이 수집이 중단됩니다. 요금제를 바꾸거나 유료 기능을
활성화하지 않습니다. [공식 요금 안내](https://vercel.com/docs/analytics/limits-and-pricing).

## 배포

운영 주소: <https://snuformula.vercel.app>. GitHub `SNU-Formula/website`의 `main`에 연결된
Vercel Production 배포를 사용합니다. `main` 푸시 후 해당 커밋의 배포 성공 상태와 실제 운영 화면을 확인합니다.
