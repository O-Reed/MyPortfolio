import SkillCard from "./SkillCard"

const skillItem = [
    {        
        image: 'CSS3',
        label: 'CSS',
        desc: 'User Interface'
    },
    {
        image: 'tailwindcss',
        label: 'TailwindCSS',
        desc: 'CSS framework'
    },
    {
        image: 'sass',
        label: 'SASS',
        desc: 'CSS tool'
    },
    {
        image: 'js',
        label: 'JavaScript',
        desc: 'Interaction'
    },
    {
        image: 'reactjs',
        label: 'React',
        desc: 'JavaScript library'
    },
    {
        image: 'nextjs',
        label: 'Next',
        desc: 'JavaScript framework'
    },
    {
        image: 'nodejs',
        label: 'Node',
        desc: 'Web server'
    },
    {
        image: 'java',
        label: 'Java',
        desc: 'Backend code'
    },
    {
        image: 'spring',
        label: 'Spring',
        desc: 'Java framework'
    },
    {
        image: 'python',
        label: 'Python',
        desc: 'General code'
    },
    {
        image: 'csharp',
        label: 'C#',
        desc: 'App code'
    },
    {
        image: 'aws',
        label: 'AWS',
        desc: 'Cloud'
    },
    {
        image: 'kibana',
        label: 'Kibana',
        desc: 'View tool'
    },
    {
        image: 'mysql',
        label: 'MySQL',
        desc: 'SQL database'
    },
    {
        image: 'postgresql',
        label: 'PostgreSQL',
        desc: 'SQL database'
    },
    {
        image: 'redux',
        label: 'Redux',
        desc: 'State tool'
    },
    {
        image: 'swagger',
        label: 'Swagger',
        desc: 'API docs'
    },
    {
        image: 'redis',
        label: 'Redis',
        desc: 'Fast storage'
    },
    {
        image: 'prisma',
        label: 'Prisma',
        desc: 'ORM'
    },
    {
        image: 'nextjs2',
        label: 'Next.js',
        desc: 'Web framework'
    },
    {
        image: 'mongodb',
        label: 'MongoDB',
        desc: 'NoSQL database'
    },
    {
        image: 'less',
        label: 'LESS',
        desc: 'CSS helper'
    },
    {
        image: 'jquery',
        label: 'jQuery',
        desc: 'JS helper'
    },
    {
        image: 'jira',
        label: 'JIRA',
        desc: 'Product tool'
    },
]

const Skill = () => {
  return (
    <section className="section">
        <div className="container">
            <h2 className="headline-2">
                Essential Tools I use
            </h2>

            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                Discover the powerful toolsand technologies I use to create exceptional, high-performing websites & applications.
            </p>
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {
                    skillItem.map(({ image, label, desc}, key) => (
                        <SkillCard key={key} imgSrc={image} label={label} desc={desc} classes="" />
                        
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill