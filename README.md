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
| Partners | `/partners/` | 소속·센터 소개, Main / Platinum Sponsor |
| Vehicle | `/vehicle/` | 공개 전 차량 티저 |
| News | `/news/` | 페라리코리아·서울대 협약과 팀 창단 보도 |
| Recruiting | `/join/` | Full commitment, 팀원 체계, 기계·전기·비즈니스 모집 분야 |

Recruiting은 기존 `/join/` 경로를 유지합니다. 김민우님의 `e99632c`
(2026-10-12) 수정본을 가져와 합쳤으며 팀원 체계와 14개 모집 분야를 유지했습니다.
사용자 후속 요청에 따라 설명을 명사형 bullet로 바꿨습니다.
정회원 설명은 수습 부원의 성실하고 적극적인 활동 시 전환, 차량 설계·제작 직접 참여로 확정했습니다.
데스크톱의 팀원 체계는 3열, 모집 분야는 2열이며 설명 글씨는 20px입니다.
공용 파일의 충돌을 해소하고 서체와 캐시 키(`20261012-6`)를 맞췄습니다.

## 서체와 기록

영문은 사용자가 지목한 `FORMULA STUDENT · FSG 2028 PROGRAM`의 서체인
Michroma Regular, 한글은 Pretendard Variable로 통일했습니다.
두 서체를 자체 호스팅하며 라이선스 원문을 `assets/fonts/`에 포함합니다.
공식 로고는 원래 이미지 형태를 유지합니다.

- [서체·라이선스·문구 후보·직책 출처](docs/typography-and-copy.md)
- [강경운 팀복 사진의 AI 편집 기록](docs/kang-kyungwoon-portrait-20261012.md)
- [외부 이미지와 폰트 출처](THIRD_PARTY_NOTICES.md)

## 이미지

- 뉴스는 2건을 표시하며 사진을 자르지 않고 제목을 사진 아래에 둡니다.
- 기사 이용 허락은 2026-10-12 사용자의 기존 확인에 근거합니다.
  매체·사진 출처는 `assets/img/news/SOURCES.md`에 기록되어 있습니다.
- 코오롱은 공식 영문 SVG `assets/sponsors/kolon-en.svg`를 사용합니다.
- 강경운 프로필은 사용자 제공 사진을 기존 파란 팀복에 맞춰 AI 편집한
  `assets/img/team/members/kang-kyungwoon-teamwear.png`입니다.
- 공개 전 차량은 사용자 CAD 실루엣을 참고한 생성 티저입니다.

## 시작 애니메이션

첫 방문과 명시적 새로고침에 팀 로고가 재생됩니다. 같은 세션의 페이지 이동에서는
반복하지 않으며 `prefers-reduced-motion: reduce`에서는 생략합니다.
