# www.macrame.tv

Macramè Network website built using [Jekyll Netlify Boilerplate](https://github.com/danurbanowicz/jekyll-netlify-boilerplate)

## Getting started

Simply click the deploy button to get your own copy of the repository deployed to Netlify:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/macrametv/www.macrame.tv&stack=cms)

This will setup everything needed for running the CMS:

* A new repository in your GitHub account with the code
* Full continuous deployment to Netlify's global CDN network
* Control users and access with Netlify Identity
* Manage content with Netlify CMS

### Setup authentication

After deploying this project, Netlify Identity will add you as a CMS user and
will email you an invite. It is not necessary to accept this invite if you wish
to use an
[OAuth provider](https://www.netlify.com/docs/identity/#external-provider-login)
(e.g. Github) to manage authentication for your CMS.
It is recommended to use this method of authentication as it removes the need
for an email & password to log in to the CMS and is generally more secure. You
will need to add an OAuth provider in your Netlify app settings under
"Settings" > "Identity" > "External providers".

Next, navigate to `/admin` on your site, choose your OAuth provider from the
login box and you should then be logged into your CMS.

Now you're all set, and you can start editing content!

**Note:** if you switch the repo that was created to private, you'll need to regenerate your token,
as the token generated using the deploy to Netlify button can only access public repositories. To
regenerate your token, head to "Settings" in your Netlify site dashboard, go to the "Identity"
section, then scroll to "Services" where you'll see an "Edit settings" button. Click that and you'll
see a text link to "Generate access token in GitHub".

## Local Development

Clone this repository and run:

```bash
bundle install
bundle exec jekyll server --watch
```

In case you don't want to install ruby-bundler you can use docker:

```bash
docker-compose up
```

Jekyll will watch your project folder for changes.

Now navigate to [localhost:4000](http://localhost:4000/) to preview the site, and
[localhost:4000/admin](http://localhost:4000/admin) to log into the CMS.

## Bug reports

Please [report](https://github.com/macrametv/www.macrame.tv/issues/new) any bugs or issues with the site.