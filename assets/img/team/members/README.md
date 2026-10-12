# 팀원 증명사진

`/team/` 페이지 ROSTER 섹션에 들어가는 구성원 사진을 이 폴더에 둡니다.

## 규격

| 항목 | 값 |
|---|---|
| 비율 | **3:4 세로** (증명사진 표준) |
| 크기 | 900 × 1200 px |
| 형식 | JPG (품질 86, progressive) |
| 파일 크기 | 장당 150KB 안팎 |
| 배경 | 단색 밝은 배경 또는 무채색 |

카드는 `object-fit: cover`로 사진을 채우므로 3:4가 아니어도 깨지지는 않지만,
얼굴이 잘릴 수 있습니다. 업로드 전에 3:4로 잘라주세요. 원본이 1:1 증명사진이면
좌우를 균등하게 잘라내면 됩니다.

## 파일명

`romanized-이름.jpg` 형식입니다. 현재 등록된 파일:

```
kim-minkyu.jpg        김민규      Manager / PM
you-minwoo.jpg        유민우      Manager / PM
kim-minwoo.jpg        김민우      Engineering / Lead
kang-kyungwoon-teamwear.png    강경운      Engineering / Chassis
lee-gyuwon.jpg        이규원      Engineering / Aerodynamics
lee-jaejun.jpg        이재준      Engineering / Aerodynamics
yun-jonghwan.jpg      윤종환      Engineering / Vehicle Dynamics
kim-dooeun.jpg        김두은      Engineering / Vehicle Dynamics
kim-injae.jpg         김인재      Engineering / Powertrain
cho-yongwoo.jpg       조용우      Engineering / Powertrain
oh-songwoo.jpg        오송우      Business / Lead
```

## 넣는 방법

`/team/index.html`에서 같은 팀의 카드를 복사한 뒤 `<img>`의 `src`와 `alt`를
바꿉니다.

```html
<figure class="roster-photo">
  <img src="/assets/img/team/members/hong-gildong.jpg" alt="홍길동 (HONG GILDONG)" width="900" height="1200" loading="lazy">
</figure>
```

`alt`는 파일명이 아니라 실제 이름으로 적어주세요. 화면 낭독기 사용자가 듣는 값입니다.

## 동의

강경운님의 현재 프로필은 사용자가 제공한 얼굴 사진을 기존 파란 팀복에 맞춰
AI 편집한 PNG입니다. 1086 × 1448px로 3:4 비율을 유지하며, 기존 원본 JPG는
보관합니다. 제작 도구와 프롬프트는 `docs/kang-kyungwoon-portrait-20261012.md`에
기록했습니다.

구성원 사진은 본인 동의를 받은 것만 올립니다. 팀을 떠난 구성원의 사진은
해당 카드와 함께 파일도 삭제합니다.

## 2026-10-12 하단 수정

유민우·이재준·김인재·조용우의 `*-shirt-repair.png`는 ImageGen 하단 수정 자산입니다. 원본 JPG를 보존하며, 얼굴은 원본을 사용하고 CSS로 하단만 겹쳐 표시합니다. 상세 기록은 `docs/member-shirt-repairs-20261012.md`에 있습니다.
