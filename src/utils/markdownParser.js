import MarkdownIt from 'markdown-it'
import hljs from "highlight.js/lib/core";
// import 'node_modules/highlight.js/styles/a11y-dark.css'


const markdownParser = new MarkdownIt({
    breaks: true,
    highlight: function (str, lang = "javascript") {
        if (lang && hljs.getLanguage(lang)) {
            try {
                return `<pre class="hljs"><code>${hljs.highlight(lang, str, true).value
                    }</code></pre>`;
            } catch (error) { }
        }
        return `<pre class="hljs"><code>${markdownParser.utils.escapeHtml(
            str
        )}</code></pre>`;
    },
});

export default markdownParser