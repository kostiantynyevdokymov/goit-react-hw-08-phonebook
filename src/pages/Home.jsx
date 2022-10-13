import {
  Title,
  DevelopedBy,
  LinkIconsList,
} from '../components/Home/Home.styled';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Home = () => {
  return (
    <>
      <Title>Welcome! This is Phonebook.app</Title>

      <LinkIconsList>
        <li>
          <a href="https://github.com/kostiantynyevdokymov">
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kostiantyn-yevdokymov/">
            <AiFillLinkedin />
          </a>
        </li>
      </LinkIconsList>
      <DevelopedBy>Developed by Kostiantyn Yevdokymov 2022</DevelopedBy>
    </>
  );
};

export default Home;
