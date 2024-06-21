import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
const BookAdd = () => {
      const [Book, setBook] = useState({})
      const [BookType, setBookType] = useState([])

      const GetInputValue = (e) => {
            const name = e.target.name
            const value = e.target.value
            if (name === 'booktype') {
                  if (BookType.includes(value)) {
                        const index = BookType.findIndex((book) => book === BookType.includes(value))
                        BookType.splice(index, 1)
                  } else {
                        BookType.push(value)
                  }
            }
            const data = { ...Book, [name]: value, booktype: BookType }
            setBook(data)
      }
      console.log(Book);
      console.log(BookType);
      const DataSubmit = (e) => {
            e.preventDefault();
            console.log(Book);
            axios('http://localhost:3000/books', {
                  method: 'post',
                  data: Book
            }).then((res) => {
                  console.log(res);
            }).catch(error => {
                  console.error('Error adding post: ', error);
            });

      }
      return (
            <div className="page-wrapper">
                  {/* ============================================================== */}
                  {/* Bread crumb and right sidebar toggle */}
                  {/* ============================================================== */}
                  <div className="page-breadcrumb">
                        <div className="row">
                              <div className="col-12 d-flex no-block align-items-center">
                                    <h4 className="page-title">Books</h4>
                                    <div className="ml-auto text-right">
                                          <nav aria-label="breadcrumb">
                                                <ol className="breadcrumb">
                                                      <li className="breadcrumb-item"><Link to="/">Home</Link></li>
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
                              <div className="col-md-6">
                                    <div className="card">
                                          <form className="form-horizontal" method='post' onSubmit={(e) => DataSubmit(e)}>
                                                <div className="card-body">
                                                      <h4 className="card-title">Book Info</h4>
                                                      <div className="form-group row">
                                                            <label htmlFor="fname" className="col-sm-3 text-right control-label col-form-label">Book Title</label>
                                                            <div className="col-sm-9">
                                                                  <input type="text" name='title' className="form-control" placeholder="Book title" onChange={(e) => GetInputValue(e)} />
                                                            </div>
                                                      </div>
                                                      <div className="form-group row">
                                                            <label htmlFor="" className="col-sm-3 text-right control-label col-form-label">price</label>
                                                            <div className="col-sm-9">
                                                                  <input type="text" name='price' className="form-control" id="price" placeholder="Book price" onChange={(e) => GetInputValue(e)} />
                                                            </div>
                                                      </div>
                                                      <div className="form-group row">
                                                            <label htmlFor="" className="col-sm-3 text-right control-label col-form-label">auther</label>
                                                            <div className="col-sm-9">
                                                                  <input type="text" name='auther' className="form-control" id="" placeholder="Enter auther" onChange={(e) => GetInputValue(e)} />
                                                            </div>
                                                      </div>
                                                      <div className="form-group row">
                                                            <label htmlFor="" className="col-sm-3 text-right control-label col-form-label">book type</label>
                                                            <div className="col-sm-9">
                                                                  <div>
                                                                        <input type="checkbox" name='booktype' value='Classics' id="" placeholder="booktype Here" onChange={(e) => GetInputValue(e)} />
                                                                        <label htmlFor="">Classics</label>
                                                                  </div>
                                                                  <div>
                                                                        <input type="checkbox" name='booktype' value='Crime' id="" placeholder="booktype Here" onChange={(e) => GetInputValue(e)} />
                                                                        <label htmlFor="">Crime</label>
                                                                  </div>
                                                                  <div>
                                                                        <input type="checkbox" name='booktype' value='Fantasy' id="" placeholder="booktype Here" onChange={(e) => GetInputValue(e)} />
                                                                        <label htmlFor="">Fantasy</label>
                                                                  </div>
                                                                  <div>
                                                                        <input type="checkbox" name='booktype' value='Horror' id="" placeholder="booktype Here" onChange={(e) => GetInputValue(e)} />
                                                                        <label htmlFor="">Horror</label>
                                                                  </div>

                                                            </div>
                                                      </div>

                                                      <div className="form-group row">
                                                            <label htmlFor="cono1" className="col-sm-3 text-right control-label col-form-label">select page</label>
                                                            <div className="col-sm-9">
                                                                  <select type="text" name='pages' className="form-control" id="cono1" placeholder="Contact No Here" onChange={(e) => GetInputValue(e)} >
                                                                        <option value="" default>--select page--</option>
                                                                        <option value="0-200" >0-200</option>
                                                                        <option value="200-400" >200-400</option>
                                                                        <option value="400-800" >400-800</option>
                                                                  </select>
                                                            </div>
                                                      </div>
                                                      <div className="form-group row">
                                                            <label htmlFor="cono1" className="col-sm-3 text-right control-label col-form-label">Message</label>
                                                            <div className="col-sm-9">
                                                                  <textarea className="form-control" name='message' defaultValue={""} onChange={(e) => GetInputValue(e)} />
                                                            </div>
                                                      </div>
                                                </div>
                                                <div className="border-top">
                                                      <div className="card-body">
                                                            <button type="submit" value={'submit'} className="btn btn-primary">Add Data</button>
                                                      </div>
                                                </div>
                                          </form>
                                    </div>
                              </div>
                        </div>
                        {/* editor */}

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

export default BookAdd