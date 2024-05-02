import React, { useState } from 'react';
import { TableContainer, Paper, Table, TableHead, TableRow, TableBody, Typography, Box, IconButton, Tooltip, TablePagination } from '@mui/material';
import { StyledTableCell } from '../../assets/theme/theme';
import { CustomHeaderCell, CustomButton } from '../Shared';
import { StyledTextField } from '../../assets/theme/theme';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { SCREEN_MODES, APP_TABLE_CONFIGS } from '../../utilities/app.constants';
import style from './AdminJobs.module.scss';

const AdminJobsTable = ({ jobs, paginate, pageNumbers, handleEditRequest, handleAction }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredJobs = searchTerm
    ? jobs.filter((job) =>
        job.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.addressLine1.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.addressLine2.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job._id.includes(searchTerm)
      )
    : jobs;

  return (
    <div className={style.container}>
      <div className={style.gridHeader}>
        <Typography noWrap component="div" className={style.gridTitle}>
          <h3>Recent Jobs</h3>
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <div className="layout-row">
          <StyledTextField
            fullWidth
            label="Search Jobs"
            variant="outlined"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search by Name, email, or City..."
          />
        </div>
      </div>
      <TableContainer component={Paper} className={style.grid}>
        <Table>
          <TableHead>
            <TableRow>
              <CustomHeaderCell>Index</CustomHeaderCell>
              <CustomHeaderCell>Full Name</CustomHeaderCell>
              <CustomHeaderCell>Email Address</CustomHeaderCell>
              <CustomHeaderCell>Address Line 1</CustomHeaderCell>
              <CustomHeaderCell>Address Line 2</CustomHeaderCell>
              <CustomHeaderCell>City</CustomHeaderCell>
              <CustomHeaderCell>Postal Code</CustomHeaderCell>
              <CustomHeaderCell>Country</CustomHeaderCell>
              <CustomHeaderCell>Actions</CustomHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredJobs.map((job, index) => (
              <TableRow key={job._id}>
                <StyledTableCell>{index + 1}</StyledTableCell>
                <StyledTableCell>{job.fullName}</StyledTableCell>
                <StyledTableCell>{job.email}</StyledTableCell>
                <StyledTableCell>{job.addressLine1}</StyledTableCell>
                <StyledTableCell>{job.addressLine2}</StyledTableCell>
                <StyledTableCell>{job.city}</StyledTableCell>
                <StyledTableCell>{job.postalCode}</StyledTableCell>
                <StyledTableCell>{job.country}</StyledTableCell>
                <StyledTableCell>
                  <Box className="layout-row">
                    <IconButton size="small" onClick={() => handleAction(job._id.toString(), SCREEN_MODES.VIEW)}>
                      <Tooltip title="View">
                        <VisibilityOutlinedIcon />
                      </Tooltip>
                    </IconButton>
                    <IconButton size="small" onClick={() => handleEditRequest(job._id.toString(), SCREEN_MODES.EDIT)}>
                      <Tooltip title="Edit">
                        <EditOutlinedIcon />
                      </Tooltip>
                    </IconButton>
                    <IconButton size="small" onClick={() => handleAction(job._id.toString(), SCREEN_MODES.DELETE)}>
                      <Tooltip title="Delete">
                        <DeleteOutlinedIcon />
                      </Tooltip>
                    </IconButton>
                  </Box>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={APP_TABLE_CONFIGS.DEFAULT_ROWS_PER_PAGE_OPTIONS}
        component="div"
        labelRowsPerPage={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', color: 'white' }}>Items per page</div>}
        count={jobs.length}
        page={pageNumbers}
        onPageChange={paginate}
        rowsPerPage={paginate}
        showFirstButton={true}
        showLastButton={true}
        sx={{ backgroundColor: '#a45a70', color: 'white' }}
      />
    </div>
  );
};

export default AdminJobsTable;
