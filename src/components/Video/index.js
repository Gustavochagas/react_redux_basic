import React from 'react';

import { connect } from 'react-redux';

const Video = ({ activeModule, activeLesson }) => (
    <div>
        <strong>Módulo {activeModule.title}</strong>
        <strong>Aula {activeLesson.title}</strong>
    </div>
);

export default connect(state => ({
    activeLesson: state.activeLesson,
    activeModule: state.activeModule
}))(Video);