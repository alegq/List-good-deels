// компонент для отображения одного case из всего списка хороших дел
import React from "react";
import { Card, IconButton } from "@mui/material";
import styles from "../styles/Case.module.scss";
import { Delete } from "@mui/icons-material";

type Props = {
  text: string;
  code: number;
  cbDeletCase(code: number): void;
};

const Case: React.FC<Props> = (props) => {
  const deleted = () => {
    props.cbDeletCase(props.code);
  };

  return (
    <Card className={styles.case}>
      {props.code}.{props.text}
      <IconButton style={{ marginLeft: "auto" }} onClick={deleted}>
        <Delete />
      </IconButton>
    </Card>
  );
};

export default Case;
