# 팀원 사진 하단 수정 기록

기준일: 2026-10-12 (Asia/Seoul)

유민우·이재준·김인재·조용우 사진 하단의 합성 경계와 옷 마감을 수정했습니다. Built-in image_gen을 사용했으며 원본 JPG는 보존합니다.

생성 결과의 얼굴을 원본 얼굴 대신 사용하지 않습니다. HTML에서 원본을 그대로 표시하고, 생성 PNG는 하단 옷 영역만 CSS 마스크로 덧씌웁니다. 위쪽 85%는 원본이고 85–91%에서 자연스럽게 전환합니다. 사진 카드와 상세 보기에 동일하게 적용됩니다.

| 구성원 파일명 | 원본 | 사이트가 사용하는 수정 자산 | 생성 원본 저장 경로 |
| --- | --- | --- | --- |
| you-minwoo | assets/img/team/members/you-minwoo.jpg | assets/img/team/members/you-minwoo-shirt-repair.png | C:\Users\user\.codex\generated_images\01a12f11-66d5-77f2-b393-762a0d49d237\exec-d7ed2090-31d8-410c-98ea-f406db053b55.png |
| lee-jaejun | assets/img/team/members/lee-jaejun.jpg | assets/img/team/members/lee-jaejun-shirt-repair.png | C:\Users\user\.codex\generated_images\01a12f11-66d5-77f2-b393-762a0d49d237\exec-0ac501f0-0fe5-4325-99a7-2c5461991e38.png |
| kim-injae | assets/img/team/members/kim-injae.jpg | assets/img/team/members/kim-injae-shirt-repair.png | C:\Users\user\.codex\generated_images\01a12f11-66d5-77f2-b393-762a0d49d237\exec-90df135b-74c5-4275-b0a4-04c6a950493f.png |
| cho-yongwoo | assets/img/team/members/cho-yongwoo.jpg | assets/img/team/members/cho-yongwoo-shirt-repair.png | C:\Users\user\.codex\generated_images\01a12f11-66d5-77f2-b393-762a0d49d237\exec-001d9154-e32a-47bc-bf42-fd03f3dd8034.png |

수정 PNG 크기: 1086 × 1448, RGB. 소비 코드: team/index.html과 assets/styles.css의 .roster-photo-repair.

## 네 번의 개별 편집에 사용한 공통 프롬프트

각 호출의 <member>는 위 표의 구성원 파일명으로 바뀌며, 해당 원본 JPG 하나를 편집 대상으로 전달했습니다.

```text
Use case: identity-preserve, precise-object-edit. Edit target: the single provided member portrait (<member>). Repair only the lower shirt area and bottom edge of this existing 3:4 portrait. Remove any horizontal blue overlay band, abrupt rectangular stitching seam, unfinished fabric edge, or unnatural button-placket continuation near the bottom. Continue the same royal-blue polo fabric naturally to the bottom edge, with subtle physically plausible folds and consistent lighting. Keep the existing white HYUNDAI and SNU FORMULA embroidered chest logos intact, in the same positions and appearance. Preserve the person's identity, exact face, expression, hair, glasses if present, skin texture, head position, shoulders, collar, white background, lighting, and original camera framing. Do not beautify, retouch, redraw, move, enlarge, or reinterpret the face. Keep the upper 85 percent visually unchanged; confine the repair to the lower 15 percent. Do not add text, badges, watermarks, or new logos. Output one clean photorealistic vertical 3:4 portrait matching the original.
```
