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
          main: "#dd2126",
        },
        secondary: {
          main: "#274D36",
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
      backgroundColor:theme.palette.white.main,
      color: theme.palette.text.primary,
      borderColor: theme.palette.text.primary,
    },
    "& .MuiInputLabel-root": {
      color: theme.palette.text.primary,
      pointerEvents: "none",
    },
    "& .MuiInputLabel-root.Mui-required::after": {
      color: "red",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: theme.palette.text.primary,
      opacity: 1,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: theme.palette.text.primary,
        borderWidth: "1px",
      },
      "&:hover fieldset": {
        borderColor: theme.palette.text.primary,
      },
      "&.Mui-focused fieldset": {
        color: theme.palette.text.primary,
        borderColor: theme.palette.text.primary,
        borderWidth: "2px",
      },
      "& input::placeholder": {
        color: theme.palette.text.primary,
      },
    },
    "& .MuiAutocomplete-popupIndicator": {
      color: theme.palette.text.primary,
    },
    "& .MuiSvgIcon-root": {
      color: theme.palette.text.primary, //icon color
    },
    "&.Mui-disabled .MuiOutlinedInput-root": {
      borderColor: "red",
    },
  }));