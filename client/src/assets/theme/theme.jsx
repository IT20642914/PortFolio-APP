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
        main: "#224b57",
      },
      secondary: {
        main: "#224b57",
      },
      tertiary: {
        main: "#224b57",
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
      borderColor: "#2a5a68",
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
    color: error ? theme.palette.error.main : theme.palette.white.main,
    backgroundColor: alpha(theme.palette.error.main, 0.2),
  },
  "& .MuiInputAdornment-root.MuiInputAdornment-positionEnd": {
    color: theme.palette.text.primary,
    // Add more styles as needed
  },
  "& .MuiFormLabel-root-MuiInputLabel-root": {
    color: theme.palette.white.main,
  },
}));


export const StyledTableCell = styled(TableCell, {
  shouldForwardProp: (prop) => prop !== "width",
})(({ theme, width }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontSize: 14,
    backgroundColor: "#2a5a68",
    color: theme.palette.common.white,
    padding: "15px",
    borderLeft: "1px solid",
    borderColor: "#2a5a68",
    width: width || "auto",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding: "15px",
    color: theme.palette.common.white,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderBottom: "0.01px solid #E75480 !important",
    width: width || "auto",
  },
  "&:last-child": {
    position: "sticky",
    right: 0,
    zIndex: 10,
  },
}));
