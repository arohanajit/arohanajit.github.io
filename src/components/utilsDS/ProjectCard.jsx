import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = props => {
  const { project_title, project_description, project_url, tech_used, project_image, youtube_video_url } = props;

  return (
    <div className='pb-[50px]'>
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md"></div>
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            <a href={project_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base">
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                <span className="inline-block">
                  {project_title}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                  </svg>
                </span>
              </span>
            </a>
          </h3>
          <ul className="list-disc pl-5 mt-2 text-sm leading-normal text-gray-500 dark:text-gray-400">
            {project_description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
            {tech_used.map((tech, index) => (
              <li key={index} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-[#04d9ff]/10 px-3 py-1 text-xs font-medium leading-5 text-[#04d9ff] mr-2 mb-2">{tech}</div>
              </li>
            ))}
          </ul>
          
        </div>
        <img alt={project_title + " image"} loading="lazy" width="200" height="48" decoding="async" data-nimg="1" className="transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1" style={{ color: "transparent" }} src={project_image}></img>
      </div>
      <div className="mt-4">
            <h4 className="font-medium text-slate-200">Demo</h4>
            <a href={youtube_video_url} target="_blank" rel="noopener noreferrer" className="text-[#04d9ff] hover:underline">
              Watch on YouTube
            </a>
          </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project_title: PropTypes.string.isRequired,
  project_description: PropTypes.arrayOf(PropTypes.string).isRequired,
  project_url: PropTypes.string.isRequired,
  tech_used: PropTypes.arrayOf(PropTypes.string).isRequired,
  project_image: PropTypes.string.isRequired,
  youtube_video_url: PropTypes.string.isRequired
};

export default ProjectCard;