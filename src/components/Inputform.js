import React, { useState } from 'react'


const Inputform = () => {
    const [userRegistration , setUserRegistration] =  useState({
        username:"",
        email:"",
        phone:"",
        password:""
    })

    const [records , setRecords] =  useState([]);


    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(name , value);

        setUserRegistration({...userRegistration , [name]:value })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newRecord = { ...userRegistration , id:new Date().getTime().toString()}
        setRecords([...records ,newRecord])

        setUserRegistration({username:"" , email:"" , phone:"" , password:""})
    }

  return (
   <>
       <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">FullName</label>
                <input type="text" autoComplete="off"
                value={userRegistration.username}
                onChange={handleInput}
                 name="username" id="username"/>
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="text" autoComplete="off"
                value={userRegistration.email}
                onChange={handleInput}
                 name="email" id="email"/>
            </div>
            <div>
                <label htmlFor="phone">Phone</label>
                <input type="text" autoComplete="off" 
                value={userRegistration.phone}
                onChange={handleInput}
                name="phone" id="phone"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" autoComplete="off"
                value={userRegistration.password}
                onChange={handleInput}
                 name="password" id="password"/>
            </div>
            <button type="submit">Submit</button>
       </form>

        <div>
            {
                records.map((curElem) =>{
                    const {id , username , email , phone , password} = curElem;
                    return(
                        <div className="showDataStyle" key={id}>
                        <p>{username}</p>
                        <p>{email}</p>
                        <p>{phone}</p>
                        <p>{password}</p>
                        </div>
                    )
                })
            }
        </div>

   </>
  )
}

export default Inputform;
