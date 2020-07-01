import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset())

const styles = {
  btnItem: {
    position: 'absolute',
    right: '0',
    bottom: 'center',
    display: 'inline-block'
  },
  btn: {
    'background-color': '#f2f2f2',
    border: '1px solid #f2f2f2',
    'font-size': '16px',
    height: '30px',
    outline: 'none'
  },
  btnTaskList: {
    margin: {
      left: '7px'
    },
  },
  btnAddTask: {
    width: '100%',
  },
}

const {classes} = jss.createStyleSheet(styles).attach()

export default classes;
