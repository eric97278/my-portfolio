/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type ReadmeProps = {
   section?: string; // Rendre la section optionnelle
};

// Le contenu du README directement intégré ici.
const readmeContent = {
   "📊 GitHub Stats": `![](https://github-readme-stats.vercel.app/api?username=Eric97278&theme=dark&hide_border=false&include_all_commits=false&count_private=false)



![](https://github-readme-streak-stats.herokuapp.com/?user=Eric97278&theme=dark&hide_border=false)



![](https://github-readme-stats.vercel.app/api/top-langs/?username=Eric97278&theme=dark&hide_border=false&include_all_commits=false&count_private=false&layout=compact)



---



[![](https://visitcount.itsvg.in/api?id=Eric97278&icon=0&color=0)](https://visitcount.itsvg.in)`
};

export const Readme: React.FC<ReadmeProps> = ({ section }) => {
   const readme = readmeContent[section || "📊 GitHub Stats"] || ''; // Récupère le contenu basé sur la section

   return (
      <article className="prose mx-auto">
         <ReactMarkdown remarkPlugins={[remarkGfm]}>{readme}</ReactMarkdown>
      </article>
   );
};
