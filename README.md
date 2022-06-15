#Work Day Scheduler

https://caitlinparsons25.github.io/work-day-scheduler/

## Aims of the project
1. Create a scheduler that represents the hours of the work day
2. Automatically display the user's current date in the header
3. Style the hour blocks according to the users current time
4. Allow the user to save text in the hour blocks' text area (using local storage)

### 1. Create a scheduler that represents the hours of the work day
The basis of the app is a schedule of the hours of the work day (9am to 5pm) in chronological order, with the hour on the left, a text area in the middle, and a save button on the right.
![picture](./assets/readme-images/main%20page.png)

### 2. Automatically display the user's current date in the header
Using jQuery and moment.js, the user's current date is automatically displayed in the app's header.
![picture](./assets/readme-images/header%20date.png)

### 3. Style the hour blocks according to the users current time
Again using jQuery and moment.js as well as the CSS style sheet, parameters are placed on the hour blocks' text areas to change their background color based on whether that hour block is in the past (gray), present (red), or future (green) based on the current time that the user is viewing the app.
![picture](./assets/readme-images/color%20block.png)

### 4. Allow the user to save text in the hour blocks' text area (using local storage)
When the user enters text in the text area of an hour block, they can then click on the save button (a blue button with a floppy disk icon) and the text they entered will be saved to local storage, so that if they refresh or leave and then return to the page, their data will be saved and displayed.
![picture](./assets/readme-images/schedule%20text.png)
*This image was taken after saving the text with the save buttons and refreshing the page*
