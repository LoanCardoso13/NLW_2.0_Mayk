<h1 align="center">Proffy</h1>

This application was developed in plain HTML, CSS and JavaScript, powered by 
NunJucks template engine. The database is managed using sqlite-async. It consists
of an environment where students go seek assistance for subjects they are 
struggling with in school, at the weekday and time they choose. 

The landing page has two options, one for students seeking online classes, the
other for tutors seeking to register themselves in the database to give classes. 

By opening the search tutors page, students will find all the 
tutors in the database, and by scrolling down they can see the scheduling 
availability and tutoring subject of each one. There's an option to send a 
whatsapp message
for the tutor, so the student can reach his chosen tutor in this way. The 
classes are meant to be ministered online. By selecting dropdown options in this
page and clicking "filter", the student can then filter from the database his 
specified subject, weekday and time. The resulting tutors from this search will
not display its schedule availability since it's already implicit that it aligns
 with the student's searching parameters.

When opening the give classes page, the tutor will fill a form and register him
(her)self in the database. It is mandatory to fill every field except the 
biographic text. All this will be displayed for students (except whatsapp
number) upon using the above described search tutors page. The whatsapp number
will be used if the student click on the option to send a whatsapp message. 
All data will be 
stored in the sqlite database file. The avatar for the profile should be linked
from an already existed profile, such as github for instance, so what is stored
is the web address of the image. 

<h1></h1>

## 🛠️ Installation Steps

1. Clone the repository

```bash
git clone https://github.com/LoanCardoso13/NLW_2.0_Mayk.git
```

2. Change the working directory

```bash
cd NLW_2.0_Mayk
```

3. Install dependencies

```bash
npm install
```

4. Run the app

```bash
npm start
```

🌟 You are all set!
Access [Proffy](http://localhost:3000) through port 3000
```bash
http://localhost:3000
```

Your directory tree will look like this:
```
src
 ┣ database
 ┃ ┣ createProffy.js
 ┃ ┣ database.sqlite
 ┃ ┗ db.js
 ┣ utils
 ┃ ┗ format.js
 ┣ views
 ┃ ┣ index.html
 ┃ ┣ layout.html
 ┃ ┣ modal.html
 ┃ ┣ registration.html
 ┃ ┗ search-results.html
 ┣ pages.js
 ┗ server.js
```

```
public
 ┣ assets
 ┃ ┣ back.svg
 ┃ ┣ give-classes.svg
 ┃ ┣ landing.svg
 ┃ ┣ logo.svg
 ┃ ┣ purple-heart.svg
 ┃ ┣ rocket.svg
 ┃ ┣ smile.svg
 ┃ ┣ study.svg
 ┃ ┣ success-background.svg
 ┃ ┣ success-check-icon.svg
 ┃ ┣ warning.svg
 ┃ ┗ whatsapp.svg
 ┣ scripts
 ┃ ┣ registration.js
 ┃ ┗ search-results.js
 ┗ styles
 ┃ ┣ main.css
 ┃ ┣ modal.css
 ┃ ┣ page-home.css
 ┃ ┣ registration.css
 ┃ ┣ responsive.css
 ┃ ┗ search-results.css
```

<h1 align="center">Hi 👋, I'm Loan Cardoso</h1>
<h3 align="center">A passionate Software Engineer based in London, Ontario</h3>

- <img src="https://raw.githubusercontent.com/Rocketseat/awesome/master/assets/rocketseat.png" /> This project was made possible by [Rocketseat](https://rocketseat.com.br/)

- 🔭 I’m currently working on [Proffy](https://github.com/LoanCardoso13/NLW_2.0_Mayk)

- 🌱 I’m currently learning **React, React Native**

- 👯 I’m looking to collaborate on [SCUTTLE](https://github.com/MXET/SCUTTLE)

- 👨‍💻 All of my projects are available at [https://github.com/LoanCardoso13?tab=repositories](https://github.com/LoanCardoso13?tab=repositories)

- 💬 Ask me about **C, Python, JavaScript**

- 📫 How to reach me **jow13_122@yahoo.com**

<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="https://linkedin.com/in/https://www.linkedin.com/in/loan-cardoso-mech/" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="https://www.linkedin.com/in/loan-cardoso-mech/" height="30" width="40" /></a>
<a href="https://www.hackerrank.com/jow13_122" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/hackerrank.svg" alt="jow13_122" height="30" width="40" /></a>
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://www.arduino.cc/" target="_blank"> <img src="https://cdn.worldvectorlogo.com/logos/arduino-1.svg" alt="arduino" width="40" height="40"/> </a> <a href="https://www.cprogramming.com/" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/c/c-original.svg" alt="c" width="40" height="40"/> </a> <a href="https://www.docker.com/" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://www.gatsbyjs.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg" alt="gatsby" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.linux.org/" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://devicons.github.io/devicon/devicon.git/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://reactnative.dev/" target="_blank"> <img src="https://reactnative.dev/img/header_logo.svg" alt="reactnative" width="40" height="40"/> </a> <a href="https://scikit-learn.org/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" alt="scikit_learn" width="40" height="40"/> </a> <a href="https://www.sqlite.org/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" alt="sqlite" width="40" height="40"/> </a> </p>

