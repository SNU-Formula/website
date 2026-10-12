# 홈페이지 서체·문구·직책 기록

기준일: 2026-10-12 (Asia/Seoul)

## 확정 서체

| 구분 | 서체 | 적용 |
| --- | --- | --- |
| 영문 | Michroma Regular | 모든 크기의 영문 제목·본문·메뉴·버튼·메타 정보 |
| 한글에 섞인 영문 | Pretendard Variable | 한글 설명 안의 CFD, FSG, BMS 등 약어와 영문 이름 |
| 한글 | Pretendard Variable | 모든 한글 글자 |
| 공식 로고 | 원래 이미지 자산 | 로고를 글자로 다시 조립하지 않음 |

영문의 기준은 사용자가 처음 지목한 `FORMULA STUDENT · FSG 2028 PROGRAM`의
기존 서체인 Michroma입니다. 최종 요청에 따라 글씨 크기에 관계없이 모든 영문에 적용합니다.
한글 문장과 함께 쓰이는 영문만 한글과 동일한 Pretendard를 사용합니다.
예: 모집 분야 제목 `Aerodynamics · CFD`는 Michroma,
한글 설명 `CFD 기반 설계 비교`는 문장 전체가 Pretendard입니다.
영문 화면에서는 설명의 CFD도 Michroma입니다. 20px 이하라는 종전 기준은 폐기했습니다.
`.lang-ko.korean-copy`로 한글 문장을 명시하고, 공용 UI 및 모집 상태 생성 코드에도 같은 기준을 적용합니다.

```css
--font-site: Michroma, "Pretendard Variable", sans-serif;
--font-brand: var(--font-site);
--font-copy: "Pretendard Variable", sans-serif;
```

큰 제목에서 Michroma에 없는 한글 글리프는 Pretendard Variable로 표시됩니다.
Michroma는 Regular 400 한 가지 굵기이며 `font-synthesis: none`으로 가짜 굵기를
만들지 않습니다. 한글은 Pretendard Variable의 실제 굵기를 사용합니다.
Montserrat 적용은 제거했고 기존 파일은 보관합니다.

## 폰트 저작권·이용 조건

Michroma와 Pretendard 모두 SIL Open Font License 1.1입니다. 웹 임베딩,
자체 호스팅, 상업적 사용, 소프트웨어와 함께하는 재배포가 허용됩니다.
이 홈페이지의 원본 폰트 사용은 허용 범위에 해당합니다. 폰트 파일과 함께
저작권 고지와 라이선스 원문을 보존합니다. 폰트 자체의 단독 판매는 허용되지 않으며,
폰트 변형 시 이름 등 별도 조건을 확인해야 합니다.

- [Michroma 공식 라이선스](https://github.com/google/fonts/blob/main/ofl/michroma/OFL.txt)
- [Pretendard v1.3.9 공식 라이선스](https://github.com/orioncactus/pretendard/blob/v1.3.9/LICENSE)
- 로컬 원문: `assets/fonts/Michroma-LICENSE.txt`, `assets/fonts/Pretendard-LICENSE.txt`
- 보관 중인 Montserrat의 원문: `assets/fonts/Montserrat-LICENSE.txt`

폰트 라이선스는 대회·기관·파트너 명칭과 로고의 사용권을 대신 부여하지 않습니다.
`FSG 2028 PROGRAM`은 팀의 2028년 참가 목표를 가리키며, 참가 확정이나
주최 측의 공식 프로그램이라는 뜻으로 사용하지 않습니다.

## 확정 공통 문구

> 한국을 넘어 세계 무대로 도전하는 SNU Formula Team

영문: SNU Formula Team — taking on the world beyond Korea.

기존 “서울대학교 학생들이 설계하고…” 문장을 공용 푸터에서 교체했습니다.
푸터 표어는 22px로 표시하고 데스크톱에서 한 줄을 유지하도록 가로 공간을 확보했습니다.
모바일에서는 글씨 크기를 유지하고 화면 폭에 따라 자연스럽게 줄바꿈합니다.

홈 표어: **DESIGN. BUILD. RACE.** 한글·영문 화면에 동일하게 적용합니다.

## 대체 문장 후보

1. 한국에서 설계하고, 세계 무대에 도전합니다.
2. 서울에서 시작해, 세계의 트랙을 향합니다.
3. 함께 만든 기술로, 더 넓은 무대에 도전합니다.
4. 우리의 설계와 제작으로, 세계 무대를 향합니다.
5. 한 대의 차량에 담은 도전, 이제 세계 무대로.

추천: **한국에서 설계하고, 세계 무대에 도전합니다.** 출발점과 목표가 명확하며
아직 검증되지 않은 성과를 주장하지 않습니다. 사이트에는 사용자가 지정한
확정 문구를 적용했습니다.

## 소속과 Advisor

SNU FORMULA는 SNU Mobility Renovatio의 산하 프로젝트이고, Renovatio의
단장은 곽승엽 교수입니다. 이 관계는 사용자의 최종 지시에 따라 반영했습니다.

센터 명칭: **서울대학교 산학협력 공학인재 지원센터**.
영문명: **SNU University–Industry Liaison Center for Engineers**.
`SNU`는 서울대학교 소속을 명시하는 접두어이며, 기관의 공식 영문명은
`University–Industry Liaison Center for Engineers`입니다.
[공식 조직도](http://www.snu-nteam.kr/sub/sub01_04.php)의
[조직도 이미지](http://www.snu-nteam.kr/images/sub/org.jpg)에서 직접 확인했습니다.

| 성명 | 표시하는 주요 약력 | 근거 |
| --- | --- | --- |
| 곽승엽 | 서울대학교 재료공학부 교수 / 서울대학교 산학협력 공학인재 지원센터장 / SNU Mobility Renovatio 단장 | 학부·센터장 직책은 서울대 공식 자료, 단장 직책은 사용자 지시 |
| 양희원 | 서울대학교 산학협력 공학인재 지원센터 산학협력중점교수 / (前) 현대자동차 사장 / (前) 현대자동차·기아 연구개발본부장 / (前) 남양연구소 연구개발 총괄 | 연구개발본부장 경력은 현대차 공식 자료, 교수 직책·사장·남양연구소 경력과 전직 표기는 사용자 확인 |
| 송민규 | 서울대학교 산학협력 공학인재 지원센터 산학협력중점교수 / (前) 현대자동차 부사장 / (前) 현대자동차 제네시스사업본부장 / (前) 제네시스 COO | 본부장·COO 경력은 현대차·제네시스 공식 자료, 교수 직책·부사장과 전직 표기는 사용자 확인 |

전직 표기는 모두 **(前)**으로 통일했습니다. 양희원·송민규 교수님은 교수 직책 바로
다음 항목에 각각 사장·부사장 경력을 표시합니다. 산학협력중점교수의 영문은
설명형 번역 `Industry–University Cooperation Professor`이며 공식 번역으로 단정하지 않습니다.
사용자에게 확인받은 직책을 공개 자료로 독립 검증한 사항이라고 표현하지 않습니다.

- [서울대 공과대학: 곽승엽 교수와 센터장 직책](https://eng.snu.ac.kr/research/research-achievements?bbsidx=8249&md=v)
- [서울대 공학연구원 산하센터](https://ioer.snu.ac.kr/공학연구원-산하센터/)
- [현대차 공식 자료: Heui Won Yang, Head of R&D](https://www.hyundai.com/worldwide/en/newsroom/detail/hyundai-motor-group-recognized-for-leadership-and-innovation-at-2025-automotive-news-all-star-awards-0000001001)
- [현대차 공식 자료: 송민규 제네시스사업본부장](https://www.hyundaimotorgroup.com/ko/news/CONT0000000000180287)
- [제네시스 공식 자료: Mike (Min Kyu) Song의 Global Head·COO 경력](https://newsroom.genesis.com/mike-song-named-new-global-head-of-genesis/)

## 변경과 병합

- 메뉴: Home → About → Members → Partners → Vehicle → News → Recruiting.
- Home: 흰 로고, DESIGN. BUILD. RACE. 표어, News를 Vehicle보다 위에 배치.
- About: Renovatio 설명과 로고를 제목 아래의 흰 배경으로 이동. 두 문장을 별도 문단으로 나누고, 데스크톱에서는 각 문장이 한 줄이 되도록 설명 폭을 확대. 로고는 오른쪽에서 36px 왼쪽으로 이동. 설명 글씨는 1280px 화면에서 22px, 1760px 화면에서 24px. 곽승엽 교수님은 서울대학교 산학협력 공학인재 지원센터장으로 소개. Competition Structure 문장 삭제.
- Members: 소개 교체, Advisor 탭 추가, 사진·개인 클릭 없이 약력 표시, Advisor 설명 21px(영문 20px)로 확대, 팀별 인원수 표시 삭제, 이규원 항공우주공학과 수정, 강경운 팀복 사진 반영.
- Partners: “한국 모터스포츠의 시작점”을 상단 제목으로 이동. 소속·센터를 먼저 소개하고 곽승엽 교수님의 센터장 직책 표시. “우리의 소속과 기반” 제목 삭제. Sponsorship Tiers와 기존 하단 기관 섹션 삭제. 하단에 BECOME A PARTNER, 이메일, 인스타그램 추가.
- 후원 등급: Main Sponsor / **Platinum Sponsor** / Sponsor / Supporter. AJIN Industrial, KOLON, YONGSAN, YOUNGONE이 Platinum Sponsor입니다. Sponsor와 Supporter는 각 2개 빈 로고 칸을 표시합니다.
- 코오롱: [공식 영문 사이트](https://www.kolon.com/en/main)의 [영문 CI SVG](https://www.kolon.com/common/en/images/logo-kolon-color.svg)로 전체 위치 교체. 원본 SVG 크기에 의존하지 않고 표시 영역에 맞춰 확대합니다.
- 기관 카드: 로고와 설명을 가로로 배치하고 내용에 따라 카드 높이를 정해 Renovatio 밑의 빈 공간 제거. 후원사 이름 18px, 후원 설명 14px, 연락처 18px로 확대.
- News: Solar 기사 제거, 2건 유지, 동일 제목 크기, 페라리 사진 전체 표시, 뉴시스 하단 크롭, 사진 아래 제목. 제목 26–36px, 페이지 소개·기사 설명·클릭 안내 문장 삭제.
- Recruiting: 김민우님의 `e99632c3bcfcd25ae0e488a0342e85a43766a3fa`를 원격 `main`에서 가져와 합쳤습니다. 팀원 체계와 14개 모집 분야를 유지하고, 사용자 후속 지시에 따라 설명을 한글·영문 명사형 bullet로 바꿨습니다. 서체·캐시 키도 맞췄습니다.
- Recruiting 배치: 데스크톱에서 팀원 체계 3열, 모집 분야 2열, 설명 20px. 모바일은 1열로 전환하며 글씨 크기를 유지. 고정된 큰 빈 영역 제거.
- 정회원 설명: “수습 부원으로서 성실하고 적극적인 팀 활동 시 정회원으로 전환” / “차량 설계와 제작에 직접 참여” 두 bullet로 확정.
- 공용 본문과 섹션: 본문 20px(모바일 19px), 섹션 간격 36–60px(모바일 32px). 상단 제목 영역의 고정 최소 높이 제거.

공용 CSS/JS 및 Recruiting CSS·모듈 캐시 키: `20261012-9`.
원격과 합치기 전 작업본은 Git stash `3c85eafb86d1551c7a9b7e1f5fbeac85408fab5a`에 보존했습니다.

## 검증

- 7개 페이지: 데스크톱 1280px, 모바일 390px에서 한글·영문 표시와 글자 넘침 확인.
- 종전 검증의 20px 이하 서체 기준은 최종 요청으로 폐기. 최종 기준은 영문 Michroma, 한글과 섞인 영문 Pretendard입니다.
- News 카드의 설명 문장 0개, Partners의 불필요한 제목 삭제, About·Partners의 센터장 직책 표시 확인.
- 작은 모바일 320px: Recruiting·News·Partners·Advisor의 한글·영문 글자 넘침 추가 확인. Partners 제목 크기 조정.
- 발견한 About·Members·Vehicle 제목 넘침과 Recruiting 영문 메뉴 넘침 수정.
- 기관 카드의 가로 배치와 불필요한 하단 여백 제거 확인.
- About의 두 문장과 공통 푸터 표어가 1280px·1760px 한글 화면에서 한 줄씩 표시됨을 확인.
- 홈·News 기사 제목의 동일 크기, 사진 아래 제목, 페라리 사진 전체 표시 및 뉴시스 사진 하단 크롭 확인.
- HTML 태그·중복 ID·로컬 경로·CSS 자산 검사 통과.
- JavaScript 구문 검사와 Git 충돌·공백 검사 통과.
- 현재 범위는 로컬 수정본과 미리보기이며 원격 push·배포는 수행하지 않음.

## 사진·문구·모집 안내 후속 수정

- 유민우·이재준·김인재·조용우 사진의 하단 옷 영역 수정. 얼굴은 원본으로 표시하며, 편집 PNG만 하단에 마스크 적용. [사진 편집 기록](member-shirt-repairs-20261012.md).
- 7개 페이지 및 팀원 상세 이력의 한글·영문 교정. [교정 기록](copy-proofreading-20261012.md).
- 공통 하단과 모바일 메뉴의 Team Principles 제거.
- 홈 버튼: About → Members → Vehicle.
- Partners의 센터 로고는 사용자가 제공한 실제 센터 PNG로 교체.
- 뉴시스 기사 사진은 홈·News에서 하단 로고가 보이지 않도록 표시 영역을 크롭. 원본 사진과 기사·사진 출처 표시는 보존.
- 모집 안내의 현재 상태를 강조. 한국 시간 마감일이 끝나면 자동 종료, 수동 중단 및 미래 시작일 설정 지원. 홈 배너와 같은 설정 사용.
- 센터 공고 자리 마련. assets/recruiting-config.mjs의 announcementUrl을 채우면 공고 보기 링크로 전환.
- 모집 기간과 링크 관련 6개 테스트 통과.
- 7개 페이지의 한글·영문을 1280px·390px에서 확인했고, 종료 상태와 공고 링크 전환을 390px·320px에서 추가 확인. 글자 넘침·이미지 누락 없음.

## 최종 모집·구성 수정

- Members 소개: “대단한 열정과 경험을 가진 학생들과 / 산업계에 오랫동안 몸 담은 현대자동차 전 임원들로 구성되었습니다”. `/` 위치에서 문단 내 줄바꿈.
- Recruiting 주소는 `/recruiting/`. 모든 내부 링크를 갱신하고 `/join/`은 검색 인자와 해시를 보존해 새 주소로 이동.
- Full Commitment는 **2028년 FSG 대회까지 활동** 조건을 한글·영문에 명시.
- 세 팀 이름과 14개 소주제는 한글 화면에서도 영문으로 표시. 설명 bullet은 한글 유지, 영문 화면에서는 영문 설명 표시.
- 기계팀: SolidWorks / CATIA / ANSYS. 전기팀: KiCad / ANSYS / MATLAB / 회로 자체 설계. 팀 제목 아래 항상 표시.
- 전기팀에 토크 벡터링 시스템 자체 설계·제작 및 제어 알고리즘 구현 추가. 모집 업무 범위이며 완료된 성과를 뜻하지 않음.
- 지원 기간은 **2026년 10월 30일 23:59까지(한국 시간)**. 설정의 배타적 종료 시각은 `2026-10-31T00:00:00+09:00`. 홈 배너와 모집 안내 모두 같은 설정 사용.

최종 검증: 7개 페이지의 한글·영문을 1280px·390px에서 확인. Recruiting은 320px에서도
팀 제목·분야 수·도구 목록이 겹치지 않도록 수정했고, 모바일 메뉴의 Recruiting 글자 넘침도 수정했습니다.
실제 CFD 설명과 영문 제목의 적용 서체, Advisor 약력 순서, `/join/`의 검색 인자·해시 보존 이동,
10월 30일 마감 표시를 브라우저에서 확인했습니다. 모집 상태 6개 테스트 및 HTML·자산·JS 검사 통과.
