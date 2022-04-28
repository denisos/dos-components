# dos-components
Custom component library I built using tech below. Deployed to npm so can be installed and used in your app.

In most cases its better to theme & customize a pre-built such as material design than build your own from scratch (because it's a lot of effort). But I wanted to use this as a learning opportunity and build out my own component library and reuse in my apps.

Technology used
* react
* typescript
* styled-components
* storybook
* jest
* rollup - module bundler

## Using

### Install 
`yarn add dos-components`

### usage
```
import { Button } from 'dos-components';


<Button primary>Ok</Button>
<Button primary disabled>Ok disabled</Button>
<Button size="small">Ok small</Button>

```

## developing

### install
`nvm use`

`yarn`

### build
`yarn run build`

### run tests


### run storyboard
`yarn storybook`


## deploy to npm
* login to npm
* in root folder `npm publish`

To update on npm 
* `npm version major` or  `npm version minor` or `npm version patch`
* `yarn run publish`  builds and publishes

checkout package `npm pack`

### to dos
* add more components and tests
* define colors etc. in common json file, import and use. use something like style-dictionary to manage the tokens
*
