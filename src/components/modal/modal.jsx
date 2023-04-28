import React, { useState } from 'react'
import "./modal.css"
import {toast} from "react-toastify";

function Modal({setModalOpen, data, btnName, userInfos, setUserInfo, add, modalOpen}) {

    console.log(userInfos)

    const [value, setValue] = useState({
        direction: add ? "" : data?.direction,
        fullName: add ? "" : data?.fullName,
        age: add ? "" : data?.age,
        phoneNumber: add ? "" : data?.phoneNumber,
        workTime: add ? "" : data?.workTime,
        address: add ? "" : data?.address
    })

    const handleChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
    }

    const handleAddUser = (e) => {
        e.preventDefault();
        try {
            const newUser =  {
                id: userInfos.length + 1,
                direction: value?.direction,
                fullName: value?.fullName,
                age: value?.age,
                phoneNumber: value?.phoneNumber,
                workTime: value?.workTime,
                address: value?.address
            }
            setUserInfo([...userInfos, newUser])
            localStorage.setItem("userInfos", JSON.stringify([...userInfos, newUser]))
            setModalOpen(false)
            toast.success("User successfully added!")
            setValue({
                direction: "",
                fullName: "",
                age: "",
                phoneNumber: "",
                workTime: "",
                address: "",
            })
        } catch (e) {
            console.log(e)
            toast.success("User not added")
        }
    }

    const handleEditUser = (e) => {
        e.preventDefault();
        try {
            const editedUser = {
                id: data.id,
                direction: value?.direction,
                fullName: value?.fullName,
                age: value?.age,
                phoneNumber: value?.phoneNumber,
                workTime: value?.workTime,
                address: value?.address
            }
            const updatedUserInfos = userInfos.map(user => user.id === editedUser.id ? editedUser : user)
            setUserInfo(updatedUserInfos)
            localStorage.setItem('userInfos', JSON.stringify(updatedUserInfos))
            setModalOpen(false)
            toast.success("User successfully edited!")
        } catch (e) {
            console.log(e)
        }
    };

  return (
    <div className={modalOpen ? "modal-main active-main-modal" : "modal-main"} onClick={() => setModalOpen(false)}>
        <div className={modalOpen ? "modal-inner active-modal" : "modal-inner"} onClick={(e) => e.stopPropagation()}>
          <form onSubmit={add ? handleAddUser : handleEditUser}>
            <input type="text" placeholder='direction' name="direction" value={value.direction} onChange={handleChange} required/>
            <input type="text" placeholder='full name' name="fullName"  value={value.fullName} onChange={handleChange} required/>
            <input type="text" placeholder='phone number' name="phoneNumber"  value={value.phoneNumber} onChange={handleChange} required/>
            <input type="text" placeholder='work time' name="workTime"  value={value.workTime} onChange={handleChange} required/>
            <input type="text" placeholder='address' name="address"  value={value.address} onChange={handleChange} required/>
            <button className='button success-btn' type='submit'>{btnName}</button>
          </form>
        </div>
    </div>
  )
}

export default Modal