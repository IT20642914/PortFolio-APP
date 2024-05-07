import React from 'react';
import { Modal, Button, Grid, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import Styles from './DiscountModal.module.scss'; // Ensure you have this SCSS file
import { StyledTextField } from '../../assets/theme/theme';
import {theme} from '../../assets/theme/theme';
const DiscountModal = ({ open, handleClose, discountForm, setDiscountForm }) => {
    const handleChange = (field, value) => {
        setDiscountForm(prev => ({ ...prev, [field]: value }));
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            className={Styles.modalContainer}
        >
            <div className={Styles.modalContent}>
                <div className={Styles.modalHeader}>
                    <h2 className={Styles.modalTitle}>Add Discount</h2>
                    <Button onClick={handleClose}>Close</Button>
                </div>
                <div className={Styles.modalBody}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <StyledTextField
                            theme={theme}
                                fullWidth
                                label="Promo Code"
                                variant="outlined"
                                value={discountForm.promoCode}
                                onChange={(e) => handleChange('promoCode', e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <StyledTextField
                                 theme={theme}
                                fullWidth
                                label="Discount Percentage"
                                variant="outlined"
                                type="number"
                                value={discountForm.discountPercentage}
                                onChange={(e) => handleChange('discountPercentage', e.target.value)}
                            />
                        </Grid>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Grid item xs={12} sm={6}>
                                <DatePicker
                                    label="Discount Start Date"
                                    value={discountForm.disStartDate}
                                    onChange={(newValue) => handleChange('disStartDate', newValue)}
                                    renderInput={(params) => <StyledTextField      theme={theme} {...params} />}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <DatePicker
                                    label="Discount End Date"
                                    value={discountForm.disEndDate}
                                    onChange={(newValue) => handleChange('disEndDate', newValue)}
                                    renderInput={(params) => <StyledTextField       theme={theme}{...params} />}
                                />
                            </Grid>
                        </LocalizationProvider>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => console.log('Submit', discountForm)}
                            >
                                Save Discount
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Modal>
    );
};

export default DiscountModal;
