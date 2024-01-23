const Experience = () => {
  return (
    <section
      id='experience'
      className='s-experience'
      aria-label='Scrolled to Experience'
    >
      <h2 className='rotate'>Experience</h2>
      <div className='job'>
        <div className='summary'>
          <h3>Scotts Miracle-Gro, Apr 2015 - Aug 2023</h3>
          <p>
            Worked at Scotts Miracle-Gro for 8+ years as a web developer. I
            contributed to our external facing websites doing design,
            development, and maintenance. During this time, had the unique
            opportunity to grow through role and Platform changes. Visit my{" "}
            <a
              href='https://www.linkedin.com/in/bethpauley/'
              target='_blank'
              rel='noopener noreferrer'
            >
              LinkedIn
            </a>{" "}
            for details.
          </p>
        </div>
        <div className='details'>
          <div className='role'>
            <h4>SFCC Front-End Engineer, Dec 2022 - Aug 2023</h4>
            <ul
              className='skill-tag-list d-flex flex-wrap p-0'
              aria-label='Skills used for SFCC Front-End Engineer role'
            >
              <li className='tag d-block me-2 mb-2 py-1 px-2'>
                Salesforce Commerce Cloud (SFCC)
              </li>
              <li className='tag d-block me-2 mb-2 py-1 px-2'>SFRA</li>
              <li className='tag d-block me-2 mb-2 py-1 px-2'>ISML</li>
              <li className='tag d-block me-2 mb-2 py-1 px-2'>CSS3 / SASS</li>
              <li className='tag d-block me-2 mb-2 py-1 px-2'>Javascript</li>
            </ul>
            <p>
              Post re-platform of sites from Drupal to Salesforce by agency,
              moved to the Salesforce Commerce Cloud platform to develop the
              front-end.
            </p>
          </div>

          <div className='role'>
            <h4>Technical Lead, Nov 2021 – Nov 2022</h4>
            <ul
              className='skill-tag-list d-flex flex-wrap p-0'
              aria-label='Skills used for Technical Lead role'
            >
              <li className='tag d-block me-2 mb-2 py-1 px-2'>Shopify</li>
              <li className='tag d-block me-2 mb-2 py-1 px-2'>Yarn</li>
              <li className='tag d-block me-2 mb-2 py-1 px-2'>REST API</li>
              <li className='tag d-block me-2 mb-2 py-1 px-2'>CSS3</li>
              <li className='tag d-block me-2 mb-2 py-1 px-2'>Javascript</li>
              <li className='tag d-block me-2 mb-2 py-1 px-2'>Python</li>
            </ul>
            <p>
              Was Tech Lead for the redesign and launch of three “start-up”
              sites on Shopify. I worked with product owners on feature request
              and collaborated with developers on technical direction.
              Maintained subscription data.
            </p>
          </div>

          <div className='role'>
            <h4>Lead Frontend Engineer, Jan 2018 – Nov 2021</h4>
            <ul
              className='skill-tag-list d-flex flex-wrap p-0'
              aria-label='Skills used for Lead Frontend Engineer role'
            >
              <li className='tag d-block me-2 mb-2 py-1 px-2'>Drupal 8</li>
              <li className='tag d-block me-2 mb-2 py-1 px-2'>Grunt</li>
              <li className='tag d-block me-2 mb-2 py-1 px-2'>Twig</li>
              <li className='tag d-block me-2 mb-2 py-1 px-2'>jQuery</li>
              <li className='tag d-block me-2 mb-2 py-1 px-2'>Javascript</li>
              <li className='tag d-block me-2 mb-2 py-1 px-2'>CSS3 / SASS</li>
              <li className='tag d-block me-2 mb-2 py-1 px-2'>PHP</li>
              <li className='tag d-block me-2 mb-2 py-1 px-2'>MySQL</li>
            </ul>
            <p>
              Became the point person for front end development on Drupal. This
              involved reviewing feature request, reviewing code, and mentoring.
            </p>
          </div>

          <div className='role'>
            <h4>Frontend Engineer, April 2015 – Jan 2018</h4>
            <ul
              className='skill-tag-list d-flex flex-wrap p-0'
              aria-label='Skills used for Frontend Engineer role'
            >
              <li className='tag d-block me-2 mb-2 py-1 px-2'>Drupal 8</li>
              <li className='tag d-block me-2 mb-2 py-1 px-2'>Grunt</li>
              <li className='tag d-block me-2 mb-2 py-1 px-2'>Twig</li>
              <li className='tag d-block me-2 mb-2 py-1 px-2'>jQuery</li>
              <li className='tag d-block me-2 mb-2 py-1 px-2'>Javascript</li>
              <li className='tag d-block me-2 mb-2 py-1 px-2'>CSS3 / SASS</li>
              <li className='tag d-block me-2 mb-2 py-1 px-2'>PHP</li>
            </ul>
            <p>
              During this time, took part in a major project to move our nine
              sites from ATG to Drupal CMS. Worked with Drupal Implementer and
              Scotts Senior Frontend Developer to build templates, view modes,
              image styles, and theme sites.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Experience;
