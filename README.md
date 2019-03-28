English | [中文文档](https://github.com/LonelyLiaR/blog/issues/1)

　


# Nameless

Nameless is a Blog-System based on **React** and **GitHub Issues**. Simple and Grace. :wind_chime:  

[Priview](https://nghtmre.surge.sh/)  

![Preview](https://i.loli.net/2019/03/25/5c988196afb34.jpg)


## Features
- Hyper succinct style.
- All posts are based GitHub Issues, support Markdown, WYSIWYG.
- You can manage posts in Issues directly, easy and low cost. (But you cant delete post, can just hidden post. (Close issues))
- Commenting system. (Upcoming)

　
## Getting Started
First create a new GitHub repo. Assume that repo name is `blog`.
This repo Issues is where the posts are stored.
Of course you can also store the generated blog files here, so you can visit the blog by visit the repo's GitHub Page.

Then ~after star Nameless,~ run the following commands:
```shell
$ git clone https://github.com/LonelyLiaR/nameless

$ cd nameless

$ npm install
# or you can use Yarn.
$ yarn
```

Then open the configs file `src/custom-configs.json`.
```json
{
  "BLOG_TITLE": "This is Blog's title",
  "USERNAME": "Enter your GitHub USERNAME in this place",
  "REPO": "Enter the posts store repo name, default USERNAME.github.io"
}
```
And you can customize some optional configs:
```
{
  "AVATAR": "Customize display avatar's link",
  "NICKNAME": "Customize display nickname",
  "BIO": "Customize display bio",
  "ARCHIVES_TITLE": "ArchivesPage's entry name",
  "LABELS_TITLE": "LabelsPage's entry name",
  "SOCIALS_LIST": {  // Those will be displayed in your HomePage.
    "SocialName": "url"
    //... may set more than one.
  },
  "DATE_FORMAT": "Customize display date format",
  "EMPTY_MESSAGE": "Customize display EmptyPage hints message",
  "ERROR_TITLE": "Customize display ErrorPage title",
  "ERROR_MESSAGE": "Customize display ErrorPage hints message",
  "ERROR_NAV": "Customize display ErrorPage back HomePage's nav name"
}
```

Run start after modify the configs：
```shell
$ npm start
# or
$ yarn start
```

And you can visit the blog in `http://localhost:3000/#/`.

　
## Scripts
- `npm run build` or `yarn build` Generate blog files, the `build` folder's contents is the deploy website.
- `git pull` Update Nameless. You need to regenerate blog files and redeploy it.

　
## Contributing
Welcome to:
- [Pull requests](https://github.com/LonelyLiaR/nameless/compare).
- [Open issues](https://github.com/LonelyLiaR/nameless/issues/new).

　
 
**Now please, enjoy the Nameless, and hope you like it.**
