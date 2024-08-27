import React from "react";
import Badge, { badgeClasses } from "@mui/joy/Badge";
import Form from "react-bootstrap/Form";
import { FaSearch } from "react-icons/fa";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import { Link } from "react-router-dom";
import Dropdown from "@mui/joy/Dropdown";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import { GridMoreVertIcon } from "@mui/x-data-grid";

function Navbar() {
  return (
    <nav className="bg-light position-fixed w-100 p-4 ">
      <div className="d-flex align-items-center justify-content-between gap-2">
        <div className="d-flex align-items-center justify-content-center">
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
        <div
          className="d-flex align-items-center justify-content-center gap-2"
          style={{ paddingRight: "230px" }}
        >
          <div>
            <Link
              className="d-flex align-items-center justify-content-center gap-2"
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to={"mainUserProfile"}
            >
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
              <h3> Admin</h3>
            </Link>
          </div>
          <div>
            <Dropdown>
              <MenuButton
                slots={{ root: IconButton }}
                slotProps={{ root: { variant: "outlined", color: "neutral" } }}
              >
                <GridMoreVertIcon />
              </MenuButton>
              <Menu>
                <MenuItem>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  to ={"mainUserProfile"}>
                    My Profile
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  to ={""}>
                    Settings
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  to ={""}>
                    Log Out
                  </Link>
                </MenuItem>
              </Menu>
            </Dropdown>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
