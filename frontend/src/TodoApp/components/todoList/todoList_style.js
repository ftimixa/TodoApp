import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset())

const styles = {
  bodyTaskList: {
    margin: '0',
    padding: '0',
    display: 'block',
  }
}

const {classes} = jss.createStyleSheet(styles).attach()

export default classes;
