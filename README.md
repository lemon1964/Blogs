# Full Stack Open Assignments, Part 11 - Blogs Project

This repository contains the **Blogs** project from **Part 11** of the Full Stack Open course. The project is based on the [full-stack-open-pokedex](https://github.com/lemon1964/full-stack-open-pokedex.git) project and implements a custom blogging platform. It includes a full CI/CD deployment pipeline and is hosted on Render.

The **Blogs** project was built using the **blogs_backend** and **blogs_redux** projects from Part 7 of the Full Stack Open course as the backend and frontend templates. These projects are organized into `client` and `server` folders within the repository. Configuration files and `package.json` have been refactored for better integration. The CI/CD pipeline is set up similarly to the full-stack-open-pokedex project.

### Project Overview and Milestones

**Blogs**:
- Combined **blogs_backend** and **blogs_redux** into a single repository.
- Created shared `package.json`, `.eslintrc.cjs`, `.prettierrc`, `vite.config.js`, `.env`, and `playwright.config.js`.
- Built a production version of the project.
- The main workflows in GitHub Actions are defined in the `pipeline.yml` file, described below.
- Implemented the **Lint** workflow.
- Implemented the **Build** workflow.
- Refactored all supertest tests from **blogs_backend**.
- Wrote jest tests for the `client` and an end-to-end Playwright test.
- Created **Start Local Server** and **Stop Local Server** workflows for Playwright testing on a local server.
- Created a **Test Client** workflow.
- Created a **Test Server** workflow.
- Created a **Playwright Tests** workflow.
- Deployed the app to Render.
- Implemented automated deployments using Render's deploy hook.
- Set up a health check on the `/health` endpoint.
- Created a new `develop` branch and opened a pull request to the `main` branch.
- Added version control automation with the **Bump version and push tag** feature.
- Set up commit messages with `#skip` to exclude deploys and mark tagged releases.
- Protected the `main` branch, requiring approval for all pull requests and ensuring all status checks pass before merging.
- Set up Discord notifications for successful deployments and error reports in case of build failures.
- Added a **schedule.yml** file to schedule a monthly health check of the deployed app by pinging `/health`.

### How to Use

1. **Clone the repository**:
   ```sh
   git clone https://github.com/lemon1964/Blogs.git
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Run the project locally**:
   - Backend:
     ```sh
     npm run dev:server
     ```
   - Frontend:
     ```sh
     npm run dev:client
     ```
   Make sure it runs at [http://localhost:5173/](http://localhost:5173/) for the client and [http://localhost:3003/](http://localhost:3003/) for the backend.

4. **Full Checkout**:
   To fully check out the project, you need to:
   - Create a new GitHub repository.
   - Configure it according to the `.yml` files provided in the project.
   - Deploy the project to Render.

5. **Blogs on Render**:
   You can check out the deployed **Blogs** project at [https://blogs-jaml.onrender.com/](https://blogs-jaml.onrender.com/).  
   You can log in using the following credentials:  
   **Username**: `admin`  
   **Password**: `admin`

---

If you have any questions or need further clarification, feel free to contact us!
