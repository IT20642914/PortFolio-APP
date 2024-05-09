import React,{useState,useEffect} from 'react'
import Styles from './MyPayment.module.scss'
import PaymentTable from '../../components/PaymentTable/PaymentTable'
import {PaymentService} from '../../Services/Payment.Service'
import { toast } from 'react-toastify'
import { SCREEN_MODES } from '../../utilities/app.constants'
import { useNavigate } from 'react-router-dom'
import { validateFormData } from '../../helper/FormValidators'
import PaymentModal from '../../components/PaymentModal/PaymentModal'
const MyPayment = () => {
const [payments, setPayments] = useState([]);
const navigate = useNavigate();
const INITIAL_PAYMENT_FORM = {
    _id: { value: "", isRequired: true, disable: false, readonly: false, validator: "null", error: "", },
    amount: { value: "", isRequired: true, disable: false, readonly: false, validator: "number", error: "", },
    date: { value: "", isRequired: true, disable: false, readonly: false, validator: "date", error: "", },
    bank: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
    branch: { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
    remark: { value: "", isRequired: false, disable: false, readonly: false, validator: "text", error: "", },
    reservationId: { value: "", isRequired: true, disable: false, readonly: false, validator: "null", error: "", },
    ServiceProviderId: { value: "", isRequired: true, disable: false, readonly: false, validator: "null", error: "", },
    bankSlipUrl: { value: "", isRequired: true, disable: false, readonly: false, validator: "null", error: "", },
    UserId: { value: "", isRequired: true, disable: false, readonly: false, validator: "null", error: "", },
    promoCode:{ value: "", isRequired: false, disable: true, readonly: true, validator: "null", error: "", },
    postAmount:{ value: "", isRequired: false, disable: true, readonly: true, validator: "null", error: "", },
    discountPercentage:{ value: "", isRequired: false, disable: true, readonly: true, validator: "null", error: "", },
    disStartDate:{ value: "", isRequired: false, disable: true, readonly: true, validator: "null", error: "", },
    disEndDate:{ value: "", isRequired: false, disable: true, readonly: true, validator: "null", error: "", },
};

const [PaymentForm, setPaymentForm] = useState(INITIAL_PAYMENT_FORM);
const [openModal, setOpenModal] = useState(false);
const [helperText, setHelperText] = useState(true);
const [mode, setMode] = useState(null);

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
    console.log("first",mode,payment)
    if(mode===SCREEN_MODES.CREATE){
        navigate('/reservations')
        // setPaymentForm(INITIAL_PAYMENT_FORM);
        // setMode(SCREEN_MODES.CREATE);
        // setOpenModal(true);
    }
    if(mode===SCREEN_MODES.EDIT){
        PaymentService.getPaymentDetailsById(payment).then((res)=>{
            console.log("res",res.data)
            setPaymentForm({...PaymentForm,
                _id: { value: res.data._id, isRequired: true, disable: false, readonly: false, validator: "null", error: "", },
                amount: { value: res.data.amount, isRequired: true, disable: false, readonly: false, validator: "number", error: "", },
                date: { value: res.data.date, isRequired: true, disable: false, readonly: false, validator: "date", error: "", },
                bank: { value: res.data.bank, isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
                branch: { value: res.data.branch, isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
                remark: { value: res.data.remark, isRequired: false, disable: false, readonly: false, validator: "text", error: "", },
                reservationId: { value: res.data.reservationId, isRequired: true, disable: false, readonly: false, validator: "null", error: "", },
                ServiceProviderId: { value: res.data.ServiceProviderId, isRequired: true, disable: false, readonly: false, validator: "null", error: "", },
                bankSlipUrl: { value: res.data.bankSlipUrl, isRequired: true, disable: false, readonly: false, validator: "null", error: "", },
                UserId: { value: res.data.UserId, isRequired: true, disable: false, readonly: false, validator: "null", error: "", },
                promoCode:{ value: res.data.promoCode, isRequired: false, disable: true, readonly: true, validator: "null", error: "", },
                postAmount:{ value: res.data.postAmount, isRequired: false, disable: true, readonly: true, validator: "null", error: "", },
                
                
            });

        }).catch((error)=>{
            console.error("Error fetching payment:",error);
            toast.error("Error fetching payment");
        });
        setMode(SCREEN_MODES.EDIT);
        setOpenModal(true);
    }

    if(mode===SCREEN_MODES.DELETE){
        PaymentService.deletePayment(payment).then((res)=>{
            console.log("Payment deleted successfully",res.data);
            toast.success("Payment deleted successfully");
            initialData();
        }).catch((error)=>{
            console.error("Error deleting payment:",error);
            toast.error("Error deleting payment");
        });
    }

}

const generateReport=()=>{
    console.log("first")
    
}

const handleClose=()=>{
    setPaymentForm(INITIAL_PAYMENT_FORM);
    setOpenModal(false);
  }

  const handleInputFocus = (field) => {
    setPaymentForm({
      ...PaymentForm,
      [field]: {
        ...PaymentForm[field],
        error: "",
      },
    });
  }

  const onInputHandleChange = (field, value) => {
    setPaymentForm({
      ...PaymentForm,
      [field]: {
        ...PaymentForm[field],
        value: value,
      },
    });
  }

  const handlePaymentSubmit=async ()=>{
    setHelperText(true);
    const [validateData, isValid] = await validateFormData(PaymentForm);
    setPaymentForm(validateData);
    console.log("first",isValid)
    console.log("first",PaymentForm);
    if(isValid){

      const paymentData = {
        _id: PaymentForm._id.value,
        amount: PaymentForm.amount.value,
        date: PaymentForm.date.value,
        bank: PaymentForm.bank.value,
        branch: PaymentForm.branch.value,
        remark: PaymentForm.remark.value,
        reservationId: PaymentForm.reservationId.value,
        ServiceProviderId: PaymentForm.ServiceProviderId.value,
        bankSlipUrl: PaymentForm.bankSlipUrl.value,
        UserId: PaymentForm.UserId.value,
        postAmount: PaymentForm.postAmount.value,

      }
      PaymentService.updatePayment(paymentData._id,paymentData).then((res)=>{
        console.log("Payment  successfully",res.data);
        toast.success(" Updated Payment  successfully");
        handleClose();
        initialData();
      }).catch((error)=>{
        console.error("Error adding payment:",error);
        toast.error("Error adding payment");
      });
      
    }

  }
  return (
    <div className={Styles.container}>
    <h1 className="text-2xl font-bold mb-4">My Payments</h1>

  <PaymentTable  payments={payments} handleRequest={handleRequest} generateReport={generateReport}/>
  <PaymentModal mode={mode} open={openModal} paymentForm={PaymentForm} handleClose={handleClose}  handleInputFocus={handleInputFocus} onInputHandleChange={onInputHandleChange} helperText={helperText} handlePaymentSubmit={handlePaymentSubmit} />
      
        </div>
  )
}

export default MyPayment