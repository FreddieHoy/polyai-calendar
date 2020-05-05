# PolyAI code test

This project includes both Question 1 AND Question 2 from the PoylAI code test.

## Getting Started.

1. Clone the git hub repo in to your local machine.
2. Go into the repository:

> cd polyai-calendar

3. Install all the packages by running this in your command line:

> npm i

4. Now follow these steps for question 1 or 2.

### Question one.

1. Run this in your command line:

> npm run start

2. If it does not happen automatically, open you web browser and search http://localhost:3000

### Question Two.

1. Run this in your command line:

> npm run zcity

2. This will now prompt you for the inputs in your command line.

### Testing the code.

Some automated tests have been written for both questions 1 & 2.

All of these test can be run with the command:

> npm run test

# Question One

## Brief

- Create a webpage that displays a calendar in grid form.
- The calendar must be similar to the one that is outputted from the UNIX cal command.
- Todays date must be highlighted.

## Technologies used

- React
- create-react-app
- Jest
- enzyme
- styled-components

## Approach Taken

I started the project using create-react-app. It allows for a fast start including setting up jest, using babel under the hood, hot reload etc. This allowed me to quickly get myself focused on the tasks key challenges.

## Approaching the Calendar problem.

The calendar was split in to three components:

- One displaying the month and year. `calendar/MonthYear.js`
- One displaying the days of the week. `calendar/WeekDays.js`
- One displaying the grid of dates. `calendar/Dates.js`

The first 2 components were easy enough to create. The current month and year is easy to get using the JS `Date` and the days of the week names were hard coded in.

## Creating the Calendar grid.

The most challenging aspect would be to form the date grid. It was noticed that this format could easily be made by looping over an array of length 42 with the correct days of the month in the right place. The correct Array just had to be made. See `calendar/helper.js`.

1. Firstly an array of 42 empty strings is created. (A)
2. An array of 1, 2, 3.. to the number of days in the month is created. (B)
3. Then the first day of the month's week day is worked out. (C)
4. Starting on this index C in array A, array B replaces B.length number of elements in A. This leaves the correct Array of length 42 and the dates of the month at the right place in that array.
5. Finally this array can be looped over to create the grid of dates. (`calendar/Dates.js`)

Step 4 is shown here inside the function `getDatesArray()`:

```
const calendarArray = createEmpty42Array();
  calendarArray.splice(
    weekDayIndex,
    numberOfDaysInThisMonth,
    ...monthCountArray
  );
```

CalendarArray is the empty string array (A) which, using the vanilla JS `.splice()` function, replaces part of the array with the `monthCountArray` (B).

The JS `Date object` is crucial as it allows you to get the day(index), month(index & name), year, weekday(index & name) and the number of days in the month when given any date.

## Searching through the months.

At first the calendar was made using by taking the current day using `new Date()` and then following the step mentioned in _Creating the Calendar grid._ (above).

So in oder to add the functionality of going forward a month, all that was needed was to create a `targetDate` (See `calendar/Calendar.js` hook). This `targetDate` is passed into the `getDatesArray()` function to display the correct array.

Therefore to move between months the `switchMonths()` onClick function was created which would add or minus a month to the `targetMonth` based on which arrow you pressed in the DOM.

```
const switchMonth = (e) => {
    const nextMonthIndexNumber = targetDate.getMonth() + (e.target.id ? 1 : -1);
    const adjacentMonth = new Date(targetDate.setMonth(nextMonthIndexNumber));

    setTargetDate(adjacentMonth);
```

## Checking the current day

Using this `targetDate` as the bases of which month was displayed. It would be passed into the `getHighlightedDay` function (`calendar/helper.js`).

If the `targetDate` is in the same month and year as the current date then it would return the date as a number, `highlightedDay`. If it wasn't, `highlightedDay` would = null.

```
export const getHighlightedDay = (date) => {
  const thisMonth = getMonthName(new Date());
  const targetMonth = getMonthName(date);

  const thisYear = getYear(new Date());
  const targetYear = getYear(date);

  if (thisMonth === targetMonth && thisYear === targetYear) {
    return new Date().getDate().toString();
  } else return null;
};
```

`highlightedDay` then gets passed into the `calendar/dates.js` component and using styled components highlights the current day.

## The `CalendarOld.js` component.

Originally the Calendar component was made using a classical react component. However to demonstrate ability the Calendar component was remade using hooks.

However both components are used.

- The Home page uses the functional (hooks) component.(`calendar/Calendar.js`)
- The About page uses the classical component.(`calendar/CalendarOld.js`)

## Testing.

### Changing Dates.

All of the calendar components have been tested using snapshots. However one of the issues with testing date in jest is that the current date changes. Therefore the test can 'expire'. To over come this for example in the `Calendar.js` test I have set the `today` variable myself so that it can not 'expire'.

```
it('renders the correct components', () => {
    const wrapper = shallow(<CalendarOld />);
    wrapper.setState({ today: null });
    expect(wrapper).toMatchSnapshot();
  });
```

So that in the snapshot the `today` props doesn't change every day.

I believe that most comprehensive testing could be done using the JS package `moment.js`. However with only a small amount of experience, and the only relatively small gain, I have decided not to use it.

### Testing React hooks

Although I have experience using react hooks, my experience of testing with them is very limited. I was unsuccessful in creating useful tests for the switchMonth function. I understand the effectiveness of hooks and look to learn more about testing them correctly in the future.

However a basic snapshot test was done and I was able to successfully test the switchMonth function in `CalendarOld.js` the classical component.

# Question Two

## Brief

- Understand the Z-city pizzeria problem.
- Answer 3 Questions about the problem:

1. Write down my thoughts on how I would approach the problem.
2. Code a solution.
3. What is the complexity of my approach and how could it be better?

## Technologies used

- React
- Jest
- Readline-sync package
- Vanilla JS ES6.

## Answers

### Question 1

The approach is to try and break this problem down into smaller ones. It seems that the problem could be broken down in to 3 stages:

1. Using input N create a 2D array representation of the city filling every block with the number 0.

2. Place each pizzeria one by one, adding 1 to every block within the radius.

3. Loop through the array and find the 'block' with the largest number.

Stage 1 seems quite straight forward. A 2D array seems to be very useful here.

Stage 2 seems like it has the most difficult problems, especially when trying to add 1 to blocks in the diagonal directions. A possible method would be to:

- Take the location of the pizzeria and of a given block.
- Work out the difference between there positions in X and Y.
- Sum these differences.
- Compare that sum to the radius to see it its within range.
- If it is in range add 1 to that block.
- Loop through these stages for every block on the map to add one to ever block in range.
- Then loop through all of these steps with however many pizzerias there are.

Stage 3 this also seems quite straight forward problem to solve:

- Loop through every square in the city
- Every time there is a higher number store it.
- Return this highest number at the end.

Seems like an okay start to a solution given a city size of maximum 1000 by 1000.

### Question 2

To see coded solution go to: `src/zcity`

To see solution in action run this in your command line:

> npm run zcity

The 3 stages mentioned in _Question 1_ are well represented in the 3 functions in `zcity/helper.js`

### Question 3

#### Complexity.

It seems that this coded solution is quite complex.

In order to successfully obtain a result you have to loop through the entire data set once just at Stages 1 and 3. Both of these steps complexity would be described as O(N^2) in Big O notation. Meaning that that the number of steps is directly proportional to the size of the input. For example if you have a city width of N = 2 there are 4 steps to create a 2 by 2 grid, and then when N = 5 there are 25 steps etc.

Stage 2 is also similar in relation to N as the city get bigger the number of actions does. However you have to do stage 2 every time a new pizzeria is added (M times). This stage could be written in big O notation as O(N^M).

I guess in total the solution complexity could be described as is O(N^(M+2)). (N = city width, M = number of pizzerias)

With N and M <= 1000 it is not the worst solution. If both N & M were 1000 it might be getting close however if they were both 100,000 the improved solutions would be needed to reduce computational cost.

#### Improvement.

There are defiantly improvements to be made.

For stage 2 we are given the coordinates of the pizzerias and the radius. Currently it searches the entire city starting from (0, 0) to (N, N). It compares each block to the pizzerias location and radius in order to add 1 or not to the block. Instead the comparison could start at the pizzerias location (x, y) and work outwardly adding 1 to all blocks within the radius until the radius has been reached. This way if the city was 1000 by 1000 and the pizzeria only had a radius of 5 then it would save searching 939 blocks just for adding one pizzeria.

A similar approach could be made for stage 3, searching for the highest number in the grid. The highest number has to be within range of a pizzeria. Therefore by coding a solution that only searches blocks within the radius of a pizzeria a lot of search steps can be saved.

Also in stage 3 the maximum deliveries can not be more then M, the number of pizzerias, so if a value of M is found then the search can stop.

It seems possible that stage 1 and 2 could be combined to set the city grid up in one loop over each block. This might be done by making comparisons to the pizzeria locations as the 2D array is being constructed. However these extra comparisons might lead to the same or even extra steps as each block is compared to an array of pizzeria locations.

---

# Appendix

## Create React APP Information

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
