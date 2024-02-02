import Box from "@mui/material/Box";


import MaxNav from "./MaxNav";

export default function AboutUs() {
    return (
        <>
            <Box
                sx={{
                    width: "100%",
                    height: "100vh",
                    backgroundColor: "#d7e4ff",
                    fontFamily: "Helvetica Neue",
                }}
            >
                <MaxNav sx={{ fontFamily: "Teko" }} />
                <div style={{ fontFamily: "Teko", fontSize: "48px" }}>
                    About Us
                </div>
            </Box>
        </>
    );
}
