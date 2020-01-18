
// lodash/lodash.js => lodash/index.js
var _ = require('lodash'); //리콰이어 : 커먼js 스펙
import './css/style.css';
import './css/hello.scss';
import {area} from './js/circcle'; //{}안에 동일한 이름으로 import
import cube from './js/cube'; // 디폴트 임포트 : {} 가 없고 이름을 바꿀수 있다.
const component = () => {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

console.log("deafalut import ",cube(5));
console.log("webpack test ",area(5));
document.body.appendChild(component());