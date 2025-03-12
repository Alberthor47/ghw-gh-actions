import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold my-8">Welcome to My GHW Blog</h1>
      <p className="text-lg mb-4">This is a simple blog application built with Next.js and Tailwind CSS. To test the actions</p>
      <h2 className="text-2xl font-semibold">Recent Posts</h2>
      <ul className="list-disc pl-5">
        <li className="my-2">
          <a className="text-blue-500">Post Title 1</a>
        </li>
        <li className="my-2">
          <a className="text-blue-500">Post Title 2</a>
        </li>
        <li className="my-2">
          <a className="text-blue-500">Post Title 3</a>
        </li>
      </ul>
    </div>
  );
};

export default Home;