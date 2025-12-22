# AI powered recipe generator using React + Hugging Face api

## Features 
- Add at least 4 ingredients to generate recipe
- AI-powered recipe suggestions via Hugging Face API
- Clean and user-friendly interface
- Real-time Ingredient management

## Prerequisites
- npm
- Hugging Face account

## Installation and setup
1. Clone the repository to your local machine
2. Go to hugging face and make an account
3. Click the avatar button on top left and head over to settings in Hugging face
4. Select access tokens and click add new token
5. give it a name and check the "Make calls to interference Providers" and leave everything as it is and create token and then copy it
6. Now make a ".env" file in /chef-claude
7. Inside .env file define a variable named "VITE_HF_ACCESS_TOKEN=PASTE_YOUR_TOKEN_HERE"
8. open terminal in chef-claude and run npm install
9. Lastly run npm run dev and head over to the localhost

## Screenshots
### During api call
![API Call](/chef-claude/src/screenshots/ss_1.png)

### After the api's response
![API Response](/chef-claude/src/screenshots/ss_2.png)
