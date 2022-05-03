import React from 'react'

export const ShowBlogs = ({blogs, profile}) => {
  console.log(blogs)
  if(blogs.items){
    console.log(blogs.items)
  }
return blogs.items.map((post,index) =>(
  <div key={index}>
  
  </div>
))
}
