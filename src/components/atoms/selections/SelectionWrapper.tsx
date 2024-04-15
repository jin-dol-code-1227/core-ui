import { useCallback } from 'react';
import { SelectionWrapperProps } from '../../../type/components/atoms/selections';
import Selection from './Selection';

const SelectionWrapper = (props: SelectionWrapperProps) => {
  const {
    selections,
    name = 'selection',
    setValues,
    selectionVariable = 'checkbox',
  } = props;

  const onChangeSelection = useCallback(
    (index: number) => (value: boolean) => {
      if (!setValues) return;
      setValues((prev) => {
        prev[index] = value;
        return [...prev];
      });
    },
    []
  );

  return (
    <>
      {selections.map((props, index) => (
        <Selection
          {...props}
          name={name}
          onChangeActive={onChangeSelection(index)}
          selectionVariable={selectionVariable}
          key={`${selectionVariable}-${props.id}-${index}`}
        />
      ))}
    </>
  );
};

export default SelectionWrapper;
