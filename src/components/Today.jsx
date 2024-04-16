export const Today = (props) => {
  return (
    <p>
      <span className="today__day">{props.day}</span>.{' '}
      <span className="today__month">{props.month}</span>.{' '}
      <span className="today__year">{props.year}</span>
    </p>
  );
};
