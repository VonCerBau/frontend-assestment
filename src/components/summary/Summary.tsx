import React, { Fragment } from 'react'
import MemberBar from './MemberBar';
import Metrics from './Metrics';
import Ranking from './Ranking';
import Solds from './Solds';

const Summary = () => {
  return <Fragment>
    <MemberBar />
    <Metrics />
    <Ranking />
    <Solds />
  </Fragment>;
}

export default Summary;
