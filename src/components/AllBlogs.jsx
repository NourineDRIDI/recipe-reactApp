import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
} from "mdb-react-ui-kit";
import AspectRatio from "@mui/joy/AspectRatio";
import Stack from "@mui/joy/Stack";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Skeleton from "@mui/joy/Skeleton";
import Typography from "@mui/joy/Typography";
import { useNavigate } from "react-router-dom";

function AllBlogs({ myBlog, query = "" }) {
  const [skeleton, setSkeleton] = useState(true);
  const navigate = useNavigate();

  if (!myBlog || myBlog.length === 0) {
    return <div>No blogs available</div>;
  }

  useEffect(() => {
    setTimeout(() => setSkeleton(false), 1000);
  }, []);

  return (
    <div>
      {skeleton ? (
        <div className="d-flex flex-wrap justify-content-center align-items-center" style={{gap:30}} > 
          <Stack spacing={2} useFlexGap>
            <Card variant="outlined" sx={{ width: 300 }}>
              <CardContent orientation="horizontal"></CardContent>
              <AspectRatio ratio="21/9">
                <Skeleton animation="wave" variant="overlay">
                  <img
                    alt=""
                    src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                  />
                </Skeleton>
              </AspectRatio>
              <Typography sx={{ overflow: "hidden" }}></Typography>
              <Button>
                Read more
                <Skeleton animation="wave" />
              </Button>
            </Card>
          </Stack>
          <Stack spacing={2} useFlexGap>
            <Card variant="outlined" sx={{ width: 300 }}>
              <CardContent orientation="horizontal"></CardContent>
              <AspectRatio ratio="21/9">
                <Skeleton animation="wave" variant="overlay">
                  <img
                    alt=""
                    src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                  />
                </Skeleton>
              </AspectRatio>
              <Typography sx={{ overflow: "hidden" }}></Typography>
              <Button>
                Read more
                <Skeleton animation="wave" />
              </Button>
            </Card>
          </Stack>
        </div>
      ) : (
        <div
          className="pb-4"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            justifyContent: "center",
            
          }}
        >
          {myBlog
            .filter((e) => {
              return e?.title?.toLowerCase().includes(query?.toLowerCase());
            })
            .map((blog) => (
              <MDBCard
                key={blog?.id}
                style={{ maxWidth: "300px", minWidth: "300px" }}
              >
                <MDBCardImage
                  src={blog?.image}
                  alt={blog?.title}
                  position="top"
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <MDBCardBody>
                  <MDBCardTitle>{blog?.title}</MDBCardTitle>
                  <MDBCardText>{blog?.author}</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            ))}
        </div>
      )}
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
