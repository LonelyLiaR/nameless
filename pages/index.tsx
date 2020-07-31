import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import marked from "marked";

import Index from "@/layouts/Index";

import { useStore } from "@/store";
import useTestData from "@/store/test";

import testMD from "@/store/test.md";

console.log(testMD)

const IndexPage = observer(() => {
  const store = useStore();
  const { count, setCount, isDarkMode, setDarkMode } = store;
  const { test } = useTestData();

  marked.setOptions({
    gfm: true,
  });

  // useEffect(() => {
  //   fetch(testMD)
  //     .then((res) => res.text())
  //     .then((text) => console.log(marked(text)));
  // }, []);

  return (
    <Index>
      <p>
        index page. {count} pow: {test}
      </p>
      <p>is{!isDarkMode ? "n't" : null} Dark Mode</p>
      <button onClick={() => setCount(count + 1)}>add count</button>
      <button onClick={() => setDarkMode(!isDarkMode)}>toggle dark mode</button>
    </Index>
  );
});

export default IndexPage;
