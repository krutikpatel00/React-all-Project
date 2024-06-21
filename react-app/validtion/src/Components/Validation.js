import React, { useEffect, useState } from 'react'

const Validation = () => {
      let [InputValue, setInputValue] = useState({})
      let [AllData, setAllData] = useState([])
      let [InputValueError, setInputValueError] = useState({})


      const ValueInputData = (e) => {
            let name = e.target.name;
            let value = e.target.value;
            var decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
            if (name === 'name') {
                  if (value.length < 2) {
                        setInputValueError({ ...InputValueError, nameError: 'enter 2 plus ' })

                  } else (
                        setInputValueError({ ...InputValueError, nameError: '' })
                  )
            } else if (name === 'age') {
                  if (value.length > 2) {
                        setInputValueError({ ...InputValueError, ageError: 'enter 2 plus ' })
                  } else if (isNaN(value)) {
                        setInputValueError({ ...InputValueError, ageError: 'not number' })
                  }
                  else (
                        setInputValueError({ ...InputValueError, ageError: '' })
                  )
            } else if (name === 'password') {
                  if (!(value.match(decimal))) {
                        setInputValueError({ ...InputValueError, passwordError: '[8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character]' })
                  } else {
                        setInputValueError({ ...InputValueError, passwordError: '' })
                  }
            }

            let id = Math.floor(Math.random() * 10000)
            let data = { ...InputValue, [name]: value, id }
            setInputValue(data)
      }

      console.log(InputValue);
      const SubmitData = (e) => {
            e.preventDefault();
            if (e.target.name.value !== '' && e.target.age.value !== '' && e.target.email.value !== '' && e.target.password.value !== '') {
                  let data = [...AllData, InputValue]
                  setAllData(data)
                  setInputValueError({ ...InputValueError, Submiterror: '' })
                  setInputValue({})
            } else {
                  setInputValueError({ ...InputValueError, Submiterror: 'CHECK DETILE ALL FILL IS REQUIRED' })

            }

      }
      console.log(AllData);
      return (
            <div>
                  <form className='' method='post' onSubmit={(e) => SubmitData(e)}>
                        <div>
                              <label>name : </label>
                              <input type="text" className='border-2 border-black' placeholder='name' name='name' value={InputValue.name ? InputValue.name : ''} onChange={(e) => ValueInputData(e)} />
                              <span>{InputValueError.nameError ? InputValueError.nameError : ''}</span>
                        </div>
                        <div>
                              <label>age : </label>
                              <input type="text" className='border-2 border-black' placeholder='age' name='age' onChange={(e) => ValueInputData(e)} value={InputValue.age ? InputValue.age : ''} />
                              <span>{InputValueError.ageError ? InputValueError.ageError : ''}</span>
                        </div>
                        <div>
                              <label>email : </label>
                              <input type="text" className='border-2 border-black' placeholder='email' name='email' onChange={(e) => ValueInputData(e)} value={InputValue.email ? InputValue.email : ''} />
                        </div>
                        <div>
                              <label>password : </label>
                              <input type="text" className='border-2 border-black' placeholder='password' name='password' onChange={(e) => ValueInputData(e)} value={InputValue.password ? InputValue.password : ''} />
                              <span>{InputValueError.passwordError ? InputValueError.passwordError : ''}</span>
                        </div>
                        {/* <div>
                              <label>city : </label>
                              <select name="city" className='border-2 border-black' onChange={(e) => ValueInputData(e)} value={InputValue.name ? InputValue.name : ''}>
                                    <option value="surat">surat</option>
                                    <option value="amgi">amgi</option>
                                    <option value="amrli">amrli</option>
                              </select>
                        </div>
                        <div>
                              <label>male</label>
                              <input type="radio" name='gender' value='male' onChange={(e) => ValueInputData(e)} />
                              <label>female</label>
                              <input type="radio" name='gender' value='female' onChange={(e) => ValueInputData(e)} />
                              <label>other</label>
                              <input type="radio" name='gender' value='other' onChange={(e) => ValueInputData(e)} />
                        </div> */}
                        {/* <div>
                              <input type="checkbox" name='checkbox'  onChange={(e) => ValueInputData(e)} />
                              <label htmlFor="">all infromtion is rigth and 18+</label>
                        </div> */}

                        <div>
                              <input type="submit" value={'submit'} className='border bg-black text-white py-2 px-6 rounded-md mt-4' />
                              <span>{InputValueError.Submiterror}</span>
                        </div>
                  </form>


                  <div>
                        <table>
                              <thead>
                                    <tr key={'123'}>
                                          <th>name</th>
                                          <th>age</th>
                                          <th>email</th>
                                          <th>possword</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {
                                          AllData.map((item, i) => {
                                                return (
                                                      <tr key={i + 1}>
                                                            <th>{item.name}</th>
                                                            <th>{item.age}</th>
                                                            <th>{item.email}</th>
                                                            <th>{item.password}</th>
                                                      </tr>
                                                )
                                          })
                                    }
                              </tbody>
                        </table>

                  </div>
            </div>
      )
}

export default Validation