import styles from './index.less';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Avatar size={64} icon={<UserOutlined />} />
    </div>
  );
}
