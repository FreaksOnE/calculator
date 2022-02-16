import React, { useState } from 'react';
import EditorComponent from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

const code = `a = 2
b = 3
a + b`;

// eslint-disable-next-line react/prop-types
const Editor = ({ onChange }) => {
  const [text, setText] = useState(code);

  const updateText = (v) => {
    setText(v);
    if (onChange) onChange(v);
  };

  return (
    <EditorComponent
      value={text}
      onValueChange={updateText}
      highlight={(v) => highlight(v, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        // fontSize: 12,
      }}
    />
  );
};

export default Editor;
