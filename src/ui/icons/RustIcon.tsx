import { defaultIconStyle } from './styles'
import { SVGIconProps } from './types'

export const RustIcon = ({ style: customStyle, ...props }: SVGIconProps) => {
  const style = { ...defaultIconStyle, ...customStyle }
  return (
    <svg
      version="1.1"
      viewBox="19 19 106 106"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={style}
    >
      <title>Rust programming language logo</title>
      <path
        fill="currentColor"
        d="m124 70.7-4.39-2.72c-0.037-0.428-0.079-0.855-0.125-1.28l3.78-3.52c0.384-0.358 0.556-0.888 0.452-1.4-0.101-0.515-0.462-0.939-0.953-1.12l-4.83-1.8c-0.121-0.418-0.248-0.833-0.378-1.25l3.01-4.18c0.307-0.425 0.37-0.978 0.17-1.46-0.2-0.483-0.637-0.829-1.15-0.914l-5.09-0.828c-0.198-0.386-0.404-0.766-0.612-1.14l2.14-4.7c0.219-0.478 0.174-1.03-0.118-1.47-0.291-0.436-0.784-0.691-1.31-0.671l-5.17 0.18c-0.267-0.334-0.539-0.665-0.816-0.99l1.19-5.03c0.12-0.511-0.031-1.05-0.403-1.42-0.369-0.37-0.905-0.523-1.42-0.403l-5.03 1.19c-0.326-0.276-0.657-0.549-0.992-0.816l0.181-5.17c0.02-0.523-0.235-1.02-0.671-1.31-0.437-0.292-0.99-0.336-1.47-0.119l-4.69 2.14c-0.379-0.208-0.759-0.414-1.14-0.613l-0.83-5.09c-0.084-0.516-0.43-0.954-0.914-1.15-0.483-0.201-1.04-0.136-1.46 0.17l-4.18 3.01c-0.412-0.131-0.826-0.257-1.24-0.377l-1.8-4.83c-0.183-0.492-0.607-0.853-1.12-0.955-0.514-0.101-1.04 0.07-1.4 0.452l-3.52 3.78c-0.425-0.047-0.853-0.09-1.28-0.125l-2.72-4.4c-0.275-0.445-0.762-0.716-1.29-0.716s-1.01 0.271-1.28 0.716l-2.72 4.4c-0.428 0.035-0.856 0.078-1.28 0.125l-3.52-3.78c-0.357-0.382-0.887-0.553-1.4-0.452-0.515 0.103-0.939 0.463-1.12 0.955l-1.8 4.83c-0.418 0.12-0.832 0.247-1.24 0.377l-4.18-3.01c-0.425-0.307-0.979-0.372-1.46-0.17-0.483 0.2-0.83 0.638-0.914 1.15l-0.83 5.09c-0.384 0.199-0.764 0.404-1.14 0.613l-4.69-2.14c-0.477-0.218-1.03-0.173-1.47 0.119-0.436 0.29-0.691 0.787-0.671 1.31l0.18 5.17c-0.334 0.267-0.665 0.54-0.992 0.816l-5.03-1.19c-0.511-0.119-1.05 0.033-1.42 0.403-0.372 0.371-0.523 0.906-0.403 1.42l1.18 5.03c-0.275 0.326-0.547 0.656-0.814 0.99l-5.17-0.18c-0.521-0.015-1.02 0.235-1.31 0.671-0.292 0.434-0.336 0.99-0.119 1.47l2.14 4.7c-0.208 0.377-0.414 0.757-0.613 1.14l-5.09 0.828c-0.517 0.084-0.953 0.43-1.15 0.914-0.2 0.485-0.135 1.04 0.17 1.46l3.01 4.18c-0.131 0.413-0.258 0.828-0.378 1.25l-4.83 1.8c-0.49 0.183-0.851 0.607-0.953 1.12-0.102 0.514 0.069 1.04 0.452 1.4l3.78 3.52c-0.047 0.425-0.089 0.853-0.125 1.28l-4.39 2.72c-0.445 0.275-0.716 0.761-0.716 1.29s0.271 1.01 0.716 1.28l4.39 2.72c0.036 0.428 0.078 0.855 0.125 1.28l-3.78 3.52c-0.383 0.357-0.554 0.887-0.452 1.4 0.102 0.515 0.463 0.938 0.953 1.12l4.83 1.8c0.12 0.418 0.247 0.833 0.378 1.25l-3.01 4.18c-0.306 0.426-0.371 0.979-0.17 1.46 0.201 0.485 0.638 0.831 1.16 0.914l5.09 0.828c0.199 0.386 0.403 0.766 0.613 1.14l-2.14 4.69c-0.218 0.477-0.173 1.03 0.119 1.47 0.292 0.437 0.789 0.692 1.31 0.671l5.16-0.181c0.269 0.336 0.54 0.665 0.816 0.992l-1.18 5.03c-0.12 0.51 0.031 1.04 0.403 1.41 0.369 0.373 0.906 0.522 1.42 0.402l5.03-1.18c0.327 0.278 0.658 0.548 0.992 0.814l-0.18 5.17c-0.02 0.523 0.235 1.02 0.671 1.31 0.434 0.291 0.99 0.335 1.47 0.117l4.69-2.14c0.378 0.21 0.758 0.414 1.14 0.613l0.83 5.09c0.084 0.518 0.43 0.956 0.914 1.16 0.483 0.201 1.04 0.136 1.46-0.169l4.18-3.01c0.413 0.131 0.828 0.259 1.25 0.379l1.8 4.83c0.183 0.49 0.607 0.853 1.12 0.953 0.514 0.104 1.04-0.068 1.4-0.452l3.52-3.78c0.425 0.049 0.853 0.09 1.28 0.128l2.72 4.39c0.274 0.443 0.761 0.716 1.28 0.716s1.01-0.272 1.29-0.716l2.72-4.39c0.428-0.038 0.855-0.079 1.28-0.128l3.52 3.78c0.357 0.384 0.887 0.556 1.4 0.452 0.515-0.101 0.939-0.463 1.12-0.953l1.8-4.83c0.418-0.12 0.833-0.248 1.25-0.379l4.18 3.01c0.425 0.305 0.979 0.37 1.46 0.169 0.484-0.199 0.83-0.638 0.914-1.16l0.83-5.09c0.384-0.199 0.764-0.406 1.14-0.613l4.69 2.14c0.477 0.218 1.03 0.174 1.47-0.117 0.436-0.292 0.69-0.787 0.671-1.31l-0.18-5.17c0.334-0.267 0.665-0.536 0.991-0.814l5.03 1.18c0.511 0.12 1.05-0.029 1.42-0.402 0.372-0.371 0.523-0.904 0.403-1.41l-1.18-5.03c0.276-0.327 0.548-0.656 0.814-0.992l5.17 0.181c0.521 0.021 1.02-0.234 1.31-0.671 0.292-0.436 0.337-0.991 0.118-1.47l-2.14-4.69c0.209-0.379 0.414-0.759 0.612-1.14l5.09-0.828c0.518-0.083 0.954-0.429 1.15-0.914 0.2-0.483 0.137-1.04-0.17-1.46l-3.01-4.18c0.13-0.413 0.257-0.828 0.378-1.25l4.83-1.8c0.491-0.184 0.853-0.607 0.953-1.12 0.104-0.514-0.068-1.04-0.452-1.4l-3.78-3.52c0.046-0.425 0.088-0.853 0.125-1.28l4.39-2.72c0.445-0.274 0.716-0.761 0.716-1.28s-0.27-1.01-0.715-1.29zm-29.4 36.5c-1.68-0.362-2.74-2.02-2.38-3.7 0.359-1.68 2.01-2.75 3.69-2.39 1.68 0.359 2.75 2.02 2.39 3.7s-2.01 2.75-3.69 2.39zm-1.49-10.1c-1.53-0.328-3.04 0.646-3.36 2.18l-1.56 7.28c-4.81 2.18-10.2 3.4-15.8 3.4-5.76 0-11.2-1.27-16.1-3.55l-1.56-7.28c-0.328-1.53-1.83-2.51-3.36-2.18l-6.43 1.38c-1.19-1.23-2.3-2.54-3.32-3.92h31.3c0.354 0 0.59-0.064 0.59-0.386v-11.1c0-0.322-0.236-0.386-0.59-0.386h-9.15v-7.01h9.89c0.903 0 4.83 0.258 6.08 5.28 0.393 1.54 1.26 6.56 1.85 8.17 0.588 1.8 2.98 5.4 5.53 5.4h15.6c0.177 0 0.366-0.02 0.565-0.056-1.08 1.47-2.27 2.86-3.54 4.16l-6.58-1.41zm-43.3 9.95c-1.68 0.362-3.33-0.708-3.69-2.39-0.359-1.68 0.708-3.34 2.39-3.7 1.68-0.359 3.33 0.711 3.69 2.39 0.359 1.68-0.709 3.34-2.39 3.7zm-11.9-48.1c0.696 1.57-0.012 3.41-1.58 4.11-1.57 0.697-3.4-0.012-4.1-1.58s0.012-3.41 1.58-4.11c1.57-0.696 3.4 0.012 4.1 1.58zm-3.65 8.64 6.7-2.98c1.43-0.635 2.08-2.31 1.44-3.74l-1.38-3.12h5.42v24.4h-10.9c-0.949-3.34-1.46-6.86-1.46-10.5 0-1.39 0.075-2.76 0.219-4.11zm29.4-2.37v-7.2h12.9c0.667 0 4.71 0.771 4.71 3.79 0 2.51-3.1 3.41-5.65 3.41h-12zm46.9 6.48c0 0.956-0.035 1.9-0.105 2.84h-3.93c-0.393 0-0.551 0.258-0.551 0.643v1.8c0 4.24-2.39 5.17-4.49 5.4-2 0.225-4.21-0.836-4.48-2.06-1.18-6.63-3.14-8.04-6.24-10.5 3.85-2.44 7.85-6.05 7.85-10.9 0-5.21-3.57-8.49-6-10.1-3.42-2.25-7.2-2.7-8.22-2.7h-40.6c5.51-6.14 13-10.5 21.4-12.1l4.79 5.02c1.08 1.13 2.87 1.18 4.01 0.092l5.36-5.12c11.2 2.09 20.7 9.07 26.2 18.7l-3.67 8.28c-0.633 1.43 0.013 3.11 1.44 3.74l7.06 3.14c0.122 1.25 0.186 2.52 0.186 3.8zm-40.6-41.9c1.24-1.19 3.21-1.14 4.39 0.101 1.18 1.24 1.14 3.21-0.103 4.4-1.24 1.19-3.21 1.14-4.39-0.102-1.18-1.24-1.14-3.21 0.103-4.4zm36.4 29.3c0.695-1.57 2.53-2.28 4.1-1.58 1.57 0.696 2.28 2.54 1.58 4.11-0.695 1.57-2.53 2.28-4.1 1.58-1.57-0.696-2.28-2.54-1.58-4.11z"
      />
    </svg>
  )
}
