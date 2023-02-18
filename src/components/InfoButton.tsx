import styled from 'styled-components';

type Props = {
  title: string;
};

const InfoButton: React.FC<Props> = (props) => {
  const { title } = props;

  return (
    <>
      <Button>{title}</Button>
      <Alert>Invalid stock symbol</Alert>
    </>
  );
};

const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #5898de;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }
`;

const Alert = styled.div``;

export default InfoButton;