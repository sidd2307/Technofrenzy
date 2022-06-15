import React from "react";
import "./css/question.css";

// utils
import getAge from "../utils/getAge";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import MarkdownIt from "markdown-it";
hljs.registerLanguage("javascript", javascript);

export default function Question(props) {
  const technology = "javascript";
  const temp = getAge(props.datePosted);

  console.log(props.code);
  return (
    <div className="questioncomponent">
      <div className="heading">
        <h1>{props.heading}</h1>

        <h6>{temp}</h6>
      </div>
      {props.description}
      {props.categoryNameFull}

      <br />
      <div
        className="code_display"
        dangerouslySetInnerHTML={{
          __html: markdownParser.render(
            `\`\`\` ${technology}\n${props.code}\n\`\`\``
          ),
        }}
      />
    </div>
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
