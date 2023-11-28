import { useCallback, useMemo, useState } from 'react'

const useRegisteredUsers = () => {
    const [users, setUsers] = useState([]);

    const addUserData = useCallback((e) => {
        e.preventDefault();
        setUsers(prev => [...prev, {
            fname: e.target[0].value,
            lname: e.target[1].value,
            email: e.target[2].value,
            password: e.target[4].value,
            dob: e.target[5].value    
        }])
    }, []);

    const UsersTable = useMemo(() => {
        return (
            <>
                <table className='table'>
                    <thead className='table-head'>
                        <tr className='row'>
                            <td className='col'> First Name </td>
                            <td className='col'> Last Name </td>
                            <td className='col'> Email </td>
                            <td className='col'> Password </td>
                            <td className='col'> DOB </td>
                        </tr>
                    </thead>
                    <tbody className='table-body'>
                        {users.map((obj,index)=>{
                            return (
                                    <tr key={index} className='row'>
                                        <td className='col'> {obj.fname} </td>
                                        <td className='col'> {obj.lname} </td>
                                        <td className='col'> {obj.email} </td>
                                        <td className='col'> {obj.password} </td>
                                        <td className='col'> {obj.dob} </td>
                                    </tr>
                            )
                        })}
                    </tbody>
                </table>
            </>
          )
    },[users])

    return {
        addUserData,
        UsersTable
    }
}

export default useRegisteredUsers
