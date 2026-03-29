module.exports = {
    apps : [{
        name      : 'bs-academy',
        script    : 'app/index.js', // 예: 'app/index.js'
        watch     : true,
        ignore_watch : [
            'node_modules',
            'app/data/files' // 변경 사항을 감지하지 않을 디렉토리 명시
        ]
    }]
};