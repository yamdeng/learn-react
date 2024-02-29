step1 : create-react-app 프로젝트 생성 -현재 폴더 기준으로 프로젝트 템플릿 생성 : npx create-react-app . -실행 확인 : npm run start

step2 : prettier, eslint 적용 -라이브러리 설치
: yarn add prettier eslint eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y --dev
-vscode 플러그인 설치
-vscode 적용 설정파일 add : .vscode/settings.json

step3.eslint, prettier 설정 파일 추가
-.eslintrc.json
-.prettierrc.js

step4.mui 라이브러리 설치
-npm install @mui/material @emotion/react @emotion/styled
-npm install @fontsource/roboto
-npm install @mui/icons-material

step5.font 라이브러리 설치
npm i --save @fortawesome/fontawesome-svg-core
npm install --save @fortawesome/free-solid-svg-icons
npm install --save @fortawesome/react-fontawesome

step6.react-router 반영
npm install react-router-dom localforage match-sorter sort-by

step7.package.json eslint 정의되어있는 부분 삭제

step8.경고메시지 제거
-yarn add @babel/plugin-proposal-private-property-in-object --dev
