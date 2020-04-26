import React, { FC } from 'react';
import styles from './summoner.less';
import { connect, SummonerModelState, ConnectProps } from 'umi';

interface PageProps extends ConnectProps {
  summoner: SummonerModelState;
}

const Summoner: FC<PageProps> = props => {
  return (
    <div>
      <h1 className={styles.title}>{JSON.stringify(props.summoner)}</h1>
    </div>
  );
};

export default connect(({ summoner }: { summoner: SummonerModelState }) => ({
  summoner,
}))(Summoner);
