import React from "react";
import { useState, useEffect } from "react";


const URL = "http://localhost:8000/blogs";

export const ShowBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("")

  const onChangeTitle = (e) => {
    setTitle(e.target.value)
  };

  const onChangeContent = (e) => {
    setContent(e.target.value)
  }

  const onSubmitData = async (e) => {
     e.preventDefault()
    const resultado = await fetch(URL, 
      {method:'POST', 
      body:JSON.stringify(
        {
        title:title, 
        content:content, 
        }), 
        headers: {
          'Content-Type':'application/json',
        },
      })
    if(!resultado.ok){
      console.log('fallo')
      return
    } 
    const data = await resultado.json();
    setBlogs([...blogs, {title: title, content:content, id: data.id}])
    setTitle("")
    setContent("")
  };

  const getBlogs = async () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setBlogs(data));
  };

  useEffect(() => {
    getBlogs();
  }, []);

  const deleteBlog = async (id) => {
    const resultado = await fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    });
    if (!resultado.ok) {
      console.log("fallo");
      return;
    }
    setBlogs(blogs.filter((elem) => elem.id !== id));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="mb-3">
            <label className="form-label">Creat New Blog</label>
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              onChange={onChangeTitle}
              value={title}
            />
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Conten"
              onChange={onChangeContent}
              value={content}
            />
            <div className="col-auto">
              <button className="btn btn-primary mt-3" onClick={onSubmitData}>
                Create New Blog
              </button>
            </div>
          </div>
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>Title</th>
                <th>Conten</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog.id}>
                  <td>{blog.title}</td>
                  <td>{blog.content}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteBlog(blog.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
