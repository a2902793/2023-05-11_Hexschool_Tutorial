### AWS 校園大使 - Node.js 進階應用
直播時間：5/11 (四) 20:00 ~ 21:00
校園大使：[Andy Lee](https://github.com/106207411), [Johnny Yeng](https://github.com/a2902793)

#### 安裝 Node
1. Connect to your Linux instance as ec2-user using SSH.
2. Install node version manager (nvm) by typing the following at the command line.
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```
We will use nvm to install Node.js because nvm can install multiple versions of Node.js and allow you to switch between them.
3. Activate nvm by typing the following at the command line.
4. Use nvm to install the latest version of Node.js by typing the following at the command line.
> Amazon Linux 2 does not currently support the current LTS release (version 18.x) of Node.js. Use Node.js version 16.x with the following command instead.
```bash
nvm install 16
```
Installing Node.js also installs the Node Package Manager (npm) so you can install additional modules as needed.
5. Test that Node.js is installed and running correctly by typing the following at the command line.
```bash
node -e "console.log('Running Node.js ' + process.version)"
```
This displays the following message that shows the version of Node.js that is running.

`Running Node.js VERSION`



[Reference](https://github.com/Fiyin-Anne/node-s3-upload)