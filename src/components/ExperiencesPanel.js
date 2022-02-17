import React from 'react';
import clsx from 'clsx';
import styles from './ExperiencesPanel.module.css';
import Image from '@theme/IdealImage';

const FeatureList = [
  {
    company: 'GovTech Singapore',
    title: 'Associate DevOps Engineer',
    src: require('../../static/img/govtech.gif'),
    description: (
      <>
        {/* Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly. */}
      </>
    ),
  },
  {
    company: 'Bank of America',
    title: 'Summer Technology Analyst (GMOT)',
    src: require('../../static/img/bofa.png'),
    description: (
      <>
        {/* Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory. */}
      </>
    ),
  },
  {
    company: 'Bank of America',
    title: 'IA Technology Analyst (Equities)',
    src: require('../../static/img/bofa.png'),
    description: (
      <>
        {/* Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory. */}
      </>
    ),
  },
  {
    company: 'Shopee',
    title: 'Data Analytics Intern',
    src: require('../../static/img/shopee.jpeg'),
    description: (
      <>
        {/* Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer. */}
      </>
    ),
  },
  {
    company: 'Acronis',
    title: 'Research Developer Intern',
    src: require('../../static/img/acronis.png'),
    description: (
      <>
        {/* Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer. */}
      </>
    ),
  },
];

function Feature({src, company, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Image img={src} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{company}</h3>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function ExperiencesPanel() {
  return (
    <div className={styles.title}>
      <h1 className="hero__title">My Experiences</h1>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
