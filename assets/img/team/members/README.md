# 팀원 증명사진

`/team/` 페이지 ROSTER 섹션에 들어가는 구성원 사진을 이 폴더에 둡니다.

## 규격

| 항목 | 값 |
|---|---|
| 비율 | **3:4 세로** (증명사진 표준) |
| 최소 크기 | 600 × 800 px |
| 권장 크기 | 900 × 1200 px |
| 형식 | JPG (품질 80~85) |
| 파일 크기 | 장당 300KB 이하 권장 |
| 배경 | 단색 밝은 배경 또는 무채색 |

카드는 `object-fit: cover`로 사진을 채우므로 3:4가 아니어도 깨지지는 않지만,
얼굴이 잘릴 수 있습니다. 업로드 전에 3:4로 잘라주세요.

## 파일명

파일명은 `/team/index.html`의 각 카드 주석에 적힌 이름을 그대로 사용합니다.

```
manager-01.jpg
manager-02.jpg
engineering-lead.jpg
engineering-chassis.jpg
engineering-aerodynamics.jpg
engineering-vehicle-dynamics-01.jpg
engineering-vehicle-dynamics-02.jpg
engineering-powertrain-01.jpg
engineering-powertrain-02.jpg
business-01.jpg
```

## 넣는 방법

`/team/index.html`에서 해당 카드를 찾아, 주석 처리된 `<img>` 한 줄의 주석을
풀고 바로 아래 `<div class="roster-photo-empty">` 한 줄을 지웁니다.

```html
<figure class="roster-photo">
  <img src="/assets/img/team/members/manager-01.jpg" alt="홍길동 프로필 사진" width="600" height="800" loading="lazy">
</figure>
```

`alt`는 파일명이 아니라 실제 이름으로 바꿔주세요. 화면 낭독기 사용자가 듣는 값입니다.

## 동의

구성원 사진은 본인 동의를 받은 것만 올립니다. 팀을 떠난 구성원의 사진은
해당 카드와 함께 파일도 삭제합니다.
