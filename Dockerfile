# Pull miniconda from docker hub as base image
FROM continuumio/miniconda3:latest

# include these settings
ENV LANG=C.UTF-8 LC_ALL=C.UTF-8

# do updates
RUN apt-get update && apt-get upgrade -y

# download and install node js and npm
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && apt-get install -y nodejs && apt-get install -y npm

# creating a folder on the root level
RUN mkdir -p /backend
RUN mkdir -p /frontend
RUN mkdir -p /frontend_tmp
RUN mkdir -p /scripts
RUN mkdir -p /static-files
RUN mkdir -p /media-files

# copy files from local to container
COPY ./backend /backend

# run conda to create the environment inside the image
RUN /opt/conda/bin/conda env create -f /backend/requirements.yml
ENV PATH /opt/conda/envs/octo/bin:$PATH
RUN echo "source activate octo" >~/.bashrc

# copy scripts to container and run them
COPY ./scripts /scripts
RUN chmod +x /scripts*

WORKDIR /backend

# copy frontend to temp folder, run npm, copy to frontend folder
WORKDIR /frontend_tmp
COPY ./frontend/package.json /frontend_tmp/
RUN npm install
COPY ./frontend /frontend_tmp
RUN npm run build

WORKDIR /backend
