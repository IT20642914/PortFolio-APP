import { axiosPrivateInstance } from "."


const  UpdateDiscount = (id,payload) => {
    return axiosPrivateInstance.patch(`post/update-discount/${id}`,payload);
}

const getReservation = (id) => {
    return axiosPrivateInstance.get(`api/reservation/ServiceProviderReservations/${id}`);
}

const getReservationByOrderID = (id) => {
    return axiosPrivateInstance.get(`api/reservation/getOne/${id}`);

}

const AddPayment = (payload) => {
    return axiosPrivateInstance.post(`api/payments/payment/add`,payload);
}

export const PaymentService = {
    UpdateDiscount,
    getReservation,
    getReservationByOrderID,
    AddPayment
}