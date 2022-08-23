# 👨🏼‍⚖️ Sellon (Frontend)

![](./public/readme/deviceframes.png)

## 🙇‍♂️ contributors

- [👨🏻 이승환](https://github.com/sh981013s)
- [👨🏻 김지형](https://github.com/jihyoung9912)
- [👧🏻 남채원](https://github.com/Chaewon14)
- [👧🏻 양유진](https://github.com/yoojinyang0303)
- [👧🏻 허유라](https://github.com/youra-0526)
- [👨🏻 김신건](https://github.com/shinkeonkim)
- [👨🏻 송경석](https://github.com/songks0922)

## 💁🏻‍♂️ Github for Backend

https://github.com/bunderLikeLion/sellon_backend

## 📄 Description

`멋쟁이 사자처럼 10기 전체 해커톤` 당시에 현대 사회에서 지속적으로 쌓여가는 잡동사니에 대한 공간적 문제를 해결 하고자 기존 물품과 돈이 거래되는 시장에서 탈피하여
본인에게 현재 필요없는 잡동사니와 잡동사니를 경매식으로 교환하는 플랫폼을 개발하였습니다. `(🥉 약 900 명 참여, 150팀 중 동상 수상)`

* `📑 발표자료:` https://drive.google.com/file/d/1Uwi3p94A6QNPQz38whTSGdtU1dAzWQ5T/view?usp=sharing 

## 🖥 Demo


[//]: # (* `📼 Live Demo viodeo on Youtube:` <a href="https://www.youtube.com/watch?v=ONrU6ToIu9U&ab_channel=%EC%9D%B4%EC%8A%B9%ED%99%98" target="\_blank">https://www.youtube.com/watch?v=ONrU6ToIu9U&ab_channel=%EC%9D%B4%EC%8A%B9%ED%99%98 </a>)


## 🎠 기능


#### 👩‍🌾 User

- [x] **회원 가입**
- [x] **로그인**
- [x] **로그아웃**
- [x] **회원 정보 수정**
- [x] **회원 탈퇴**

#### 🧧 Item

- [x] **아이템 등록**
- [x] **아이템 상세보기**
- [x] **아이템 수정**
- [x] **아이템 삭제**

#### 👨🏼‍⚖️ Auction

- [x] **경매 등록**
- [x] **아이템 묶음 채택**
- [x] **경매 철회**
- [x] **채팅**

#### 🏆 Statistics

- [x] **최다 거래자 및 각종 통계 도출**

## ❌ Probs & How we resolved 'em

🤔 처리해야 할 `상태`가 많아도 너무 많았다.
   1. 유저 정보
   2. 지속적으로 업데이트되는 서버로부터 받아오는 데이터
   3. 각각의 데이터들에 대한 pagination 정보
   4. etc....

💡 접근 방식: 
- `recoil` 로 `client 상태` 를 처리하고 `react-query` 로 `server 상태` 를 처리하는 방식으로 분리하였으며, query문들에 대한 `dependencies` 들을 이용하여 최대한 간결하게 처리 및 사용하였다.

--- 

🤔 방대한 API 로 인한 `request` 및 `response` 과정에서의 전체적인 코드 길이 증가 및 같은 코드의 반복이 이루어졌다.

💡 접근 방식: 
- 요청과 응답에 대한 `react-query` 를 사용한 `custom hook` 제작 및 분리작업을 통하여 실제 컴포넌트 렌더링에 대한 코드와 요청 및 응답을 처리하는 코드를
분리하였다.

--- 

🤔 모달 및 박스와 같은 기본적인 컴포넌트들에 대해 유사한 코드들이 지속적으로 `반복`되었고 이에대한 해결책과 개선점이 시급했다.

💡 접근 방식: 
- 반복적으로 사용되는 컴포넌트들에 대해서는 따로 최대한 넓게 사용할 수 있는 `재사용`성이 있는 컴포넌트를 따로 제작하여 필요에 의해 `props` 들을 통하여 사용할 수 있게 접근하였다.

--- 

🤔 해커톤 행사장의 당시 인터넷이 매우 `느렸고` 이에 대해 우리의 `product` 를 제대로 보여줄 수 있을지에 대해 불확실성이 있었다.

💡 접근 방식: 
- 초기 화면 조차 렌더링이 안되어 하얀 화면만 나오는 팀들이 9할이였고, 이에따라 페이지 컴포넌트 별로 `code splitting` 을 통하여 초기 `rendering bundle`을 
최소화 하고자 노력하였다. 또한, js bundle 를 읽는 과정에서 `suspense` 를 사용하여 로딩 컴포넌트를 보여주게 처리하였고, 요청 및 응답 과정에서도 `suspense` 를 적용하여 로딩 컴포넌트를 보여주어 우리팀은 
코드가 계속 정상적으로 돌아가지만, 인터넷 환경으로 인해 속도가 느린것이다를 확실히 어필하도록 노력하였다.


- 느린 인터넷으로 인한 서버에 대한 요청과 응답에 대한 process 를 최소화 하고자 해커톤 현장에서 급하게 `react-query` 에서 제공하는 `staleTime` 을 이용하여
캐싱전략을 적극적으로 사용하려 노력하여 즉각적인 변화를 시각적으로 보여주어야 하는 데이터를 제외하고는 한번 받아온 데이터를 요청과 응답과정 없이 재사용 하는 방식으로 렌더링을 하고, 필요할때만 데이터를
`refetching` 하는 방식으로 접근하였다.   






## 📀 Setup Locally


```bash
git clone https://github.com/bunderLikeLion/sellon_frontend
npm install
npm run start
```

## 📚 Used packages

    "@ant-design/icons": "4.0.0",
    "@emotion/react": "^11.10.0",
    "@emotion/styled": "^11.10.0",
    "@hookform/resolvers": "^2.9.6",
    "@material-ui/core": "^4.12.4",
    "@material-ui/lab": "^4.0.0-alpha.61",
    "@mui/icons-material": "^5.8.4",
    "@mui/joy": "^5.0.0-alpha.38",
    "@mui/lab": "^5.0.0-alpha.92",
    "@mui/material": "^5.9.2",
    "@tanstack/react-query": "^4.0.10",
    "@tanstack/react-query-devtools": "^4.0.10",
    "antd": "^4.22.5",
    "axios": "^0.27.2",
    "moment": "^2.29.4",
    "prettier": "^2.7.1",
    "react": "^17.0.2",
    "react-cookie": "^4.1.1",
    "react-dom": "^17.0.2",
    "react-dropzone": "^14.2.2",
    "react-hook-form": "^7.33.1",
    "react-hot-toast": "^2.3.0",
    "react-loadingg": "^1.7.2",
    "react-router-dom": "^6.3.0",
    "react-scripts": "^5.0.0",
    "react-slick": "^0.29.0",
    "recoil": "^0.7.4",
    "slick-carousel": "^1.8.1",
    "styled-components": "^5.3.5",
    "styled-reset": "^4.4.2",
    "yup": "^0.32.11"
