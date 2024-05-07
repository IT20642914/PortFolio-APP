import { axiosPrivateInstance } from "."


const  UpdateDiscount = (id,payload) => {
    return axiosPrivateInstance.patch(`post/update-discount/${id}`,payload);
}

const getReservation = (id) => {
    return axiosPrivateInstance.get(`api/reservation/ServiceProviderReservations/${id}`);
}

export const PaymentService = {
    UpdateDiscount,
    getReservation
}