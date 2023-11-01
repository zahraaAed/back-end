// import { useEffect, useState } from "react";

// import aboutDetails from "../components/aboutDetails";

const About = () => {
    // we can add a table for about in the back-end and fetch data from the data base if we decided to make it dynamic
    // const [about, setAbout] = useState(null);
  
    // useEffect(() => {
    //   const fetchAbout = async () => {
    //     const responseAbout = await fetch("/api/aboutRoute/"); //remember to change URL after developement phase so every request points to the right end point
    //     const jsonAbout = await responseAbout.json();
  
    //     if (responseAbout.ok) {
    //       setAbout(jsonAbout);
    //     }
    //   }
    //   fetchAbout();
    // },[]);
    return (
      <div className="About">
        <div className="title">
          <p className="aboutTitle">About us</p>
          <p className="quote">Explore The Sweet Blooms Kitchen today & let your taste buds bloom with delight</p>
        </div>
        <div className="aboutBody">
          <img src="#" alt="image" />
          <p className="aboutDescription">Welcome to The Sweet Blooms Kitchen, where every delicious bite is a blossoming journey of love and flavour. Our charming online dessert shop, based in the of Tripoli, is led by a dedicated mom with a passion for creating the most delectable home made petites fours in town.</p>
        </div>
      </div>
    )
  }
  
  export default About;