# PG_DEV_GUIDE_VIEW 테스트 체크리스트 (MD 기반)

기준 문서: `INTEGRATION_TEST_PLAN.md`

라벨 정의:
- **PASS**: 자동화(또는 수동)로 확인 완료
- **PARTIAL**: 일부만 확인(하드코딩/미개발 포함)
- **NOT IMPLEMENTED**: 문서 요구사항은 있으나 현재 구현/연동이 없음

| ID | 우선순위 | 항목 | 자동화 | 현재 상태 | 비고 |
|---|---:|---|---|---|---|
| TC-01 | P0 | 메인 `/` 로딩 + h1/버튼 표시 | ✅ `tests/example.spec.ts` | PARTIAL | GNB/CTA 버튼의 실제 라우팅/동작은 별도 검증 필요 |
| TC-02 | P0 | 결제 API 문서 `/api/payment` 렌더/섹션 존재 | ✅ `tests/docs.spec.ts` | PASS | 엔드포인트/파라미터/Response JSON 존재 확인 |
| TC-03 | P1 | 취소 API 문서 `/api/cancel` 렌더/섹션 존재 | ✅ `tests/docs.spec.ts` | PASS | 시나리오/샘플/파라미터 섹션 표시 확인 |
| TC-04 | P1 | 상태조회 문서 `/api/status` 렌더/상태코드 표시 | ✅ `tests/docs.spec.ts` | PASS | 200/404/500 카드 표시 확인 |
| TC-05 | P0 | Playground `/playground` UI 존재 | ✅ `tests/docs.spec.ts` | PASS | 실제 API 호출/응답 갱신은 목업(하드코딩)으로 간주 |
| TC-06 | P2 | Support `/support` 리스트/등록 UI 존재 | ✅ `tests/docs.spec.ts` | PASS | 문의 데이터는 하드코딩 |
| INT-01 | P0 | 프론트 → 백엔드 `/api/hello` 호출(CORS) | ✅ `tests/integration-api.spec.ts` | PASS | 연동 스모크(문서 TC 외 추가) |

실행:
```powershell
cd C:\test\PG_DEV_GUIDE_VIEW
npx.cmd playwright test
```
