import facepaint from 'facepaint'

const breakpointPxScale = [0, 480, 768, 992, 1280, 1536]

import { rem } from 'ui/lib/size'

const mq = facepaint(
  breakpointPxScale.map(
    (bpValue) => `@media screen and (min-width: ${rem(bpValue)}rem)`,
  ),
  { overlap: true },
)

export { mq }
