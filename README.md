# FCC-timestamp challenge

## Overview
Implementation of these user stories:

**User Story:** I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).

**User Story:** If it does, it returns both the Unix timestamp and the natural language form of that date.

**User Story:** If it does not contain a date or Unix timestamp, it returns null for those properties.

This app is using moment.js to convert unix timestamp to natural date and the other way around. It's not perfect, but it does it's job :).

## Installation
```
git clone https://github.com/Apprryx/fcc-timestamp
cd fcc-timestamp
npm install
npm start
```

.env
```
SECRET=generate-your-secret
PORT=8080
APP_URL=http://localhost:8080/
```
## License

MIT License. [Click here for more information.](LICENSE.md)
