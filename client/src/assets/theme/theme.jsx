import {
    alpha,
    Autocomplete,
    Checkbox,
    createTheme,
    Dialog,
    DialogActions,
    DialogContent,
    DialogProps,
    DialogTitle,
    Select,
    styled,
    Switch,
    TableCell,
    tableCellClasses,
    TableRow,
    TextField,
  } from "@mui/material";

export const theme = createTheme({
    palette: {
       text: {
          primary: "#000000",
          disabled: "#6b6b6b",
        },
        primary: {
          main: "#418ca3",
        },
        secondary: {
          main: "#3A7D90",
        },
        tertiary: {
          main: "#5aa6bd",
        },
        
        success: {
          main: "#00C853",
        },
        error: {
          main: "#FF0001",
        },
        white:{
            main:"#FFFFFF"
        },
        warning: {
          main: "#FFB800",
        },
}});

export const StyledTextField = styled(TextField)(() => ({
    "& .MuiInputBase-root": {
      backgroundColor:theme.palette.secondary,
      color: theme.palette.white.main,
      borderColor: theme.palette.text.secondary,
    },
    "& .MuiInputLabel-root": {
      color: theme.palette.white.main,
      pointerEvents: "none",
    },
    "& .MuiInputLabel-root.Mui-required::after": {
      color: "red",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: theme.palette.white.main,
      opacity: 1,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.white.main,
        borderWidth: "1px",
      },
      "&:hover fieldset": {
        borderColor: theme.palette.secondary,
      },
      "&.Mui-focused fieldset": {
        color: theme.palette.text.secondary,
        borderColor: theme.palette.secondary,
        borderWidth: "2px",
      },
      "& input::placeholder": {
        color: theme.palette.text.white,
      },
    },
    "& .MuiAutocomplete-popupIndicator": {
      color: theme.palette.text.white,
    },
    "& .MuiSvgIcon-root": {
      color: theme.palette.text.white, //icon color
    },
    "&.Mui-disabled .MuiOutlinedInput-root": {
      borderColor: "red",
    },
  }));