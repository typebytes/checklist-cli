<h1>
    <img width="35" valign="bottom" src="https://raw.githubusercontent.com/marmicode/checklist-cli/master/src/assets/angular-checklist.png">
    Checklist CLI
</h1>

---

`@marmicode/checklist-cli` is a CLI that allows you to generate beautiful, dynamic and progress-aware best practices checklist from simple configuration and markdown files.

# The story

`@marmicode/checklist-cli` is based on the source code of [Angular Checklist](https://angular-checklist.io/) which was brought to us with ❤️ by our amazing friends [Dominic Elm](https://twitter.com/elmd_) and [Kwinten Pisman](https://twitter.com/KwintenP).

We thought that [Angular Checklist](https://angular-checklist.io/) is so intuitive and useful that it deserved to be adapted to other topics. That's the reason why we came up with this CLI so anyone can make a similar checklist and publish it anywhere without having to fork the app's source code.


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
