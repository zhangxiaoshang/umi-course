import React, { FC } from 'react';
import styles from './hero.less';
import { connect, HeroModelState, ConnectProps } from 'umi';
import { Row, Col } from 'antd';

interface PageProps extends ConnectProps {
  hero: HeroModelState;
}

const Hero: FC<PageProps> = ({ hero }) => {
  const { heros = [] } = hero;

  return (
    <div>
      <Row>
        {heros.reverse().map(item => (
          <Col key={item.ename} span={3} className={styles.heroitem}>
            <img
              src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${item.ename}/${item.ename}.jpg`}
              alt=""
            />
            <p>{item.cname}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default connect(({ hero }: { hero: HeroModelState }) => ({ hero }))(
  Hero,
);
