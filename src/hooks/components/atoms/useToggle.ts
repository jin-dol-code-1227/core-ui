import {
  useCallback,
  useState,
  MouseEventHandler,
  MouseEvent,
  useEffect,
} from 'react';

function useToggle(
  initialState: boolean = false,
  onChangeActive?: (state: boolean) => void,
  onClick?: MouseEventHandler<HTMLElement>
): [boolean, (event: MouseEvent<HTMLElement>) => void] {
  const [isActive, setIsActive] = useState<boolean>(initialState);

  useEffect(() => {
    setIsActive(initialState);
  }, [initialState]);

  const onClickComponent = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (onChangeActive) onChangeActive(!isActive);
      if (onClick) onClick(event);
      setIsActive(!isActive);
    },
    [isActive]
  );

  return [isActive, onClickComponent];
}

export default useToggle;
