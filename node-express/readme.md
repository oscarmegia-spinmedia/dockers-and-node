# Montaje de Docker para aplicaciones
    la conexión correra sobre el nombre hostname
### demo query
http://localhost:3000/ambito?tabla=dia-circunscripciones&id=01.999.CM

### docker
# Stop all containers
sudo docker stop $(docker ps -a -q)
sudo docker ps

### control pm2 vía docker 
    # Monitoring CPU/Usage of each process
    docker exec -it <container-id> pm2 monit
    # Listing managed processes
    docker exec -it <container-id> pm2 list
    # Get more information about a process
    docker exec -it <container-id> pm2 show
    # 0sec downtime reload all applications
    docker exec -it <container-id> pm2 reload all
## run pm2 as root

```
#startup as root:
sudo pm2 startup ubuntu -u root
```

## Buscar equipo contra su clave rsa

**On the Agent’s host**, run one of the following commands to get the agent’s Host Key.

Depending on the `sshd` version and configuration settings on your agent, the host key to use would be in either:

```
cat /etc/ssh/ssh_host_ecdsa_key.pub
ecdsa-sha2-nistp256 AAAAE2VjZHN...
cat /etc/ssh/ssh_host_rsa_key.pub
ssh-rsa AAAAB3NzaC1y...
cat /etc/ssh/ssh_host_dsa_key.pub
ssh-dss AAAAB3NzaC1kc...
```