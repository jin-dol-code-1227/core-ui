import { IconButtonProps } from '../../../type/components/atoms/buttons';
import HeartIcon from '../icons/HeartIcon';
import BookmarkIcon from '../icons/BookmarkIcon';
import StarIcon from '../icons/StarIcon';
import useToggle from '../../../hooks/components/atoms/useToggle';

const IconButton = (props: IconButtonProps) => {
  const {
    className,
    iconButtonVariant,
    active = false,
    onClick,
    onClickToggle,
    ...restProps
  } = props;

  const [isActive, onClickButton] = useToggle<HTMLButtonElement>(
    active,
    onClickToggle,
    onClick
  );

  return (
    <button
      {...restProps}
      className={`${
        isActive ? 'primary-button' : 'secondary-button'
      } icon-button`}
      onClick={onClickButton}
    >
      {iconButtonVariant === 'heart' && (
        <HeartIcon
          className={`${
            isActive ? 'fill-rose-300' : 'fill-gray-100'
          } transition-colors`}
          width={24}
          height={24}
        />
      )}
      {iconButtonVariant === 'bookmark' && (
        <BookmarkIcon
          className={`${
            isActive ? 'fill-purple-300' : 'fill-gray-100'
          } transition-colors`}
          width={24}
          height={24}
        />
      )}
      {iconButtonVariant === 'star' && (
        <StarIcon
          className={`${
            isActive ? 'fill-amber-300' : 'fill-gray-100'
          } transition-colors`}
          width={24}
          height={24}
        />
      )}
    </button>
  );
};

export default IconButton;
