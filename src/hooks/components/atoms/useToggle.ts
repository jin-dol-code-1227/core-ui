import {
  useCallback,
  useState,
  MouseEventHandler,
  MouseEvent,
  useEffect,
} from 'react';

function useToggle<T extends HTMLElement>(
  initialState: boolean = false,
  clickHandler?: (state: boolean) => void,
  onClick?: MouseEventHandler<T>
): [boolean, (event: MouseEvent<T>) => void] {
  const [isActive, setIsActive] = useState<boolean>(initialState);

  useEffect(() => {
    setIsActive(initialState);
  }, [initialState]);

  const onClickComponent = useCallback(
    (event: MouseEvent<T>) => {
      if (clickHandler) clickHandler(isActive);
      if (onClick) onClick(event);
      setIsActive(!isActive);
    },
    [isActive]
  );

  return [isActive, onClickComponent];
}

export default useToggle;
