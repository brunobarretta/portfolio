import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaStar, FaGraduationCap, FaSuitcase, FaGlobeAsia} from 'react-icons/fa';


const Experience = () => {
  return (
    <div>
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          {/* <CodeIcon className="mx-auto inline-block w-10 mb-4" /> */}
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Timeline
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
            facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
            fuga dolore.
          </p>
        </div>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="09/2022 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaSuitcase />}
        >
          <h3 className="vertical-timeline-element-title">Front-end Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Codex</h4>
          <h4 className="vertical-timeline-element-subtitle">Campinas, SP</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project Management, Team Leading
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="02/2022 - 09/2022"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaSuitcase />}
        >
          <h3 className="vertical-timeline-element-title">Fullstack Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Kpeyes</h4>
          <h4 className="vertical-timeline-element-subtitle">Indaiatuba, SP</h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2021"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaGlobeAsia />}
        >
          <h3 className="vertical-timeline-element-title">Career Break</h3>
          <h4 className="vertical-timeline-element-subtitle">Nagoya, Japan</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2006 - 2008"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaSuitcase />}
        >
          <h3 className="vertical-timeline-element-title">Fullstack Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Kpeyes</h4>
          <h4 className="vertical-timeline-element-subtitle">Indaiatuba, SP</h4>
          <p>
            User Experience, Visual Design
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2017"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="text-lg font-bold text-purple-600">System Analysis and Development</h3>
          <h4 className="vertical-timeline-element-subtitle">Bachelor of Technology</h4>
          {/* <p>
            Creative Direction, Visual Design
          </p> */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<FaStar />}
        />
      </VerticalTimeline>

    </div>
  )
}

export default Experience