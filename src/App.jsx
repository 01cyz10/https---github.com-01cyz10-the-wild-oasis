import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

// only available in this component
const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const StyledApp = styled.div`
  /* background-color: orange; */
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type='horizontal'>
            <Heading type='h1'>The Wild Oasis</Heading>

            <div>
              <Heading as='h2'>Check in and out</Heading>
              <Button onClick={() => alert('Check in')}>Check In</Button>
              <Button
                variations='secondary'
                size='medium'
                onClick={() => alert('Check out')}
              >
                Check Out
              </Button>
            </div>
          </Row>

          <Row>
            <Heading as='h3'>Form</Heading>
            <form>
              <Input type='number' placeholder='Number of Guests'></Input>
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}
export default App;
