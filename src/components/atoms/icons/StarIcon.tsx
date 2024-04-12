import { SVGAttributes } from 'react';

const StarIcon = (props: SVGAttributes<SVGElement>) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='100%'
      height='100%'
      viewBox='0 0 64 64'
      version='1.1'
      xmlSpace='preserve'
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinejoin: 'round',
        strokeMiterlimit: 2,
      }}
      {...props}
    >
      <g>
        <path d='M26.564,4.989L22.095,19.912L6.665,19.912C4.265,19.912 2.137,21.396 1.333,23.588C0.518,25.817 1.224,28.304 3.116,29.794L16.075,40.008L11.32,55.88C10.618,58.223 11.552,60.742 13.648,62.091C15.7,63.408 18.396,63.28 20.305,61.775L32,52.559L43.695,61.775C45.604,63.28 48.3,63.408 50.352,62.091C52.449,60.742 53.383,58.223 52.68,55.88L47.925,40.008L60.884,29.794C62.776,28.304 63.482,25.817 62.667,23.588C61.864,21.396 59.735,19.912 57.335,19.912L41.906,19.912L37.436,4.989C36.732,2.637 34.525,0.999 32,0.999C29.475,0.999 27.268,2.637 26.564,4.989Z' />
      </g>
    </svg>
  );
};

export default StarIcon;
