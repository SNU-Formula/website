# Members 서체·학교 명칭 정리

기준일: 2026-10-16 (Asia/Seoul). 근거: 같은 날짜 사용자 요청.

## 수정 내용

- 김민우: 한국어 프로필의 `Scottish High International School`에 주변 학력 항목과 같은 Pretendard Variable 적용. 카드 학력에서 상세 학력으로 복제될 때도 같은 서체 유지.
- 오송우: 한국어 상세 이력의 `SNU SOLAR EV 2027`을 주변 혼용 이력 문장과 같은 Pretendard Variable로 표시.
- 두 항목의 영문 화면은 다른 영문 이력과 같은 Michroma 유지. 공통 CSS, 글자 크기, 사진, 카드 배치는 수정하지 않음.
- 이재준 한국어: `취리히 연방 공과대학교(ETH Zurich) 석사과정`.
- 이재준 영어: `Master’s student, ETH Zurich (Swiss Federal Institute of Technology Zurich)`.
- README의 오래된 Members 경로 `/team/`를 실제 정식 경로 `/members/`로 정정.

## 학교명 확인 근거

ETH Zurich의 [공식 로고 사용 지침, RSETHZ 202.4, Art. 3(2)](https://rechtssammlung.sp.ethz.ch/Dokumente/202.4en.pdf)는 학교 영문 전체 명칭을 `Swiss Federal Institute of Technology Zurich`로 명시한다.
학교의 [공식 영문 소개](https://ethz.ch/en/the-eth-zurich.html)에서 `ETH Zurich` 표기도 확인했다.
한국어 표기는 해당 명칭을 풀어 쓴 것으로, 학교가 지정한 공식 한국어 번역이라고 단정하지 않는다.
이재준의 석사과정·서울대학교 기계공학부 학사 정보는 기존 사용자 확인을 유지했고, 개인 학적을 별도로 공개 검증했다고 표현하지 않는다.

## 검증과 반영 상태

- 로컬 `/members/`에서 Engineering·Business 탭 → 프로필 상세 → 한국어·영어 전환 확인.
- 브라우저 계산 서체: 김민우 고등학교 학력과 주변 학력 모두 Pretendard Variable, 오송우의 여섯 한국어 이력 모두 Pretendard Variable.
- 영문 항목은 Michroma 유지. 이재준의 학교 전체 명칭은 카드와 상세 학력에 같은 원본 사용.
- 데스크톱 1280px과 모바일 390px에서 해당 화면 확인. 상세 학력의 가로 넘침 검사.
- 스크린샷·계산값: `references/qa-member-fonts-20261016/`.
- Recruiting 공고 제목도 `모집 공고` / `Recruitment notice`로 통일. 공고 등록 예정 상태와 공고 보기 링크 모두 같은 제목 사용.
- 로컬 수정·검증 완료 후 2026-10-16 사용자 배포 요청에 따라 `main`에 반영한다. 운영 배포 결과는 루트 `TEAM_CONTEXT.md`에 커밋과 함께 기록한다.
