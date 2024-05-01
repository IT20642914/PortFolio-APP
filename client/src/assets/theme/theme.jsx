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
        error: "#e40000",
      },
      primary: {
        main: "#418ca3",
      },
      secondary: {
        main: "#3A7D90",
      },
      tertiary: {
        main: "#027193",
      },
      success: {
        main: "#00C853",
      },
      error: {
        main: "#e40000", // Ensure error property is defined here
      },
      white:{
        main:"#FFFFFF"
      },
      warning: {
        main: "#FFB800",
      },
    },
  });
  

export const StyledTextField = styled(TextField)(({ theme, error }) => ({
  "& .MuiInputBase-root": {
    backgroundColor: theme.palette.tertiary.main,
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
      color: theme.palette.white.main,
    },
  },
  "& .MuiAutocomplete-popupIndicator": {
    color: theme.palette.text.primary,
  },
  "& .MuiSvgIcon-root": {
    color: theme.palette.text.primary,
  },
  "&.Mui-disabled .MuiOutlinedInput-root": {
    color: theme.palette.text.disabled,
    borderColor: "red",
  },
  // Change text color to red when error is true
  "& .MuiFormHelperText-root": {
    color:theme.palette.white.main,
    backgroundColor: alpha(theme.palette.error.main, 0.4),
  },
}));
