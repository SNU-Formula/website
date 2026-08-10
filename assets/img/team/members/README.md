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
kim-mingyu.jpg        김민규      Manager / PM
yoo-minwoo.jpg        유민우      Manager / PM
kim-minwoo.jpg        김민우      Engineering / Lead
kang-kyungwoon.jpg    강경운      Engineering / Chassis
lee-gyuwon.jpg        이규원      Engineering / Aerodynamics
lee-jaejun.jpg        이재준      Engineering / Aerodynamics
yoon-jonghwan.jpg     윤종환      Engineering / Vehicle Dynamics
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

구성원 사진은 본인 동의를 받은 것만 올립니다. 팀을 떠난 구성원의 사진은
해당 카드와 함께 파일도 삭제합니다.
