import React from "react";
import NavBar from '../components/Nav_logged_in';
import StemMagnetTransparent from "../assets/stemagentTransparent.png";

function AboutUs() {
  return (
    <main className="h-screen">
      <div className="sticky top-0 border-b border-black">
        <NavBar />
      </div>
      <div className="h-screen bg-gradient-to-r from-purple-400 to-violet-800 overflow-hidden">
        <div className="h-screen flex justify-center items-center relative">
          <div className="bg-white rounded-lg p-12 absolute left-12 right-12 top-20 bottom-12 overflow-auto shadow-lg">
            <h1 className="text-5xl text-[#333333] font-semibold mb-4 ml-8 mt-5">ABOUT US</h1>

            <div className="ml-8 mt-5">
              <h2 className="text-[22px] font-semibold text-[#333333]">What is STEMAGENT?</h2>
              <p className="text-[18px] text-[#666666]">
              STEMAGNET is a website dedicated to promoting STEM (Science, Technology, Engineering, and Mathematics) education and empowering the next generation of innovators and problem solvers. Through our innovative swiping technique, mentees and mentors can connect faster than ever! Mentors, who are experienced experts in their respective fields, can choose mentees to guide and share their knowledge with. On the other hand, mentees have the opportunity to swipe and choose mentors who align with their interests and goals. STEMAGNET aims to facilitate mentorship relationships and provide a supportive community for individuals passionate about STEM, ultimately fostering skill development and inspiring future achievements in science and technology.
            </p>
          </div>
          <div className="ml-8 mt-4">
            <h2 className="text-[22px] font-semibold text-[#333333]">Our Mission</h2>
            <p className="text-[18px] text-[#666666]">
            At STEMAGNET, our mission is to ignite a passion for STEM education, foster mentorship relationships, and empower the next generation of innovators and problem solvers. We are dedicated to connecting experienced mentors with enthusiastic mentees within the STEM fields, providing a platform where knowledge, guidance, and inspiration flow freely. Our goal is to create a supportive community that cultivates skill development and drives future achievements in science and technology. Together, we aim to shape a brighter future through the power of STEM.
            </p>
          </div>
          <div className="ml-8 mt-4">
            <h2 className="text-[22px] font-semibold text-[#333333]">Our Team</h2>
            <p className="text-[18px] text-[#666666]">
              Our team consists of passionate individuals who are experts in their respective fields. We believe that diverse backgrounds and experiences drive innovation and creativity.
            </p>
          </div>
          <div className="ml-8 mt-4">
            <h2 className="text-[22px] font-semibold text-[#333333]">Contact Us</h2>
            <p className="text-[18px] text-[#666666]">
              Have questions or feedback? Feel free to reach out to us at <a href="mailto:info@stemmagnet.org">info@stemmagnet.org</a>.
            </p>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}

export default AboutUs;
