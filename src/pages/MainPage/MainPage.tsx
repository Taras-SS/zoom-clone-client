import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import LeftPartMenu from "./LeftPartMenu/LeftPartMenu";
import RightPart from "./RightPart/RightPart";
import { styles } from "./styles/MainPageStyles";

export default function () {
  const [classes] = useState(styles());

  useEffect(() => {}, []);

  return (
    <Container maxWidth="md" className={classes.mainPageWrapper}>
      <LeftPartMenu />
      <RightPart />
    </Container>
  );
}
