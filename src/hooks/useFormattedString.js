import React from "react";

export default function useFormattedString(stringToFormat) {
  const [formattedString, setFormattedString] = React.useState("");

  const formatString = React.useCallback(() => {
    setFormattedString(
      `${stringToFormat.slice(0, 200)}...`
    );
  }, [stringToFormat]);

  React.useEffect(() => {
    formatString();
  }, [formatString, stringToFormat]);

  return formattedString;
}
