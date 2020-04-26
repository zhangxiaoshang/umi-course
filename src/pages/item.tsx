import React, { FC } from 'react';
import styles from './item.less';
import { connect, ItemModelState, ConnectProps } from 'umi';
import { Row, Col } from 'antd';

interface PageProps extends ConnectProps {
  item: ItemModelState;
}

const Item: FC<PageProps> = ({ item }) => {
  const { items = [] } = item;

  return (
    <div>
      <Row>
        {items.map(item => (
          <Col key={item.item_id} span={3} className={styles.itemitem}>
            <img
              src={`https://game.gtimg.cn/images/yxzj/img201606/itemimg/${item.item_id}.jpg`}
              alt=""
            />
            <p>{item.item_name}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default connect(({ item }: { item: ItemModelState }) => ({ item }))(
  Item,
);
