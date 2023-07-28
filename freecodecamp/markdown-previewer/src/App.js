import React, { useState, useEffect } from 'react';
import { marked } from 'marked';

import './App.css';

const defaultMarkdown = `
# Heading 1
## Heading 2
[Link to Google](https://www.google.com)
\`inline code\`

\`\`\`
// Code block
function greet() {
  return 'Hello, world!';
}
\`\`\`

- List item 1
- List item 2

> Blockquote

![React Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png)

**Bold Text**
`;

const App = () => {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  useEffect(() => {
    document.getElementById('preview').innerHTML = marked(markdown, { breaks: true });
  }, [markdown]);

  return (
    <div className="container">
      <h1 className="text-center mt-4">Markdown Previewer</h1>
      <div className="row mt-4">
        <div className="col-md-6 editor">
          <h5 className="text-center">Editor</h5>
          <textarea
            id="editor"
            className="form-control"
            value={markdown}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 preview">
          <h5 className="text-center">Preview</h5>
          <div id="preview" className="preview"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
