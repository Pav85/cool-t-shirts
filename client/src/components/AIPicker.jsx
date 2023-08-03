import React from "react";

import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Ask Ai..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking Ai..."
            customStyles="text-xs"
          />
        ) : (
          <div>
            <CustomButton
              type="outline"
              title="Ai Logo"
              handleClick={() => handleSubmit("logo")}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
