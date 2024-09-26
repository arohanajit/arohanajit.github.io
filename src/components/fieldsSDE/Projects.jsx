import React from "react";
import ProjectCard from "../utilsDS/ProjectCard";
import Face from "../../images/face.webp";
import FWMS from "../../images/FWMS.jpeg";
import MovieR from "../../images/MovieR.jpeg";
import Urban from "../../images/urban.webp";

const Projects = () => {
  return (
    <div id="projects" className="p-[50px] md:pt-[100px] md:pl-[100px]">
      <h2
        id="project-title"
        className="text-3xl font-bold mb-4 text-[#04d9ff]"
      >
        Projects
      </h2>
      <ProjectCard
        project_title="Python - Webapp - Calorie Tracker"
        project_description={[
          "Developed a web app, to streamline calorie and weight tracking by integrating with Google Calendar and offering multiple input methods ",
          "including web and Google Forms. Utilized Python, Flask, Google APIs, and MySQL, handling data across various modules ",
          "o calculate and remind users of their Total Daily Energy Expenditure (TDEE) through automated calendar events."
        ]}
        project_url="https://github.com/arohanajit/tdee-website"
        tech_used={[
          "Python",
          "Google Calendar API",
          "Flask",
          "Jupyter Notebook",
          "SQL"
        ]}
        project_image={MovieR}
        youtube_video_url="https://youtu.be/k9-jaQtyVlQ"
      />
      <ProjectCard
        project_title="MERN - Real Time Interactive Web Application with Cloud Integration - Polly"
        project_description={[
          "Developed a real-time polling application using React for the frontend, incorporating Tailwind CSS for styling, Axios for HTTP requests, ",
          "and Chart.js for data visualization. The backend leverages AWS Lambda functions, Prisma ORM for database management, and Middy",
          "middleware for enhanced serverless function capabilities, serving multiple endpoints for creating rooms, questions, and fetching analytics"
          ]}
        project_url="https://github.com/arohanajit/polly"
        tech_used={["React","TypeScript","Tailwind CSS","AWS Lambda","Prisma ORM","Middy Middleware","Chart.js","Axios","Serverless Functions"]}
        project_image={FWMS}
        youtube_video_url="https://www.youtube.com/watch?v=gO5nstBFB7I"
      />
      <ProjectCard
        project_title="MERN - Redux - Ecommerce Website"
        project_description={[
          "Developed a full-featured eCommerce platform using the MERN stack & Redux, showcased in eCommerce Platform, supporting product",
          "management, user profiles, and PayPal integration. Enhanced experience with features like product reviews, search, pagination, and a ",
          "complete checkout process, serving as a comprehensive solution for online retail."
        ]}
        project_url="https://github.com/arohanajit/e-commerce"
        tech_used={["React", "Redux", "MongoDB", "Express", "Node.js"]}
        project_image={Face}
        youtube_video_url="https://www.youtube.com/watch?v=your-video-id-2"
      />
    </div>
  );
};

export default Projects;