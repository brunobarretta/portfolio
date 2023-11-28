import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaStar, FaGraduationCap, FaSuitcase, FaGlobeAsia } from 'react-icons/fa';
import { FaRocket } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';


const Experience = () => {
  const {t} = useTranslation();
  
  return (
    <section id='experience' className='pb-10'>
      <div className="text-center mb-20">
        <FaRocket className="w-10 h-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          {t('experience.title')}
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          {t('experience.subtitle')}
        </p>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date={t('experience.present')}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaSuitcase />}
        >
          <h3 className="text-lg font-bold text-gray-50">{t('experience.job_two')}</h3>
          <h4 className="text-md font-bold text-gray-50">Codex</h4>
          <h4 className="text-md text-gray-50">{t('experience.city_cps')}</h4>
          <p className='text-gray-50'>
           React.js · TypeScript · JavaScript · HTML · CSS · Styled-components · Redux · GraphQL · Material-UI · GitLab  
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ boxShadow: '0 4px 0 rgb(33, 150, 243)' }}
          date="02/2022 - 09/2022"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaSuitcase />}
        >
          <h3 className="text-lg font-bold text-sky-900">{t('experience.job_one')}</h3>
          <h4 className="text-md font-bold text-sky-900">KPEyes</h4>
          <h4 className="text-md text-sky-900">{t('experience.city_idt')}</h4>
          <p className='text-gray-500'>
            Angular · Node.js · Firebase · Ionic · MySQL · JavaScript · HTML · CSS 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ boxShadow: '0 4px 0 rgb(148, 33, 243)' }}
          date="2019 - 2021"
          iconStyle={{ background: 'rgb(148, 33, 243)', color: '#fff' }}
          icon={<FaGlobeAsia />}
        >
          <h3 className="text-lg font-bold text-sky-900">{t('experience.career_break')}</h3>
          <h4 className="text-md text-sky-900">{t('experience.city_ngy')}</h4>
          <p className='text-gray-500'>
            {t('experience.career_break_resume')}
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ boxShadow: '0 4px 0 rgb(33, 150, 243)' }}
          date="2006 - 2008"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<FaSuitcase />}
        >
          <h3 className="text-lg font-bold text-sky-900">{t('experience.job_one')}</h3>
          <h4 className="text-md font-bold text-sky-900">KPEyes</h4>
          <h4 className="text-md text-sky-900">{t('experience.city_idt')}</h4>
          <p className='text-gray-500'>
            Angular · Node.js · Firebase · MySQL · JavaScript · HTML · CSS 
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ boxShadow: '0 4px 0 rgb(233, 30, 99)' }}
          date="2015 - 2017"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<FaGraduationCap />}
        >
          <h3 className="text-lg font-bold text-sky-900">{t('experience.education_course')}</h3>
          <h4 className="text-md font-bold text-sky-900">{t('experience.education_college_name')}</h4>
          <h4 className="text-md font-bold text-sky-900">{t('experience.education_type')}</h4>
          <h4 className="text-md text-sky-900">{t('experience.city_idt')}</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<FaStar />}
        />
      </VerticalTimeline>
    </section>
  )
}

export default Experience