import React from "react";

export default function useGet(URL, setData) {
  return React.useCallback(() => {
    fetch(URL)
      .then((result) => result.json())
      .then(setData);
  }, [URL, setData]);
}
