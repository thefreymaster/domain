# Domain
Domain is a smart home IoT platform, integrating the Homebridge API, and Philips Hue API together, and actively tracks Hue light usage, stored in local json db.

## Clone and Install
```
git clone https://github.com/thefreymaster/domain.git
```

cd to directory where you cloned, and run:
```
npm install
```

### Pre-run Setup

Edit the example .env file, and fill out the various keys needed.

```
HUE_HOST=ip address of your hue bridge
HUE_TOKEN=hue developer token, obtained from hue api.  see linked docs

REACT_APP_HOMEBRIDGE_HOST=homebridge ip address
REACT_APP_OPENWEATHERMAP_ID=id of location for openweathermap, obtained from searching location on openweathermap

REACT_APP_LUMEN_HOST=ip address of Domain server, used for websockets connection
HOMEBRIDGE_USER_NAME=homebridge username
HOMEBRIDGE_PASSWORD=homebridge password

OPENWEATHERMAP_TOKEN=openweathermap api token

```

## Run
To run, cd to directory of clone, and start the server via
```
node index.js
```
To have Domain run in the background, use a process manager like `pm2` and run via
```
pm2 start index.js
```
