import { useEffect } from "react";

export default function useKey(call, key) {
  useEffect(() => {
    function callBack(e) {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        call();
      }
    }
    document.addEventListener("keydown", callBack);

    return () => document.removeEventListener("keydown", callBack);
  }, [call, key]);
}
