# Micmar UI Upgrade 🏪

## Welcome to the Micmar UI repo

Here are the steps to run this webapp:

### Prerequisites

Make sure your machine has the following :

- [WSL](https://learn.microsoft.com/en-us/windows/wsl/install#install-wsl-command)
- [Docker](https://www.docker.com/)
- [git](https://git-scm.com/downloads)

### Installation guide

After you install the perquisites. Proceed with the following steps:

1) Clone the repo using te following command `git clone https://github.com/JacobMutale1808/micmar.git`
2) Open your terminal and navigate to `micmar`.
3) In the micmar directory run the following command `docker build -t micmar:developement .`.
4) When the command finishes running run the following command in your terminal `docker run -p 3000:3000 micmar:developement`
5) Open your browser and navigate to [http://localhost:3000/](http://localhost:3000/)
