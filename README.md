# E-Complain-Box

[E-Complain-Box](https://ecomplainbox-598a53.netlify.app/) refers to the vision of the E Complain Box in Govt. Department. It is a simple platform to Raise Complaint to any department through the online. The Department have to complete complaint.  

## Table of Contents
- [Stakeholders](#stakeholders)
- [How to run project](#how-to-run-the-project)
  * [First run Express server](#first-run-express-server)
  * [For running frontend code](#for-running-frontend-code)
- [Environments and Deployments](#environments-and-deployments)
- [Error Monitoring and Logs](#error-monitoring-and-logs)
- [Artefacts](#artefacts)
- [Performance Screenshot](#performance-screenshot)
- [Features](#features)
- [Upcoming Features](#upcoming-features)
- [Third party tools](#third-party-tools)
- [Tech Stack](#tech-stack)

## Stakeholders 

**Please feel free to contact on Slack in case of any setup related issue or post in** [#e-comp_proj](https://join.slack.com/share/zt-sa486201-IYsy2Ms6fvqvauMmtmmbnQ)

- Ramana Sankar - [LinkedIn](https://www.linkedin.com/in/ramanasankar/) - [GitHub](https://github.com/ramanasankarv)


## How to run the project

- Run `git clone https://github.com/pesto-students/complainbox-n9-beta.git`


### First Run Express server

*Node JS as Backend code uploaded under "https://github.com/ramanasankarv/server-complainbox-n9-beta" Github repo. It utilizes the Firebase Functions feature from Firebase suite of tools.*

**Requirment:** NPM v6.14.11, Node v14.15.4 and [Firebase CLI](https://firebase.google.com/docs/cli#install_the_firebase_cli)

- Go to path `cd server-complainbox-n9-beta/`
- Run `npm install` to install all required project dependencies
- Run `npm start` to start project on http://localhost:3030

You can set the port in .env file or default will be http://localhost:3001

**Note: When you execute the deploy command, public URL for the server will be visible in CLI**


### For Running frontend code

- Go to main project folder `cd complainbox-n9-beta`
- Run `npm i` to install all required project dependencies
- Run `npm start` to the project in dev mode
- Open the `https://localhost:3000` to run the project 



## Environments and Deployments

| Environment | Base URL | Description  | Deployment |
| :-------:   | :------: | :----------: | :--------: |
| Development | [http://localhost:3000](http://localhost:3000) | When running locally on your machine  | When PR is Raise Netlify will create a preview URL on related environement on based on base branch  |
| Statging | [https://amazing-goldberg-f93133.netlify.app](https://amazing-goldberg-f93133.netlify.app) | An environment corresponding to `master` branch of this repo  |  Any changes merge to `master` branch will auto deploy on `staging` environment |
| Preproduction | [https://preprod-e-complain-d8ec06.netlify.app](https://preprod-e-complain-d8ec06.netlify.app) | `preproduction` branch for QA  | Any changes merge to `preproduction` branch will auto deploy on `preproduction` environment |
| Production | [https://ecomplainbox-598a53.netlify.app](https://ecomplainbox-598a53.netlify.app) | Main production environment  | Any changes merge to `production` branch will auto deploy on `production` environment |

## Error Monitoring and Logs

- We are using [Sentry](https://sentry.io/organizations/sector-17/issues/?environment=production&project=5814430
) for application monitoring and error traking **Please feel free to contact on Slack for access to Sentry** [#e-comp_proj](https://join.slack.com/share/zt-sa486201-IYsy2Ms6fvqvauMmtmmbnQ)

## Artefacts

- [PRD](https://drive.google.com/file/d/1ckHVe4Kk2GM-xAC1W_pyM_t5bmrI6s_p/view)

- [One Pager](https://drive.google.com/file/d/1KfyLHK_ECKgkQULg7VghJDqAvYIZodW2/view)

- [UI Design Figma](https://www.figma.com/file/Fzt1upFpkfYxKEiBLtVAof/E-ComplainBox?node-id=0%3A1)

- [User Flowchart Figma](https://www.figma.com/proto/qaFqDsQnEg2wQ3NA4qWavN/FlowChart?node-id=13%3A2&scaling=scale-down-width&page-id=0%3A1)

- [System Design Figma](https://www.figma.com/proto/knwI6lMdUkmkazuGlO45Rb/HLDS---Sector-17?node-id=2%3A1&scaling=contain&page-id=0%3A1)


## Performance Screenshot

![alt text](https://storage.googleapis.com/sector17-chandigarh.appspot.com/readme/performance.jpg)



## Third party tools

- Netlify (To deploy the build)
- Sentry.io (For error and performance insights)
- Heroku (To deploy the build)


## Tech Stack

- Next JS
- React JS
- Node JS / Express JS
- Firebase (Firestore DB, Authentication, Storage, Cloud Functions)
- Netlify
- Heroku

