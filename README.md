# Nameless
English | [中文文档](https://github.com/LonelyLiaR/blog/issues/1)

Nameless is a Blog-System based on **React** and **GitHub Issues**. Simple and Grace. :wind_chime:

![Preview](https://user-images.githubusercontent.com/12504732/43952018-42379796-9cc7-11e8-87bd-7c015be988f1.jpg)


## Features
- Hyper succinct style.
- All posts are based GitHub Issues, support Markdown, WYSIWYG.
- You can manage posts in Issues directly, easy and low cost. (But you cant delete post, can just hidden post. (Close issues))
- Commenting system.


## Getting Started
First create a new GitHub repo. Assume that repo name is `blog`.
This repo Issues is where the posts are stored.
Of course you can also store the generated blog files here, so you can visit the blog by visit the repo's GitHub Page.

Then ~after star Nameless,~ run:
```shell
# clone Nameless.
git clone https://github.com/LonelyLiaR/nameless

# switch to Nameless.
cd nameless

# install dependencies.
npm install
## or you can use Yarn.
yarn
```

Then open the config file `nameless/src/config.json`.
```json
{
  "BLOG_TITLE": "This is Blog's title",
  "USERNAME": "Enter your GitHub username in this place",
  "REPO": "Enter the posts store repo name, default USERNAME.github.io",
  "SOCIAL_LIST": {
    "Social name": "url"
  },
  "ERROR_MESSAGE": "This is Error Page's hint message"
}
```

Run start after modify the config：
```shell
npm start
# or
yarn start
```

And you can visit the blog in `http://localhost:3000/#/`.

## Scripts
- `npm run build` or `yarn build` Generate blog files, the `build` folder's contents is the deploy website.
- `git pull` Update Nameless. You need to re-generate blog files and re-deploy it.

## Contributing
Welcome to
- Pull requests.
- Open issues.

　
　

**Hope you like Nameless**.
