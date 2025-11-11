import React from 'react';
import Reason from './Reason';
import icon1 from '../img/icons1.png'; 
import icon2 from '../img/icons2.png';
import icon3 from '../img/icons3.png';

const reasonsData = [
  {
    icon: icon1,
    title: 'Стипендия DAAD',
    description: 'Стипендия DAAD открывает путь к обучению и стажировке в лучших вузах Германии.',
  },
  {
    icon: icon2,
    title: 'Современное образование',
    description: 'Практическое обучение, современные лаборатории и активная студенческая жизнь помогают строить успешную карьеру.',
  },
  {
    icon: icon3,
    title: 'Учёба в Германии',
    description: 'После 3 курса студенты могут продолжить обучение в Германии и получить международный диплом.',
  },
];

export default function Reasons() {
  return (
    <section className="reasons">
      <div className="reasons__header">
        <h1>Причины выбрать INAI.kg</h1>
        <p>
          Миссией Института является расширение границ IT-образования в Кыргызской Республике за счет внедрения инновационных образовательных программ германских вузов.
        </p>
      </div>

      <div className="reasons__cards">
        {reasonsData.map((reason, index) => (
          <Reason
            key={index}
            icon={reason.icon}
            title={reason.title}
            description={reason.description}
          />
        ))}
      </div>
    </section>
  );
}