import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <>
      <h1 className="flex justify-center text-6xl my-16 text-center">Contact</h1>
      <pre className="flex justify-center text-m mx-60 mb-10">
        Email:    <a 
          href="mailto:isaac.wonha.lee@outlook.com" 
          target="_blank" 
          className="text-sky-600 hover:text-sky-900 underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out"
        >
          isaac.wonha.lee@outlook.com
        </a>
      </pre>
      <pre className="flex justify-center text-m mx-60 mb-10">
        Github:    <a 
          href="https://github.com/isaaclee12" 
          target="_blank" 
          className="text-sky-600 hover:text-sky-900 underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out"
        >
          Click Here!
        </a>
      </pre>
      <pre className="flex justify-center text-m mx-60 mb-10">
        LinkedIn:    <a 
          href="https://www.linkedin.com/in/isaac-lee-621873133/" 
          target="_blank" 
          className="text-sky-600 hover:text-sky-900 underline decoration-transparent hover:decoration-inherit transition duration-300 ease-in-out"
        >
          Click Here!
        </a>
      </pre>
    </>
  );
};

export default ContactPage;
