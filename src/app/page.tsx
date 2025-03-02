"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  a11yDark,
  atomDark,
  base16AteliersulphurpoolLight,
  cb,
  coldarkCold,
  coldarkDark,
  coy,
  darcula,
  dracula,
  duotoneDark,
  duotoneEarth,
  duotoneForest,
  duotoneLight,
  duotoneSea,
  duotoneSpace,
  funky,
  ghcolors,
  gruvboxDark,
  gruvboxLight,
  holiTheme,
  materialDark,
  materialLight,
  materialOceanic,
  nightOwl,
  nord,
  okaidia,
  oneDark,
  oneLight,
  pojoaque,
  prism,
  shadesOfPurple,
  synthwave84,
  tomorrow,
  twilight,
  vscDarkPlus,
  xonokai,
  zTouch,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { useEffect, useRef, useState } from "react";
import html2canvas from "html2canvas";
import LoaderAnimation from "@/components/LoaderAnimation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Define a union type for theme keys
type ThemeKey = keyof typeof themeMap;

interface input {
  code: string;
  language: string;
  selectedTheme: ThemeKey;
}

const languages = [
  { value: "javascript", label: "JavaScript" },
  { value: "jsx", label: "JSX" },
  { value: "typescript", label: "TypeScript" },
  { value: "tsx", label: "TSX" },
  { value: "python", label: "Python" },
  { value: "java", label: "Java" },
  { value: "c", label: "C" },
  { value: "cpp", label: "C++" },
  { value: "csharp", label: "C#" },
  { value: "php", label: "PHP" },
  { value: "ruby", label: "Ruby" },
  { value: "go", label: "Go" },
  { value: "rust", label: "Rust" },
  { value: "swift", label: "Swift" },
  { value: "kotlin", label: "Kotlin" },
  { value: "scala", label: "Scala" },
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "scss", label: "SCSS" },
  { value: "bash", label: "Bash" },
  { value: "powershell", label: "PowerShell" },
  { value: "sql", label: "SQL" },
  { value: "json", label: "JSON" },
  { value: "yaml", label: "YAML" },
  { value: "xml", label: "XML" },
  { value: "markdown", label: "Markdown" },
  { value: "dart", label: "Dart" },
  { value: "r", label: "R" },
  { value: "matlab", label: "MATLAB" },
  { value: "perl", label: "Perl" },
  { value: "objectivec", label: "Objective-C" },
  { value: "haskell", label: "Haskell" },
  { value: "lua", label: "Lua" },
  { value: "julia", label: "Julia" },
  { value: "elixir", label: "Elixir" },
  { value: "clojure", label: "Clojure" },
  { value: "groovy", label: "Groovy" },
  { value: "dockerfile", label: "Dockerfile" },
  { value: "graphql", label: "GraphQL" },
  { value: "solidity", label: "Solidity" },
];

const prismThemes = [
  { value: "a11yDark", label: "A11y Dark" },
  { value: "atomDark", label: "Atom Dark" },
  {
    value: "base16AteliersulphurpoolLight",
    label: "Base16 Ateliersulphurpool Light",
  },
  { value: "cb", label: "CB" },
  { value: "coldarkCold", label: "Coldark Cold" },
  { value: "coldarkDark", label: "Coldark Dark" },
  { value: "coy", label: "Coy" },
  { value: "darcula", label: "Darcula" },
  { value: "dracula", label: "Dracula" },
  { value: "duotoneDark", label: "Duotone Dark" },
  { value: "duotoneEarth", label: "Duotone Earth" },
  { value: "duotoneForest", label: "Duotone Forest" },
  { value: "duotoneLight", label: "Duotone Light" },
  { value: "duotoneSea", label: "Duotone Sea" },
  { value: "duotoneSpace", label: "Duotone Space" },
  { value: "funky", label: "Funky" },
  { value: "ghcolors", label: "GitHub Colors" },
  { value: "gruvboxDark", label: "Gruvbox Dark" },
  { value: "gruvboxLight", label: "Gruvbox Light" },
  { value: "holiTheme", label: "Holi Theme" },
  { value: "materialDark", label: "Material Dark" },
  { value: "materialLight", label: "Material Light" },
  { value: "materialOceanic", label: "Material Oceanic" },
  { value: "nightOwl", label: "Night Owl" },
  { value: "nord", label: "Nord" },
  { value: "okaidia", label: "Okaidia" },
  { value: "oneDark", label: "One Dark" },
  { value: "oneLight", label: "One Light" },
  { value: "palenight", label: "Palenight" },
  { value: "pojoaque", label: "Pojoaque" },
  { value: "prism", label: "Prism" },
  { value: "shadesOfPurple", label: "Shades of Purple" },
  { value: "solarizedDark", label: "Solarized Dark" },
  { value: "solarizedLight", label: "Solarized Light" },
  { value: "synthwave84", label: "Synthwave '84" },
  { value: "tomorrow", label: "Tomorrow" },
  { value: "twilight", label: "Twilight" },
  { value: "vscDarkPlus", label: "VS Code Dark+" },
  { value: "xonokai", label: "Xonokai" },
  { value: "zTouch", label: "Z Touch" },
];

const themeMap = {
  a11yDark,
  atomDark,
  base16AteliersulphurpoolLight,
  cb,
  coldarkCold,
  coldarkDark,
  coy,
  darcula,
  dracula,
  duotoneDark,
  duotoneEarth,
  duotoneForest,
  duotoneLight,
  duotoneSea,
  duotoneSpace,
  funky,
  ghcolors,
  gruvboxDark,
  gruvboxLight,
  holiTheme,
  materialDark,
  materialLight,
  materialOceanic,
  nightOwl,
  nord,
  okaidia,
  oneDark,
  oneLight,
  pojoaque,
  prism,
  shadesOfPurple,
  synthwave84,
  tomorrow,
  twilight,
  vscDarkPlus,
  xonokai,
  zTouch,
};

export default function Home() {
  const codeRef = useRef<HTMLDivElement>(null);
  const [code, setCode] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [selectedTheme, setSelectedTheme] = useState<ThemeKey>("vscDarkPlus");
  const [CodeCopied, setCodeCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);


  const notify = () => {
    toast("Type your code before clicking bro ",{ position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      progressClassName: "!bg-gradient-to-r !from-orange-400 !to-pink-600"
    });
  }

  const downloadAsImage = async (
    codeRef: React.RefObject<HTMLDivElement | null>
  ) => {
    if (!codeRef.current) return;
    if(code){
    try {
      setDownloading(true);
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = codeRef.current?.innerHTML;
      tempDiv.style.position = "absolute";
      tempDiv.style.left = "-9999px";
      tempDiv.style.backgroundColor = "#3371a6";
      document.body.appendChild(tempDiv);

      const styleElements = tempDiv.querySelectorAll("style");
      styleElements.forEach((styleEl) => {
        const textContent = styleEl?.textContent;
        if (textContent) {
          const newCSS = textContent.replace(/oklch\([^)]+\)/g, "#cccccc");
          styleEl.textContent = newCSS;
        }
      });

      const canvas = await html2canvas(tempDiv, {
        backgroundColor: "#3371a6",
        scale: 2,
      });

      document.body.removeChild(tempDiv);

      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "code-snippet.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setDownloading(false);
    } catch (error) {
      console.error("Error generating image:", error);
    }
  }else{
    notify();
    
  }
  };
  const copyImageToClipboard = async (
    codeRef: React.RefObject<HTMLDivElement | null>
  ) => {
    if (!codeRef.current) return;

    if(code){
    try {
      console.log("hey");

      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = codeRef.current?.innerHTML;
      tempDiv.style.position = "absolute";
      tempDiv.style.left = "-9999px";
      tempDiv.style.backgroundColor = "#3371a6";
      document.body.appendChild(tempDiv);

      const styleElements = tempDiv.querySelectorAll("style");
      styleElements.forEach((styleEl) => {
        const textContent = styleEl?.textContent;
        if (textContent) {
          const newCSS = textContent.replace(/oklch\([^)]+\)/g, "#cccccc");
          styleEl.textContent = newCSS;
        }
      });

      const canvas = await html2canvas(tempDiv, {
        backgroundColor: "#3371a6",
        scale: 2,
      });

      document.body.removeChild(tempDiv);

      // Convert canvas to blob
      canvas.toBlob(async (blob) => {
        if (blob) {
          try {
            // Create ClipboardItem and write to clipboard
            const item = new ClipboardItem({ "image/png": blob });
            await navigator.clipboard.write([item]);
            // You might want to add some user feedback here
            // alert('Image copied to clipboard!');
            setCodeCopied(true);
          } catch (err) {
            console.error("Failed to copy image: ", err);
            alert(
              "Failed to copy image. This feature may not be supported in your browser."
            );
          }
        }
      }, "image/png");
    } catch (error) {
      console.error("Error generating image:", error);
    }
  }else{
    notify();
  }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value);
  };

  const handleLanguageSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLanguage(event.target.value);
  };

  const handleThemeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTheme(event.target.value as ThemeKey);
  };

  const createFormattedCode = ({ code, language, selectedTheme }: input) => {
    const themeObject = themeMap[selectedTheme] || vscDarkPlus;
    return (
      <SyntaxHighlighter
        language={language}
        style={themeObject}
        showLineNumbers
      >
        {code || `console.log("Hello, World!");`}
      </SyntaxHighlighter>
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeCopied(false);
      clearInterval(interval);
    }, 5000);

    return () => clearInterval(interval);
  }, [CodeCopied]);
  // --------------------------------------------------------------------

  return (
    <div className="min-h-screen bg-black p-8">
      <ToastContainer/>
      <h1 className="text-4xl font-bold text-center text-white mb-8 mt-6">
        Convert Your Code Snippets into Shareable Images
      </h1>
      <p className="text-white text-center mb-10  ">
        Paste in your code and select your favourite theme . Code Snippet
        sharing made easy and minimalistic !{" "}
      </p>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col space-y-4">
            <div className="flex gap-2">
              <select
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={language}
                onChange={handleLanguageSelect}
              >
                <option value="">Select Language</option>
                {languages.map((language) => (
                  <option key={language.value} value={language.value}>
                    {language.label}
                  </option>
                ))}
              </select>
              <select
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedTheme}
                onChange={handleThemeSelect}
              >
                <option value="">Select Theme</option>
                {prismThemes.map((theme) => (
                  <option key={theme.value} value={theme.value}>
                    {theme.label}
                  </option>
                ))}
              </select>
            </div>

            <textarea
              className="w-full h-64 p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              onChange={handleInput}
              placeholder="Type your code here..."
              value={code?code:""}
            />
            <div className=" flex gap-10 ">
              {downloading ? (
                <div className="px-6 py-3">
                  <LoaderAnimation />
                </div>
              ) : (
                <button
                  onClick={() => downloadAsImage(codeRef)}
                  className="px-6 py-3 bg-[#8a852b] flex gap-3 items justify-center text-white rounded-md hover:cursor-pointer hover:bg-[#63613d] focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <div className="flex items-center space-x-2">
                    <img
                      className="h-5 w-5"
                      src="/image.png"
                      alt="Download Icon"
                    />
                    <p>Download as PNG</p>
                  </div>
                </button>
              )}
              {CodeCopied ? (
                <p className="ml-10 mt-5 font-bold text-green-600 flex items-center gap-2 animate-bounce">
                  Copied!
                </p>
              ) : (
                <button
                  onClick={() => copyImageToClipboard(codeRef)}
                  className="px-6 py-3 bg-[#c1db35] flex gap-3 items-center justify-center text-white rounded-md hover:cursor-pointer hover:bg-[#959e62] focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <img
                    className="h-5 w-5"
                    src="/copy-icon.png"
                    alt="Copy Icon"
                  />
                  Copy PNG to clipboard
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
          <div
            className="max-h-[400px] overflow-auto p-4 bg-gray-50 rounded-md"
            ref={codeRef}
          >
            {createFormattedCode({ code, language, selectedTheme })}
          </div>
        </div>
      </div>

      <div className="text-white text-center mb-10 mt-10" >
        Built and shipped by Akshath P . With love  ☕ . Feel free to checkout my profile : <a target="_blank" href="https://akshathp.xyz/">akshathp.xyz</a> 
      </div>
      <div className="text-white text-center mb-10 mt-10" >
              
      </div>
    </div>
  );
}
