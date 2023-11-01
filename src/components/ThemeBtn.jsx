import { Switch } from "@nextui-org/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { darkTheme, lightTheme } from "../features/themeSlice";

const ThemeBtn = () => {
  const theme = useSelector((state) => state.theme.theme);
  const disaptch = useDispatch();

  const handleOnChange = (e) => {
    let darkMode = e.currentTarget.checked;

    if (darkMode) {
      disaptch(darkTheme());
    } else {
      disaptch(lightTheme());
    }
  };

  return (
    <>
      <Switch
        onChange={handleOnChange}
        isSelected={theme == "dark"}
        color="secondary"
      />
    </>
  );
};

export default ThemeBtn;
