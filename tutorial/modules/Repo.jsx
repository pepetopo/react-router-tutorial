import React from 'react';

export default function Repo(props) {
  return (
    <div>
      <h2>{props.params.repoName}</h2>
    </div>
  );
}

Repo.propTypes = {
  params: React.PropTypes.objectOf(React.PropTypes.string),
};
