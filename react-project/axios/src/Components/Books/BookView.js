import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
const BookView = () => {
      const [BookData, setBookData] = useState([])
      const [currentPage, setCurrentPage] = useState(1);
      const [recordsPerPage] = useState(5);
      const [pageCount, setPageCount] = useState([])
      const [Search, setSearch] = useState('')
      useEffect(() => {
            axios.get('http://localhost:3000/books')
                  .then((res) => {
                        const indexOfLastRecord = currentPage * recordsPerPage;
                        const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
                        const nPages = Math.ceil(res.data.length / recordsPerPage);
                        let pages = []
                        for (let i = 1; i <= nPages; i++) {
                              pages.push(i)

                        }
                        setPageCount(pages)
                        const currentRecords = res.data.slice(indexOfFirstRecord,
                              indexOfLastRecord);
                        setBookData(currentRecords)

                  })
                  .catch((error) => {
                        console.log("this data" + error);
                  })
      }, [setBookData, BookData, currentPage])


      const DataDelete = (id) => {
            axios.delete(`http://localhost:3000/books/${id}`).then((res) => {
                  console.log(res);
            }).catch((error) => {
                  console.log("this data" + error);
            })
      }

      const NextBtn = (page) => {
            setCurrentPage(page)
      }
      const ListSort = (e) => {
            let value = e.target.value
      }
      return (
            <div className="page-wrapper">
                  {/* ============================================================== */}
                  {/* Bread crumb and right sidebar toggle */}
                  {/* ============================================================== */}
                  <div className="page-breadcrumb">
                        <div className="row">
                              <div className="col-12 d-flex no-block align-items-center">
                                    <h4 className="page-title">Tables</h4>
                                    <div className="ml-auto text-right">
                                          <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb">
                                                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                                                      <li className="breadcrumb-item active" aria-current="page">Library</li>
                                                </ol>
                                          </nav>
                                    </div>
                              </div>
                        </div>
                  </div>
                  {/* ============================================================== */}
                  {/* End Bread crumb and right sidebar toggle */}
                  {/* ============================================================== */}
                  {/* ============================================================== */}
                  {/* Container fluid  */}
                  {/* ============================================================== */}
                  <div className="container-fluid">
                        {/* ============================================================== */}
                        {/* Start Page Content */}
                        {/* ============================================================== */}
                        <div className="row">
                              <div className="col-12">
                                    <div className="card">
                                          <div className="card-body">
                                                <h5 className="card-title m-b-0">Static Table</h5>
                                                <input type="text" name='search' value={Search} onChange={(e) => setSearch(e.target.value)} />
                                                <button onClick={(e) => ListSort(e)}>sort</button>
                                          </div>
                                          <table className="table">
                                                <thead>
                                                      <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Book title</th>
                                                            <th scope="col">Price</th>
                                                            <th scope="col">Auther</th>
                                                            <th scope="col">Book type</th>
                                                            <th scope="col">Pages</th>
                                                            <th scope="col">Message</th>
                                                            <th scope="col">Delete</th>
                                                            <th scope="col">UpData</th>
                                                      </tr>
                                                </thead>
                                                <tbody>
                                                      {
                                                            BookData.filter((items) => {
                                                                  return (items.title.match(Search))
                                                            }).map((item, pos) => {
                                                                  return (
                                                                        <tr key={item.id}>
                                                                              <th scope="row">{++pos}</th>
                                                                              <td>{item.title}</td>
                                                                              <td>{item.price}</td>
                                                                              <td>{item.auther}</td>
                                                                              <td>{item.booktype.join(' , ')}</td>
                                                                              <td>{item.pages}</td>
                                                                              <td>{item.message}</td>
                                                                              <td>
                                                                                    <Link onClick={(e) => DataDelete(item.id)} className='button-btn'>Delete</Link>

                                                                              </td>
                                                                              <td>
                                                                                    <Link to={'/bookview/bookupdata/' + item.id} className='button-btn'>UpDate</Link>
                                                                              </td>
                                                                        </tr>
                                                                  )
                                                            })
                                                      }
                                                      <tr>
                                                            <td colSpan={9}>
                                                                  {
                                                                        pageCount.map((page) => {
                                                                              return (
                                                                                    <button onClick={() => NextBtn(page)} className='pagination-btn'>{page}</button>
                                                                              )
                                                                        })
                                                                  }
                                                            </td>
                                                      </tr>
                                                </tbody>
                                          </table>
                                    </div>


                              </div>
                        </div>
                        {/* ============================================================== */}
                        {/* End PAge Content */}
                        {/* ============================================================== */}
                        {/* ============================================================== */}
                        {/* Right sidebar */}
                        {/* ============================================================== */}
                        {/* .right-sidebar */}
                        {/* ============================================================== */}
                        {/* End Right sidebar */}
                        {/* ============================================================== */}
                  </div>
                  {/* ============================================================== */}
                  {/* End Container fluid  */}
                  {/* ============================================================== */}
                  {/* ============================================================== */}
                  {/* footer */}
                  {/* ============================================================== */}
                  <footer className="footer text-center">
                        All Rights Reserved by Matrix-admin. Designed and Developed by <a href="https://wrappixel.com">WrapPixel</a>.
                  </footer>
                  {/* ============================================================== */}
                  {/* End footer */}
                  {/* ============================================================== */}
            </div>
      )
}

export default BookView