# chat-app
this is a chat app


├── .gitignore
├── README.md
├── client
    ├── .env
    ├── .gitignore
    ├── README.md
    ├── context
    │   ├── AuthContext.jsx
    │   └── ChatContext.jsx
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── bgImage.svg
    │   ├── favicon.svg
    │   └── vite.svg
    ├── src
    │   ├── App.jsx
    │   ├── assets
    │   │   ├── arrow_icon.png
    │   │   ├── assets.js
    │   │   ├── avatar_icon.png
    │   │   ├── bgImage.svg
    │   │   ├── code.svg
    │   │   ├── favicon.svg
    │   │   ├── gallery_icon.svg
    │   │   ├── help_icon.png
    │   │   ├── img1.jpg
    │   │   ├── img2.jpg
    │   │   ├── logo.png
    │   │   ├── logo_big.svg
    │   │   ├── logo_icon.svg
    │   │   ├── menu_icon.png
    │   │   ├── pic1.png
    │   │   ├── pic2.png
    │   │   ├── pic3.png
    │   │   ├── pic4.png
    │   │   ├── profile_alison.png
    │   │   ├── profile_enrique.png
    │   │   ├── profile_marco.png
    │   │   ├── profile_martin.png
    │   │   ├── profile_richard.png
    │   │   ├── react.svg
    │   │   ├── search_icon.png
    │   │   └── send_button.svg
    │   ├── components
    │   │   ├── ChatContainer.jsx
    │   │   ├── RightSidebar.jsx
    │   │   └── Sidebar.jsx
    │   ├── index.css
    │   ├── lib
    │   │   └── utils.js
    │   ├── main.jsx
    │   └── pages
    │   │   ├── HomePage.jsx
    │   │   ├── LoginPage.jsx
    │   │   └── ProfilePage.jsx
    └── vite.config.js
└── server
    ├── .env
    ├── controllers
        ├── messageCOntroller.js
        └── userController.js
    ├── lib
        ├── cloudinary.js
        ├── db.js
        └── utils.js
    ├── middleware
        └── auth.js
    ├── models
        ├── Message.js
        └── User.js
    ├── package-lock.json
    ├── package.json
    ├── routes
        ├── messageRoutes.js
        └── userRoutes.js
    └── server.js
