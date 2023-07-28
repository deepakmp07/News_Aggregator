import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Feedback from "../components/feedback";

function FeedbackPage() {
    return(
        <>
        <div>
        <div className="homepage-component">
            <div className="home-page-navbar">
              <Navbar />
            </div>
            <div className="home-page-sidebar m-t-4">
              <Sidebar />
            </div>
            </div>
            <div className="feedback-content-main float-right w-4/5">
                <Feedback />
            </div>
        </div>
        </>
    )
}
export default FeedbackPage;