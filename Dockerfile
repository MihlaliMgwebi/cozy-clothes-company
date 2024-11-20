##################
## Build the app #
##################
#FROM node:18.20-alpine as build
#WORKDIR /app
#COPY package.json package-lock.json ./
#RUN npm cache clean --force && npm install
#COPY . .
#RUN npm install -g @angular/cli@latest
#RUN ng build --configuration production --output-path=/dist
#
#################
## Run in NGINX #
#################
#FROM nginx:alpine
##COPY --from=build /dist /usr/share/nginx/html
#COPY /nginx.conf  /etc/nginx/conf.d/default.conf
#RUN rm -rf /usr/share/nginx/html/
#COPY --from=builder /dist/cozy-clothes-company/browser /usr/share/nginx/html/
#EXPOSE 80
#
## When the container starts, replace the env.js with values from environment variables
#CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/browser/assets/env.template.js > /usr/share/nginx/html/browser/assets/env.js && exec nginx -g 'daemon off;'"]
#################
# Build the app #
#################
FROM node:18-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm install -g @angular/cli@latest
RUN ng build --configuration production --output-path=/dist

################
# Run in NGINX #
################
FROM nginx:alpine
RUN #rm -rf /usr/share/nginx/html/
COPY --from=build /app/dist/cozy-clothes-company/browser /usr/share/nginx/html

# When the container starts, replace the env.js with values from environment variables
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
