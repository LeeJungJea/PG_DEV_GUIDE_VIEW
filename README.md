# PG_DEV_GUIDE_VIEW 프론트엔드

PG_DEV_GUIDE_API를 위한 공식 뷰 포털(Next.js → Vite 기반)로, CJ PG 개발자 센터의 느낌을 살려 데모 페이지, API 문서, 지원 정보를 제공합니다.

## 0. Relay 절차
1. `scripts/relay.sh` 또는 `scripts/relay.ps1`를 실행해서 Codex/Claude CLI와 Relay 파이프라인을 연동합니다.
2. Relay 도구를 통해 지시 사항을 작성하고 `CODEX_RELAY_REPORT.md`에 로그를 남깁니다.

## 1. 개발 스택
- **프레임워크:** Vite + React 18  
- **스타일:** Tailwind CSS + Material UI 컴포넌트  
- **상태관리:** Zustand  
- **HTTP 클라이언트:** Axios (React Query 활용)  
- **빌드 도구:** TypeScript, ESLint, Prettier

## 2. 로그인 시나리오
- 네비게이션 바의 `로그인` 버튼을 누르면 모달이 열리고, `demo.user / password` 조합으로 API 서버(`http://localhost:8080` 또는 `VITE_API_HOST`로 지정된 주소)에 인증 요청을 전송합니다.
- 로그인 성공 시 JWT `accessToken`이 로컬스토리지에 저장되며, 이후 요청에 `Authorization: Bearer {token}`을 붙일 수 있습니다.
- API 서버의 `/auth/login`은 `pgdev.users` 테이블을 조회하고 `BCryptPasswordEncoder`로 검증한 뒤 토큰을 발급하도록 구현되었습니다.

## 3. 디렉터리 구조
```
src/
 ├── api/         // axios와 React Query 헬퍼
 ├── components/  // Navbar, LoginDialog 등 공통 UI
 ├── hooks/       // Zustand 기반 인증 스토어
 ├── pages/       // Home, Playground, Support, API 문서
 ├── store/       // 필요 시 글로벌 상태
 ├── styles/      // 글로벌 스타일과 테마
 ├── types/       // 공유 타입
 └── utils/       // 공통 유틸 함수
```
