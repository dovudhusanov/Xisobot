import React, {useState} from 'react'
import Modal from '../modal/modal'
import "./user-info.css"

function UserInfo({data, UserData, setUserInfo}) {

    const [modalOpen, setModalOpen] = useState(false)

    const handleDelete = () => {
        const deletedUser = UserData.filter((user) => user.id !== data?.id)
        localStorage.setItem('userInfos', JSON.stringify(deletedUser))
        setUserInfo(deletedUser)
    }

    return (
        <tr>
            <td>{data?.id}</td>
            <td>{data?.direction}</td>
            <td>{data?.fullName}</td>
            <td>{data?.phoneNumber}</td>
            <td>{data?.workTime}</td>
            <td>{data?.address}</td>
            <td style={{color: "green", cursor: "pointer"}} onClick={() => {
                setModalOpen(true)
            }}>edit
            </td>
            <td style={{color: "red", cursor: "pointer"}} onClick={handleDelete}>delete</td>
            <Modal setModalOpen={setModalOpen} userInfos={UserData} setUserInfo={setUserInfo} data={data} btnName="Edit"
                   modalOpen={modalOpen}/>
        </tr>
    )
}

export default UserInfo