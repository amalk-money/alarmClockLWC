# Alarm Clock using LWC
## Overview
This project is a functional alarm clock using Salesforce Lightning Web Components (LWC). It leverages various LWC concepts to manage time, set alarms, and notify users when the alarm is triggered.

## Features
* **Set an Alarm:** Users can set a specific time for the alarm.
* **Sound Notification:** A sound plays when the alarm time is reached.
* **Real-Time Clock:** Displays the current time in real-time.
* **Responsive UI:** Optimized for a seamless user experience in Salesforce Lightning environments.
* **LWC (Lightning Web Components):** Utilizes Salesforce LWC framework for modern UI development.

## Usage
1. Set the time for the alarm using the input field or dropdown field.
2. Click "Set Alarm" to set alarm.
3. The current time will be displayed in real-time.
4. When the time matches the set alarm, a notification sound will play.
5. Click "Reset Alarm" to stop the alarm and reset to set new alarm.

## Code Structure
> alarmClock.html
The HTML file is used to render the layout of the alarm clock, including:

* The real-time clock display.
* The time input field for setting the alarm.
* Buttons to set/reset the alarm.

2. alarmClock.js
The JavaScript controller handles the logic for:

* Updating the current time in real-time.
* Setting and comparing the alarm time.
* Triggering the sound notification when the alarm time is reached.

3. alarmClock.css
The CSS file is used to style the alarm clock, including:

* Adjustments to the layout.
* Custom styles for the clock and alarm settings.

4. clockDropDown
This is a child component used to reuse the drop-down menu for hour, minute and meridian.
