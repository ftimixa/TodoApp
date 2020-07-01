import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset())

const styles = {
  bodyForm: {
    margin: {
      bottom: '35px'
    },
    padding: '7px',
    border: '1px solid #f2f2f2',
    display: 'block',
    'box-shadow': '0 2px 5px rgba(122,122,122,0.2)',
    position: 'relative',
  },
  textarea: {
    'vertical-align': 'top',
    padding: '2px 5px',
    'font-size': '16px',
    width: '100%',
    margin: '0 auto 7px',
    outline: 'none',
	  border: '1px solid #d9d9d9',
    'box-sizing': 'border-box',
    resize: 'none',
  },
  textareaDescription: {
    border: 'none',
    height: '100px'
  },
  textareaPriority: {
    height: '30px',
    'padding-top': '4px',
  },
  select: {
    outline: 'none',
    'font-size': '16px',
    width: '100%',
    height: '30px',
    display: 'block',
    'padding-top': '4px',
    margin: '0 auto 7px',
    border: '1px solid #d9d9d9',
    'box-sizing': 'border-box',
  },
  hintError: {
    border: '2px solid #e74c3c'
  },
  hintValid: {
    border: '2px solid #2ecc71'
  },
}

const {classes} = jss.createStyleSheet(styles).attach()

export default classes;
