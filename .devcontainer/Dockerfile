# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.145.0/containers/typescript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version: 14, 12, 10
FROM node:14-alpine

# git
RUN set -ex; \
    apk add --no-cache git openssh-client

# git
RUN set -ex; \
    apk add --no-cache curl

# docker
RUN set -ex; \
    apk add --no-cache docker-cli


# setup ZSH
RUN set -ex; \
    apk add --no-cache zsh
USER node
COPY .zshrc /home/node/
RUN set -ex; \
    cd /home/node && \ 
    sh -c "$(wget -O- https://github.com/deluan/zsh-in-docker/releases/download/v1.1.1/zsh-in-docker.sh)" -- \
    -p autosuggestions \
    -p git

# # fish
# RUN set -ex; \
#     apk add --no-cache fish

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#     && apt-get -y install --no-install-recommends <your-package-list-here>

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"

# [Optional] Uncomment if you want to install more global node packages
# RUN sudo -u node npm install -g <your-package-list -here>
