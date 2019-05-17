/** Icons generated by create-react-icons. Don't edit this file directly. **/
import * as React from "react";
import PropTypes from "prop-types";

interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number | string;
  color?: string;
}

export const IconTv: React.FunctionComponent<IconProps> = ({
  color = "currentColor",
  size = 24,
  ...other
}) => {
  return (
    <svg width="60px" height="76px" viewBox="0 0 60 76" version="1.1">
      <title>Group 4</title>
      <desc>Created with Sketch.</desc>
      <defs>
        <linearGradient
          x1="2.02012173%"
          y1="4.7941985%"
          x2="96.860238%"
          y2="93.9416956%"
          id="linearGradient-1"
        >
          <stop stop-color="#37B7C2" offset="0%" />
          <stop stop-color="#3DCFC9" offset="14.7759885%" />
          <stop stop-color="#44F6B9" offset="28.6314655%" />
          <stop stop-color="#4BCCEA" offset="80.5771073%" />
          <stop stop-color="#1B92C3" offset="100%" />
        </linearGradient>
        <rect id="path-2" x="0" y="0" width="43" height="27" rx="1" />
        <filter
          x="-3.5%"
          y="-5.6%"
          width="107.0%"
          height="111.1%"
          filterUnits="objectBoundingBox"
          id="filter-3"
        >
          <feMorphology
            radius="2"
            operator="erode"
            in="SourceAlpha"
            result="shadowSpreadInner1"
          />
          <feGaussianBlur
            stdDeviation="0.5"
            in="shadowSpreadInner1"
            result="shadowBlurInner1"
          />
          <feOffset
            dx="0"
            dy="0"
            in="shadowBlurInner1"
            result="shadowOffsetInner1"
          />
          <feComposite
            in="shadowOffsetInner1"
            in2="SourceAlpha"
            operator="arithmetic"
            k2="-1"
            k3="1"
            result="shadowInnerInner1"
          />
          <feColorMatrix
            values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.365149457 0"
            type="matrix"
            in="shadowInnerInner1"
          />
        </filter>
      </defs>
      <g
        id="Page-1"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="Home" transform="translate(-289.000000, -292.000000)">
          <g id="Group-4" transform="translate(289.000000, 292.000000)">
            <text
              id="TV"
              font-family="Helvetica"
              font-size="12"
              font-weight="normal"
              fill="#FFFFFF"
            >
              <tspan x="22" y="76">
                TV
              </tspan>
            </text>
            <path
              d="M39.0815,0 C45.105,0 48.116,0 51.3585,1.025 C54.8985,2.3135 57.6865,5.1015 58.975,8.6415 C60,11.8835 60,14.8955 60,20.9185 L60,39.0815 C60,45.105 60,48.116 58.975,51.3585 C57.6865,54.8985 54.8985,57.6865 51.3585,58.9745 C48.116,60 45.105,60 39.0815,60 L20.9185,60 C14.895,60 11.8835,60 8.6415,58.9745 C5.1015,57.6865 2.3135,54.8985 1.025,51.3585 C0,48.116 0,45.105 0,39.0815 L0,20.9185 C0,14.8955 0,11.8835 1.025,8.6415 C2.3135,5.1015 5.1015,2.3135 8.6415,1.025 C11.8835,0 14.895,0 20.9185,0 L39.0815,0 Z"
              id="Background"
              fill="#1E1E1F"
            />
            <g id="Group-3" transform="translate(9.000000, 15.000000)">
              <g id="Rectangle-6">
                <use fill="url(#linearGradient-1)" fill-rule="evenodd" />
                <use fill="black" fill-opacity="1" filter="url(#filter-3)" />
                <rect
                  stroke="#FFFFFF"
                  stroke-width="2"
                  stroke-linejoin="square"
                  x="1"
                  y="1"
                  width="41"
                  height="25"
                  rx="1"
                />
              </g>
              <rect
                id="Rectangle-7"
                fill="#FFFFFF"
                x="9"
                y="29"
                width="24"
                height="2"
                rx="1"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

IconTv.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};