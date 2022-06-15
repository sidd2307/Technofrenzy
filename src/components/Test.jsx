import React from "react";
import MarkdownIt from "markdown-it";

// utils import
import codetostring from "../utils/codeToString";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
hljs.registerLanguage("javascript", javascript);

export default function Test({ code, technology = "javascript" }) {
  const newcode = codetostring(code);
  console.log("changed code", newcode);
  console.log(
    "real code",
    "const Animal = (name, type) => {\n  this.name = name\n  this.type = type\n  this.age = 0\n}\n\nAnimal.prototype.birthday = function () {\n  this.age++\n}\n\nconst leo = new Animal('Leo', 'Lion')"
  );

  return (
    <div
      className="code_display"
      style={{ color: "#e6e1dc", backgroundColor: "##2b2b2b" }}
      dangerouslySetInnerHTML={{
        __html: markdownParser.render(
          `\`\`\` ${technology}\n${newcode}\n\`\`\``
        ),
      }}
    />
  );
}

const markdownParser = new MarkdownIt({
  breaks: true,
  highlight: function (str, lang = "javascript") {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<pre class="hljs"><code>${
          hljs.highlight(lang, str, true).value
        }</code></pre>`;
      } catch (error) {}
    }
    return `<pre class="hljs"><code>${markdownParser.utils.escapeHtml(
      str
    )}</code></pre>`;
  },
});
