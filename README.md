# MFE with Vite host and CRA guest exchanging module federation system

## CRA guest
go to cra-guest

Module federation is setup in file `moduleFederation.config.js`

start it with

`npm i`
`npm start`

you should have localhost:5001 running

## Vite Host

go to vite-host 

Module federation is setup in file `vite.config.js`

also to resolve cors issues, proxy is added, thats why we are not calling :5001 directly

start it with

`npm i`
`npm run dev`
