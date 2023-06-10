<p align="center">
  <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/83504674/242155920-0a6da61c-2cc1-41ce-946f-195f681ff540.png" width="150" >
</p>

<h1 align="center">Instagram</h1>
<div align="center">
  <img src="https://img.shields.io/github/contributors/ghubprojects/instagram" />
  <img src="https://img.shields.io/github/issues/ghubprojects/instagram" />
  <img src="https://img.shields.io/github/forks/ghubprojects/instagram" />
  <img src="https://img.shields.io/github/stars/ghubprojects/instagram" />
  <img src="https://img.shields.io/github/license/ghubprojects/instagram" />
  <img src="https://img.shields.io/github/languages/count/ghubprojects/instagram" />
  <img src="https://img.shields.io/github/languages/top/ghubprojects/instagram" />
  <img src="https://img.shields.io/github/languages/code-size/ghubprojects/instagram" />
  <img src="https://img.shields.io/github/issues-pr-raw/ghubprojects/instagram" />
</div>

## Table of Contents

-   [About the Project](#about)
    -   [Build with](#build-with)
-   [Getting Started](#getting-started)
    -   [Installation](#installation)
    -   [Running](#running)
-   [File Structure](#file-structure)
-   [Contributors](#contributors)
-   [License](#license)

## About

> Instagram is a fully responsive social media app that is a mimic for [Instagram](https://www.instagram.com/) built using [ReactJS](https://react.dev/).

### Build with

-   <img src="https://vitejs.dev/logo.svg" width="14"/>&nbsp;[Vite](https://vitejs.dev/)
-   <img src="https://github.com/ghubprojects/instagram/assets/83504674/0565b27a-02ae-467e-99cf-093ee913a185" width="14"/>&nbsp;[ReactJS](https://react.dev/)
-   <img src="https://github.com/ghubprojects/instagram/assets/83504674/23132682-4a09-4357-9091-4475f7061ae9" width="14"/>&nbsp;[Chakra UI](https://chakra-ui.com/)
-   <img src="https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg" width="14"/>&nbsp;[Sass](https://sass-lang.com/)
-   <img src="https://github.com/ghubprojects/instagram/assets/83504674/0a5a9ee6-82f8-4cb1-9010-d737fb9f7403" width="14"/>&nbsp;[Axios](https://github.com/axios/axios)

## Getting Started

> This is an list of needed instructions to set up your project locally, to get a local copy up and running follow these instructuins.

### Installation

1. **_Clone the repository_**

```sh
$ git clone https://github.com/ghubprojects/instagram.git
```

2. **_Navigate to repository directory_**

```sh
$ cd instagram
```

3. **_Install pnpm (if pnpm is already being used, skip this step)_**

```sh
$ npm install -g pnpm
```

4. **_Install all dependencies_**

```sh
$ pnpm install
```

### Running

1. **_Compiles and hot-reloads for development_**

```sh
$ pnpm dev
```

2. **_Compiles and minifies for production_**

```sh
$ pnpm build
```

<div align="left">
  
## File Structure

```md
instagram
├── README.md
├── .gitignore
├── .prettierrc
├── index.html
├── LICENSE
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
|
├── src
│ ├── api
| | ├── Auth
| | ├── Post
| | └── httpClient
| |
│ ├── assets
| | ├── fonts
| | ├── icons
| | └── images
| |
│ ├── components
| |
| ├── features
| | ├── AuthForm
| | | ├── LoginForm
| | | └── SignUpForm
| | ├── Navbar
| | | ├── Navbar
| | | └── NavItem
| | ├── NewsFeed
| | | ├── Comment
| | | ├── NewsFeed
| | | └── Post
| | ├── Sidebar
| | | ├── Sidebar
| | | └── SuggestedAccount
| | └── Stories
| | └── Stories
| |
| ├── pages
| | ├── auth
| | | ├── Login
| | | ├── SignUp
| | | └── ForgotPassword
| | ├── Error
| | ├── Explore
| | ├── Home
| | ├── Inbox
| | └── Reels
| |
| ├── routes
| | ├── auth
| | ├── main
| | └── post
| |
| ├── styles
| | ├── theme
| | | ├── Avatar
| | | ├── Button
| | | ├── Input
| | | └── Text
| | ├── fonts
| | ├── global
| | ├── mixins
| | └── variables
| |
| ├── utils
| | ├── enum
| | ├── styles
| | └── layoutItems
| |
│ ├── router.ts
│ ├── App.tsx
│ └── main.tsx
|
├── public
│ └── vite.svg
└── node_modules
```

</div>

## Contributors

> Thanks goes to these wonderful people in the frontend team.

| <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/83504674/242248844-6a937701-fda2-49c7-8988-d6cb81dc6e82.jpg" width="100px" alt="user-image"/><br />[The Anh](https://github.com/ghubprojects) |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |

## License

> This project is licensed under the terms of the [MIT License](https://github.com/ghubprojects/instagram/blob/master/LICENSE).
