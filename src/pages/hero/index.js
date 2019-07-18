import { connect } from 'dva';
import styles from './index.less';
function App({hero,dispatch}) {
    const { text,list } = hero;
    return (
        <div className={styles.normal}>
            <h2>
                {text}
            </h2>
        </div>
    );
}
export default connect(({hero})=>({hero}))(App);