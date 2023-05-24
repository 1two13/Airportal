# Airportal

## 목차

- [배포 링크](#1-배포-링크)
- [주요 기능](#2-주요-기능)
- [실행 방법](#3-실행-방법)
- [개발 환경](#4-개발-환경)
- [기술 스택](#5-기술-스택)
- [파일 구조](#6-파일-구조)

## 1. [배포 링크](https://airportal.vercel.app/)

## 2. 주요 기능

- 검색어 추천 기능
- `react-select`를 사용하여 셀렉 구현, 선택된 값에 따라 화면에 보여지는 값 변경
- `json-server`를 사용하여 가짜 API로 서버 구축
    - json 파일 생성 후, 해당 파일을 기반으로 서버 구축
- 검색어 입력 시, 재렌더링 없이 URL 변경되도록 최적화
    - `query-string`을 사용하여 URL의 쿼리 문자열 작업
- 웹 페이지의 상단으로 바로 이동할 수 있도록 따라다니는 top 버튼 생성
- `vercel`을 사용하여 배포

## 3. 실행 방법

#### install

```
npm install
```

#### start

```
npm start
```

## 4. 개발 환경

- 테스트 환경 : Chrome browser
- IDE : Visual Studio Code 1.71.0 (Universal)
- 인프라 : Vercel
- 주요 라이브러리
  - React : 17.0.2
  - styled-components: 5.3.5
  - react-router-dom: 6.3.0
  - react-select: 5.7.3
  - query-string: 7.1.1
  - styled-reset: 4.3.4

## 5. 기술 스택

#### Environment

<code><img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white"></code>
<code><img src="https://img.shields.io/badge/Github-181717?style=for-the-badge&logo=github&logoColor=white"></code>
<code><img src="https://img.shields.io/badge/VScode-007ACC?style=for-the-badge&logo=vscode&logoColor=white"></code>

#### config

<code><img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"></code>

#### Development

<code><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"></code>
<code><img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/></code>

#### deploy

<code><img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=Axios&logoColor=white"/></code>

## 6. 파일 구조

```
 📦public
 📦src
 ┣ 📂api
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📜AirportList.js
 ┃ ┣ 📜ItemBar.js
 ┃ ┣ 📜Loading.js
 ┃ ┗ 📜SearchBar.js
 ┣ 📂db
 ┃ ┗ 📜airport.json
 ┣ 📂static
 ┣ 📜App.js
 ┣ 📜Router.js
 ┗ 📜index.js
```
