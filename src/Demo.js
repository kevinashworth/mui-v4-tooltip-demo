import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import Tooltip from "@material-ui/core/Tooltip";
import HelpOutlinedIcon from "@material-ui/icons/HelpOutlined";

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(4),
    padding: theme.spacing(8),
  },
  tooltip: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: 0,
    fontSize: 18,
    padding: theme.spacing(4),
  },
}));

function Demo() {
  const [position, setPosition] = useState({ clientX: 0, clientY: 0 });
  const classes = useStyles();

  const computeStyleFn = (data) => {
    return {
      ...data,
      styles: {
        ...data.styles,
        left: `${position.clientX + 7}px`,
        top: `${position.clientY + 2}px`,
      },
    };
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setPosition({ clientX, clientY });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Tooltip
        classes={{ tooltip: classes.tooltip }}
        title="Hello, World"
        onMouseMove={handleMouseMove}
        PopperProps={{
          modifiers: {
            computeStyle: {
              fn: computeStyleFn,
              gpuAcceleration: true,
            },
          },
        }}
      >
        <Avatar className={classes.avatar} data-testid="avatar">
          <HelpOutlinedIcon />
        </Avatar>
      </Tooltip>
    </Container>
  );
}

export default Demo;
