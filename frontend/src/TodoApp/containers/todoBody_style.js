import jss from 'jss';
import preset from 'jss-preset-default';

jss.setup(preset())

const styles = {
  todoBody: {
    margin:'5vh auto',
    width: '500px',
    height: '100%',
    display: 'block'
  }
}

const {classes} = jss.createStyleSheet(styles).attach()

export default classes;
