<h1>
    <img width="35" valign="bottom" src="https://raw.githubusercontent.com/marmicode/checklist-cli/master/src/assets/angular-checklist.png">
    Checklist CLI
</h1>

---

`@marmicode/checklist-cli` is a CLI that allows you to generate beautiful, dynamic and progress-aware best practices checklist from simple configuration and markdown files.

# The story

`@marmicode/checklist-cli` is based on the source code of [Angular Checklist](https://angular-checklist.io/) which was brought to us with ❤️ by our amazing friends [Dominic Elm](https://twitter.com/elmd_) and [Kwinten Pisman](https://twitter.com/KwintenP).

We thought that [Angular Checklist](https://angular-checklist.io/) is so intuitive and useful that it deserved to be adapted to other topics. That's the reason why we came up with this CLI so anyone can make a similar checklist and publish it anywhere without having to fork the app's source code.

# How it works

The cli converts markdown like this:

```markdown
---
title: put code samples
---

# Problem

It's hard to explain code without `code`.

# Solution

Write code like this:

\`\`\`ts

const boom = () => setInterval(boom);
boom();

\`\`\`

**WARNING:** THIS WILL EXPLODE 💥
```

into something friendly like this:

<img src="https://raw.githubusercontent.com/marmicode/checklist-cli/master/example.png">

# Usage

1. Create a `content` directory (check out the Angular Checklist example [here](https://github.com/marmicode/checklist-cli/tree/master/examples/angular-checklist))

2. Run the CLI
```
npx @marmicode/checklist-cli content # where content is the path to your content folder
```

3. Deploy anywhere or start locally using `http-server`
```
npm install -g http-server # or yarn global add http-server
http-server dist/browser
```

# 👷 Want to contribute?

If you want to add file a bug, contribute some code, or improve our documentation, read up on our [contributing guidelines](CONTRIBUTING.md) and [code of conduct](CODE_OF_CONDUCT.md), and check out [open issues](/issues) as well as [open pull requests](/pulls) to avoid potential conflicts.

# Credits

<table border="0">
  <tr>
    <td>
      <a href="https://github.com/d3lm" style="color: white">
        <img src="https://github.com/d3lm.png?s=150" width="150"/>
      </a>
    </td>
    <td>
      <p>Co-author of Angular-Checklist<p>
      <p><strong>Dominic Elm</strong></p>
      <p><strong>twitter: </strong><a href="https://twitter.com/elmd_">@elmd_</a></p>
    </td>
    <td>
      <a href="https://github.com/KwintenP" style="color: white">
        <img src="https://github.com/KwintenP.png?s=150" width="150"/>
      </a>
    </td>
    <td>
      <p>Co-author of Angular-Checklist<p>
      <p><strong>Kwinten Pisman</strong></p>
      <p><strong>twitter: </strong><a href="https://twitter.com/KwintenP">@KwintenP</a></p>
    </td>
  </tr>
  <tr>
    <td></td>
    <td>
      <a href="https://github.com/yjaaidi" style="color: white">
        <img src="https://github.com/yjaaidi.png?s=150" width="150"/>
      </a>
    </td>
    <td>
      <p>Author of @marmicode/checklist-cli<p>
      <p><strong>Younes Jaaidi</strong></p>
      <p><strong>twitter: </strong><a href="https://twitter.com/yjaaidi">@yjaaidi</a></p>
    </td>
    <td></td>
  </tr>
</table>