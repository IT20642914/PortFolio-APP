import React,{useState,useEffect} from 'react'
import Styles from './MyPayment.module.scss'
import PaymentTable from '../../components/PaymentTable/PaymentTable'
import {PaymentService} from '../../Services/Payment.Service'
import { toast } from 'react-toastify'
const MyPayment = () => {
const [payments, setPayments] = useState([]);


useEffect(() => {
    initialData();
}, []);

const initialData = async () => {
    try {
        const res = await PaymentService.getAllPayments();
        console.log("ress",res.data )
        setPayments(res.data);
    } catch (error) {
        console.error('Error fetching payments:', error);
        toast.error('Failed to fetch payments');
    }

}

const handleRequest=(mode,payment)=>{

}

const generateReport=()=>{
    
}
  return (
    <div className={Styles.container}>
    <h1 className="text-2xl font-bold mb-4">My Payments</h1>

  <PaymentTable  payments={payments} handleRequest={handleRequest} generateReport={generateReport}/>
        </div>
  )
}

export default MyPayment