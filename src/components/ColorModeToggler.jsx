import React from "react";
import { useColorMode, Button } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
function ColorModeToggler() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <header>
      <Button onClick={toggleColorMode} borderRadius="50">
        {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
      </Button>
    </header>
  );
}

export default ColorModeToggler;
