import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-python';

const CodeBlock = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div className="code-block">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <style jsx>{`
        .code-block {
          background-color: #2d2d2d;
          max-width: 90%;
          margin-left:5%;
          padding:0
        }

        pre {
          margin: 0;
          padding: 0;
        }

        code {
          font-family: 'Fira Code', monospace;
          font-size: 14px;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

export default CodeBlock;