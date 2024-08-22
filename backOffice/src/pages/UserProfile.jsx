import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import {Remy} from "../assets/Profile_-_Remy_29.webp"

function UserProfile() {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Box
        sx={{
          width: "70%",
          position: "relative",
          overflow: { xs: "auto", sm: "initial" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            display: "block",
            width: "1px",
            bgcolor: "warning.300",
            left: "500px",
            top: "-24px",
            bottom: "-24px",
            "&::before": {
              top: "4px",

              display: "block",
              position: "absolute",
              right: "0.5rem",
              color: "text.tertiary",
              fontSize: "sm",
              fontWeight: "lg",
            },
            "&::after": {
              top: "4px",

              display: "block",
              position: "absolute",
              left: "0.5rem",
              color: "text.tertiary",
              fontSize: "sm",
              fontWeight: "lg",
            },
          }}
        />
        <Card
          orientation="horizontal"
          sx={{
            width: "100%",
            flexWrap: "wrap",
            [`& > *`]: {
              "--stack-point": "500px",
              minWidth:
                "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
            },
            // make the card resizable for demo
            overflow: "auto",
            resize: "horizontal",
          }}
        >
          <AspectRatio flex ratio="1" maxHeight={182} sx={{ minWidth: 182 }}>
          <img
            src={Remy}
            loading="lazy"
            alt=""
          />
          </AspectRatio>
          <CardContent>
            {" "}
            <div className="d-flex flex-column align-items-center justify-content-center p-3">
              <Typography fontSize="xl" fontWeight="lg">
                UserName
              </Typography>
              <Typography
                level="body-sm"
                fontWeight="lg"
                textColor="text.tertiary"
              >
                Senior Chef
              </Typography>
            </div>
            <Sheet
              sx={{
                bgcolor: "background.level1",
                borderRadius: "sm",
                p: 1.5,
                my: 1.5,
                display: "flex",
                gap: 2,
                "& > div": { flex: 1 },
              }}
            >
              <div>
                <Typography level="body-xs" fontWeight="lg">
                  Blogs and Articles
                </Typography>
                <Typography fontWeight="lg">4</Typography>
              </div>
              <div>
                <Typography level="body-xs" fontWeight="lg">
                  Recipes
                </Typography>
                <Typography fontWeight="lg">20</Typography>
              </div>
              <div>
                <Typography level="body-xs" fontWeight="lg">
                  Followers
                </Typography>
                <Typography fontWeight="lg">980</Typography>
              </div>
              <div>
                <Typography level="body-xs" fontWeight="lg">
                  Ratings
                </Typography>
                <Typography fontWeight="lg">8.9</Typography>
              </div>
            </Sheet>
            <Box sx={{ display: "flex", gap: 1.5, "& > button": { flex: 1 } }}>
              <Button
                variant="solid"
                style={{ color: "white", backgroundColor: "#B66055" }}
              >
                Send Message
              </Button>
              <Button
                variant="solid"
                style={{ color: "white", backgroundColor: "#B66055" }}
              >
                Follow
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

export default UserProfile;
