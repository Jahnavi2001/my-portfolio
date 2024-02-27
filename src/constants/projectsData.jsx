import work1Image from "../assets/work-1.png";
import work2Image from "../assets/work-2.png";
import work3Image from '../assets/work-3.png'

export const projectsData = [
  {
    id: 1,
    imgPath: work1Image,
    name: "Resume Craft",
    text: "Developed a resume builder application using React, Redux, and Tailwind CSS, featuring three templates, light/dark mode switching, responsive design, and animation effects with Framer Motion.Implemented form handling using Formik, language translations, and unit testing with Jest and React Testing Library in the resume builder application.",
    redirectUrl: "https://resume-craft-cd917b.netlify.app/",
  },
  {
    id: 2,
    imgPath: work2Image,
    name: "My Youtube Clone",
    text: "Developed a React and Redux-based web application enabling users to browse videos integrated with YouTube APIs. Implemented Higher Order Components for enhanced functionality and employed caching and debouncing techniques to optimise search performance.Integrated Firebase for secure user authentication, providing seamless signup and login experiences. Added live chat functionality and nested comment features for increased user engagement. Implemented ESLint, Prettier, and Husky to ensure code quality, enforce coding standards, and automate code formatting.",
    redirectUrl: "https://my-youutube-clone.web.app/",
  },
  {
    id: 3,
    imgPath: work3Image,
    name: 'My Netflix GPT',
    text: 'My Netflix GPT react application using Redux, Tailwindcss, Firebase Authentication and integrating GPT API\'s',
    redirectUrl: 'https://netlfix-gpt.web.app/'
  }
];
