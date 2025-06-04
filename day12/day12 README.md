# Day 12 - useEffect Dashboard Assignment

##  Task Overview

Built a dashboard that:
- Fetches user data from an API using `useEffect`
- Displays loading and fetched users
- Filters users via a search box
- Updates `document.title` every 5s with user count
- Cleans up timer on unmount

##  How useEffect Was Used

- On first render, we fetch data using `fetch(...)`
- Another `useEffect` sets an interval to update `document.title`
- On cleanup, `clearInterval(...)` is used to avoid memory leaks

##  Challenges Faced

- Overlapping background and text colors (fixed with CSS tweaks)
- Ensuring title update and filter didn’t conflict (split `useEffect`)

##  Learning Outcomes

- Better grasp of side-effects in React
- Using cleanup functions inside `useEffect`
- Clean, user-friendly UI with live updates
