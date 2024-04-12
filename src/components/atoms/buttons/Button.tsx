import { ButtonProps } from '../../../type/components/atoms/buttons';

const Button = (props: ButtonProps) => {
  const { className, buttonVariant = 'primary', ...restProps } = props;

  return (
    <button
      {...restProps}
      className={`${className} ${buttonVariant}-button basic-button`}
    />
  );
};

export default Button;
