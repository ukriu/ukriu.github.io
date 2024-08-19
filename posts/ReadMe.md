
# How can I add my own posts?
> Im not sure why you'd want to, but you can!

Here are the step by step instructions on how to:

## 1) Fork the repository
Click the big blue "Fork" button and fork the repository.

## 2) Make your way to the `posts.json`
Locate yourself to the `/posts/posts.json` file.

## 3) Add the details for your post
Here's the basic structure for each post:
```json
[
  {
    "order": "the no of the post, refer the previous post",
    "timestamp": "The timestamp",
    "title": "The title of your post",
    "thumbnail": "Your thumbnail image",
    "description": "The text of your post",
    "author": "Your username",
    "author_pfp": "The link to your pfp",
    "author_link": "The Link to your site"
  }
]
```

Here are the formatting options available for posts:<br>
 - **Bold Text** (`<strong>`): \*\*Bold Text\*\*<br>
 - *Italic Text* (`<em>`): \*Italic Text\* <br> 
 - `Inline Code Blocks` (`<code>`): \`text\`<br>
 - [Masked Links](https://ukrioo.github.io/) (`<a href="">`): \[Masked Links\]\(url\)<br>


## 4) Commit & Push the changes
You should know how to do this depending on where you're accessing the repository!

## 5) Open a pull request
Open a pull request to merge your repository into mine.
