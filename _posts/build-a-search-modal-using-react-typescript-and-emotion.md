---
slug: build-a-search-modal-using-react-typescript-and-emotion
title: 'Build a Search Modal using React, Typescript, and Emotion'
excerpt:
  'I'm going to walk you through building a Search Modal with hotkeys similar to the one on Tailwind's website. We'll be using React, Typescript, and Emotion for this tutorial.'
image: '/unsplash/pattern-1.jpg'
publishedAt: Thu Dec 23 2021 00:00:00 GMT-0500 (Eastern Standard Time)
---

# Build a Search Modal using React, Typescript, and Emotion

<aside>
💡 **IMPORTANT:** This is a rough draft of a blog post I plan on publishing and may have things wrong with the implementation as well.

If you run into any issues with the tutorial, please feel free to reach out to me via Twitter
([https://twitter.com/rasreee](https://twitter.com/rasreee)) or open an issue against the Github repository
(https://github.com/rasreee/react-search-modal-tutorial).

Preview the demo of the resulting UI:
[https://react-search-modal-tutorial.vercel.app](https://react-search-modal-tutorial.vercel.app)

</aside>

---

# 📖 Intro & Setup

For reference, here is [TailwindCSS](https://tailwindcss.com/)’s own Search Modal. If you haven’t ever used it before,
it might help to get familiar with how it works to better understand what we’re building!

Our goal is to build something similar but simpler. Namely, the modal:

- **opens** when `CMD+K` hotkey gets pressed
- opens when the user clicks the SearchPrompt button
- **closes** when the user clicks outside of the modal
- closes when the user clicks on a search result within the modal
- displays all search results in a single column - not in sections grouped by category like Tailwind’s does

## Follow Along With Code

Clone or fork [this repository](https://github.com/rasreee/react-search-modal-tutorial) and checkout the `skeleton`
branch to start this tutorial. The finished product can be found on the `completed` branch.

```bash
git clone https://github.com/rasreee/react-search-modal-tutorial.git

cd react-search-modal-tutorial && git checkout skeleton

yarn install && yarn start
```

# 🛠️  Implementation

## Architecting the Search Modal

- List of components to compose Search Modal with:
  - SearchPrompt
    - shows the user hotkeys to start searching (i.e. CMD+K)
    - when CMD+K is pressed, the SearchModal opens
  - SearchModal
    - holds the core/universal search components
    - when the user presses Escape or clicks outside of it, it should get hidden
  - SearchCore
    - as mentioned up there ☝️, this is comprised of all the components needed to implement the core Search UX, namely:
      - SearchBar - the query input component
      - SearchDropdown - displays the search results from the current query, if any

## SearchPrompt

![search-prompt.png](assets/blog/build-a-search-modal-using-react-typescript-and-emotion/search-prompt.png)

- just a button element - doesn’t actually take any text input
- listens for cmd+k and opens the modal
- clicking the button opens the modal as well
- **Finished SearchPrompt Code**

  ```tsx
  import { css } from '@emotion/react'
  import React from 'react'

  import styled from '../emotion/styled'
  import pseudo from '../lib/pseudo'
  import { KbdMetaK } from './KbdSymbol'
  import { SearchIcon } from './SearchIcon'

  const baseButtonStyles = css`
    display: flex;
    align-items: center;
    background: white;
    outline: none;
    cursor: pointer;
  `

  const StyledButton = styled.button`
    ${baseButtonStyles}
    justify-content: space-between;
    ${({ theme }) => css`
      color: ${theme.colors.gray[400]};
      width: ${theme.spacing[72]};
      height: ${theme.spacing[12]};
      padding: 0 ${theme.spacing[4]};
      box-shadow: ${theme.shadows.sm};
      border-radius: ${theme.radii.lg};
      border: 1px solid ${theme.colors.gray[200]};

      ${pseudo('_hover')} {
        background: ${theme.colors.gray[100]};
      }
    `}
  `

  const StyledSearchIcon = styled(SearchIcon)`
    flex: none;
    margin: auto 0;
    height: 1em;
    width: 1em;
    ${({ theme }) => css`
      color: ${theme.colors.gray[300]};
      font-size: ${theme.fontSizes.lg};
    `}
  `
  const Left = styled.div`
    display: flex;
    align-items: center;
    gap: 0.375rem;
  `

  export type SearchPromptProps = {
    onClick: () => void
  }

  export const SearchPrompt: React.FunctionComponent<SearchPromptProps> = ({ onClick }) => {
    return (
      <StyledButton onClick={onClick}>
        <Left>
          <StyledSearchIcon />
          <span
            css={css`
              flex: auto;
            `}
          >
            Quick search...
          </span>
        </Left>
        <KbdMetaK />
      </StyledButton>
    )
  }
  ```

I’m imagining the structure of Search Modal Feature, with both the SearchPrompt and the SearchModal, to look like this:

```tsx
<>
  <SearchPrompt onClick={openModal} />
  <SearchModal isOpen={modalIsOpen} close={closeModal} />
</>
```

... meaning SearchPrompt will just have on prop `onClick` . Now, all that’s left is the styling.

I already set up the theme object based on TailwindCSS’s default theme config found
[here](https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js) and their default theme
colors [here](https://github.com/tailwindlabs/tailwindcss/blob/master/src/public/colors.js).

Following the style outline on the left, we get the styled `<button />` element on the right.

```css
width: spacing-72;
height: spacing-12;
padding-left: spacing-4;
padding-right: spacing-4;
box-shadow: shadow-sm;
border-radius: radii-lg;
border-width: 1px;
border-style: solid;
border-color: gray-200;
background-color: white;
color: gray-400;

&:hover {
  background: gray-100;
}
```

I wrote the styles out like this first before translating them to CSS-in-JS so that we could refer to the styling more
efficiently in the future, kind of like a style-guide but ghetto :”).

```tsx
const baseButtonStyles = css`
  display: flex;
  align-items: center;
  background: white;
  outline: none;
  cursor: pointer;
`

const StyledButton = styled.button`
  ${baseButtonStyles}
  justify-content: space-between;
  ${({ theme }) => css`
    color: ${theme.colors.gray[400]};
    width: ${theme.spacing[72]};
    height: ${theme.spacing[12]};
    padding: 0 ${theme.spacing[4]};
    box-shadow: ${theme.shadows.sm};
    border-radius: ${theme.radii.lg};
    border: 1px solid ${theme.colors.gray[200]};

    ${pseudo('_hover')} {
      background: ${theme.colors.gray[100]};
    }
  `}
`
```

For the search icon, I just copied and pasted from **[heroicons.com](https://heroicons.com/).** Their icons
\*\*\*\*super easy to customize color and/or size.

1. Find the `search` icon at [heroicons.com](http://heroicons.com)
2. Copy its JSX and paste it into your code to create a React function component called SearchSVG

   - See full code for `SearchIcon` in `src/components/SearchIcon.tsx`

     ```tsx
     const SearchSvg: FunctionComponent<SVGAttributes<SVGSVGElement>> = (props) => {
       return (
         <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
           <path
             fillRule="evenodd"
             clipRule="evenodd"
             d="M5 11C5 7.691 7.691 5 11 5C14.309 5 17 7.691 17 11C17 14.309 14.309 17 11 17C7.691 17 5 14.309 5 11M20.707 19.293L17.312 15.897C18.365 14.543 19 12.846 19 11C19 6.589 15.411 3 11 3C6.589 3 3 6.589 3 11C3 15.411 6.589 19 11 19C12.846 19 14.543 18.365 15.897 17.312L19.293 20.707C19.488 20.902 19.744 21 20 21C20.256 21 20.512 20.902 20.707 20.707C21.098 20.316 21.098 19.684 20.707 19.293"
             fill="currentColor"
           />
         </svg>
       )
     }

     const SearchIcon = styled(SearchSvg)`
       flex: none;
       margin: auto;
       height: 1em;
       width: 1em;
     `

     export default SearchIcon
     ```

3. Create a Styled component called `SearchIcon` by styling the SearchSVG component and export it from the file and add
   it to SearchPrompt.

You’ll need to do additional styling to SearchIcon, but I’ll leave that to you as an exercise for styling with Emotion
:-)

Should look something like this:

![search-prompt.png](assets/blog/build-a-search-modal-using-react-typescript-and-emotion/search-prompt.png)

Now onto the modal!

## SearchModal

The SearchModal will probably need at least 3 props: `isOpen` and `onClose` for basic modal interaction and
`onSearchResultClick` for when the user selects a search result. It can handle all the search logic internally and only
needs to pass back search result data to its parent when it needs to be closed.

Let’s scaffold the initial SearchModal component. We can use the existing `Modal` component already implemented for you
(please lmk about any questions about that Modal component, but to save time let’s just use it for this tutorial):

```tsx
import { Modal, ModalProps } from './Modal'

/* Omit children from ModalProps since we will be rendering the Modal's children internally */
export interface SearchModalProps extends Omit<ModalProps, 'children'> {}

export const SearchModal: React.FunctionComponent<SearchModalProps> = (props) => {
  return <Modal {...props}>SEARCH MODAL</Modal>
}
```

Now, let’s make SearchModal open to the CMD+K hotkey. We need to listen globally for KeyboardEvents and determine
whether the target sequence of keyboard events as occurred, specifically a `CMD` key press and then subsequently a `K`
key press.

You can use any implementation for this as long as it works, but the way I have been implementing hotkeys in React
utilizes the `useKeyboardEvent` hook from the [@react-hookz/web](https://github.com/react-hookz/web.git) library.
_However_, I didn’t want to have to install the entire package just to use that one hook, so I created my own
`useKeyboardEvent` hook which is just a clone of their implementation. Big brain plays, only!!

The documentation explaining how to use `useKeyboardEvent` can be found
[here](https://react-hookz.github.io/web/?path=/docs/dom-usekeyboardevent--example). Basically, it listens for any
single KeyboardEvent passes the event object through a callback.

- Using `useKeyboardEvent`, I created a custom hook called `useKeyCombo` to listen for multiple KeyboardEvents and
  detect the target sequence of events.

  ```tsx
  import { useEffect, useMemo, useState } from 'react'

  import { useKeyboardEvent } from './useKeyboardEvent'

  export function useKeyCombo(combo: string, callback: () => void) {
    const [keysPressed, setKeysPressed] = useState<string[]>([])

    const pressedCombo = useMemo(() => {
      const res = keysPressed.length ? keysPressed.join('+') : ''

      return res
    }, [keysPressed])

    useKeyboardEvent(
      true,
      (e) => {
        setKeysPressed((prev) => prev.slice(-5).concat([e.key]))
      },
      [],
      {
        eventOptions: {
          passive: true
        }
      }
    )

    useEffect(() => {
      if (pressedCombo.includes(combo)) {
        callback()
        setKeysPressed([])
      }
    }, [keysPressed])
  }
  ```

  ## Basically, this is how the hook works:

Now you can use it to detect the `CMD+K` hotkey and open the SearchModal, like so:

```tsx
const [modalIsOpen, setModalIsOpen] = useState(false)

const openModal = () => setModalIsOpen(true)

useKeyCombo('Meta+k', openModal)
```

You can also use it for single keyboard events. For instance, you can use it to close the modal when the Escape key is
pressed:

```tsx
const closeModal = () => setModalIsOpen(false)

useKeyCombo('Escape', closeModal)
```

Your App component should look like this. Run `yarn start` to test that the SearchModal opens / closes to those hotkeys.
Then, we can move onto fleshing out the inner components of SearchModal.

```tsx
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  useKeyCombo('Meta+k', openModal)
  useKeyCombo('Escape', closeModal)

  return (
    <Main>
      <Container>
        <SearchPrompt onClick={openModal} />
        <SearchModal isOpen={modalIsOpen} onClose={closeModal} />
      </Container>
    </Main>
  )
}
```

## SearchCore

1. SearchBar - header component containing input field
2. SearchDropdown - contains search results list

Something along the lines of:

```tsx
<>
  <SearchBar query={query} onQueryChange={setQuery} />
  <SearchDropdown hits={hits} onHitClick={onHitClick} />
</>
```

... where `query` is the input value and `hits` is the list of search results from for the query.

The `onHitClick` callback will pass back the selected hit to the user of SearchCore. In other words, `onHitClick` can be
a prop of SearchCore. In addition, we can keep the hits and query states local and pass their states as props.

```tsx
type SearchCoreProps = {
  onHitClick: (selected: any) => void
}

export const SearchCore: React.FunctionComponent<SearchCoreProps> = ({ onHitClick }) => {
  const [query, setQuery] = useState('')
  const [hits, setHits] = useState<Data[]>([])
```

Every time the query value changes, we want to update the hits accordingly.

```tsx
const [isLoading, setIsLoading] = useState(false)

const submitQuery = async (submittedQuery: string) => {
  setIsLoading(true)
  const response = await findDataByQuery(submittedQuery)
  setHits(response)
  setIsLoading(false)
}

useEffect(() => {
  submitQuery(query)
}, [query])
```

Finally, we should hide SearchDropdown if the data for it isn’t ready or is empty.

```tsx
return (
  <>
    <SearchBar query={query} onQueryChange={setQuery} />
    {!isLoading && query.length > 0 && hits.length > 0 && <SearchDropdown hits={hits} onHitClick={onHitClick} />}
  </>
)
```

### SearchBar

![search-bar.png](assets/blog/build-a-search-modal-using-react-typescript-and-emotion/search-bar.png)

- Search icon
- Text input
- Esc symbol

Initial props for SearchBar

```tsx
type SearchBarProps = {
  query: string
  onQueryChange: (query: string) => void
```

Basic structure for SearchBar

```tsx
<Container>
  <Label>
    <SearchIcon />
  </Label>
  <Input value={query} onChange={handleChange} />
  <KbdEscape />
</Container>
```

We want to also have the input be focused as soon as the SearchModal is mounted.

```tsx
// Ref for the Search Input element
const inputRef = useRef<HTMLInputElement | null>(null)

// Autofocus the input upon mounting
useEffect(() => inputRef.current?.focus(), [])
```

Finally, we want to handle change events for the input by parsing the new query value from the event and passing it to
the parent.

```tsx
export const SearchBar: React.FunctionComponent<SearchBarProps> = ({ query, onQueryChange }) => {
  // Parse the new query value and pass it back to the parent
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const newValue = event.currentTarget.value
    onQueryChange(newValue)
  }
```

### SearchDropdown

![search-dropdown.png](assets/blog/build-a-search-modal-using-react-typescript-and-emotion/search-dropdown.png)

- Renders the list of search results given to it
- Should use a `<ul />` element with the role of `listbox` to render the dropdown list

Full implementation code

```tsx
type SearchDropdownProps = {
  onHitClick: (hit: Data) => void
  hits: Data[]
}

export const SearchDropdown: React.FunctionComponent<SearchDropdownProps> = ({ onHitClick, hits }) => {
  return (
    <Dropdown>
      <Content>
        <List role="listbox">
          {hits.map((hit, index) => (
            <ListItem key={hit.id}>
              <ItemButton onClick={() => onHitClick(hit)}>{hit.title}</ItemButton>
            </ListItem>
          ))}
        </List>
      </Content>
    </Dropdown>
  )
}
```

Render SearchCore inside SearchModal

```tsx
export const SearchModal: React.FunctionComponent<Props> = (props) => {
  const onHitClick = (selected: any) => {
    console.log(selected)
    props.onClose()
  }

  return (
    <Modal {...props}>
      <SearchCore onHitClick={onHitClick} />
    </Modal>
  )
}
```

Finally, we can now render the SearchModal feature like so:

```tsx
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => setModalIsOpen(true)
  const closeModal = () => setModalIsOpen(false)

  useHotKeys('Meta+k', openModal)
  useHotKeys('Escape', closeModal)

  return (
    <Page>
      <SearchPrompt onClick={openModal} />
      <SearchModal isOpen={modalIsOpen} onClose={closeModal} />
    </Page>
  )
}
```

Preview the demo of the completed UI:
[https://react-search-modal-tutorial.vercel.app](https://react-search-modal-tutorial.vercel.app)
