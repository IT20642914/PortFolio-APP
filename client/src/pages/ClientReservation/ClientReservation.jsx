import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
import CustomDisplayReservation from '../../components/CustomDisplayReservation/CustomDisplayReservation';


const ClientReservation = () => {
  return (
    <>
      <NavBar />
      <br />
      <br />
      <CustomDisplayReservation/>
      <Footer />
    </>
  );
}

export default ClientReservation
