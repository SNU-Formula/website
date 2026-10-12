# 홈페이지 서체·문구·직책 기록

기준일: 2026-10-12 (Asia/Seoul)

## 확정 서체

| 구분 | 서체 | 적용 |
| --- | --- | --- |
| 영문·라틴 문자 | Michroma Regular | 제목, 본문, 메뉴, 탭, 버튼, 숫자, 메타 정보 |
| 한글 | Pretendard Variable | 모든 한글 글자 |
| 공식 로고 | 원래 이미지 자산 | 로고를 글자로 다시 조립하지 않음 |

영문 기준은 사용자가 지목한 `FORMULA STUDENT · FSG 2028 PROGRAM`입니다.
기존 CSS에서 이 문구는 Michroma를 사용하고 있었으므로 해당 서체로 통일했습니다.
문구도 그대로 유지합니다. Recruiting의 별도 CSS에도 동일 서체를 적용합니다.

```css
--font-site: Michroma, "Pretendard Variable", sans-serif;
--font-brand: var(--font-site);
```

Michroma에 없는 한글 글리프는 Pretendard Variable로 표시됩니다.
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
지도교수는 곽승엽 교수입니다. 이 관계는 사용자의 지시에 따라 반영했습니다.

센터 영문명: **University–Industry Liaison Center for Engineers**.
[공식 조직도](http://www.snu-nteam.kr/sub/sub01_04.php)의
[조직도 이미지](http://www.snu-nteam.kr/images/sub/org.jpg)에서 직접 확인했습니다.

| 성명 | 표시하는 주요 약력 | 근거 |
| --- | --- | --- |
| 곽승엽 | 재료공학부 교수 / 산학협력 공학인재 지원센터장 / Renovatio 지도교수 | 학부·센터장 직책은 서울대 공식 자료, 지도교수 관계는 사용자 지시 |
| 양희원 | 센터 명예교수 / (전) 현대자동차·기아 연구개발본부장 / (전) 남양연구소 연구개발 총괄 | 본부장 경력은 현대차 공식 자료, 명예교수 및 전직 표기는 사용자 확인 |
| 송민규 | 센터 명예교수 / (전) 현대자동차 제네시스사업본부장 / (전) 제네시스 COO | 본부장·COO 경력은 현대차·제네시스 공식 자료, 명예교수 및 전직 표기는 사용자 확인 |

양희원 교수님의 남양연구소 경력에는 후속 수정에 따라 **(전)**을 명시했습니다.
센터 명예교수 위촉은 공개 자료에서 독립적으로 확인하지 못했으므로 공개 자료로
검증한 사항이라고 표현하지 않습니다.

- [서울대 공과대학: 곽승엽 교수와 센터장 직책](https://eng.snu.ac.kr/research/research-achievements?bbsidx=8249&md=v)
- [서울대 공학연구원 산하센터](https://ioer.snu.ac.kr/공학연구원-산하센터/)
- [현대차 공식 자료: Heui Won Yang, Head of R&D](https://www.hyundai.com/worldwide/en/newsroom/detail/hyundai-motor-group-recognized-for-leadership-and-innovation-at-2025-automotive-news-all-star-awards-0000001001)
- [현대차 공식 자료: 송민규 제네시스사업본부장](https://www.hyundaimotorgroup.com/ko/news/CONT0000000000180287)
- [제네시스 공식 자료: Mike (Min Kyu) Song의 Global Head·COO 경력](https://newsroom.genesis.com/mike-song-named-new-global-head-of-genesis/)

## 변경과 병합

- 메뉴: Home → About → Members → Partners → Vehicle → News → Recruiting.
- Home: 흰 로고, DESIGN. BUILD. RACE. 표어, News를 Vehicle보다 위에 배치.
- About: Renovatio 설명과 로고를 제목 아래의 흰 배경으로 이동. 두 문장을 별도 문단으로 나누고, 데스크톱에서는 각 문장이 한 줄이 되도록 설명 폭을 확대하고 로고를 오른쪽에 배치. 설명 글씨는 1280px 화면에서 22px, 1760px 화면에서 24px. Competition Structure 문장 삭제.
- Members: 소개 교체, Advisor 탭 추가, 사진·개인 클릭 없이 약력 표시, Advisor 설명 21px(영문 20px)로 확대, 팀별 인원수 표시 삭제, 이규원 항공우주공학과 수정, 강경운 팀복 사진 반영.
- Partners: “한국 모터스포츠의 시작점”을 상단 제목으로 이동. 소속·센터를 먼저 소개. Sponsorship Tiers와 기존 하단 기관 섹션 삭제. 하단에 BECOME A PARTNER, 이메일, 인스타그램 추가.
- 후원 등급: Main Sponsor / **Platinum Sponsor**. AJIN Industrial, KOLON, YONGSAN, YOUNGONE이 Platinum Sponsor입니다.
- 코오롱: [공식 영문 사이트](https://www.kolon.com/en/main)의 [영문 CI SVG](https://www.kolon.com/common/en/images/logo-kolon-color.svg)로 전체 위치 교체. 원본 SVG 크기에 의존하지 않고 표시 영역에 맞춰 확대합니다.
- 기관 카드: 로고와 설명을 가로로 배치하고 내용에 따라 카드 높이를 정해 Renovatio 밑의 빈 공간 제거. 후원사 이름 18px, 후원 설명 14px, 연락처 18px로 확대.
- News: Solar 기사 제거, 2건 유지, 동일 제목 크기, 사진 전체 표시, 사진 아래 제목. 제목 26–36px, 요약 19px로 확대하고 본문 간격 축소.
- Recruiting: 김민우님의 `e99632c3bcfcd25ae0e488a0342e85a43766a3fa`를 원격 `main`에서 가져와 합쳤습니다. 팀원 체계와 14개 모집 분야를 유지하고, 사용자 후속 지시에 따라 설명을 한글·영문 명사형 bullet로 바꿨습니다. 서체·캐시 키도 맞췄습니다.
- Recruiting 배치: 데스크톱에서 팀원 체계 3열, 모집 분야 2열, 설명 20px. 모바일은 1열로 전환하며 글씨 크기를 유지. 고정된 큰 빈 영역 제거.
- 정회원 설명: “수습 부원으로서 성실하고 적극적인 팀 활동 시 정회원으로 전환” / “차량 설계와 제작에 직접 참여” 두 bullet로 확정.
- 공용 본문과 섹션: 본문 20px(모바일 19px), 섹션 간격 36–60px(모바일 32px). 상단 제목 영역의 고정 최소 높이 제거.

공용 CSS/JS 및 Recruiting CSS 캐시 키: `20261012-6`.
원격과 합치기 전 작업본은 Git stash `3c85eafb86d1551c7a9b7e1f5fbeac85408fab5a`에 보존했습니다.

## 검증

- 7개 페이지: 데스크톱 1280px, 모바일 390px에서 한글·영문 표시와 글자 넘침 확인.
- 작은 모바일 320px: Recruiting·News·Partners·Advisor의 한글·영문 글자 넘침 추가 확인. Partners 제목 크기 조정.
- 발견한 About·Members·Vehicle 제목 넘침과 Recruiting 영문 메뉴 넘침 수정.
- 기관 카드의 가로 배치와 불필요한 하단 여백 제거 확인.
- About의 두 문장과 공통 푸터 표어가 1280px·1760px 한글 화면에서 한 줄씩 표시됨을 확인.
- 홈·News 기사 제목의 동일 크기, 사진 아래 제목 및 사진 전체 표시 확인.
- HTML 태그·중복 ID·로컬 경로·CSS 자산 검사 통과.
- JavaScript 구문 검사와 Git 충돌·공백 검사 통과.
- 현재 범위는 로컬 수정본과 미리보기이며 원격 push·배포는 수행하지 않음.
