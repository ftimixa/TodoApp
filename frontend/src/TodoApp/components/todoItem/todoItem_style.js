import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset())

const styles = {
  bodyList: {
    margin: {
      bottom: '20px'
    },
    'font-size': '18px',
    'box-shadow': '0 2px 5px rgba(122,122,122,0.2)',
    padding: '0 7px 7px',
    border: '1px solid #f2f2f2',
    'box-sizing': 'border-box',
    display: 'block',
  },
  bodyItem: {
    position: 'relative',
    display: 'block',
    'line-height': '35px',
    height: 'auto',
    'min-height': '35px',
  },

}

const {classes} = jss.createStyleSheet(styles).attach()

export default classes;
