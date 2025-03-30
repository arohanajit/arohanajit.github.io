import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ProjectCard = props => {
    const { project_title, project_description, project_url, tech_used, project_image } = props;

    return (
        <motion.div 
            className='pb-[50px]'
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.2 }}
        >
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[#ffffff1a] dark:lg:group-hover:bg-[#ffffff1a] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <div className="z-10 sm:order-2 sm:col-span-6">
                    <h3>
                        <a className="inline-flex items-baseline font-medium leading-tight text-white hover:text-[#04d9ff] focus-visible:text-[#04d9ff] group/link text-base" href={project_url} target="_blank" rel="noreferrer" aria-label={project_title}>
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                                <motion.span 
                                    className="inline-block font-semibold"
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    {project_title}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true">
                                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path>
                                    </svg>
                                </motion.span>
                            </span>
                        </a>
                    </h3>
                    <ul className="list-disc pl-5 mt-3 text-sm leading-normal text-gray-200">
                        {project_description.map((desc, index) => (
                            <li key={index} className="mb-2">{desc}</li>
                        ))}
                    </ul>
                    <div className="mt-4">
                        <h4 className="text-xs font-semibold text-gray-300 mb-2">Technologies Used:</h4>
                        <ul className="flex flex-wrap gap-2" aria-label="Technologies used:">
                            {tech_used.map((tech, index) => (
                                <motion.li 
                                    key={index}
                                    whileHover={{ y: -3, scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <div className="flex items-center rounded-full bg-[#04d9ff1a] px-3 py-1 text-xs font-medium leading-5 text-[#04d9ff] shadow-sm">{tech}</div>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
                {project_image && (
                    <motion.img 
                        alt={project_title + " image"} 
                        loading="lazy" 
                        width="200" 
                        height="48" 
                        decoding="async" 
                        data-nimg="1" 
                        className="rounded-md border-2 border-gray-800 shadow-sm transition group-hover:border-[#04d9ff] sm:order-1 sm:col-span-2 sm:translate-y-1" 
                        style={{ color: "transparent" }} 
                        src={project_image}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    />
                )}
            </div>
        </motion.div>
    )
}

ProjectCard.propTypes = {
    project_title: PropTypes.string.isRequired,
    project_description: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node
    ])).isRequired,
    project_url: PropTypes.string.isRequired,
    tech_used: PropTypes.arrayOf(PropTypes.string).isRequired,
    project_image: PropTypes.string
}

export default ProjectCard;