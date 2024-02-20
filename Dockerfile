FROM nginx:alpine

COPY ./dist/siji-workflow-test/ /usr/share/nginx/html
