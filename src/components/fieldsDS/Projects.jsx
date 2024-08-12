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
        className="font-bold uppercase pb-[40px] text-[#04c1e2]"
      >
        Projects
      </h2>
      <ProjectCard
        project_title="Recurrent Neural Network - LSTM - Script Generation"
        project_description={[
          "Developed a Recurrent Neural Network (RNN/LSTM) based model to generate TV scripts in the style of the sitcom Seinfeld,",
          "achieving a novel application of text generation and natural language processing. Utilized PyTorch for model development,",
          "training the network on a dataset of TV scripts over 10 epochs, and successfully reduced the loss from 4.74 to approximately",
          "3.00, demonstrating the model's learning efficiency and capability to generate coherent text."
        ]}
        project_url="https://github.com/arohanajit/tv-script-generation"
        tech_used={[
          "Python",
          "PyTorch",
          "Recurrent Neural Networks",
          "Long Short-Term Memory (LSTM)"
        ]}
        project_image={MovieR}
        youtube_video_url="https://www.youtube.com/watch?v=your-video-id-1"
      />
      <ProjectCard
        project_title="Generative Adversarial Network - Face Generation"
        project_description={[
          "Developed a sophisticated Generative Adversarial Network (GAN) capable of generating realistic human faces, leveraging TensorFlow/Keras",
          "and advanced CNN techniques. Achieved significant milestones in model accuracy and efficiency through iterative training and optimization,",
          "demonstrating capabilities in neural network design and machine learning algorithms."
        ]}
        project_url="https://github.com/arohanajit/face-generation-gan"
        tech_used={["Python", "Convolutional Neural Networks", "Generatuve Adversarial Networks", "TensorFlow"]}
        project_image={Face}
        youtube_video_url="https://www.youtube.com/watch?v=your-video-id-2"
      />
      <ProjectCard
        project_title="Python Package - `imgdata`"
        project_description={[
          "Developed a Python package, a tool for automating the collection and organization of image datasets from popular stock image APIs like",
          "Pexels and Unsplash. The package supports image downloading, and dataset structuring into train, test, and validation sets, significantly",
          "streamlining the data preparation process for machine learning projects."
          ]}
        project_url="https://pypi.org/project/imgdata/"
        tech_used={["Python", "Flask", "Django"]}
        project_image={FWMS}
        youtube_video_url="https://www.youtube.com/watch?v=your-video-id-3"
      />
      <ProjectCard
        project_title="Urban Neighborhood"
        project_description={[
          "Quantified and visualized urban data from multiple cities, applying advanced data cleaning, preprocessing, and analysis techniques to handle",
          "complex datasets, clustering 194+ neighborhoods by venue data (Foursquare API) and visualized results to present actionable insights into",
          "urban planning and development and achieving a deep understanding of city dynamics through geospatial and statistical analysis"
        ]}
        project_url="https://github.com/arohanajit/City_Analysis/blob/master/Ideal%20Neighborhood%20in%20Bangalore.pdf"
        tech_used={["Data Science", "Data Analysis", "Data Visualization"]}
        project_image={Urban}
        youtube_video_url="https://www.youtube.com/watch?v=your-video-id-4"
      />
    </div>
  );
};

export default Projects;