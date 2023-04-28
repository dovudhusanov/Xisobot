import React, {useState} from 'react';
import Modal from '../modal/modal';
import UserInfo from '../user-info/user-info';
import "./users.css"
import NotFoundUsers from "./components/not-found-users/not-found-users";

function Users() {

    const [userInfos, setUserInfo] = useState(() => {
        const savedUserInfos = localStorage.getItem("userInfos");
        return savedUserInfos ? JSON.parse(savedUserInfos) : [{
            id: 1,
            direction: "CEO",
            fullName: "Abdullaev Ilhomjon",
            phoneNumber: "+998905556252",
            workTime: "8",
            address: "namangan dambog'"
        }];
    });

    const [modalOpen, setModalOpen] = useState(false)

    return (
        <>
            <div className="wrapper">
                <div className="selection">
                    <div onClick={() => setModalOpen(true)}>
                        <i className="fa-solid fa-plus"><p>Добавить</p></i>
                    </div>
                </div>
                <table>
                    <tr>
                        <th>№</th>
                        <th>Направление</th>
                        <th>Фамилия Имени</th>
                        <th>Номер телефона</th>
                        <th>Рабочее время</th>
                        <th>Адрес</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    {Object.keys(userInfos).length === 0 ? (
                        <NotFoundUsers />
                    ) : (
                        <>
                            {userInfos?.map(user => (
                                <UserInfo data={user} key={user.id} UserData={userInfos} setUserInfo={setUserInfo}/>
                            ))}
                        </>
                    )}
                </table>
            </div>
            <Modal setModalOpen={setModalOpen} setUserInfo={setUserInfo} add userInfos={userInfos} btnName="Add User" modalOpen={modalOpen}/>
        </>
    )
}

export default Users