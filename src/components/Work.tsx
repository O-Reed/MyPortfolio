import ProjectCard from "./ProjectCard"

const works = [
    {
        imgSrc: '/images',
        title: "full stack",
        tags: [],
        projectLink: "https://musify-dsfsd"
    },
    {
        imgSrc: '/images',
        title: "full stack",
        tags: [],
        projectLink: "https://musify-dsfsd"
    },
    {
        imgSrc: '/images',
        title: "full stack",
        tags: [],
        projectLink: "https://musify-dsfsd"
    },
    {
        imgSrc: '/images',
        title: "full stack",
        tags: [],
        projectLink: "https://musify-dsfsd"
    },
]

const Work = () => {
  return (
    <section id="work" className='section'>
        <div className='container'>
            <h2 className='headline-2 mb-8'>
                My Portfolio highlights
            </h2>

            <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-rull,_minmax(280px,_1f))]">
                {works.map(({imgSrc, title, tags, projectLink}, key) =>(
                    <ProjectCard 
                        key={key}
                        imgSrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                    />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Work