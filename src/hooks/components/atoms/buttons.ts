import { useCallback, useState, MouseEventHandler } from 'react';

function useActiveButton(
  active: boolean = false,
  onClick?: MouseEventHandler<HTMLButtonElement>
): [boolean, MouseEventHandler<HTMLButtonElement>] {
  const [isActive, setIsActive] = useState<boolean>(active);

  const onClickButton = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (onClick) onClick(event);
      setIsActive((prev) => !prev);
    },
    []
  );

  return [isActive, onClickButton];
}

export default useActiveButton;
