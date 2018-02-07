# A simple utility to backup Oracle Intelligent Bots

This utility should only be used with Oracle Intelligent Bots running on local Docker images / VMs.
It has not been tested in any other environment.

## Setup

1. First clone this repository and then `cd` into it.

   ```bash
   $ git clone https://github.com/mjabali/bots-backup.git
   $ cd bots-backup
   ```
 1. Install the dependencies.

   ```bash
   $ npm install
   ```
1. Make sure your Bots installation is up and running

1. Run the utility with the following command

   ```bash
   $ node index.js
   ```  

Your bots should be backed up to the bots/ folder.

That's it!

## Meta

* No warranty expressed or implied. Software is as is.   

The files in the root directory are for `.gitignore` templates that are
project specific, such as language or framework specific templates.
Global (operating system or editor specific) templates should go into the
[`Global/`](./Global) directory.

## Contributing guidelines

We’d love for you to help us improve this project. To help us keep this collection
high quality, we request that contributions adhere to the following guidelines.

- **Provide a link to the application or project’s homepage**. Unless it’s
  extremely popular, there’s a chance the maintainers don’t know about or use
  the language, framework, editor, app, or project your change applies to.

- **Provide links to documentation** supporting the change you’re making.
  Current, canonical documentation mentioning the files being ignored is best.
  If documentation isn’t available to support your change, do the best you can
  to explain what the files being ignored are for.

- **Explain why you’re making a change**. Even if it seems self-evident, please
  take a sentence or two to tell us why your change or addition should happen.
  It’s especially helpful to articulate why this change applies to *everyone*
  who works with the applicable technology, rather than just you or your team.

- **Please consider the scope of your change**. If your change is specific to a
  certain language or framework, then make sure the change is made to the
  template for that language or framework, rather than to the template for an
  editor, tool, or operating system.

- **Please only modify *one template* per pull request**. This helps keep pull
  requests and feedback focused on a specific project or technology.

In general, the more you can do to help us understand the change you’re making,
the more likely we’ll be to accept your contribution quickly.

If a template is mostly a list of files installed by a particular version of
some software (e.g. a PHP framework) then it's brittle and probably no more
helpful than a simple `ls`. If it's not possible to curate a small set of
useful rules, then the template might not be a good fit for this collection.

Please also understand that we can’t list every tool that ever existed.
Our aim is to curate a collection of the *most common and helpful* templates,
not to make sure we cover every project possible. If we choose not to
include your language, tool, or project, it’s not because it’s not awesome.

## Contributing workflow

Here’s how we suggest you go about proposing a change to this project:

1. [Fork this project][fork] to your account.
2. [Create a branch][branch] for the change you intend to make.
3. Make your changes to your fork.
4. [Send a pull request][pr] from your fork’s branch to our `master` branch.

Using the web-based interface to make changes is fine too, and will help you
by automatically forking the project and prompting to send a pull request too.

[fork]: https://help.github.com/articles/fork-a-repo/
[branch]: https://help.github.com/articles/creating-and-deleting-branches-within-your-repository
[pr]: https://help.github.com/articles/using-pull-requests/

## License

[CC0-1.0](./LICENSE).