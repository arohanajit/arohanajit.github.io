import React from "react";
import ExperienceCard from "../utils/ExperienceCard";

const Experience = () => {
  return (
    <div
      id="experience"
      className="p-[50px] md:pt-[100px] md:pl-[100px] md:pr-[50px]"
    >
      <h2
        id="experience-title"
        class="font-bold uppercase pb-[20px] text-[#04c1e2]"
      >
        Experience
      </h2>

      <ExperienceCard
        timeline="May 2020 - May 2022"
        role="Machine Learning Engineer"
        name="Omdena"
        description={[
          <>
            Developed Python script to scrape a substantial dataset of social media content in (non-English language) Tamil, enabling large-scale analysis of hate speech.
          </>,
          <>
            Trained and deployed a cutting-edge language transformer model to accurately classify hate speech text in Tamil, achieving{" "}
            <span className="font-medium text-slate-200">
              95% accuracy
            </span>{" "}
            ton benchmark dataset.
          </>,
          <>
            Designed and Implemented an {" "}
            <span className="font-medium text-slate-200">API deployment pipeline</span>{" "}, streamlining access to the hate speech detection model for real-world
applications.
          </>,
          <>
            Optimized of CGM neural networks’ prediction accuracy, achieving a{" "}
            <span className="font-medium text-slate-200">90% success rate</span>{" "}
            (less than .2cm, .4cm, .6cm, 1cm, and rejected) for comprehensive result analysis.
          </>,
        ]}
        skills={[
          "Natural Language Processing",
          "Computer Vision",
          "MLOps",
          "AWS",
        ]}
      />

      <ExperienceCard
        timeline="October 2020 - December 2020"
        role="Data Science Intern"  
        name="Aiotize"
        description={[
          <>
            Used{" "}
            <span className="font-medium text-slate-200">YOLO</span> object detection and classification using {" "}
            <span className="font-medium text-slate-200">CNN and Pose Estimation</span> to achieve <span className="font-medium text-slate-200">90% accuracy</span> on video based camera feed.
          </>,
        ]}
        skills={[
          "Python",
          "Optimization",
          "Object Detection",
          "Pose Estimation",
          "PyTorch",
        ]}
      />

      <ExperienceCard
        timeline="February 2019 - January 2022"
        role="Python Developer"
        name="Internet of Things Research Lab, KIIT University"
        description={[
          <>
            Developed and maintained a dashboard for real-time sensor data mapping {" "}<span className="font-medium text-slate-200">
              10,000+ rows of data 24/7
            </span>dashboard using {" "}
            <span className="font-medium text-slate-200">
              Python and Django
            </span>
            
          </>,
          <>
            Utilized <span className="font-medium text-slate-200"> Intel OpenVINO </span> toolkit to run deep learning models on GPU for high density sensor data
            .
          </>,
        ]}
        skills={["Python", "OpenVINO", "Django", "Matplotlib"]}
      />
    </div>
  );
};

export default Experience;
