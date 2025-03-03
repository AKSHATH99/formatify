import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const GeminiResponse = ({ responseText }) => {
  if (!responseText) {
    return <div className="p-4 bg-gray-100 rounded">No response yet</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow p-14  max-h-[500px] overflow-auto">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <div className="my-4">
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className={inline ? "bg-gray-100 px-1 py-0.5 rounded" : ""} {...props}>
                {children}
              </code>
            );
          },
          h1: (props) => <h1 className="text-2xl font-bold mt-6 mb-3" {...props} />,
          h2: (props) => <h2 className="text-xl font-bold mt-5 mb-2" {...props} />,
          h3: (props) => <h3 className="text-lg font-bold mt-4 mb-2" {...props} />,
          p: (props) => <p className="my-2" {...props} />,
          ul: (props) => <ul className="list-disc pl-6 my-3" {...props} />,
          ol: (props) => <ol className="list-decimal pl-6 my-3" {...props} />,
          blockquote: (props) => <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4" {...props} />,
        }}
      >
        {responseText}
      </ReactMarkdown>
    </div>
  );
};

export default GeminiResponse;