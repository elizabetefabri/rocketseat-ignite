import { Header } from "./components/Header";
import {Post} from "./components/Post";
import {Sidebar} from "./components/Sidebar";

import styles from './assets/styles/App.module.css';
import './assets/styles/global.css';

const posts = [
  {
    id: 1,
    author: {
        avatarUrl: "https://github.com/elizabetefabri.png",
        name: "Elizabete Fabri",
        role: "Front-end Developer"
    },
    content: [
        {type: 'paragraph', content: 'Fala galera 👋',},
        {type: 'paragraph', content: 'Acabei de subir um projeto no meu portifa.',},
        {type: 'link', content: '👉 jane.design/doctor',},
    ],
    publishedAt: new Date('2023-05-10 20:00:00'),
},
{
    id: 2,
    author: {
        avatarUrl: "https://github.com/diego3g.png",
        name: "Diego Fernandes",
        role: "CTO @ Rocketseat"
    },
    content: [
        {type: 'paragraph', content: 'Fala galera 👋',},
        {type: 'paragraph', content: 'Diego3G Acabei de subir um projeto no meu portifa.',},
        {type: 'link', content: '👉 jane.design/doctor',},
    ],
    publishedAt: new Date('2023-10-23 20:00:00'),
}
];

export function App() {
  return(
    <div>
      <Header />
      <div className={styles.wrapper}>
          <Sidebar />
          <main>
              {posts.map(post => {
                return (
                  <Post
                    key={post.id}
                    post={post}
                  />
                )
              })}
          </main>
      </div>
    </div>
  )
}