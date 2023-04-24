# ✨ Portfolio-web

## Demo video

https://user-images.githubusercontent.com/71035113/233878961-ab1f18ff-32b4-456e-b3e0-dde985bc405c.mov


## ⚙Used Technology

<p > <b>- Front-end</b> </p>
<div >
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/Styled Components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
<img src="https://img.shields.io/badge/Recoil-764ABC?style=flat-square&logo=Recoil&logoColor=white"/>
<img src="https://img.shields.io/badge/Chart.js-F9A03C?style=flat-square&logo=Chart.js&logoColor=white"/>
</div>

<p > <b>- Back-end</b> </p>
<div >
<img src="https://img.shields.io/badge/Node.js-6DB33F?style=flat-square&logo=Node.js&logoColor=white"/>
<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white" />
<img src="https://img.shields.io/badge/Sequelize-4479A1?style=flat-square&logo=Sequelize&logoColor=white" />
<img src="https://img.shields.io/badge/Express-4479A1?style=flat-square&logo=Express&logoColor=white" />
</div>

## 🔍 Feature

1. `Modal`: detailed information modal with image slider
2. `Commenting and deleting function`: username, password and contents are required
3. `View count`: use cookies to prevent duplicate counting

## 🏃‍♀️How to run?

### ✨Web application

Run code on localhost.

- database

```
Import data to MySQL workbench

1. Open MySQL workbench
2. Click [Server]-[Data Import] tab
3. Upload the .sql files

```

you can check more detailed information in [this post](https://velog.io/@finelinefe/TIP-MySQL-Workbench%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%B4-DB-Dump)

- backend

```
$ git clone https://github.com/hyosin-Jang/portfolio-web

$ cd backend

$ npm install

$ npm start

```

-   frontend

```
$ git clone https://github.com/hyosin-Jang/portfolio-web

$ cd frontend

$ npm install

$ npm start

```

you can also use `yarn install` and `yarn start` if npm does not work well.

### Directory

```
├─ backend: API server
│   ├─ assets: Projects detail images
│   ├─ configs: DB connection settings
│   ├─ models: Sequelize orm models
│   └─ routes: API routes
└─ frontend/src: React
   ├─ api: API functions
   ├─ assets: Static files (ex. icon, font)
   ├─ components
   ├─ hooks: Custom hooks
   ├─ pages
   ├─ router
   ├─ styles: Global styles and themes
   └─ utils: Common functions used by multiple files
```
