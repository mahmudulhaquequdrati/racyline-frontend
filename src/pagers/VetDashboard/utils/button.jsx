/* eslint-disable react/prop-types */
const Button = ({ className, content }) => {
  return (
    <button className={`${className} px-8 py-2 rounded-sm font-medium mb-3`}>
      {content}
    </button>
  );
};

export default Button;
