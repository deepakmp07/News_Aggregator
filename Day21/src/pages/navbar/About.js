import React from "react";
import './about.css';
import { useState } from "react";
import axios
 from "axios";
const About = () => {
  const[Name,SetName]= useState("");
  const[Email,SetEmail]=useState("");
  const[Comment,SetComment] = useState("");

  const handleName=(e)=>{
      SetName(e.target.value);
  }
  const handleEmail=(e)=>{
      SetEmail(e.target.value);
  }
  const handleComment=(e)=>{
      SetComment(e.target.value);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    const data = {
      name:Name,
      email:Email,
      comment:Comment
    }
    axios.post("http://localhost:8082/api/v1/feed/getFeedback",data);
  }
  return (
    <div>
      {/* <Nav /> */}

    <div className='wrapper5'>
    <div className='concon'>
      <div className='conbg'>
      <br></br>

    {/* <Link to='/'><IconButton><MeetingRoomIcon/></IconButton></Link> */}
    <div className="customer-support-page">
      <h2>Customer Support</h2>
      <form onSubmit={handleSubmit}>

      <div className='form-group'>
              <label htmlFor="name">Username</label>
              <input type='text' name='fullName' onChange={handleName} required/>
            </div>
            {/* <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={this.handleInputChange}/>
            </div> */}
            <div className='form-group'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={handleEmail} required/>
            </div>
            <div className="form-group">
          <label htmlFor="message">Comment:</label>
          <textarea id="message" rows="4" name='comment' onChange={handleComment} required/>
        </div>

        {/* <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Comment:</label>
          <textarea id="message" rows="4" />
        </div> */}
        <button type="submit">Submit</button>
      </form>
{/* <Icon /> */}
      </div>
 
      </div>

    </div>  
      {/* <footer className="contact-footer">
      <div className="contact-info">
      <p3><h3>Contact Us:</h3>123 Bank Street, Coimbatore, India</p3>
      <br></br>
      <p3>Phone: 123-456-7890</p3><br></br>
      <p3>Email: info@bankingapp.com</p3>
    </div> */}
    {/* <Icon style={{ color: "white" }} /> */}
    {/* <Footer /> */}
    </div>
    {/* </form> */}
    </div>
  );
};


//   return (
//     <div className="about">
//       <h2>About News Aggregator</h2>
//       <p>
//         News Aggregator is a platform that collects news articles from various sources and presents them in one place for easy access and consumption. Our goal is to provide users with a comprehensive and personalized news experience, allowing them to stay informed about the latest happenings in the world.
//       </p>
//       <p>
//         With News Aggregator, you can customize your news feed based on your interests, follow specific topics or categories, and save articles for later reading. Our platform uses advanced algorithms to curate news content, ensuring that you receive relevant and high-quality information.
//       </p>
//       <p>
//         Stay updated with the latest news from around the globe with News Aggregator. We strive to deliver accurate, unbiased, and diverse news articles to our users, empowering them to make informed decisions and stay connected to the world.
//       </p>
//     </div>
//   );
// };

export default About;
