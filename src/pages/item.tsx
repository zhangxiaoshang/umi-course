import React, { FC } from 'react';
import styles from './item.less';
import { connect, ItemModelState, ConnectProps } from 'umi';
import { Row, Col, Card, Radio } from 'antd';

interface PageProps extends ConnectProps {
  item: ItemModelState;
}

const Item: FC<PageProps> = ({ item, dispatch }) => {
  const { items = [], filterKey = 0 } = item;
  const itemType = [
    { key: 0, value: '全部' },
    { key: 1, value: '攻击' },
    { key: 2, value: '法术' },
    { key: 3, value: '防御' },
    { key: 4, value: '移动' },
    { key: 5, value: '打野' },
    { key: 7, value: '辅助' },
  ];

  const onChange = e => {
    dispatch({
      type: 'item/save',
      payload: {
        filterKey: e.target.value,
      },
    });
  };

  return (
    <div>
      <Card>
        <Radio.Group onChange={onChange} value={filterKey}>
          {itemType.map(item => (
            <Radio key={item.key} value={item.key}>
              {item.value}
            </Radio>
          ))}
        </Radio.Group>
      </Card>
      <Row>
        {items
          .filter(item => filterKey === 0 || filterKey === item.item_type)
          .map(item => (
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
