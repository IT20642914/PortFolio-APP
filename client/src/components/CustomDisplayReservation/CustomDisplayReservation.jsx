import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../Styles/display.css";
import UpdateReservation from "../UpdateReservation/UpdateReservation";
import DeleteReservation from "../DeleteReservation/DeleteReservation";

function CustomDisplayReservation() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/api/reservation/CustomerReservations/66333bfd36da811eda6d0c91`
      )
      .then((res) => {
        setReservations(res.data);
      })
      .catch((error) => {
        console.error("Error fetching reservations:", error);
      });
  });


  return (
    <div>
      <h2>
        <center>All Reservations</center>
      </h2>
      
      <div className="container mx-auto px-4 py-8 mt-2">
        <table className='"w-full table-auto'>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Reservation Date</th>
              <th>Service Provider ID</th>
              <th>Requests</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, i) => (
              <tr key={i}>
                <td>{reservation.OrderId}</td>
                <td>{reservation.ReservationDate}</td>
                <td>{reservation.ServiceProviderId}</td>
                <td>{reservation.Requests}</td>
                <td>
                  {/* <Link to={`/updateReservation/${reservation.OrderId}`}>
                      <button>Update</button>
                    </Link> */}
                  <UpdateReservation orderId={reservation.OrderId} />
                </td>
                <td>
                  <DeleteReservation orderId={reservation.OrderId} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomDisplayReservation;
