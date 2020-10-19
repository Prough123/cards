import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Button as ButtonBase} from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";

const useStyles = makeStyles({
    grey: {
        color: "#707070",
    },
    button: {
        "&:hover, &:focus": {
            backgroundColor: blue[600]
        }
    }
});

type ButtonProps = {
    className?: string;
    fontColor?: "grey";
    backgroundColor?: "blue";
    variant?: "text" | "outlined" | "contained";
    disableElevation?: boolean;
    color?: "inherit" | "primary" | "secondary";
    disabled?: boolean;
    type?: "submit";
    onClick?: () => void;
    fullWidth?: boolean;
};

const Button: React.FC<ButtonProps> = (props) => {
    const classes = useStyles();
    return (
        <ButtonBase
            {...props}
            className={props.className+" "+ classes.button}
            // className={(props.fontColor ? classes[props.fontColor] : "" )+" "+( props.backgroundColor  === "blue" ? classes[props.backgroundColor] : "")}
        />
    );
};

export default Button;
