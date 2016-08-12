/**
 * Created by nalantianyi on 16/8/12.
 */
module.exports = function (app) {
    app.get('/test', function (req, res) {
        res.render('test', {title: '移动端web重构系列', errorMessage: ''});
    });
};