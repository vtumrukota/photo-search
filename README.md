# Photo Search

### How to Load the Application
- Add a file called env_config.json with the following to the `frontend/src/env_config.json` path

`{
  "IMGUR_KEY": "Client-ID <your_id>"
}`

From the frontend folder, run `npm i --save` then `ng serve --open` to start the build locally in your browser at `localhost:4200`

#### Packages
- Leveraged the Angular framework to get a setup up and running quickly
- Installed Angular Material to get UI components up and running quickly

### Features
- Added functionality for pagination if reults have 60 items
- Clicking on a card will open a modal where a user can scroll through all associated images with that post
- UI is safe against malicious characters in the input and also will not show NSFW images either
- TODO: Add ability to sort results by the ImgurGallerySort enum
- TODO: Add ability to search by time from the ImgurGalleryWindow enum
- TODO: Add unit tests for components for production
- TODO: Add accessibility functionality & Localization support (did a naive approach for the latter)
