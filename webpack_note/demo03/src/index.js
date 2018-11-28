import _ from 'lodash';
import './style.css';
import Icon from './pic.png';

function component() {
  var element = document.createElement('div');

  // use lodash
  element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
  element.classList.add('hello');

  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
