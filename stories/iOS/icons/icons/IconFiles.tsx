/** Icons generated by create-react-icons. Don't edit this file directly. **/
import * as React from "react";
import PropTypes from "prop-types";

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

export const IconFiles: React.FunctionComponent<IconProps> = ({
  color = "currentColor",
  size = 24,
  ...other
}) => {
  return (
    <svg
      viewBox="0 0 61 77"
      version="1.1"
      height={size}
      width={size}
      {...other}
    >
      <title>Files</title>
      <desc>Created with Sketch.</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="linearGradient-1"
        >
          <stop offset="0%" stopColor="#18C0FA" />
          <stop offset="100%" stopColor="#1D76F2" />
        </linearGradient>
      </defs>
      <g
        id="Page-1"
        stroke="none"
        fill="none"
        strokeWidth="1"
        fillRule="evenodd"
      >
        <g id="Home" transform="translate(-27.000000, -467.000000)">
          <g id="Files" transform="translate(27.000000, 467.000000)">
            <text
              id="Messages-"
              fill={color}
              fontFamily="Helvetica"
              fontSize="12"
              fontWeight="normal"
            >
              <tspan x="17" y="76">
                Files
              </tspan>
            </text>
            <g id="Files-icon">
              <path
                d="M60.3068182,46.9977273 C60.3068182,54.3177273 54.3177273,60.3068182 46.9977273,60.3068182 L13.3090909,60.3068182 C5.98909091,60.3068182 0,54.3177273 0,46.9977273 L0,13.3090909 C0,5.98909091 5.98909091,0 13.3090909,0 L46.9977273,0 C54.3177273,0 60.3068182,5.98909091 60.3068182,13.3090909 L60.3068182,46.9977273 Z"
                id="Fill-1"
                fill={color}
              />
              <g transform="translate(8.000000, 13.000000)">
                <path
                  d="M3.24658537,0.000765625 C3.1860399,0.00239693595 3.12503484,0.0004375 3.06362195,0.0004375 C1.37886585,0.0004375 0.000329268292,1.477 0.000329268292,3.2816875 L0,10.9509219 L44.2679268,10.9509219 L44.2682561,12.7159189 C44.2681461,12.7004187 44.2682561,7.6848934 44.2682561,7.66934375 L44.2682561,6.5629375 C44.2682561,4.75825 42.7865488,3.2816875 40.9755732,3.2816875 L31.8295976,3.2816875 C31.819195,3.2816875 27.459276,3.28179687 18.7498405,3.28201562 L17.5269512,3.28125 C13.6053659,3.28125 13.2168293,0 10.7012195,0 L8.36890244,0 L3.24658537,0.000765625 Z"
                  id="Combined-Shape"
                  fill={color}
                />
                <path
                  d="M42.5990854,14.3063594 C42.5990854,14.8849531 42.1238415,15.3585469 41.5432317,15.3585469 L2.72469512,15.3585469 C2.14408537,15.3585469 1.66884146,14.8849531 1.66884146,14.3063594 L1.66884146,6.24651562 C1.66884146,5.66901562 2.14408537,5.19542187 2.72469512,5.19542187 L41.5432317,5.19542187 C42.1238415,5.19542187 42.5990854,5.66901562 42.5990854,6.24651562 L42.5990854,14.3063594 Z"
                  id="Fill-12"
                  fill={color}
                />
                <path
                  d="M44.2679268,16.4787398 L44.2679268,18.0009375 L44.2679268,23.3329687 L44.2679268,31.0810938 C44.2679268,32.8857812 42.7862195,34.3623438 40.9752439,34.3623438 L3.29268293,34.3623438 C1.48170732,34.3623438 0,32.8857812 0,31.0810938 L0,23.3329687 L0,18.0009375 L0,12.6689063 L0,10.6640625 C0,10.6485128 0.000110001824,10.6329876 0.000329268292,10.6174874 L0.000329268292,8.47623437 C0.000329268292,7.87467187 0.494231707,7.38248437 1.09789024,7.38248437 L43.1706951,7.38248437 C43.7743537,7.38248437 44.2682561,7.87467187 44.2682561,8.47623437 L44.2682561,16.4518594 C44.2682561,16.4608444 44.2681459,16.4698049 44.2679268,16.4787398 Z"
                  id="Combined-Shape"
                  fill={color}
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

IconFiles.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};