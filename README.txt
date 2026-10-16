DevOps assignment sample stack: React + Express + PostgreSQL

Folder layout:
  client/  React frontend and Dockerfile
  server/  Express API and Dockerfile

Extract the ZIP and run plain Docker CLI commands from the shop-stack folder.
This sample uses http://localhost:5000 for browser access to the API.
PostgreSQL credentials are intentionally simple for this classroom exercise only:
user=shop, password=shop, database=shop. Do not use these credentials in production.

CI workflow validates required project files and builds both Docker images.
