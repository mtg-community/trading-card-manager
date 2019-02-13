# TEMPORARY WORKAROUND
CRA is not dealing well with `core` module outside `web` folder.
It seems to be the expected behavior, for now let's transpile it manually 
until we manage our own fork of CRA.
Keep track of: https://github.com/facebook/create-react-app/issues/4517

## Temporarily discontinued
This multi-module project is causing to much pain during development, as the 
mobile module still on work. We'll keep a copy of this module under the web 
module ans we'll work as it was an external module. So when the times come, 
we'll be able to decouple easily.
