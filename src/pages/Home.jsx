import {
  Title,
  DevelopedBy,
  LinkIconsList,
} from '../components/Home/Home.styled';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Home = () => {
  return (
    <>
      <Title>Welcome to Phonebook service</Title>
      <DevelopedBy>Developed by Mykhailo Shyhin</DevelopedBy>
      <LinkIconsList>
        <li>
          <a href="https://github.com/Glagolio">
            <BsGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/mykhailo-shyhin/">
            <BsLinkedin />
          </a>
        </li>
      </LinkIconsList>
    </>
  );
};

export default Home;
