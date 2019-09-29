const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');
const toJson = require('enzyme-to-json');

enzyme.configure({ adapter: new Adapter() });

global.shallow = enzyme.shallow;
global.render = enzyme.render;
global.mount = enzyme.mount;
global.toJson = toJson;
