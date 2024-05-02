import React, { useState, useEffect } from 'react';
import UserTable from '../../components/UserManagementTable/UserManagementTable';
import { UserService } from '../../Services/User.Service';
import UserProfileModal from '../../components/UserProfileModal/UserProfileModal';
import { SCREEN_MODES } from '../../utilities/app.constants';
import { toast } from 'react-toastify';
import { validateFormData } from '../../helper/index';
const UserManagement = () => {

    const INITIAL_USER_FORM={
        _id:  { value: "", isRequired: false, disable: false, readonly: false, validator: "text", error: "", },
        email:  { value: "", isRequired: true, disable: false, readonly: false, validator: "email", error: "", },
        fullName:  { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        password:  { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        address:  { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        country:  { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        jobCategory:  { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        dob:  { value: "", isRequired: true, disable: false, readonly: false, validator: "date", error: "", },
        role:  { value: "", isRequired: true, disable: false, readonly: false, validator: "text", error: "", },
        mobile:  { value: "", isRequired: true, disable: false, readonly: false, validator: "number", error: "",charLength: [10], },
      }
    const [users, setUsers] = useState([]);
    const [UserForm, setUserForm] = useState(INITIAL_USER_FORM);
    const [openModal, setOpenModal] = useState(false);
    const [helperText, setHelperText] = useState(true);
    const [mode, setMode] = useState(null);

    useEffect(() => {
        getInitialData();
    }, []);

    const getInitialData = () => {
        UserService.getAllUsers()
            .then((res) => {
                if (res.status === 200) {
                    setUsers(res.data);
                }
            })
            .catch((error) => {});
    };

    const handleRequest = (mode, id) => {
        console.log('mode', mode, id);
        setMode(mode)
        if(mode === SCREEN_MODES.CREATE){
            setUserForm({
                ...INITIAL_USER_FORM,
                password: {
                    ...UserForm.password,
                    isRequired: false,
                }
            })
            setOpenModal(true);
        }
        if(mode === SCREEN_MODES.EDIT){
            UserService.getUserById(id)
            .then((res) => {
                if (res.status === 200) {
                    setUserForm({
                        ...UserForm,
                        email: {
                            ...UserForm.email,
                            value: res.data.email,
                        },
                        address: {
                            ...UserForm.address,
                            value: res.data.address,
                        },
                        country: {
                            ...UserForm.country,
                            value: res.data.country,
                        },
                        dob: {
                            ...UserForm.dob,
                            value: res.data.dob,
                        },
                        fullName: {
                            ...UserForm.fullName,
                            value: res.data.fullName,
                        },
                        jobCategory: {
                            ...UserForm.jobCategory,
                            value: res.data.jobCategory,
                        },
                        mobile: {
                            ...UserForm.mobile,
                            value: res.data.mobile,
                        },
                        password: {
                            ...UserForm.password,
                            value: res.data.password,
                            isRequired: false,

                        },
                        role: {
                            ...UserForm.role,
                            value: res.data.role,
                        },
                        _id: {
                            ...UserForm._id,
                            value: res.data._id,
                        },
                    });
                    setOpenModal(true);
                }
            })
            .catch((error) => {
                console.log('error', error);
                toast.error(error);
            });
        }
    };

    const generateReport = () => {
        console.log('Generate Report');
    };


    const handleCloseModal = () => {
        setUserForm(INITIAL_USER_FORM)
        setOpenModal(false);
    };

    const handleInputFocus=(property,section)=>{
        if (section === "GI")
        setUserForm({
          ...UserForm,
          [property]: {
            ...UserForm[property],
            error: null,
          },
        });
        
      }
    const onInputHandleChange = (property, value) => {
        setHelperText(true);
        if (property === "email") {
          setUserForm({
              ...UserForm,
              email: {
                ...UserForm.email,
                value: value,
              },
            });
          }
          if(property === "role"){
            setUserForm({
                ...UserForm,
                role: {
                  ...UserForm.role,
                  value: value,
                },
              });
          }
          if (property === "fullName") {
            setUserForm({
                ...UserForm,
                fullName: {
                  ...UserForm.fullName,
                  value: value,
                },
              });
            }
            if (property === "address") {
              setUserForm({
                  ...UserForm,
                  address: {
                    ...UserForm.address,
                    value: value,
                  },
                });
              }
              if (property === "password") {
                setUserForm({
                    ...UserForm,
                    password: {
                      ...UserForm.password,
                      value: value,
                    },
                  });
                }
                if (property === "country") {
                  setUserForm({
                      ...UserForm,
                      country: {
                        ...UserForm.country,
                        value: value,
                      },
                    });
                  }
                  if (property === "jobCategory") {
                    setUserForm({
                        ...UserForm,
                        jobCategory: {
                          ...UserForm.jobCategory,
                          value: value,
                        },
                      });
                    }
                    if (property === "dob") {
                      const  DateValueString = new Date(value).toISOString().split('T')[0];
                      setUserForm({
                          ...UserForm,
                          dob: {
                            ...UserForm.dob,
                            value: DateValueString,
                          },
                        });
                      }
                      if (property === "mobile") {
                        setUserForm({
                            ...UserForm,
                            mobile: {
                              ...UserForm.mobile,
                              value: value,
                            },
                          });
       }
    }

    const HandleBtnResponse=async (mode)=>{
        if(mode===SCREEN_MODES.CREATE){
            setUserForm({...UserForm,
            password: {
                ...UserForm.password,
                isRequired:false,
                value: "temp",

            }})
            const [validateData, isValid] = await validateFormData(UserForm);
            setUserForm(validateData);
            if(isValid){
                const payload = {
                    email: UserForm.email.value,
                    fullName: UserForm.fullName.value,
                    password: UserForm.password.value,
                    address: UserForm.address.value,
                    country: UserForm.country.value,
                    jobCategory: UserForm.jobCategory.value,
                    dob: UserForm.dob.value,
                    mobile: UserForm.mobile.value

                }
                UserService.Register(payload).then((res)=>{
                    console.log('res',res)
                    if(res.status === 201){
                        toast.success("User Created Successfully")
                        setOpenModal(false);
                        getInitialData();
                    }
                }).catch((err)=>{
                    console.log("err",err)
                    toast.error(err)
                })
            }
        }else{
            const [validateData, isValid] = await validateFormData(UserForm);
            setUserForm(validateData);
            console.log("updae",isValid)
            if(isValid){
                const payload = {
                    id: UserForm._id.value,
                    email: UserForm.email.value,
                    fullName: UserForm.fullName.value,
                    password: UserForm.password.value,
                    address: UserForm.address.value,
                    country: UserForm.country.value,
                    jobCategory: UserForm.jobCategory.value,
                    dob: UserForm.dob.value,
                    mobile: UserForm.mobile.value,
                    role: UserForm.role.value
                }

                UserService.updateUser(payload.id,payload).then((res)=>{
                    if(res.status === 200){
                        toast.success("User Updated Successfully")
                        setOpenModal(false);
                        getInitialData();
                    }
                }).catch((err)=>{
                    console.log("err",err)
                    toast.error(err)
                })
            }
        }
    }
    return (
        <div className="ml-64 mt-8 px-4">
            <UserTable users={users} handleRequest={handleRequest} generateReport={generateReport} />
            <UserProfileModal open={openModal} handleClose={handleCloseModal} UserForm={UserForm} helperText={helperText} onInputHandleChange={onInputHandleChange} handleInputFocus={handleInputFocus} HandleBtnResponse={HandleBtnResponse} mode={mode}/>
        </div>
    );
};

export default UserManagement;
