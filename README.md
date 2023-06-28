# Jaguar

This is a personal... I dunno, life management software, which I aim to use for
tracking a lot of stuff about my daily life. Pretty much anything that I want to
use some kind of tool for but can't find an existing tool that suits my needs
well enough.

## Goals

These are the things I specifically aim to accomplish with this software as of
writing this readme, in rough order of priority:

- Health tracker; e.g. medication tracking, weight, vitals, etc.
- Art tracker; for keeping a record of art I commission, both in-progress and
  completed.
- Personal pages; I want to put a gallery on [foxscot.ch](https://foxscot.ch)
  using the images and data from the art tracker, served from the same app. The
  main app itself will be on [foxscotch.net](https://foxscotch.net), so there
  will certainly be some finagling to serve both domains. I hope to do most of
  that finagling with Nginx though.

Everything below this is not an immediate priority, but is a long-term goal.

- Nutrition; calorie intake, exercise (admittedly some overlap with health).
- Recipes; keeping recipes in a format that works for me and with a list of
  ingredients that can be complemented by...
- Inventory; tracking a general household inventory. Most obvious would be
  keeping a rough approximation of how much we have on hand of ingredients for
  recipes, but could also be used for other stuff, like paper towels, medicines,
  etc. Should be capable of generating suggested grocery lists.
- Finances; I've never been able to find budgeting software that really works
  the way I want. So maybe I could meet my needs myself. This would be a
  significant undertaking.

Aside from actual app features, it would be really nice to also have an iOS app
at some point. This would be particularly helpful with tracking things like
medication, excercise, vitals, if I can get it working in conjunction with both
the Health app and my watch.

## Getting Started

### Running the PostgreSQL server

Install your platform's Docker stuff:  
Docker Desktop: [win][wind]/[mac][macd]/[linux][linuxd]  
Linux server: [Docker Engine](https://docs.docker.com/engine/install/)

[wind]: https://docs.docker.com/desktop/install/windows-install/
[macd]: https://docs.docker.com/desktop/install/mac-install/
[linuxd]: https://docs.docker.com/desktop/install/linux-install/

Install a Postgres client: [win][winp]/[mac][macp]/[linux][linuxp]  
Alternatively, on Linux machines, you may be able to install it using your
distro's package manager:

```bash
sudo apt install postgresql-client-common postgres-client-14
```

[winp]: https://www.postgresql.org/download/windows/
[macp]: https://www.postgresql.org/download/macosx/
[linuxp]: https://www.postgresql.org/download/linux/debian/

Finally, start the Postgres server:

```bash
cd ./docker/postgres

# Build the Docker image
docker build -t jaguar-db ./

# Optionally, verify that the image is now created and indexed
docker images -a

# Start the container
docker run --detach --name jaguar-db --publish 5432:5432 jaguar-db

# Verify that you can connect to the database with the unprivileged user
# Development password is 'jaguar' by default
psql -h localhost -U jaguar -W
```

### Running the project

To start the SvelteKit development server, run:

```bash
yarn run dev
```

### Building

To build a production version of the app:

```bash
yarn run build
```

You can also run a preview of the production build with `yarn run preview`.
