import { css } from '@emotion/react'
import { defaultIconStyle } from 'ui/icons/styles'
import { SVGIconProps } from 'ui/icons/types'

export const RollupIcon = ({ style: customStyle, ...props }: SVGIconProps) => {
  const style = {
    ...defaultIconStyle,
    ...customStyle,
  }
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="100 100 800 800"
      {...props}
      style={style}
      css={styles.container}
    >
      <g id="XMLID_14_">
        <linearGradient
          id="XMLID_4_"
          gradientUnits="userSpaceOnUse"
          x1="444.469"
          y1="526.051"
          x2="598.469"
          y2="562.051"
        >
          <stop offset="0" stopColor="#FF6533" />
          <stop offset=".157" stopColor="#FF5633" />
          <stop offset=".434" stopColor="#FF4333" />
          <stop offset=".714" stopColor="#FF3733" />
          <stop offset="1" stopColor="#F33" />
        </linearGradient>
        <path
          id="XMLID_15_"
          className="st0"
          d="M721 410c0-33.6-8.8-65.1-24.3-92.4-41.1-42.3-130.5-52.1-152.7-.2-22.8 53.2 38.3 112.4 65 107.7 34-6-6-84-6-84 52 98 40 68-54 158S359 779 345 787c-.6.4-1.2.7-1.9 1h368.7c6.5 0 10.7-6.9 7.8-12.7l-96.4-190.8c-2.1-4.1-.6-9.2 3.4-11.5C683 540.6 721 479.8 721 410z"
        />
      </g>
      <g id="XMLID_2_">
        <linearGradient
          id="XMLID_5_"
          gradientUnits="userSpaceOnUse"
          x1="420.382"
          y1="475.002"
          x2="696.383"
          y2="689.002"
        >
          <stop offset="0" stopColor="#BF3338" />
          <stop offset="1" stopColor="#F33" />
        </linearGradient>
        <path
          id="XMLID_10_"
          className="st1"
          d="M721 410c0-33.6-8.8-65.1-24.3-92.4-41.1-42.3-130.5-52.1-152.7-.2-22.8 53.2 38.3 112.4 65 107.7 34-6-6-84-6-84 52 98 40 68-54 158S359 779 345 787c-.6.4-1.2.7-1.9 1h368.7c6.5 0 10.7-6.9 7.8-12.7l-96.4-190.8c-2.1-4.1-.6-9.2 3.4-11.5C683 540.6 721 479.8 721 410z"
        />
      </g>
      <linearGradient
        id="XMLID_8_"
        gradientUnits="userSpaceOnUse"
        x1="429.386"
        y1="517.156"
        x2="469.386"
        y2="559.156"
      >
        <stop offset="0" stopColor="#FF6533" />
        <stop offset=".157" stopColor="#FF5633" />
        <stop offset=".434" stopColor="#FF4333" />
        <stop offset=".714" stopColor="#FF3733" />
        <stop offset="1" stopColor="#F33" />
      </linearGradient>
      <path
        id="XMLID_3_"
        className="st2"
        d="M345 787c14-8 110-198 204-288s106-60 54-158c0 0-199 279-271 417"
      />
      <g id="XMLID_7_">
        <linearGradient
          id="XMLID_9_"
          gradientUnits="userSpaceOnUse"
          x1="502.111"
          y1="589.457"
          x2="490.111"
          y2="417.457"
        >
          <stop offset="0" stopColor="#FF6533" />
          <stop offset=".157" stopColor="#FF5633" />
          <stop offset=".434" stopColor="#FF4333" />
          <stop offset=".714" stopColor="#FF3733" />
          <stop offset="1" stopColor="#F33" />
        </linearGradient>
        <path
          id="XMLID_12_"
          className="st3"
          d="M373 537c134.4-247.1 152-272 222-272 36.8 0 73.9 16.6 97.9 46.1-32.7-52.7-90.6-88-156.9-89H307.7c-4.8 0-8.7 3.9-8.7 8.7V691c13.6-35.1 36.7-85.3 74-154z"
        />
      </g>
      <linearGradient
        id="XMLID_11_"
        gradientUnits="userSpaceOnUse"
        x1="450.125"
        y1="514.209"
        x2="506.943"
        y2="552.846"
      >
        <stop offset="0" stopColor="#FBB040" />
        <stop offset="1" stopColor="#FB8840" />
      </linearGradient>
      <path
        id="XMLID_6_"
        className="st4"
        d="M549 499c-94 90-190 280-204 288s-37.5 9-50-5c-13.3-14.9-34-39 78-245 134.4-247.1 152-272 222-272 36.8 0 73.9 16.6 97.9 46.1 1.3 2.1 2.6 4.3 3.9 6.5-41.1-42.3-130.5-52.1-152.7-.2-22.8 53.2 38.3 112.4 65 107.7 34-6-6-84-6-84C655 439 643 409 549 499z"
      />
      <linearGradient
        id="XMLID_16_"
        gradientUnits="userSpaceOnUse"
        x1="508.333"
        y1="295.758"
        x2="450.333"
        y2="933.758"
      >
        <stop offset="0" stopColor="#FFF" />
        <stop offset="1" stopColor="#FFF" stopOpacity="0" />
      </linearGradient>
      <path
        id="XMLID_13_"
        className="st5"
        d="M384 548c134.4-247.1 152-272 222-272 30.3 0 60.8 11.3 84 31.7-24-27.4-59.6-42.7-95-42.7-70 0-87.6 24.9-222 272-112 206-91.3 230.1-78 245 1.9 2.1 4.1 3.9 6.4 5.4-11.7-17-16.9-56.5 82.6-239.4z"
      />
    </svg>
  )
}

const styles = {
  container: css`
    height: 1.625rem;
    width: 1.625rem;

    .st0 {
      fill: url(#XMLID_4_);
    }

    .st1 {
      fill: url(#XMLID_5_);
    }

    .st2 {
      fill: url(#XMLID_8_);
    }

    .st3 {
      fill: url(#XMLID_9_);
    }

    .st4 {
      fill: url(#XMLID_11_);
    }

    .st5 {
      opacity: 0.3;
      fill: url(#XMLID_16_);
    }
  `,
}
