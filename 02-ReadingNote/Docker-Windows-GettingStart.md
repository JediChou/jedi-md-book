# Get Started with Docker for Windows

[Ref](https://docs.docker.com/windows)

**This is written for users of Windows. If you are not using Windows, see the Linux or Mac OS X version.**

This getting started is for non-technical users who are interested in learning about Docker. By following this getting started, you’ll learn fundamental Docker features by performing some simple tasks. You’ll learn how to:

* install Docker software using the Docker Toolbox
* use Docker Engine to run a software image in a container
* browse for an image on Docker Hub
* create your own image and run it in a container
* create a Docker Hub account and an image repository
* create an image of your own
* push your image to Docker Hub for others to use

The getting started was user tested to reduce the chance of users having problems. For the best chance of success, follow the steps as written the first time before exploring on your own. It takes approximately 45 minutes to complete.
Make

## Make sure you understand

This getting started uses Docker Engine CLI commands entered on the commandline of a terminal window. You don’t need to be experienced using a command line, but you should be familiar with how to open one and type commands.

## Install Docker for Windows

Windows users use Docker Toolbox to install Docker software. Docker Toolbox includes the following Docker tools:

* Docker CLI client for running Docker Engine to create images and contains
* Docker Machine so you can run Docker Engine commands from Windows terminals
* Docker Compose for running the **docker-compose** command
* Kitematic, the Docker GUI
* the Docker QuickStart shell preconfigured for a Docker command-line environment
* Oracle VM VirtualBox

Because the Docker Engine daemon uses Linux-specific kernel features, you can not run Docker Engine natively in Windows.
