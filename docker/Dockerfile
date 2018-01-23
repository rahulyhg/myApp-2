# Dockerfile for: node.js server

# Pull the base ubuntu image from the Docker public repository.
# Pull the base wm alpine image from aws EC2 Container.
 FROM  codedep

 # The maintainer of this container
 MAINTAINER codedep.in  Support <guptamohit385@gmail.com>
 #ENV VERSION=v7.8.0 NPM_VERSION=6.9.2

 # install the necessary packages
# If you have native dependencies, you'll need extra tools
RUN apt-get update && \
	apt-get install -y git wget && \
	apt-get install -y redis-server && \
	apt-get clean && \
	wget http://nodejs.org/dist/v4.2.4/node-v4.2.4-linux-x64.tar.gz && \
	tar -C /usr/local --strip-components 1 -xzf node-v4.2.4-linux-x64.tar.gz && \
    rm -fr node-v4.2.4-linux-x64.tar.gz && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* && \
 	git -c http.sslVerify=false clone  https://github.com/guptamohit385/myApp.git  /src


 # Inside the container, install the app dependencies listed in the package.json file using npm
 RUN cd /src; npm install

 # Define the command to run the app using CMD which defines your runtime, i.e. node, and the path to our app, i.e. src/index.js
CMD ["sh", "-c", "NODE_ENV=qa npm start"]