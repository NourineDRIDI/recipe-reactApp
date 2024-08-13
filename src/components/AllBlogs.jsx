import React from 'react';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';

function AllBlogs({ myBlog, query="" }) {
  if (!myBlog || myBlog.length === 0) {
    return <div>No blogs available</div>;
  }

  return (
    <div className='pb-4' style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
      {myBlog.filter((e)=>{
        return e?.title?.toLowerCase().includes(query?.toLowerCase())
      }).map((blog) => (
        <MDBCard key={blog?.id} style={{ maxWidth: '500px', minWidth: '500px' }}>
          <MDBCardImage src={blog?.image} alt={blog?.title} position='top' style={{ height: '200px', objectFit: 'cover' }} />
          <MDBCardBody>
            <MDBCardTitle>{blog?.title}</MDBCardTitle>
            <MDBCardText>{blog?.author}</MDBCardText>
          </MDBCardBody>
        </MDBCard>
      ))}
    </div>
  );
}

export default AllBlogs;


// function AllBlogs({myBlog,id}) {
//   return (
//     <div className="row mt-6 text-center">
//       {myBlog && myBlog.map((e) => (
//         <Blog myBlog={e} key={e.id} />
//       ))}
//     </div>
//   )
// }

// export default AllBlogs
