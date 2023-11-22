import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { skills, experiences } from '../constants';

const About = () => {
  return (
    <section className="max-container bg-gradient-to-r from-rose-100 to-teal-100">
      <h1 className="head-text">
        Hello, i am <span className="blue-gradient_text font-semibold drop-shadow">Rene</span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p className="font-semibold">A <span className="font-bold blue-gradient_text"> Full Stack Developer</span> From Slovenia</p>
      </div>
      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">Skills i acquired during my self taught journey 👨‍💻</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-black rounded-xl"/> 
              <div className="btn-front rounded-xl flex justify-center items-center border shadow-xl hover:border-sky-500">
                <img 
                src={skill.imageUrl}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Learning paths and experience 📚</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p className="font-semibold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement 
              key={experience.company_name} 
              date={experience.date}
              icon={<div className="flex justify-center items-center w-full h-full">
                <img
                 src={experience.icon}
                 alt={experience.company_name}
                 className="w-[60%] h-[60%] object-contain" 
                />
                </div>}
                iconStyle={{ background: experience.iconBg }}

                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none',
                }}
              >
                <div>
                  <h3 className="text-sky-600 text-xl font-poppins font-semibold underline">
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base" style={{margin:0}}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                    key={`experience-point-${index}`} 
                    className="text-black-500/50 font-normal pl-1 text-sm">
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}

export default About