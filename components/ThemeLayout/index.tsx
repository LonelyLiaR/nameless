import React from "react";
import { observer } from "mobx-react-lite";
import { ThemeProvider } from "styled-components";
import { useStore } from "@/store";

import themesMap from "@/themes";
import configs from "@/configs";

const { THEME, DARK_THEME = "" } = configs;
let { SHOW_DARK_MODE_TOGGLE = true } = configs;
if (Boolean(DARK_THEME) && !configs.hasOwnProperty("SHOW_DARK_MODE_TOGGLE")) {
  SHOW_DARK_MODE_TOGGLE = true;
}

const ThemeLayout = observer(({ children }) => {
  const { isDarkMode } = useStore();
  
  return (
    <ThemeProvider
      theme={
        themesMap[
          isDarkMode && SHOW_DARK_MODE_TOGGLE && Boolean(DARK_THEME)
            ? DARK_THEME
            : THEME
        ]
      }
    >
      {children}
    </ThemeProvider>
  );
});

export default ThemeLayout;
