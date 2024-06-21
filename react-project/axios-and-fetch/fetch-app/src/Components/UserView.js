import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




const UserView = () => {

  const [AllUserData, setAllUserData] = useState([])
  const [UserData, setUserData] = useState([])
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(5);
  const [dataCount, setDataCount] = useState([])
  const [Search, setSearch] = useState('')
  const [SortData, setSortData] = useState('')
  const [toggleSort, setToggleSort] = useState('')
  useEffect(() => {

    GetData()

  }, [Search, currentPage, setAllUserData, setUserData, SortData, toggleSort])


  const GetData = () => {
    fetch('http://localhost:3000/user')
      .then((res) => {
        return res.json()
      })
      .then((data) => {

        setAllUserData(data)

        const filteredData = Search !== '' ? data.filter((user) =>
          Object.values(user).some((value) =>
            value.includes(Search)
          )
        ) : data;
        if (toggleSort) {
          filteredData.sort((a, b) => a[SortData] > b[SortData] ? 1 : -1)
        } else {
          filteredData.sort((a, b) => a[SortData] > b[SortData] ? -1 : 1)
        }
        const indexOfLastRecord = currentPage * recordsPerPage;
        const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
        const nPages = Math.ceil(filteredData.length / recordsPerPage)
        let countData = []
        for (let i = 1; i <= nPages; i++) {
          countData.push(i)

        }
        setDataCount(countData)

        const currentRecords = filteredData.slice(indexOfFirstRecord,
          indexOfLastRecord);

        setUserData(currentRecords)

      }).catch((err) => console.log(`data error ${err}`))
  }

  const dataSorting = () => {
    setToggleSort(!toggleSort)
    // setUserData([...UserData])
  }

  const DeleteData = (id) => {
    fetch(`http://localhost:3000/user/${id}`, {
      method: 'delete',

    }).catch(err => console.log('delete' + err))
    GetData()
  }
  console.log(AllUserData);
  return (
    <div className='py-5 my-5'>
      <Container>
        <Row>
          <Col className='col-12'>
            <div className='d-flex justify-content-around mb-5'>
              <div className='d-flex align-items-center'>
                <label htmlFor="" className='text-white me-2'>search data :</label>
                <input type="text" name='search' className='py-1 px-2 rounded-2' value={Search} onChange={(e) => setSearch(e.target.value)} />
              </div>

              <div className='d-flex justify-content-center'>
                <Button variant="primary" onClick={() => dataSorting()} className='d-flex align-items-center'
                >Sort {toggleSort !== "" ? toggleSort === true ? <FaArrowUp className='ms-2' /> : <FaArrowDown className='ms-2' /> : ''} </Button>
                <Form.Select name="soringdata" id="" onChange={(e) => setSortData(e.target.value)} className='ms-2'>
                  <option value="" >---Form.Select sort data ----</option>
                  <option value="firstName">firstName</option>
                  <option value="lastName">lastName</option>
                  <option value="username">username</option>
                  <option value="city">city</option>
                  <option value="state">state</option>
                  <option value="zip">zip</option>
                </Form.Select>

              </div>
            </div>
          </Col>
          <Col className='col-12'>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Username</th>
                  <th>City</th>
                  <th>State</th>
                  <th>zip</th>
                </tr>
              </thead>
              <tbody>
                {
                  UserData.map((item, pos) => {
                    return (
                      <tr>
                        <th>{++pos}</th>
                        <th>{item.firstName}</th>
                        <th>{item.lastName}</th>
                        <th>{item.username}</th>
                        <th>{item.city}</th>
                        <th>{item.state}</th>
                        <th>{item.zip}</th>
                        <th>
                          <Link to={'/userview/updata/' + item.id} className='btn bg-body text-black' >Update</Link>
                        </th>
                        <th>
                          <Link onClick={() => DeleteData(item.id)} className='btn bg-body text-black '  >Delete</Link>
                        </th>
                      </tr>
                    )
                  })
                }

              </tbody>
            </Table>
            <div className='d-flex justify-content-center my-4'>
              <Pagination className=''>
                {
                  dataCount.map((items, pos) => {
                    return (

                      <Pagination.Item onClick={() => setCurrentPage(items)}>{items}</Pagination.Item>

                    )
                  })
                }
              </Pagination>
            </div>
          </Col>
        </Row>
      </Container>
    </div>

  )
}

export default UserView