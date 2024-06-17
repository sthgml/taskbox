import React from 'react';
import PropTypes from 'prop-types';

export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
  return (
    <div className={`list-item ${state}`}>
      {/* 체크박스 */}
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        /> 
        {/*기존 인풋 (display:none), 아래가 UI표시될 커스텀 체크박스*/}
        <span
          className="checkbox-custom"
          onClick={() => onArchiveTask(id)}
          id={`archiveTask-${id}`}
          aria-label={`archiveTask-${id}`}
        />
      </label>
      
      {/* 텍스트 */}
      <div className="title">
        <input type="text" value={title} readOnly={true} placeholder="Input title" />
      </div>

			{/* 핀, 스타 아이콘 */}
      <div className="actions" onClick={event => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} id={`pinTask-${id}`} aria-label={`pinTask-${id}`} />
          </a>
        )}
      </div>
    </div>
  );
}

// 추가할 요구 사항 내용
Task.propTypes = {
  /** Composition of the task */
  task: PropTypes.shape({
    /** Id of the task */
    id: PropTypes.string.isRequired,
    /** Title of the task */
    title: PropTypes.string.isRequired,
    /** Current state of the task */
    state: PropTypes.string.isRequired,
  }),
  /** Event to change the task to archived */
  onArchiveTask: PropTypes.func,
  /** Event to change the task to pinned */
  onPinTask: PropTypes.func,
};
  