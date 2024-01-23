# Telegram Mini App

## Overview

Welcome to the Telegram Mini App – a project that combines the power of a Telegram bot written in Node.js with a sleek web application built using Angular. This mini app allows users to interact with a course platform through both the Telegram platform and a user-friendly web interface.

## Features

- **Telegram Bot:** A Node.js script powers the Telegram bot, providing users with a range of interactive and automated functionalities.
  
- **Angular Web Application:** The web application, developed with Angular, offers an intuitive and responsive user interface for interacting with courses platform and sending feedbacks.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [Angular CLI](https://angular.io/cli) installed globally.

### Installation

1. Clone the repository: `git clone https://github.com/s1ga/tg-test-app.git`
2. Navigate to the project directory: `cd tg-test-app`
3. Install dependencies for the Telegram bot: `cd bot-app && npm install`
4. Install dependencies for the Angular web application: `cd ../site && npm install`

### Usage

1. Create bot using Bot Father in Telegram.
2. Create .env for bot configuration: `cd ../bot-app && touch .env`
3. Paste generated token for bot and url (https only) of your web app in the file.
4. Start the Telegram bot: `npm run start`
5. Start the Angular web application: `cd ../site && npm run start`
6. Open your Telegram bot and interact with them.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

For any inquiries or feedback, feel free to reach out to [s.v.harlanov@gmail.com].
