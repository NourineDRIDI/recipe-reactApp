import React from "react";
import Badge, { badgeClasses } from "@mui/joy/Badge";
import Form from "react-bootstrap/Form";
import { FaSearch } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="bg-light position-fixed w-100 p-4 ">
      <div className="d-flex align-items-center  gap-2">
        <div>
          <Form inline>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <FaSearch />
              </Col>
            </Row>
          </Form>
        </div>
        <div>
          <Link  className="d-flex align-items-center justify-content-center gap-2" style={{textDecoration: 'none', color:"black"}} to={"userprofile"}>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
              <Badge
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeInset="-20px"
                color="success"
                sx={{
                  [`& .${badgeClasses.badge}`]: {
                    "&::after": {
                      position: "absolute",
                      top: 0,
                      left: 1,
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      animation: "ripple 1.2s infinite ease-in-out",
                      border: "2px solid",
                      borderColor: "success.500",
                      content: '""',
                    },
                  },
                  "@keyframes ripple": {
                    "0%": {
                      transform: "scale(1)",
                      opacity: 1,
                    },
                    "100%": {
                      transform: "scale(2)",
                      opacity: 0,
                    },
                  },
                }}
              />
              <Avatar variant="solid" />
            </Box>
            <h3> UserName</h3>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
