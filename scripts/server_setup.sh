#!/bin/sh

apt update && apt upgrade -y
apt install uidmap slirp4netns dbus-user-session ca-certificates curl

# add docker repo key
install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
chmod a+r /etc/apt/keyrings/docker.asc
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin systemd-container

systemctl disable --now docker.service docker.socket
rm /var/run/docker.sock
dockerd-rootless-setuptool.sh install
echo "export DOCKER_HOST=unix:///run/user/$(id -u)/docker.sock >> ~/.bashrc"