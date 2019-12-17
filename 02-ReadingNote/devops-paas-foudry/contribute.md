# Contributing Documentation

**[Document Link](https://docs.cloudfoundry.org/concepts/contribute.html)**

In this topic:

* Why Should You Contribute?
* How Can You Contribute?
  * Submit a Github Pull Request
  * Raise a Github Issue
  * Contribute Without Github
* Advice for Contributors
* How Can You Preview Your Documentation Changes?

## Why Should You Contribute

The Cloud Foundry documentation relies on contributions from the community to remain accurate, complete, and consumable.

Reasons to contribute to the Cloud Foundry documentation include:

* You have noticed that a topic is incorrect or incomplete.
* You are developing a new Cloud Foundry feature, and want to tell users know how to use it.
* You are a good person, and you want to help your fellow humans.
* You hate the idea of someone else having to go through what you just went through to figure something out. Such a waste; so inefficient.

## How Can You Contribute

The source files for all Cloud Foundry docs are hosted on [Github0](http://github.com/), and each docs page has a link to its Github source file at the bottom. The source files are in Markdown/HTML/embedded Ruby (**html.md.erb**) format.

If you use Github, the most direct and effective way to contribute to the docs is to [submit a pull request](https://docs.cloudfoundry.org/concepts/contribute.html#github-pr) or [raise an issue](https://docs.cloudfoundry.org/concepts/contribute.html#github-issue) in the Github repository containing the docs content that you want to change.

If you do not already use Github (or want to learn), you can contribute to the CF docs in [other ways](https://docs.cloudfoundry.org/concepts/contribute.html#non-github) that are also greatyly appreciated.

Whichever way you contribute, please follow our [Advice for Contributors](https://docs.cloudfoundry.org/concepts/contribute.html#advice).

### Submit a Github Pull Request

If you have identified a problem with the docs and know the required content change, the fastest way to make the change is by submitting a pull request (PR).

The CF docs team typically accepts PRs within a day, but may need to ask follow-up questions.

Before your PRs can be accepted, you must have a [signed Contributor License Agreement](https://docs.cloudfoundry.org/concepts/contribute.html#sign-cla)(CLA) on file.

To submit a pull request, follow these steps:

1. Prerequisite: [Sign the CLA](https://docs.cloudfoundry.org/concepts/contribute.html#sign-cla). if you have not already done so.
2. Navigate to the topic that you want to modify.
3. To locate the Github source file that contains the content for the topic, scroll to the bottom of the page and clik **Create a pull request an issue on the source for this page in Github**.
4. Click the pencil icon in the upper right to edit the file in Github.
5. Make your desired changes.
6. Under **Commit changes** at the bottom of the page, enter a description of your change and click **Propose file change**.
7. Click **Create pull request**.

#### Sign and Publicize the CLA

Before your Github pull request can be accepted, you must sign the Contributor License Agreement(CLA) as an individual or publicize your membership with an organization that has signed the CLA. To do this, perform the following steps:

1. Complete and sign the appropriate CLA, either [individual](https://www.cloudfoundry.org/wp-content/uploads/2017/01/CFF_Individual_CLA.pdf) or [corporate](https://www.cloudfoundry.org/wp-content/uploads/2017/01/CFF_Corporate_CLA.pdf).
2. Send a scan of the CLA to [contributors@cloudfoundry.org](contributors@cloudfoundry.org), as instructed in the CLA. When sending the individual CLA, provide your Github username. When sending the corporate CLA, provide a list of Github username that can make pull requests on behalf of your organization.
3. [Publicize](https://help.github.com/articles/publicizing-or-hiding-organization-membership/) your membership in the appropriate GitHub org.

If you do not have a CLA on file whit the Cloud Foundry Foundation, the **cfdreddbot** notifies you after you submit the pull request.

If you receive the **cfdreddbot** notification, but are confident that you are already covered under a corporate or organizational CLA, the verify that you have [Publicize](https://help.github.com/articles/publicizing-or-hiding-organization-membership/) your membership in an appropratie Github org.

### Raise a Github Issue

If you do not have specific edit to make, but want start a discussion or make a general suggestion, you can raise a Github issue.

Github issues generally take longer to resolve than pull requests. But if you describe the issue with helpful background information and specific and actionable instructions, the CF docs team can address it quickly.

Vague or partially-baked Github issues may remain unaddressed for some time.

To raise an issue on a Github repository:

1. Navigate to the topic that you want to modify.

2. To locate the Github source file that contains the content for the topic, scroll tot the bottom of the page and click **Create a pull request or raise an issue on the source for this page in Github**.

3. Click the name of the repository where the topic is located. For exampke, **doc-deploying-cf**.

4. Click the Issues tab.
5. Click the New issue.
6. Enter a title for your issue, and in the text box, describe the issue and provided likes to the affected topic(s).
7. Click **Submit new issue**.

### Contribute Without Github

To contribute the CF docs without using Github, you can use the following:

* Google Docs: Write new docs content, or copy-paste existing content, into a [Google Dirve](http://drive.google.com/) document.

* Email the CF docs team directly at [cf-docs@pivtal.io](cf-docs@pivotal.io).

* Slack the CF docs team through the [#cf-docs](https://cloudfoundry.slack.com/messages/C03B0T0D5/%22) channel in Cloud Foundry Slack.

## Advice for Contributors

The Cloud Foundry Documentation Team reviews and revises all contributions, so you can **focus on providing correct and complete information, and not worry about style and structure**.

Keep in mind:

* If you contribution is larger than a small correction, put yourselves in the shoes of a novice and read through it. Revise the text to answer any question that might occur to a less experienced user.

* Who needs this information? Are they a developer or a platform operator?

* What are the specifics that a user needs to know in order to undertand and perform the task? Instead of "the instance" or "the cluster," explain the instance or cluster of what. Instead of "revise the code to..." explain where to revise the code.

* If you're giving instructions, include why you would want to do what you're describing. What's your specific situation, and what result do you seek?

For further guidance, contact the Cloud Foundry Documantation Team at [cf-doc@pivotal.io](cf-docs@pivotal.io) or through our **#cf-docs** channel on the [Cloud Fundry Slack](https://cloudfoundry.slack.com/).

## How Can You Preview Your Documentation Changes

The Cloud Foundry Documentation Team uses the tool [Bookbinder](https://github.com/pivotal-cf/bookbinder) to publish the Cloud Foundry documentation.

The instructions below explain how to use Bookbinder to preview your documentation changes locally. But you do not have to install or use Bookbinder in order to contribute to the Cloud Foundry documentation.

Perform the following steps to preview documentation changes with Bookbinder:

1. If you do already have a workspace directory within your home directory, creat one.

    ```bash
    $$ mkdir ~/workspace
    ```

2. Identify the content repository where your documentation lives. For exampke, ``https://github.com/cloudfoundry/docs-cloudfoundry-concepts``.

3. Clone the content repository. For example:

    ```bash
    git clone git@github.com:cloudfoundry/docs-cloudfoundry-concepts.git
    ```

4. Return to your workspace directory and clone
