type Props = {
  title: string;
};

const TimeWindow: React.FC<Props> = (props) => {
  const { title } = props;

  return (
    <div>
      <div>{title}</div>
      <input type='number' /> days
    </div>
  );
};

export default TimeWindow;
