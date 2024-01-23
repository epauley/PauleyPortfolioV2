import Card from "react-bootstrap/Card";

const ProjectCard = (props) => {
  const { name, description, link, skills, img } = props;
  const skillArray = Object.values(skills);
  return (
    <a href={link} target='_blank' rel='noreferrer' className='d-flex'>
      <Card>
        <Card.Img variant='top' src={img} alt='...' />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <ul
            className='skill-tag-list d-flex flex-wrap p-0'
            aria-label='Skills used'
          >
            {skillArray.map((skill, index) => (
              <li key={index} className='tag d-block me-2 mb-2 py-1 px-2'>
                {skill}
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </a>
  );
};
export default ProjectCard;
